# 通过 CDN 引入 Tinyflow


本文将指导你如何通过 CDN 快速在 HTML 页面中集成并使用 Tinyflow。

## 1. 引入 Tinyflow 资源

在 HTML 文件的 `<head>` 中引入 Tinyflow 的 CSS 和 JS 资源：

```html
<link href="https://unpkg.com/@tinyflow-ai/ui/dist/index.css" rel="stylesheet">
<script src="https://unpkg.com/@tinyflow-ai/ui/dist/index.umd.js"></script>
```

> **注意**：确保链接末尾**没有多余空格**，否则可能导致资源加载失败。

## 2. 创建容器并初始化 Tinyflow

在页面中准备一个容器元素（如 `<div id="app"></div>`），然后通过 JavaScript 初始化 Tinyflow 实例：

```html
<div id="app"></div>

<script>
  // 初始化 Tinyflow 实例
  const tinyflow = new Tinyflow.Tinyflow({
    element: '#app',      // 指定挂载的 DOM 元素
    data: {}              // 可选：传入初始流程数据（JSON 格式）
  });
</script>
```

- `element`：支持 CSS 选择器（如 `#app`、`.container`）。
- `data`：流程图的初始数据，遵循 Tinyflow 的数据结构规范（可为空）。

## 3. 完整示例

以下是一个可直接运行的完整 HTML 示例。将其保存为 `.html` 文件并在浏览器中打开，即可看到 Tinyflow 的可视化编辑器：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tinyflow Quick Start</title>
    <link href="https://unpkg.com/@tinyflow-ai/ui/dist/index.css" rel="stylesheet">
    <script src="https://unpkg.com/@tinyflow-ai/ui/dist/index.umd.js"></script>
    <style>
        #app {
            width: 800px;
            height: 600px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body style="padding: 100px;">
<div id="app"></div>

<script>
    var data = `{"nodes":[{"id":"2","type":"llmNode","data":{"title":"大模型","description":"处理大模型相关问题","expand":true,"outputDefs":[{"id":"pyiig8ntGWZhVdVz","dataType":"Object","name":"param","children":[{"id":"1","name":"newParam1","dataType":"String"},{"id":"2","name":"newParam2","dataType":"String"}]}]},"position":{"x":550,"y":50},"measured":{"width":322,"height":623},"selected":true},{"id":"3","type":"startNode","data":{"title":"开始节点","description":"开始定义输入参数","expand":true},"position":{"x":150,"y":25},"measured":{"width":306,"height":200},"selected":false},{"id":"4","type":"endNode","data":{"title":"结束节点","description":"结束定义输出参数","expand":true},"position":{"x":950,"y":100},"measured":{"width":306,"height":200},"selected":false}],"edges":[],"viewport":{"x":250,"y":100,"zoom":1}}`;

    // 初始化 Tinyflow
    var tinyflow = new Tinyflow.Tinyflow({
        element: '#app',
        data: JSON.parse(data)

    });
</script>
</body>
</html>
```

> **提示**：
> - 你可以将 `data` 替换为从后端 API 获取的流程数据，实现动态加载。
> - 确保页面在 HTTP/HTTPS 环境下打开（部分浏览器对本地 `file://` 协议的跨域限制较严格）。

