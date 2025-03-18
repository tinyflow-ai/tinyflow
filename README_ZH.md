![](docs/assets/images/screenshot.png)
# Tinyflow
Tinyflow 是一个轻量的 AI 智能体解决方案，她不是一个 ”产品“，而是一个开发组件。
通过集成 Tinyflow，您可以使得任何的传统应用，具备 AI 智能体的能力。

## 特性

- Tinyflow 前端基于 Web Component 开发，因此支持 React、Vue、Angular、Svelte 等任何框架，当然也包括
原生的 HTML、CSS、JavaScript。
- 后端支持 Java（不限制框架）、Python、Node.js 等语言。

![](docs/assets/images/architecture.png)

## 快速开始

### 前端 

```bash
npm install @tinyflow-ai/ui
```

```ts
import { Tinyflow } from '@tinyflow-ai/ui';
import "@tinyflow-ai/ui/dist/index.css";

new Tinyflow({
    element: '#tinyflow',
});
```

参数含义：
- element：容器元素，可以是一个字符串，也可以是一个 DOM 元素。
- data：工作流的数据，是一个 JSON 对象。
- provider：数据提供者，目前支持大模型配置（llm）以及知识库（knowledge）的数据。

tinyflow 提供了以下方法：

- `tinyflow.getData()` 导出工作流的数据
- `tinyflow.getOptions()` 获取初始化配置的参数

### Java 后端

后端 java 主要用于执行 Tinyflow 设计出来的工作流，其开源地址为：https://gitee.com/tinyflow-ai/tinyflow-java

```xml
<dependency>
    <groupId>dev.tinyflow</groupId>
    <artifactId>tinyflow-java-core</artifactId>
    <version>1.0.0-rc.3</version>
</dependency>
```

### 其他后端
Nodejs 后端（正在开发中，暂未开放）：

```bash
npm install @tinyflow-ai/nodejs
```

Python 后端（正在开发中，暂未开放）：

```bash
pip install tinyflow-ai-python
```


## Star 用户专属交流群

![](./docs/assets/images/wechat_group.jpg)
