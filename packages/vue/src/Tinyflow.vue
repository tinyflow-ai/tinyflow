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

/**
 * Vue props 可能是只读 Proxy。核心画布和 XYFlow 会为节点补充运行时字段，
 * 因此跨框架边界前复制 data，避免意外修改宿主状态。
 */
function safeDeepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj;

    try {
        return structuredClone(obj);
    } catch {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch {
            console.warn('无法复制 Tinyflow data，将使用原始值', obj);
            return obj;
        }
    }
}

/** 只生成会影响画布结构的配置；业务回调由下方稳定代理独立处理。 */
const getStructuralOptions = (): Omit<
    TinyflowOptions,
    'element' | 'onDataChange' | 'onNodeExecute'
> => ({
    data: props.data == null ? props.data : safeDeepClone(props.data),
    provider: props.provider,
    customNodes: props.customNodes,
    hiddenNodes: props.hiddenNodes,
    defaultTheme: props.defaultTheme,
    formRefTypeEnable: props.formRefTypeEnable
});

// 代理函数自身在整个组件生命周期内不变，但每次执行都读取最新 props 回调。
// 这既避免 watch 因内联函数重建画布，也避免核心持有旧闭包。
const forwardDataChange: NonNullable<TinyflowOptions['onDataChange']> = (data) =>
    props.onDataChange?.(data);
const forwardNodeExecute: NonNullable<TinyflowOptions['onNodeExecute']> = (node) =>
    props.onNodeExecute?.(node);

onMounted(() => {
    if (divRef.value) {
        tinyflow = new TinyflowNative({
            ...getStructuralOptions(),
            onDataChange: forwardDataChange,
            onNodeExecute: forwardNodeExecute,
            element: divRef.value
        });
    }
});

// 只追踪明确列出的结构 props。deep=true 允许宿主原位修改 data/provider 配置，
// Tinyflow.setOptions 会负责等值 data 去重以及重建前保存当前画布。
watch(
    () => [
        props.data,
        props.provider,
        props.customNodes,
        props.hiddenNodes,
        props.defaultTheme,
        props.formRefTypeEnable
    ],
    () => tinyflow?.setOptions(getStructuralOptions()),
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
