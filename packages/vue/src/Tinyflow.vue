<template>
    <div ref="divRef" :class="['tinyflow', className]" :style="style" />
</template>

<script setup lang="ts">
import { Tinyflow as TinyflowNative } from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    className?: string;
    style?: Record<string, string>;
    data?: Record<string, any>;
}>();

const divRef = ref<HTMLDivElement | null>(null);
let tinyflow: TinyflowNative | null = null;

onMounted(() => {
    if (divRef.value) {
        tinyflow = new TinyflowNative({
            element: divRef.value as Element,
            data: props.data || {}
        });
    }
});

onUnmounted(() => {
    if (tinyflow) {
        tinyflow.destroy();
        tinyflow = null;
    }
});

const getData = () => {
    if (tinyflow) {
        return tinyflow.getData();
    }
    console.warn('Tinyflow instance is not initialized');
    return null;
};

defineExpose({
    getData
});
</script>
