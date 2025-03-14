<template>
    <div style="width: 100%; height: calc(100vh - 16px)">
        <Tinyflow
            :className="'custom-class'"
            :style="{ width: '100%', height: '100%' }"
            :data="initialData"
            :provider="provider"
        />
    </div>
</template>

<script setup lang="ts">
import { Tinyflow } from '@tinyflow-ai/vue';
import '@tinyflow-ai/vue/dist/index.css';
import { ref } from 'vue';

const provider = {
    llm: ()  => [
        {
            value: 'llm',
            label: 'llm',
        }
    ],
    knowledge: () => []
}
const initialData = ref({
    nodes: [],
    edges: []
});
</script>
