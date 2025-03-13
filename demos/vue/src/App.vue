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
