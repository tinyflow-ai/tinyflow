# Chain Parser 开发设计文档

<div v-pre>

## 1. 概述

`ChainParser` 是 Tinyflow AI 工作流编排框架中的**工作流定义解析器**，负责将 JSON 格式的可视化工作流（由 Tinyflow 前端流程图工具生成）转换为可执行的 `ChainDefinition` 对象。它采用**插件化架构**，支持灵活扩展新的节点类型，实现了**可视化编排 → 代码执行**的关键桥梁。

本文档深入解析 `ChainParser` 的**架构设计、解析流程、扩展机制与最佳实践**，帮助开发者构建可定制、可维护的工作流解析体系。



## 2. 核心设计原则

### 2.1 插件化节点解析（Pluggable Node Parsing）

- 每种节点类型（如 `llmNode`、`httpNode`）由独立的 `NodeParser` 实现
- 通过 `Map<String, NodeParser<?>>` 动态注册/替换解析器
- **优势**：解耦核心解析逻辑与节点实现，便于扩展

### 2.2 分层解析（Layered Parsing）

1. **基础属性解析**（`BaseNodeParser`）：
  - ID、名称、描述
  - 输入/输出参数（`parameters` / `outputDefs`）
  - 执行策略（循环、重试）
  - 节点条件（`condition`）
2. **节点特有逻辑**（`doParse`）：
  - 由具体 `NodeParser` 实现（如 `LlmNodeParser` 解析 `llmId`、`prompt`）




## 3. 架构组成

### 3.1 核心组件

| 组件 | 职责              |
|--|-----------------|
| **`ChainParser`** | 主解析器，协调节点/边解析   |
| **`NodeParser<T>`** | 节点解析接口，泛型约束返回类型 |
| **`BaseNodeParser<T>`** | 基础解析器，实现通用属性解析  |
| **`DefaultNodeParsers`** | 内置节点解析器注册中心     |



## 4. 解析流程详解

### 4.1 入口方法

```java
public ChainDefinition parse(String jsonString) {
    JSONObject root = JSON.parseObject(jsonString);
    return parse(root, root.getJSONArray("nodes"), root.getJSONArray("edges"), null);
}
```

### 4.2 节点解析

1. **类型识别**：从 `nodeObject.type` 获取节点类型
2. **解析器查找**：`nodeParserMap.get(type)`
3. **通用属性解析**（`BaseNodeParser.parse`）：
  - 基础信息（ID、名称、描述）
  - 参数（`parameters` / `outputDefs`）
  - 执行策略（循环、重试）
  - 条件（`JsCodeCondition`）
4. **特有属性解析**（`doParse`）：由子类实现

### 4.3 边解析

- 从 `edgeObject` 提取 `source`/`target`
- 解析 `data.condition` 为 `JsCodeCondition`
- **子流程支持**：过滤父节点到子流程入口的边（避免重复）

### 4.4 参数模型

`Parameter` 支持丰富元数据，便于前端渲染表单：

| 字段 | 用途                             |
|--|--------------------------------|
| `formType` | 表单控件类型（input/select/textarea）  |
| `formLabel` | 字段标签                           |
| `formPlaceholder` | 占位符                            |
| `enums` | 枚举选项（下拉框）                      |
| `contentType` | 内容类型（text/json/image）          |
| `children` | 嵌套参数（用于复杂对象）                   |



## 5. 扩展机制

### 5.1 自定义节点解析器

#### 步骤 1：实现 `NodeParser`

```java
public class CustomNodeParser extends BaseNodeParser<CustomNode> {
    @Override
    protected CustomNode doParse(JSONObject node, JSONObject data, JSONObject chain) {
        CustomNode node = new CustomNode();
        // 解析特有属性
        node.setApiEndpoint(data.getString("apiEndpoint"));
        node.setAuthKey(data.getString("authKey"));
        return node;
    }
}
```

#### 步骤 2：注册解析器

```java
// 方式1：构建时注册
ChainParser parser = ChainParser.builder()
    .addParser("customNode", new CustomNodeParser())
    .build();

// 方式2：动态注册
parser.addNodeParser("customNode", new CustomNodeParser());
```

### 5.2 覆盖默认解析器

```java
// 替换内置 llmNode 解析器
ChainParser parser = ChainParser.builder()
    .addParser("llmNode", new MyEnhancedLlmNodeParser())
    .build();
```

### 5.3 禁用默认解析器

```java
// 仅使用自定义解析器
ChainParser parser = ChainParser.builder()
    .withDefaultParsers(false)
    .addParser("myNode", new MyNodeParser())
    .build();
```



## 6. 内置节点解析器

`DefaultNodeParsers` 提供以下开箱即用的解析器：

| 节点类型 | 解析器 | 用途              |
|-|--|-----------------|
| `llmNode` | `LlmNodeParser` | 大语言模型调用         |
| `httpNode` | `HttpNodeParser` | HTTP API 调用     |
| `codeNode` | `CodeNodeParser` | 脚本执行（Groovy/JS） |
| `knowledgeNode` | `KnowledgeNodeParser` | 知识库检索           |
| `templateNode` | `TemplateNodeParser` | 字符串模板处理         |
| `searchEngineNode` | `SearchEngineNodeParser` | 搜索引擎查询          |
| `confirmNode` | `ConfirmNodeParser` | 人工确认节点          |
| `loopNode` | `LoopNodeParser` | 循环控制            |
| `startNode`/`endNode` | `StartNodeParser`/`EndNodeParser` | 流程起止            |

> 💡 **扩展建议**：通过 `DefaultNodeParsers.registerDefaultNodeParser()` 全局注册新解析器



## 7. 最佳实践

### 7.1 解析器设计

✅ **继承 `BaseNodeParser`**：复用通用属性解析逻辑  
✅ **`doParse` 专注特有属性**：避免重复解析 ID、参数等  
✅ **空值安全**：对 JSON 字段做 `hasText()` / `null` 检查

### 7.2 JSON Schema 设计

前端生成的 JSON 应遵循约定结构：

```json
{
  "nodes": [
    {
      "id": "llm-1",
      "type": "llmNode",
      "label": "调用大模型",
      "data": {
        "llmId": "gpt-4o",
        "userPrompt": "你好，{{name}}！",
        "parameters": [
          { "name": "name", "required": true, "formType": "input" }
        ],
        "outputDefs": [
          { "name": "response", "dataType": "String" }
        ],
        "retryEnable": true,
        "maxRetryCount": 3
      }
    }
  ],
  "edges": [
    {
      "id": "e1",
      "source": "start",
      "target": "llm-1",
      "data": {
        "condition": "input.age > 18"
      }
    }
  ]
}
```



## 8. 高级特性

### 8.1 子流程支持

通过 `parentId` 字段实现嵌套工作流：
```java
// 仅解析顶层节点（parentNode == null）
if ((parentNode == null && StringUtil.noText(nodeObject.getString("parentId")))
    || (parentNode != null && parentNode.getString("id").equals(nodeObject.getString("parentId")))) {
    // 解析节点
}
```

### 8.2 条件表达式

- 边/节点条件使用 `JsCodeCondition`
- 支持 JavaScript 表达式（如 `"input.score > 90"`）
- 运行时通过 `ScriptEngine` 执行

### 8.3 表单元数据

参数中的 `form*` 字段支持前端动态生成配置表单：
```java
Parameter param = new Parameter();
param.setFormType("select");
param.setEnums(JSONArray.of("option1", "option2"));
// 前端可渲染为下拉框
```



## 9. 自定义实现示例

### 9.1 数据库查询节点

```java
public class SqlNode extends BaseNode {
    private String dataSource;
    private String sqlTemplate;
    // getters/setters
}

public class SqlNodeParser extends BaseNodeParser<SqlNode> {
    @Override
    protected SqlNode doParse(JSONObject node, JSONObject data, JSONObject chain) {
        SqlNode sqlNode = new SqlNode();
        sqlNode.setDataSource(data.getString("dataSource"));
        sqlNode.setSqlTemplate(data.getString("sqlTemplate"));
        return sqlNode;
    }
}

// 注册
ChainParser parser = ChainParser.builder()
    .addParser("sqlNode", new SqlNodeParser())
    .build();
```

### 9.2 解析 JSON

```json
{
  "type": "sqlNode",
  "data": {
    "dataSource": "user-db",
    "sqlTemplate": "SELECT * FROM users WHERE name = '{{input.name}}'",
    "parameters": [{"name": "name", "required": true}]
  }
}
```



## 10. 总结

`ChainParser` 是 Tinyflow 工作流引擎的**可视化编排入口**，通过插件化、分层解析的设计，实现了**灵活扩展、结构清晰、前后端协同**的工作流定义解析能力。开发者可基于其构建从简单自动化到复杂智能体协作的各类可视化 AI 应用。


</div>
