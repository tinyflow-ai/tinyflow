# Tinyflow React 组件使用文档


## 简介
`@tinyflow-ai/react` 是一个基于 React 的封装组件，用于在 React 项目中快速集成 Tinyflow 流程设计器。它提供了简洁的 API 和灵活的配置选项，方便开发者在 React 应用中嵌入流程设计功能。

本组件依赖于 `@tinyflow-ai/ui` 提供的核心功能，并通过 React 的 forwardRef 和 useImperativeHandle 提供了对底层实例的访问能力。


## 安装

通过 npm 或 yarn 安装：



```shell
npm install @tinyflow-ai/react
```
或者
```shell
yarn add @tinyflow-ai/react
```


## 使用组件

以下是一个简单的使用示例，展示如何在 React 项目中使用 `@tinyflow-ai/react` 组件。

```tsx
import React, { useRef } from 'react';
import { Tinyflow, TinyflowHandle } from '@tinyflow-ai/react';
import '@tinyflow-ai/react/dist/index.css'

const App = () => {
const tinyflowRef = useRef<TinyflowHandle>(null);

    const handleGetData = () => {
        if (tinyflowRef.current) {
            const data = tinyflowRef.current.getData();
            console.log('Flow Data:', data);
        }
    };

    return (
            <div>
                <h1>Tinyflow React Example</h1>
                <Tinyflow
                    ref={tinyflowRef}
                    data={{
                        nodes: [],
                        edges: []
                    }}
                    style={{ border: '1px solid #ccc' }}
                className="custom-class"
                />
                <button onClick={handleGetData}>获取流程数据</button>
            </div>
        );
    };

export default App;
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


## 示例代码

以下是一个完整的示例，展示如何在 Vue 项目中使用 Tinyflow 组件：

```tsx
import React, { useRef } from 'react';
import { Tinyflow, TinyflowHandle } from '@tinyflow-ai/react';
import '@tinyflow-ai/react/dist/index.css'

const App = () => {
const tinyflowRef = useRef<TinyflowHandle>(null);

    const handleGetData = () => {
        if (tinyflowRef.current) {
            const data = tinyflowRef.current.getData();
            console.log('Flow Data:', data);
        }
    };

    return (
            <div>
                <h1>Tinyflow React Example</h1>
                <Tinyflow
                    ref={tinyflowRef}
                    data={{
                        nodes: [
                            { id: '1', label: '开始', position: { x: 100, y: 100 } },
                            { id: '2', label: '结束', position: { x: 300, y: 100 } }
                        ],
                        edges: [
                            { source: '1', target: '2' }
                        ]
                    }}
                    style={{ border: '1px solid #ccc' }}
                className="custom-class"
                />
                <button onClick={handleGetData}>获取流程数据</button>
            </div>
        );
    };

export default App;
```
