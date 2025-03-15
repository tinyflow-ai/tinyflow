# 执行条件（Condition）

执行条件（Condition）是用于控制节点（Node）或边（Edge）是否触发执行的逻辑表达式。通过配置执行条件，可以实现动态的流程控制，使执行链（Chain）能够根据实时数据和状态灵活调整执行路径。

**功能**:
- **流程控制**: 根据条件判断，决定是否触发某个节点或边。
- **动态决策**: 基于输入数据、上下文（Context）或外部状态，动态调整执行链的行为。
- **错误处理**: 在特定条件下跳过某些节点或终止执行链。


## 执行条件的基本结构

执行条件通常是一个布尔表达式，基于以下内容进行判断：
- **上下文（Context）中的数据**: 引用上下文中的键值对。
- **节点输出**: 使用上游节点的输出作为条件依据。
- **外部变量**: 引入外部系统或环境变量。

**示例**:
```json
{
  "condition": "status === 'success' && user_role === 'admin'"
}
```

上述条件表示：只有当 `status` 为 `"success"` 且用户角色为 `"admin"` 时，条件才会成立。


## 执行条件的配置位置

执行条件可以配置在以下两个位置：

### 1. 边（Edge）

在边中配置执行条件，用于控制目标节点是否被触发。

**示例**:
```json
{
  "source": "validate_input_node",
  "target": "process_data_node",
  "data":{
    "condition": "inputs.validation_result === true"
  }
}
```

上述配置表示：只有当 `validate_input_node` 的输出中 `validation_result` 为 `true` 时，才会触发 `process_data_node` 的执行。


### 2. 节点（Node）

在节点中配置执行条件，用于控制该节点是否被执行。

**示例**:
```json
{
  "type": "codeNode",
  "data": {
    "condition": "environment === 'production'"
  }
}
```

上述配置表示：只有当上下文中 `environment` 为 `"production"` 时，该节点才会执行。


## 执行条件的功能详解

### 1. 分支逻辑

通过配置执行条件，可以实现分支逻辑，使执行链根据不同的条件选择不同的路径。

**Edge 边示例**:
```json
[
  {
    "source": "validate_input_node",
    "target": "process_data_node",
    "data": {
      "condition": "inputs.is_valid === true"
    }
  },
  {
    "source": "validate_input_node",
    "target": "error_handler_node",
    "data": {
       "condition": "inputs.is_valid === false"
    }
  }
]
```

上述配置表示：如果 `validate_input_node` 的输出中 `is_valid` 为 `true`，则触发 `process_data_node`；否则触发 `error_handler_node`。


### 2. 复杂条件判断

执行条件支持复杂的逻辑表达式，包括布尔运算符（如 `&&`, `||`, `!`）、比较运算符（如 `===`, `!==`, `>`, `<`）以及嵌套条件。

**示例**:
```json
{
  "condition": "(inputs.data.length > 100 && context.priority === 'high') || context.override === true"
}
```

上述条件表示：当数据长度大于 100 且优先级为 `"high"`，或者设置了 `override` 时，条件成立。


### 3. 动态引用上下文和节点输出

执行条件可以动态引用上下文中的数据和节点的输出，实现灵活的流程控制。

**示例**:  
假设上下文中包含以下数据：
```json
{
  "user_role": "admin",
  "environment": "production"
}
```

节点 A 的输出为：
```json
{
  "status": "success"
}
```

执行条件可以这样配置：
```json
{
  "condition": "inputs.status === 'success' && context.user_role === 'admin'"
}
```


### 4. 错误处理与跳过逻辑

通过配置执行条件，可以在特定情况下跳过某些节点或终止执行链。

**示例**:
```json
{
  "condition": "inputs.error_code !== 500"
}
```

上述条件表示：如果 `error_code` 为 `500`，则跳过该节点。


## 总结

执行条件（Condition）是实现动态流程控制的核心工具，能够根据实时数据和状态灵活调整执行链的行为。无论是简单的分支逻辑还是复杂的条件判断，执行条件都提供了强大的支持。通过合理配置和使用执行条件，开发者可以构建高效、可靠的执行链，满足多样化的业务需求。
