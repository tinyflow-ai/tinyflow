<div v-pre>

# Tinyflow 文字模板

## 1. 概述

在 Tinyflow AI 工作流引擎中，**文字模板（Text Template）** 是实现**动态内容生成**的核心机制。通过 `TextTemplate` 引擎，开发者可以在节点配置（如 LLM 提示词、HTTP 请求体）中使用 `{{variable}}` 占位符，运行时自动替换为工作流上下文中的实际值。

本文档详细阐述模板引擎的**语法规范、执行模型、性能优化与最佳实践**，帮助开发者高效构建动态、灵活的工作流节点。



## 2. 核心特性

### 2.1 语法简洁
- 使用 `{{variable}}` 作为占位符
- 支持 **JSONPath** 语法访问嵌套对象
- 支持 **`??` 空值兜底**机制

### 2.2 上下文融合
- 自动合并多层上下文（节点参数、节点执行结果、环境变量）
- 智能去前缀（`nodeId.outputKey` → `outputKey`）

### 2.3 高性能
- **模板缓存**：避免重复解析相同模板
- **JSONPath 编译缓存**：避免重复编译表达式
- **零反射**：基于 FastJSON 的 `JSONPath` 高效取值

### 2.4 安全可靠
- **严格模式**：未提供必填参数时抛出明确异常
- **JSON 转义**：支持安全嵌入 JSON 上下文



## 3. 语法规范

### 3.1 基础占位符

```text
Hello {{name}}!
```
- **规则**：`{{` + **表达式** + `}}`
- **表达式**：JSONPath 路径或字面量

### 3.2 JSONPath 取值

```text
User: {{user.profile.name}}
Score: {{scores[0].value}}
```
- **自动补全**：`user.name` → `$.user.name`
- **支持嵌套**：`a.b.c`、`list[0].field`

### 3.3 空值兜底（`??`）

```text
Name: {{user.name ?? user.nick ?? "匿名"}}
```
- **链式兜底**：从左到右尝试，直到找到非空值
- **空字符串兜底**：`{{value ??}}` 表示允许空值

### 3.4 字面量

```text
Status: {{ "approved" }}
Message: {{ 'Hello World' }}
```
- **单/双引号**：`'xxx'` 或 `"xxx"`
- **自动去引号**：输出时移除引号



## 4. 上下文数据源

`TextTemplate` 从**多层上下文**中取值，按优先级合并：

### 4.1 数据源优先级（从高到低）

1. **节点参数**（`parameters`）
    - 通过 `ChainState.resolveParameters()` 解析
    - 例如：`{{query}}` → 节点输入参数

2. **全局内存**（`ChainState.memory`）
    - 格式：`nodeId.outputKey`
    - **自动去前缀**：`llmNode.response` → `response`

3. **环境变量**（`ChainState.environment`）
    - 通过 `env` 前缀访问：`{{env.API_KEY}}`
    - 系统环境变量：`{{env.sys.HOME}}`



## 5. 高级用法

### 5.1 JSON 安全转义

当模板用于生成 JSON 时，启用转义：

```java
// 模板: { "message": "{{text}}" }
// 数据: { "text": "Line1\nLine2" }

String json = template.formatToString(
    context, 
    true // escapeForJsonOutput = true
);
// 输出: { "message": "Line1\\nLine2" }
```

### 5.2 空值严格模式

- **必填参数**：无 `??` 的表达式必须提供值
  ```text
  {{requiredField}}  // 未提供时抛出异常
  ```
- **可选参数**：以 `??` 结尾允许空值
  ```text
  {{optionalField ??}}  // 允许空值
  ```

### 5.3 复杂兜底逻辑

```text
// 链式兜底
{{user.name ?? user.email ?? user.phone ?? "未知用户"}}

// 混合字面量
{{status ?? "pending"}}

// 嵌套对象兜底
{{result.data.items[0].name ?? "无数据"}}
```



## 6. 性能优化

### 6.1 缓存机制

| 缓存类型 | Key | 价值     |
|-|--|--------|
| **模板缓存** | 原始模板字符串 | 避免重复解析 |
| **JSONPath 缓存** | 完整 JSONPath（如 `$.user.name`） | 避免重复编译 |

### 6.2 内存控制

- **缓存大小**：`ConcurrentHashMap` 无硬限制（依赖 JVM）
- **手动清理**：`TextTemplate.clearCache()`（用于测试/内存敏感场景）

### 6.3 性能建议

✅ **复用模板**：相同模板字符串自动复用解析结果  
✅ **避免复杂表达式**：`a.b.c` 优于 `a['b']['c']`  
✅ **预计算嵌套值**：深层嵌套建议在上游节点展平




## 7. 常见问题与解决方案

### 7.1 问题：变量未替换（显示 `{{variable}}`）

**原因**：上下文中无对应变量  
**解决方案**：
- 检查变量路径（如 `user.name` vs `profile.name`）
- 使用兜底：`{{variable ?? "default"}}`

### 7.2 问题：JSONPath 语法错误

**原因**：表达式包含非法字符（如空格、特殊符号）  
**解决方案**：
- 使用引号：`{{ "user name" }}`（但通常应避免空格）
- 展平数据结构：`userName` 优于 `user name`

### 7.3 问题：性能下降

**原因**：高频调用未缓存的复杂模板  
**解决方案**：
- 复用 `TextTemplate.of(template)`（自动缓存）
- 简化表达式：避免深层嵌套 `a.b.c.d.e`



## 8. 与工作流引擎的集成

### 8.1 节点中的使用

`LlmNode`、`HttpNode` 等节点自动使用 `TextTemplate`：

```java
// LlmNode 配置
node.setUserPrompt("Hello {{name}}! Your score is {{scores[0].value}}.");

// 执行时自动替换
Map<String, Object> variables = new HashMap<>();
variables.put("name", "Alice");
variables.put("scores", List.of(Map.of("value", 95)));

chainExecutor.executeAsync(chainDefinitionId, variables);
```

### 8.2 自定义节点集成

```java
public class CustomNode extends BaseNode {
    private String messageTemplate;
    
    @Override
    protected Map<String, Object> execute(Chain chain) {
        TextTemplate template = TextTemplate.of(messageTemplate);
        Map<String, Object> context = chain.getState().resolveParameters(this);
        String message = template.formatToString(context);
        // 使用 message...
    }
}
```



## 9. 总结

`TextTemplate` 是 Tinyflow 工作流引擎的**动态内容生成基石**，通过**简洁的语法**、**强大的兜底机制**与**高性能缓存**，为开发者提供了灵活、安全、高效的工作流参数化能力。合理使用模板参数，是构建**可配置、可复用** AI 工作流的关键。

</div>
