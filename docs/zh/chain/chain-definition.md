# Chain Definition 开发设计文档

<div v-pre>

## 1. 概述

`ChainDefinition` 是 Tinyflow AI 工作流编排框架中的**静态工作流蓝图**，完整描述了一个工作流的拓扑结构、节点配置、连接关系与入口参数。它作为**只读的、可序列化的定义对象**，与运行时状态（`ChainState`）分离，实现了**定义即代码（Definition-as-Code）** 的工作流设计范式。

本文档深入解析 `ChainDefinition` 的**数据模型、拓扑构建机制、入口节点识别与扩展能力**，为开发者提供构建结构清晰、可维护、可复用 AI 工作流的基础。



## 2. 核心设计原则

### 2.1 定义与状态分离（Definition-State Separation）

- **`ChainDefinition`**：静态、只读、可共享（同一定义可被多个实例执行）
- **`ChainState`**：动态、可变、实例独享（每个执行实例拥有独立状态）
- **特点**：
    - 定义可版本化管理（Git 存储、或者数据库存储）
    - 多实例并行执行无状态冲突
    - 热更新支持（修改定义不影响运行中实例）

### 2.2 拓扑自包含（Self-Contained Topology）

- 所有节点（`Node`）与边（`Edge`）均内聚于 `ChainDefinition`
- 节点通过 `inwardEdges` / `outwardEdges` 双向引用，支持高效遍历
- **无外部依赖**：不依赖数据库或配置中心即可完整描述工作流

### 2.3 可序列化（Serializable）

- 实现 `Serializable` 接口
- 支持 JSON/YAML/Java 序列化，便于存储、传输与版本控制
- 节点 ID 自动生成（UUID），确保定义唯一性



## 3. 数据模型详解

### 3.1 核心字段

| 字段 | 类型 | 说明                    |
|--|--|-----------------------|
| `id` | `String` | **工作流定义唯一标识**，用于注册与加载 |
| `name` | `String` | 人类可读名称（如 "用户注册流程"）    |
| `description` | `String` | 详细描述（用途、参数说明等）        |
| `nodes` | `List<Node>` | **节点列表**，包含所有处理单元     |
| `edges` | `List<Edge>` | **边列表**，定义节点间的连接与条件   |

### 3.2 节点（Node）与边（Edge）

- **`Node`**：工作流的处理单元（如 `LlmNode`、`HttpNode`）
    - 通过 `parameters` 定义输入
    - 通过 `outputDefs` 定义输出
    - 支持重试、循环、条件等执行策略
- **`Edge`**：节点间的连接
    - `source` → `target` 定义流向
    - 可携带 `condition` 实现条件分支

>  **拓扑构建**：`addNode()` / `addEdge()` 自动维护节点的 `inwardEdges` / `outwardEdges`



## 4. 拓扑构建机制

### 4.1 节点添加（`addNode`）

```java
public void addNode(Node node) {
    if (StringUtil.noText(node.getId())) {
        node.setId(UUID.randomUUID().toString()); // 自动生成 ID
    }
    nodes.add(node);
    
    // 自动关联已有边
    if (edges != null) {
        for (Edge edge : edges) {
            if (node.getId().equals(edge.getSource())) {
                node.addOutwardEdge(edge);
            } else if (node.getId().equals(edge.getTarget())) {
                node.addInwardEdge(edge);
            }
        }
    }
}
```

### 4.2 边添加（`addEdge`）

```java
public void addEdge(Edge edge) {
    edges.add(edge);
    
    // 自动关联到源节点与目标节点
    for (Node node : nodes) {
        if (node.getId().equals(edge.getSource())) {
            node.addOutwardEdge(edge);
        } else if (node.getId().equals(edge.getTarget())) {
            node.addInwardEdge(edge);
        }
    }
}
```

> **双向引用**：确保 `node.getInwardEdges()` / `getOutwardEdges()` 始终有效



## 5. 入口节点与参数识别

### 5.1 入口节点（`getStartNodes`）

- **定义**：无入边（`inwardEdges` 为空）的节点
- **用途**：工作流启动时的初始执行点
- **多入口支持**：允许并行启动多个入口节点

```java
public List<Node> getStartNodes() {
    return nodes.stream()
        .filter(node -> CollectionUtil.noItems(node.getInwardEdges()))
        .collect(Collectors.toList());
}
```

### 5.2 入口参数（`getStartParameters`）

- **定义**：所有入口节点的 `parameters` 合集
- **用途**：工作流启动时需提供的初始变量
- **参数去重**：按 `Parameter.name` 自动合并（后添加覆盖）

```java
public List<Parameter> getStartParameters() {
    return getStartNodes().stream()
        .flatMap(node -> node.getParameters().stream())
        .collect(Collectors.toList());
}
```

> 💡 **使用场景**：前端/调用方可通过 `getStartParameters()` 动态生成表单



## 6. 扩展能力

### 6.1 自定义节点类型

继承 `BaseNode` 实现业务逻辑：
```java
public class CustomNode extends BaseNode {
    @Override
    protected Map<String, Object> execute(Chain chain) {
        // 自定义执行逻辑
        return Collections.singletonMap("result", "success");
    }
}
```

### 6.2 条件分支

通过 `Edge.condition` 实现动态路由：
```java
Edge edge = new Edge();
edge.setCondition((chain, edge, prevResult) -> {
    return "approved".equals(prevResult.get("status"));
});
```

### 6.3 循环与重试

节点内置支持：
- `loopEnable` + `maxLoopCount` + `loopBreakCondition`
- `retryEnable` + `maxRetryCount` + `retryIntervalMs`



## 8. 总结

`ChainDefinition` 是 Tinyflow 工作流引擎的**静态骨架**，通过清晰的拓扑模型、自包含的节点/边设计、灵活的入口识别机制，为 AI 应用提供了**结构化、可维护、可扩展**的流程定义能力。开发者可基于其构建从简单线性流程到复杂决策树的各类智能工作流。


</div>
