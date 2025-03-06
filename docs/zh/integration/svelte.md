
# Tinyflow Svelte 组件使用文档


## 简介
`@tinyflow-ai/svelte` 是一个基于 Svelte 的组件，用于集成 `@tinyflow-ai/ui` 提供的功能。它允许开发者在 Svelte 项目中轻松嵌入 Tinyflow 的交互式界面，并提供灵活的配置选项和方法。


## 安装

通过 npm 或 yarn 安装：


```shell
npm install @tinyflow-ai/svelte
```
或者
```shell
yarn add @tinyflow-ai/svelte
```


## 使用组件

以下是一个简单的使用示例，展示如何在 Svelte 项目中引入并使用该组件：


```html
<script>
    import {Tinyflow} from '@tinyflow-ai/svelte';

    let tinyflowRef;

    function handleGetData() {
        const data = tinyflowRef.getData();
        console.log('Tinyflow Data:', data);
    }
</script>

<Tinyflow
    bind:this={tinyflowRef}
    data={{ /* your data here */ }}
    style={{ backgroundColor: '#f0f0f0' }}
    className="custom-class"
/>

<button on:click={handleGetData}>Get Data</button>
```

## 属性说明
| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | '' | 自定义类名，用于为组件添加额外的样式类。 |
| style | Record<string, string> | {} | 自定义内联样式，用于动态设置组件的宽度、高度等样式属性。 |
| data | Record<string, any> | {} | 初始化数据，包含流程图的节点 (nodes) 和边 (edges) 等信息。 |


## 方法说明
Tinyflow 组件提供了一些方法，用于获取和设置流程图的数据。

| 方法名 | 参数 | 返回值                        | 说明 |
| --- | --- |----------------------------| --- |
| getData | 无 | Record<string, any> 或 null | 获取当前流程图的数据，包括节点和边的信息。如果组件未初始化，则返回 null 并打印警告日志。 |

