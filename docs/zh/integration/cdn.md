# CDN 导入 Tinyflow

## 导入 Tinyflow

在 html 到引入 Tinyflow 的 js 和 css

```html
<link href="https://unpkg.com/@tinyflow-ai/ui/dist/index.css" rel="stylesheet">
<script src="https://unpkg.com/@tinyflow-ai/ui/dist/index.umd.js"></script>
```

## 创建 Tinyflow 实例

html 代码如下：

```html
<div id="app"></div>

<script>
// 初始化 Tinyflow
var tinyflow = new Tinyflow.Tinyflow({
    element: '#app',
    data: {  }
});
</script>
```

## 完整示例代码


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
