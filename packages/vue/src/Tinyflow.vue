<template>
    <div ref="divRef" :class="['tinyflow', className]" :style="style" />
</template>

<script setup lang="ts">
import { Tinyflow as TinyflowNative, TinyflowOptions } from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps<
    {
        className?: string;
        style?: Record<string, string>;
    } & Omit<TinyflowOptions, 'element'>
>();

const divRef = ref<HTMLDivElement | null>(null);
let tinyflow: TinyflowNative | null = null;

const getNativeOptions = () => {
    const { className: _className, style: _style, ...nativeOptions } = props;
    const cleanedOptions = { ...nativeOptions } as Omit<TinyflowOptions, 'element'>;
    if (cleanedOptions.data != null) {
        cleanedOptions.data = safeDeepClone(cleanedOptions.data);
    }
    return cleanedOptions;
};

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
        tinyflow = new TinyflowNative({
            ...getNativeOptions(),
            element: divRef.value
        });
    }
});

watch(
    () => getNativeOptions(),
    (options) => tinyflow?.setOptions(options),
    { deep: true }
);

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

const getInstance = () => {
    if (tinyflow) {
        return tinyflow;
    }
    console.warn('Tinyflow instance is not initialized');
    return null;
};

defineExpose({
    getData,
    getInstance
});
</script>
