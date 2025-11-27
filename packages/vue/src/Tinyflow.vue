<template>
    <div ref="divRef" :class="['tinyflow', className]" :style="style" />
</template>

<script setup lang="ts">
import { Tinyflow as TinyflowNative, TinyflowOptions } from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<
    {
        className?: string;
        style?: Record<string, string>;
    } & Omit<TinyflowOptions, 'element'>
>();

const divRef = ref<HTMLDivElement | null>(null);
let tinyflow: TinyflowNative | null = null;

// 安全深拷贝工具函数
function safeDeepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj;

    try {
        return structuredClone(obj);
    } catch {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch {
            console.warn('Failed to clone object, returning original (may cause issues)', obj);
            return obj;
        }
    }
}

onMounted(() => {
    if (divRef.value) {
        // 净化 props.data，避免响应式对象或函数污染
        const cleanedProps = { ...props } as any;
        if ('data' in cleanedProps && cleanedProps.data != null) {
            cleanedProps.data = safeDeepClone(cleanedProps.data);
        }

        tinyflow = new TinyflowNative({
            ...cleanedProps,
            element: divRef.value
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
