# Tinyflow 自定义 Node 开发者文档

## 1. 概述

Tinyflow 是一个轻量级的 AI 智能体编排开发组件，前端基于 **Web Component** 构建，支持在 **React、Vue、Angular、Svelte 或原生 HTML** 项目中无缝集成。

开发者可通过注册 **自定义 Node（Custom Node）** 扩展工作流能力，实现业务逻辑节点、工具节点、AI 调用节点等。

本手册详细说明如何开发、注册和使用自定义 Node，包括：
- 节点配置结构
- 输入/输出参数定义
- UI 渲染方式（原生 DOM / React / Vue）
- 数据通信机制
- 与后端执行器的对接建议



## 2. 自定义 Node 配置结构

通过 `Tinyflow` 构造参数中的 `customNodes` 字段注册：

```ts
type CustomNode = {
  title: string;                     // 必填：节点名称
  description?: string;              // 可选：描述
  icon?: string;                     // 可选：SVG 字符串图标
  sortNo?: number;                   // 可选：工具栏排序
  group?: 'base' | 'tools';          // 可选：分组
  rootClass?: string;                // 可选：根容器 class
  rootStyle?: string;                // 可选：根容器 style

  // 输入参数定义（用于前端配置面板 & 后端执行上下文）
  parameters?: Parameter[];
  parametersEnable?: boolean;
  parametersAddEnable?: boolean;

  // 输出参数定义（用于后续节点引用）
  outputDefs?: Parameter[];
  outputDefsEnable?: boolean;
  outputDefsAddEnable?: boolean;

  // 渲染方式（二选一）
  render?: (parent: HTMLElement, node: Node, flow: FlowInstance) => void;
  forms?: CustomNodeForm[];          // 声明式表单

  // 节点更新回调
  onUpdate?: (parent: HTMLElement, node: Node) => void;
};
```

### 2.1 Parameter（输入/输出参数）

用于定义节点的**数据契约**，支持嵌套结构：

```ts
type Parameter = {
  id?: string;
  name?: string;
  nameDisabled?: boolean;
  dataType?: string;                 // 如 'String', 'Number', 'Object'
  dataTypeDisabled?: boolean;
  contentType?: string;              // 数据内容语义（如 'text', 'json'）
  ref?: string;                      // 引用路径（用于 outputDefs）
  refType?: string;                  // 如 'ref' 表示引用类型
  value?: string;
  description?: string;
  required?: boolean;
  defaultValue?: string;
  deleteDisabled?: boolean;
  addChildDisabled?: boolean;
  children?: Parameter[];            // 嵌套结构
  enums?: string[];                  // 枚举值
  // 表单相关（仅前端）
  formType?: string;
  formLabel?: string;
  formDescription?: string;
  formPlaceholder?: string;
  formAttrs?: string;
};
```

> ✅ **建议**：前后端应保持 `parameters` / `outputDefs` 结构一致，便于执行器解析。



## 3. UI 渲染方式

### 3.1 方式一：声明式表单（推荐简单配置节点）

使用 `forms` 定义标准控件：

```ts
forms: [
  { type: 'heading', label: 'API 配置' },
  {
    type: 'input',
    name: 'apiKey',
    label: '密钥',
    placeholder: '请输入...'
  },
  {
    type: 'select',
    name: 'model',
    label: '模型',
    options: [{ label: 'GPT-4', value: 'gpt-4' }]
  },
  {
    type: 'chosen',
    label: '知识库',
    chosen: {
      labelDataKey: 'kbName',
      valueDataKey: 'kbId',
      onChosen(updateNodeData, value, label) {
        updateNodeData({ kbId: value, kbName: label });
      }
    }
  }
]
```

支持控件类型：
- `'input'`、`'textarea'`、`'select'`、`'slider'`、`'heading'`、`'chosen'`

> ⚠️ 使用 `forms` 时，`render` 将被忽略。



### 3.2 方式二：完全自定义渲染（`render` 函数）

适用于复杂 UI（如富文本、图表、拖拽区等）：

```ts
render: (parent, node, flow) => {
  parent.innerHTML = `<div>自定义内容</div>`;
  // 绑定事件
  parent.addEventListener('click', () => {
    flow.updateNodeData(node.id, { clicked: true });
  });
}
```

#### 在 React 项目中渲染 React 组件：

```ts
import { createRoot } from 'react-dom/client';
import MyNodeUI from './MyNodeUI';

render: (parent, node, flow) => {
  const root = createRoot(parent);
  root.render(
    <MyNodeUI
      data={node.data}
      onUpdate={(newData) => flow.updateNodeData(node.id, newData)}
    />
  );
}
```

#### 在 Vue 项目中渲染 Vue 组件：

```ts
import { createApp } from 'vue';
import MyNodeUI from './MyNodeUI.vue';

render: (parent, node, flow) => {
  const app = createApp(MyNodeUI, {
    node,
    onUpdate: (newData) => flow.updateNodeData(node.id, newData)
  });
  app.mount(parent);
}
```

> ✅ **注意**：
> - 每个节点是一个独立应用实例，注意内存管理
> - Tinyflow 未提供节点销毁钩子，需自行处理（如监听 `parent.isConnected`）



## 4. 数据通信与更新

### 4.1 更新节点数据

```ts
flow.updateNodeData(nodeId, { key: 'value' });
```

该操作会：
- 更新 `node.data`
- 触发全局 `onDataChange` 回调
- 保存至工作流 JSON

### 4.2 监听全局变化

```ts
new Tinyflow({
  onDataChange: (data) => {
    // data: { nodes, edges, viewport }
    console.log('工作流已变更', data);
  }
});
```



## 5. 在工作流中使用自定义节点

### 5.1 注册

```ts
const customNodes = {
  'weather-node': { /* ... */ }
};

new Tinyflow({
  element: '#container',
  customNodes
});
```

### 5.2 工作流 JSON 示例

```json
{
  "nodes": [
    {
      "id": "n1",
      "type": "weather-node",
      "data": {
        "city": "Beijing",
        "unit": "metric"
      },
      "position": { "x": 100, "y": 100 }
    }
  ],
  "edges": [],
  "viewport": { "x": 0, "y": 0, "zoom": 1 }
}
```

> ⚠️ `type` 必须与 `customNodes` 的 key 严格一致。



## 6. 后端执行对接建议（Java）

参考文档： [自定义节点（后端）](/zh/integration/custom-node-java.html) 。



## 7. 注意事项

| 项目 | 说明                                              |
|--|-------------------------------------------------|
| **许可证** | 项目采用 LGPL v3.0，允许在闭源商业应用中使用，但修改 Tinyflow 源码需开源  |
| **框架兼容** | 前端为 Web Component，天然支持所有现代框架                    |
| **UI 渲染** | 简单用 `forms`，复杂用 `render` + 框架挂载                 |
| **数据结构** | `node.data` 必须可 JSON 序列化                        |
| **性能** | 避免在 `render` 中创建大型应用实例（如每节点一个 Redux store）      |
| **样式隔离** | 建议使用 scoped CSS、CSS Modules 或 shadow DOM        |



## 8. 完整示例

```ts
const customNodes = {
  'http-request-node': {
    title: 'HTTP 请求',
    description: '发送 HTTP 请求并获取响应',
    icon: '<svg>...</svg>',
    group: 'tools',
    parameters: [
      { name: 'url', dataType: 'String', required: true },
      { name: 'method', dataType: 'String', defaultValue: 'GET' }
    ],
    outputDefs: [
      { name: 'statusCode', dataType: 'Number', nameDisabled: true },
      { name: 'body', dataType: 'String', nameDisabled: true },
      { name: 'headers', dataType: 'Object', nameDisabled: true }
    ],
    forms: [
      { type: 'input', name: 'url', label: 'URL' },
      {
        type: 'select',
        name: 'method',
        label: '方法',
        options: [
          { label: 'GET', value: 'GET' },
          { label: 'POST', value: 'POST' }
        ]
      }
    ]
  }
};

new Tinyflow({
  element: '#tinyflow',
  customNodes,
  onDataChange: (data) => {
    localStorage.setItem('workflow', JSON.stringify(data));
  }
});
```


