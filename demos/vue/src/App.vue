<template>
    <div style="width: 100%; height: calc(100vh - 16px)">

        <button @click="handleGetData">getData</button>

        <Tinyflow
            className="custom-class"
            :style="{ width: '100%', height: '100%' }"
            :data="initialData"
            :provider="provider"
            ref="tinyflowRef"
        />

    </div>
</template>

<script setup lang="ts">
import { Tinyflow } from '@tinyflow-ai/vue';
import '@tinyflow-ai/vue/dist/index.css';
import { ref } from 'vue';

const tinyflowRef = ref<InstanceType<typeof Tinyflow> | null>(null);


const provider = {
    llm: ()  => [
        {
            value: 'llm',
            label: 'llm',
        }
    ],
    knowledge: () => [],
}
const initialData = ref({
    nodes: [],
    edges: []
});

const handleGetData = () => {
    if (tinyflowRef.value) {
        const data = tinyflowRef.value.getData();
        console.log('Tinyflow data:', data);
    } else {
        console.warn('Tinyflow component ref is not ready');
    }
};
</script>
