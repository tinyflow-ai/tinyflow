<template>
    <div ref="divRef" class="tinyflow" />
</template>

<script setup lang="ts">
import { Tinyflow as TinyflowNative } from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';
import { onMounted, onUnmounted, ref } from 'vue';

const divRef = ref();
let tinyflow: TinyflowNative | null = null;

onMounted(() => {
    tinyflow = new TinyflowNative({
        element: divRef.value as Element,
        data: {}
    });
});

onUnmounted(() => {
    tinyflow && tinyflow.destroy();
});
</script>
