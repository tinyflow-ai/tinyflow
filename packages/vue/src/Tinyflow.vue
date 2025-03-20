<template>
    <div ref="divRef" :class="['tinyflow', className]" :style="style" />
</template>

<script setup lang="ts">
import {
    type CustomNode,
    Item,
    Tinyflow as TinyflowNative,
    TinyflowOptions
} from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
    className?: string;
    style?: Record<string, string>;
    data?: Record<string, any>;
    provider?: {
        llm?: () => Item[] | Promise<Item[]>;
        knowledge?: () => Item[] | Promise<Item[]>;
    };
    customNodes?: Record<string, CustomNode>;
}>();

const divRef = ref<HTMLDivElement | null>(null);
let tinyflow: TinyflowNative | null = null;
// 定义默认的 provider 方法
const defaultProvider = {
    llm: () => [] as Item[],
    knowledge: () => [] as Item[]
};

onMounted(() => {
    if (divRef.value) {
        // 合并默认 provider 和传入的 props.provider
        const mergedProvider = {
            ...defaultProvider,
            ...props.provider
        };
        tinyflow = new TinyflowNative({
            element: divRef.value as Element,
            data: props.data || {},
            provider: mergedProvider,
            customNodes: props.customNodes
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
