import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { Edge } from '@xyflow/svelte';
import { Node as Node_2 } from '@xyflow/svelte';
import { PublicProps } from 'vue';
import { TinyflowOptions } from '@tinyflow-ai/ui';
import { Viewport } from '@xyflow/svelte';

declare type __VLS_Props = {
    className?: string;
    style?: Record<string, string>;
} & Omit<TinyflowOptions, 'element'>;

export declare const Tinyflow: DefineComponent<__VLS_Props, {
getData: () => {
nodes: Node_2[];
edges: Edge[];
viewport: Viewport;
} | null;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
divRef: HTMLDivElement;
}, HTMLDivElement>;

export { }
