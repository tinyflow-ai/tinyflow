# Tinyflow 与原生 JS 集成



## 安装

通过 npm 安装 `@tinyflow-ai/ui`：

```bash
npm install @tinyflow-ai/ui
```


## 使用

### 引入

在项目中引入 `Tinyflow` 类 和 样式：

```javascript
import { Tinyflow } from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';
```

### 初始化

创建一个 `Tinyflow` 实例并传入配置项：

```javascript
const tinyflow = new Tinyflow({
    element: '#app', // 挂载的目标元素（支持选择器字符串或 DOM 元素）
    data: {}, // 初始数据
    provider: {
        llms: async () => [
            { value: 'gpt', label: 'gpt' },
            { value: 'gpt-4o', label: 'gpt-4o' }
        ]
    }
});
```


## 配置项

`TinyflowOptions` 是用于初始化 `Tinyflow` 的配置对象，包含以下字段：

| 字段名       | 类型                          | 必填 | 描述                                                                 |
|--------------|-------------------------------|------|----------------------------------------------------------------------|
| `element`    | `string \| Element`           | 是   | 挂载的目标元素，可以是 CSS 选择器字符串或 DOM 元素。                 |
| `data`       | `TinyflowData`                | 是   | 流程图的初始数据，类型为 `Partial<ReturnType<typeof useSvelteFlow['toObject']>>`。 |
| `provider`   | `{ llms: () => Item[] \| Promise<Item[]> }` | 否   | 数据提供者，返回一个数组或异步数组，用于动态加载选项。               |


## 方法

### `getOptions()`

获取当前的配置项。

**返回值**: `TinyflowOptions`

```javascript
const options = tinyflow.getOptions();
console.log(options);
```

---

### `getData()`

获取当前流程图的数据。

**返回值**: `TinyflowData`

```javascript
const data = tinyflow.getData();
console.log(data);
```

---

### `setData(data: TinyflowData)`

更新流程图的数据。

**参数**:
- `data`: `TinyflowData` - 新的流程图数据。

```javascript
tinyflow.setData({
    nodes: [
        { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
        { id: '2', position: { x: 200, y: 0 }, data: { label: 'Node 2' } }
    ],
    edges: [
        { id: 'e1-2', source: '1', target: '2' }
    ]
});
```

---

### `destroy()`

销毁当前实例并清理挂载的 DOM 元素。

```javascript
tinyflow.destroy();
```


## 样式主题

默认情况下，组件会添加 `tf-theme-light` 类以应用浅色主题。如果需要自定义样式，可以通过覆盖 CSS 类实现。

例如：

```css
.tf-theme-light {
    background-color: #f5f5f5;
    color: #333;
}
```


## 示例代码

以下是一个完整的示例，展示如何使用 `@tinyflow-ai/ui` 创建一个流程图：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tinyflow Example</title>
    <style>
        #app {
            width: 800px;
            height: 600px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div id="app"></div>

    <script type="module">
        import { Tinyflow } from '@tinyflow-ai/ui';

        const tinyflow = new Tinyflow({
            element: '#app',
            data: {
                nodes: [
                    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Start' } },
                    { id: '2', position: { x: 200, y: 0 }, data: { label: 'End' } }
                ],
                edges: [
                    { id: 'e1-2', source: '1', target: '2' }
                ]
            },
            provider: {
                llm: async () => [
                    { value: 'gpt', label: 'gpt' },
                    { value: 'gpt-4o', label: 'gpt-4o' }
                ]
            }
        });
    </script>
</body>
</html>
```
