import { Edge } from '@xyflow/svelte';
import { Node as Node_2 } from '@xyflow/svelte';
import { useSvelteFlow } from '@xyflow/svelte';
import { Viewport } from '@xyflow/svelte';

export declare type Item = {
    value: number | string;
    label: string;
    children?: Item[];
};

export declare class Tinyflow {
    private options;
    private rootEl;
    private svelteFlowInstance;
    constructor(options: TinyflowOptions);
    private _init;
    private _setOptions;
    getOptions(): TinyflowOptions;
    getData(): {
        nodes: Node_2[];
        edges: Edge[];
        viewport: Viewport;
    };
    destroy(): void;
}

export declare type TinyflowData = Partial<ReturnType<ReturnType<typeof useSvelteFlow>['toObject']>>;

export declare type TinyflowOptions = {
    element: string | Element;
    data: TinyflowData;
    provider?: {
        llms: () => Item[] | Promise<Item[]>;
    };
};

export { }
