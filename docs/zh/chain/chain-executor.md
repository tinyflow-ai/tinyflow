# Chain Executor 开发设计文档



## 1. 概述

`ChainExecutor` 是 Tinyflow AI 工作流编排框架中的**统一入口执行器**，负责启动、恢复和监听工作流（`Chain`）的生命周期。其核心设计目标是：

- **无状态**：不持有长时间运行的 `Chain` 实例，每次操作均按需重建上下文
- **异步优先**：原生支持异步执行与事件驱动模型
- **统一入口**：提供同步/异步 API，屏蔽底层调度细节
- **高可扩展**：支持事件监听、错误处理、自定义存储等扩展点

本文档深入解析 `ChainExecutor` 的**架构设计、执行模型、线程模型与扩展机制**，为开发者提供构建可靠 AI 工作流系统的基础。



## 2. 核心设计原则

### 2.1 无状态（Stateless）

- `ChainExecutor` **不缓存**任何 `Chain` 实例
- 每次执行（`executeNode`、`resume`）均从 `ChainDefinitionRepository` 和 `ChainStateRepository` 重建 `Chain` 对象
- **优势**：
  - 内存安全：避免长期驻留对象导致的内存泄漏
  - 分布式友好：多实例部署时无需状态同步
  - 热更新支持：`ChainDefinition` 修改后立即生效

### 2.2 异步执行（Async-Only）

- 所有节点调度均通过 `TriggerScheduler` 异步触发
- 提供 `executeAsync()` 直接返回 `stateInstanceId`
- 提供 `execute()` 同步阻塞 API，**底层仍基于异步模型实现**

### 2.3 事件驱动（Event-Driven）

- 通过 `EventManager` 发布/订阅事件
- 支持监听：
  - 链状态变更（`ChainStatusChangeEvent`）
  - 链/节点错误（`ChainErrorListener`, `NodeErrorListener`）
  - 节点输出（`ChainOutputListener`）

### 2.4 依赖注入友好（DI-Friendly）

- 所有依赖（Repository、Scheduler）通过构造函数注入
- 支持替换存储后端（如 Redis、DB）或调度器（如 Quartz、Kafka）



## 3. 架构与组件依赖


| 组件 | 职责              | 可替换性 |
|--|-----------------|--|
| `ChainDefinitionRepository` | 加载静态工作流定义       | ✅ |
| `ChainStateRepository` | 持久化链状态          | ✅ |
| `NodeStateRepository` | 持久化节点状态         | ✅ |
| `TriggerScheduler` | 调度 `Trigger` 执行 | ✅ |
| `EventManager` | 事件发布/监听         | 内置，可注册监听器 |

> **注意**：`TriggerScheduler` 在构造时自动注册 `ChainExecutor::accept` 为消费者。



## 4. 执行

### 4.1 同步执行（`execute`）

```java
Map<String, Object> result = executor.execute("my-chain", variables, 3, TimeUnit.MINUTES);
```

**内部流程**：
1. 创建 `Chain` 实例（生成唯一 `stateInstanceId`）
2. 注册临时事件监听器（监听终端状态）
3. 调用 `chain.start(variables)`
4. 阻塞等待 `CompletableFuture` 完成
5. 返回最终 `executeResult` 或抛出异常

> ⚠️ **超时控制**：默认 3 分钟，避免永久阻塞。

### 4.2 异步执行（`executeAsync`）

```java
String instanceId = executor.executeAsync("my-chain", variables);
// 后续可通过 instanceId 查询状态或恢复
```

- 仅启动工作流，立即返回 `stateInstanceId`
- 适用于 Web API、消息队列等场景

### 4.3 恢复执行（`resumeAsync`）

```java
executor.resumeAsync(instanceId, userInputs);
```

- 用于恢复 **挂起（SUSPEND）** 状态的工作流
- 从持久化存储加载状态，重建 `Chain`，调用 `chain.resume()`

### 4.4 触发器处理（`accept`）

`TriggerScheduler` 调用 `accept(Trigger, ExecutorService)` 执行节点：

1. 从存储加载 `ChainState` 和 `ChainDefinition`
2. 重建 `Chain` 实例
3. （可选）将 `trigger.payload` 合并到 `ChainState.memory`
4. 获取目标 `Node`
5. 调用 `chain.executeNode(node, edgeId)`

> 🔁 **关键**：每次 `accept` 都是独立的、幂等的操作，可安全重试。



## 5. 线程与并发模型

### 5.1 线程安全

- `ChainExecutor` 本身是**线程安全**的
- 所有 public 方法加 `synchronized`（事件注册/注销）
- `accept` 方法由 `TriggerScheduler` 保证单线程消费（或通过线程安全队列）

### 5.2 执行线程

- `execute()`：调用线程阻塞等待结果
- `executeAsync()` / `resumeAsync()` / `accept()`：在 `TriggerScheduler` 的工作线程中执行
- `Node.execute()`：在 `accept` 的工作线程中运行（可通过 `Chain.currentChain()` 获取上下文）

### 5.3 超时与中断处理

- `execute()` 使用 `CompletableFuture.get(timeout, unit)` 实现超时
- 捕获 `InterruptedException` 并恢复中断状态
- 超时/中断时取消 `CompletableFuture`，但**不终止底层 Chain 执行**（异步继续运行）

> 💡 **设计取舍**：同步 API 仅用于“等待结果”，不影响实际工作流生命周期。



## 6. 事件监听机制

`ChainExecutor` 提供便捷 API 注册监听器：

```java
// 监听链状态变更
executor.addEventListener(ChainStatusChangeEvent.class, (event, chain) -> {
    if (event.getStatus() == ChainStatus.SUCCEEDED) {
        // 处理成功
    }
});

// 监听错误
executor.addErrorListener((error, chain) -> {
    log.error("Chain failed: {}", chain.getStateInstanceId(), error);
});

// 监听节点输出
executor.addOutputListener((chain, node, output) -> {
    // 例如：将结果推送到 Kafka
});
```

> 📌 **注意**：监听器**全局生效**，影响所有通过此 `ChainExecutor` 执行的 Chain。



## 7. 扩展与定制

### 7.1 自定义存储

```java
ChainDefinitionRepository defRepo = new MyCustomDefinitionRepo();
ChainStateRepository stateRepo = new RedisChainStateRepository();
NodeStateRepository nodeRepo = new RedisNodeStateRepository();

ChainExecutor executor = new ChainExecutor(defRepo, stateRepo, nodeRepo);
```

### 7.2 自定义调度器

```java
TriggerScheduler scheduler = new KafkaTriggerScheduler(); // 基于 Kafka 的分布式调度
ChainExecutor executor = new ChainExecutor(defRepo, stateRepo, nodeRepo, scheduler);
```

### 7.3 全局错误处理

```java
executor.addErrorListener((error, chain) -> {
    // 发送告警、记录审计日志、触发补偿流程
});
```

### 7.4 输出拦截

```java
executor.addOutputListener((chain, node, output) -> {
    // 输出脱敏、日志记录、指标上报
});
```



## 8. 最佳实践

✅ **优先使用 `executeAsync`**：在 Web 服务中避免阻塞主线程  
✅ **合理设置超时**：`execute()` 的超时时间应略大于预期执行时间  
✅ **监听关键事件**：至少注册 `ChainErrorListener` 实现故障告警  
✅ **幂等节点设计**：因 `accept` 可能重试，`Node.execute()` 应幂等  
✅ **避免在监听器中阻塞**：事件回调应在独立线程中处理耗时操作



## 9. 性能与可靠性保障

| 机制 | 说明                 |
|--|--------------------|
| **无状态设计** | 支持水平扩展，无单点瓶颈       |
| **异步调度** | 解耦执行与触发，提升吞吐量      |
| **事件驱动** | 低耦合，易于监控与扩展        |
| **超时控制** | 防止同步调用永久阻塞         |
| **错误隔离** | 单个 Chain 失败不影响其他实例 |

> 💡 **生产部署建议**：
> - 使用 Redis 实现 `ChainStateRepository` + `TriggerScheduler`
> - 配置全局 `ChainErrorListener` 发送企业微信/钉钉告警
> - 对长时 Chain 使用 `executeAsync` + 轮询状态 API



## 10. 总结

`ChainExecutor` 是 Tinyflow 的**执行中枢**，通过无状态、异步优先、事件驱动的设计，为 AI 工作流提供了**高可靠、高扩展、易监控**的运行时基础。开发者可基于其灵活的扩展点，快速构建从简单自动化到复杂智能体协作的企业级应用。

