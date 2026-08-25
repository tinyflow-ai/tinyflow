import type { Component } from 'svelte';
import type {
    Tinyflow as TinyflowNative,
    TinyflowData,
    TinyflowOptions as TinyflowNativeOptions
} from '@tinyflow-ai/ui';

/** Svelte 适配组件接受的公开属性。 */
export type TinyflowProps = {
    style?: Record<string, string> | string;
    className?: string;
} & Omit<TinyflowNativeOptions, 'element'>;

/** 通过 bind:this 暴露给宿主组件的命令式 API。 */
export type TinyflowExports = {
    getData: () => TinyflowData | null;
    getInstance: () => TinyflowNative | null;
};

declare const Tinyflow: Component<TinyflowProps, TinyflowExports>;

export default Tinyflow;
