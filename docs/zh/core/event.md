# 事件（Event）

事件（Event）是执行链（Chain）在运行过程中，节点（Node）或整个链条的状态发生变化时发出的通知信号。通过监听和处理这些事件，开发者可以实现对执行链的实时监控、日志记录、错误处理等功能。

**功能**:
- **状态跟踪**: 实时捕获执行链和节点的状态变化。
- **日志记录**: 记录每个节点的执行过程和结果。
- **错误处理**: 捕获异常并采取相应措施。
- **扩展功能**: 基于事件触发自定义逻辑（如通知、报警等）。


## 事件的类型

在 Tinyflow 中，内置了 6 种事件类型，分别对应不同的执行链或节点状态变化：

1. **OnChainStartEvent**
    - **触发时机**: 执行链启动时。
    - **用途**: 初始化资源、记录启动时间、发送启动通知等。

2. **OnChainEndEvent**
    - **触发时机**: 执行链结束时（无论成功或失败）。
    - **用途**: 清理资源、记录结束时间、发送完成通知等。

3. **OnErrorEvent**
    - **触发时机**: 执行链或节点发生错误时。
    - **用途**: 记录错误信息、触发报警机制、尝试恢复或终止流程。

4. **OnNodeStartEvent**
    - **触发时机**: 节点开始执行时。
    - **用途**: 记录节点启动时间、初始化节点特定资源。

5. **OnNodeEndEvent**
    - **触发时机**: 节点执行完成时。
    - **用途**: 记录节点执行结果、清理节点资源。

6. **OnStatusChangeEvent**
    - **触发时机**: 执行链或节点的状态发生变化时（如从“运行中”变为“暂停”）。
    - **用途**: 动态调整流程、更新状态信息。



## 事件的功能详解

### 1. 状态跟踪

通过监听事件，可以实时掌握执行链和节点的状态变化，便于调试和优化。

**示例**:
- 当 `OnChainStartEvent` 触发时，记录执行链的启动时间。
- 当 `OnNodeEndEvent` 触发时，检查节点是否成功完成，并记录其输出。

---

### 2. 日志记录

事件可以用于生成详细的执行日志，帮助开发者分析执行链的行为。

**示例代码**:

```java
String jsonString = "{....}"
Tinyflow tinyflow = new Tinyflow(jsonString);

Chain chain = tinyflow.toChain();

chain.addEventListener(new ChainEventListener() {
    @Override
    public void onEvent(ChainEvent event, Chain chain) {
      System.out.println("event: " + event.toString());
    }
});
```


### 3. 错误处理

通过监听 `OnErrorEvent`，可以捕获执行链中的异常并采取相应的处理措施。

**示例代码**:

```java
String jsonString = "{....}"
Tinyflow tinyflow = new Tinyflow(jsonString);

Chain chain = tinyflow.toChain();

chain.addEventListener(new ChainEventListener() {
    @Override
    public void onEvent(ChainEvent event, Chain chain) {
        if(event instanceof OnErrorEvent){
            // 处理异常逻辑
        }
    }
});
```
