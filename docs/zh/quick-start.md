# Tinyflow 快速开始

## 1. 安装

通过 npm 安装：

```bash
npm install @tinyflow-ai/ui
```


## 2. 引入并初始化

在项目中引入 `Tinyflow` 并初始化：

```javascript
import { Tinyflow } from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';

// 初始化 Tinyflow
const tinyflow = new Tinyflow({
    element: '#app', // 挂载的目标元素（支持选择器字符串或 DOM 元素）
    data: {
        nodes: [
            { id: '1', position: { x: 0, y: 0 }, data: { label: 'Start' } },
            { id: '2', position: { x: 200, y: 0 }, data: { label: 'End' } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2' }
        ]
    }
});
```


## 3. HTML 结构

确保页面中有一个容器元素用于挂载流程图：

```html
<div id="app" style="width: 800px; height: 600px; ">
</div>
```



## 示例代码

以下是一个完整的示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tinyflow Quick Start</title>
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
        import '@tinyflow-ai/ui/dist/index.css';

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
            }
        });
    </script>
</body>
</html>
```

## 注意事项

1. 确保目标容器有明确的宽高样式。
2. 如果需要自定义样式，可以覆盖默认的 `tf-theme-light` 类。
