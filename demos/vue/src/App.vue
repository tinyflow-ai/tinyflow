<template>
    <div style="width: 100%; height: calc(100vh - 16px)">
        <Tinyflow
            :className="'custom-class'"
            :style="{ width: '100%', height: '100%' }"
            :data="initialData"
            :provider="provider"
            :customNodes="customNodes"
        />
    </div>
</template>

<script setup lang="ts">
import { Tinyflow } from '@tinyflow-ai/vue';
import '@tinyflow-ai/vue/dist/index.css';
import { ref } from 'vue';


const customNodes =  {
    'custom-node': {
        type: 'custom-node',
            name: 'custom-node',
            icon: 'https://tinyflow-ai.github.io/tinyflow-ai/assets/logo.png',
            render: (parent: HTMLElement) => {
                const div = document.createElement('div');
                div.innerHTML = 'custom-node';
                parent.appendChild(div);
        }
    }
}

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
</script>
