# Tinyflow Vue 组件使用文档

## 简介
Tinyflow Vue 是一个基于 `@tinyflow-ai/ui` 的 Vue 组件，用于在 Vue 项目中集成 Tinyflow 流程设计器。该组件提供了简单的 API 和高度可定制的样式选项，方便开发者快速集成和使用。

## 安装

```shell
npm install @tinyflow-ai/vue
```

## 使用组件

将 Tinyflow 组件引入到你的 Vue 项目中：

```vue
<template>
    <div style="width: 100%; height: calc(100vh - 16px)">
        <Tinyflow
            :className="'custom-class'"
            :style="{ width: '100%', height: '100%' }"
            :data="initialData"
        />
    </div>
</template>

<script setup lang="ts">
    import { Tinyflow } from '@tinyflow-ai/vue';
    import { ref } from 'vue';

    const initialData = ref({
        nodes: [],
        edges: []
    });
</script>
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

示例代码：

```vue
<template>
  <div>
    <Tinyflow ref="tinyflowRef" :data="initialData" />
    <button @click="fetchData">获取流程数据</button>
  </div>
</template>

<script setup lang="ts">
import { Tinyflow } from '@tinyflow-ai/vue';
import { ref } from 'vue';

const tinyflowRef = ref<InstanceType<typeof Tinyflow> | null>(null);
const initialData = ref({
  nodes: [],
  edges: []
});

const fetchData = () => {
  if (tinyflowRef.value) {
    const data = tinyflowRef.value.getData();
    console.log('流程数据:', data);
  }
};
</script>
```

## 示例代码

以下是一个完整的示例，展示如何在 Vue 项目中使用 Tinyflow 组件：

```vue
<template>
  <div>
    <h1>Tinyflow 示例</h1>
    <Tinyflow
      ref="tinyflowRef"
      :className="'custom-tinyflow'"
      :style="{ width: '100%', height: '500px', border: '1px solid #ccc' }"
      :data="initialData"
    />
    <button @click="fetchData">获取流程数据</button>
  </div>
</template>

<script setup lang="ts">
import { Tinyflow } from '@tinyflow-ai/vue';
import { ref } from 'vue';

const tinyflowRef = ref<InstanceType<typeof Tinyflow> | null>(null);
const initialData = ref({
  nodes: [
    { id: '1', label: '开始', position: { x: 100, y: 100 } },
    { id: '2', label: '结束', position: { x: 300, y: 100 } }
  ],
  edges: [
    { source: '1', target: '2' }
  ]
});

const fetchData = () => {
  if (tinyflowRef.value) {
    const data = tinyflowRef.value.getData();
    console.log('流程数据:', data);
  }
};
</script>
```
