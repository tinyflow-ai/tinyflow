# Tinyflow Java 后端自定义 Node 解析器开发文档

<div v-pre>



## 1. 概述

Tinyflow Java 后端通过 **`NodeParser` 机制** 将前端导出的 JSON 工作流解析为可执行的 `ChainDefinition` 对象。

每个节点类型（如 `httpNode`、`llmNode`）对应一个 `NodeParser`，负责：
- 解析节点 JSON 结构
- 构造对应的 `Node` 执行对象
- 填充参数（`parameters` / `outputDefs`）
- 设置控制属性（循环、重试、条件等）

开发者可通过 **注册自定义 `NodeParser`** 扩展 Tinyflow 的节点类型支持。



## 2. 核心组件说明

### 2.1 `ChainParser`

- **作用**：工作流 JSON 的总入口解析器
- **核心方法**：
  ```java
  ChainDefinition parse(String jsonString);
  void addNodeParser(String type, NodeParser<?> parser);
  ```

### 2.2 `NodeParser<T extends Node>`

- **接口定义**：
  ```java
  T parse(JSONObject nodeJSONObject, JSONObject chainJSONObject, ChainParser chainParser);
  ```
- **用途**：将前端单个节点 JSON 转为 Java `Node` 对象

### 2.3 `BaseNodeParser<T extends BaseNode>`

- **推荐基类**：提供通用解析能力（参数、输出、循环、重试等）
- **需实现**：
  ```java
  protected abstract T doParse(JSONObject nodeJSONObject, JSONObject data, JSONObject chainJSONObject);
  ```

### 2.4 `BaseNode`

- **执行基类**：所有节点必须继承
- **关键方法**：
  ```java
  public abstract Map<String, Object> execute(Chain chain);
  ```
- **自动支持**：
    - `parameters` 输入参数解析
    - `outputDefs` 输出定义
    - `loopEnable` / `retryEnable` 控制逻辑
    - `condition` 边条件（节点自身也可设条件）



## 3. 自定义 Node 开发步骤

### 步骤 1：定义 Node 执行类（继承 `BaseNode`）

```java
package com.example.tinyflow.node;

import dev.tinyflow.core.node.BaseNode;
import dev.tinyflow.core.chain.Chain;

import java.util.Map;

public class WeatherNode extends BaseNode {

    private String apiKey;
    private String city;
    private String unit = "metric";

    // Getters & Setters
    public String getApiKey() { return apiKey; }
    public void setApiKey(String apiKey) { this.apiKey = apiKey; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    @Override
    public Map<String, Object> execute(Chain chain) {
        // 1. 解析输入参数（自动可用）
        // Map<String, Object> inputs = chain.getState().resolveParameters(this);

        // 2. 执行业务逻辑（调用天气 API）
        // ...

        // 3. 返回输出（必须与 outputDefs 字段名一致）
        Map<String, Object> result = new HashMap<>();
        result.put("temperature", 25.0);
        result.put("description", "Sunny");
        return result;
    }
}
```

> ⚠️ **输出字段名必须与前端 `outputDefs[].name` 严格一致**



### 步骤 2：定义 Node 解析器（继承 `BaseNodeParser`）

```java
package com.example.tinyflow.parser;

import com.alibaba.fastjson.JSONObject;
import com.example.tinyflow.node.WeatherNode;
import dev.tinyflow.core.parser.BaseNodeParser;

public class WeatherNodeParser extends BaseNodeParser<WeatherNode> {

    @Override
    protected WeatherNode doParse(JSONObject nodeObject, JSONObject data, JSONObject chainObject) {
        WeatherNode node = new WeatherNode();
        node.setApiKey(data.getString("apiKey"));
        node.setCity(data.getString("city"));
        node.setUnit(data.getString("unit"));
        return node;
    }
}
```

> ✅ `BaseNodeParser` 已自动处理：
> - `parameters` / `outputDefs`
> - 循环（`loopEnable`, `loopIntervalMs`...）
> - 重试（`retryEnable`, `maxRetryCount`...）
> - 节点名称、描述、条件等



### 步骤 3：注册自定义 Parser

#### 方式一：使用 `ChainParser.Builder`（推荐）

```java
import dev.tinyflow.core.parser.ChainParser;

ChainParser parser = ChainParser.builder()
    .addParser("weather-node", new WeatherNodeParser())
    .build();

// 解析工作流
ChainDefinition chainDef = parser.parse(jsonString);
```

#### 方式二：动态注册（适用于 Spring 容器）

```java
// 获取已存在的 parser
@Autowired
private ChainParser chainParser;

@PostConstruct
public void registerCustomNodes() {
    chainParser.addNodeParser("weather-node", new WeatherNodeParser());
}
```

> 🔧 **注意**：`"weather-node"` 必须与前端 `customNodes` 的 key 一致



## 4. 前后端数据结构对齐

### 前端（Tinyflow Svelte）

```ts
customNodes: {
  'weather-node': {
    title: '天气查询',
    parameters: [{ name: 'city', dataType: 'String' }],
    outputDefs: [
      { name: 'temperature', dataType: 'Number' },
      { name: 'description', dataType: 'String' }
    ],
    forms: [
      { type: 'input', name: 'apiKey', label: 'API Key' },
      { type: 'input', name: 'city', label: '城市' }
    ]
  }
}
```

### 后端（Java）

- `parameters` → 通过 `chain.getState().resolveParameters(this)` 获取输入
- `outputDefs` → `execute()` 返回的 `Map` key 必须匹配
- 自定义字段（如 `apiKey`）→ 在 `doParse()` 中从 `data` 提取



## 5. 高级特性支持

### 5.1 模板变量支持

前端 `data` 中的字段可包含模板（如 `{{input.city}}`），后端自动解析：

```java
// 在 execute() 中
Map<String, Object> args = chain.getState().resolveParameters(this);
String resolvedCity = (String) args.get("city"); // 已替换为实际值
```

### 5.2 文件类型输出（`dataType: "File"`）

```java
// 在 execute() 中
if (bodyDataType == DataType.File) {
    try (InputStream stream = body.byteStream()) {
        String fileUrl = fileStorage.saveFile(stream, headers, this, chain);
        result.put("body", fileUrl); // 返回可访问 URL
    }
}
```

需实现 `FileStorage` 接口并注册到 `FileStorageManager`。

### 5.3 循环与重试

只需在前端开启配置，后端自动处理：
- `loopEnable: true` → 节点循环执行
- `retryEnable: true` → 失败自动重试

无需在 `execute()` 中编写循环/重试逻辑。



## 6. 默认节点参考

Tinyflow 内置解析器位于 `DefaultNodeParsers`：

| 节点类型 | 解析器 | 用途      |
|--|-|---------|
| `startNode` | `StartNodeParser` | 开始节点    |
| `endNode` | `EndNodeParser` | 结束节点    |
| `llmNode` | `LlmNodeParser` | 大模型调用   |
| `httpNode` | `HttpNodeParser` | HTTP 请求 |
| `codeNode` | `CodeNodeParser` | JS 代码执行 |
| `loopNode` | `LoopNodeParser` | 循环控制器   |
| `knowledgeNode` | `KnowledgeNodeParser` | 知识库检索   |

可参考 `HttpNode` / `HttpNodeParser` 实现复杂节点。



## 7. 异常处理建议

- 在 `execute()` 中抛出 `RuntimeException` 表示执行失败
- 若启用 `retryEnable`，框架会自动重试
- 建议记录日志（配合 Slf4j 或 Java Util Logging）

```java
@Override
public Map<String, Object> execute(Chain chain) {
    try {
        // 业务逻辑
    } catch (Exception e) {
        log.error("WeatherNode execution failed, node: {}", getId(), e);
        throw new RuntimeException("Failed to fetch weather data", e);
    }
}
```




</div>
