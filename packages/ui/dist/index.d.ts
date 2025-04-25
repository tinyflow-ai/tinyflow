import { Edge } from '@xyflow/svelte';
import { Node as Node_2 } from '@xyflow/svelte';
import { Snippet } from 'svelte';
import { useSvelteFlow } from '@xyflow/svelte';
import { Viewport } from '@xyflow/svelte';

export declare type CustomNode = {
    title: string;
    description?: string;
    icon?: string;
    sortNo?: number;
    group?: 'base' | 'tools';
    rootClass?: string;
    rootStyle?: string;
    parameters?: Parameter[];
    parametersEnable?: boolean;
    parametersAddEnable?: boolean;
    outputDefs?: Parameter[];
    outputDefsEnable?: boolean;
    outputDefsAddEnable?: boolean;
    render?: (parent: HTMLElement, node: Node_2, flowInstance: ReturnType<typeof useSvelteFlow>) => void;
    onUpdate?: (parent: HTMLElement, node: Node_2) => void;
    forms?: CustomNodeForm[];
};

export declare type CustomNodeForm = {
    type: 'input' | 'textarea' | 'select' | 'slider' | 'heading';
    label: string;
    description?: string;
    name: string;
    placeholder?: string;
    defaultValue?: string | number | boolean;
    attrs?: Record<string, any>;
    options?: SelectItem[];
};

export declare type Parameter = {
    id?: string;
    name?: string;
    nameDisabled?: boolean;
    dataType?: string;
    dataTypeDisabled?: boolean;
    ref?: string;
    refType?: string;
    value?: string;
    description?: string;
    required?: boolean;
    defaultValue?: string;
    deleteDisabled?: boolean;
    addChildDisabled?: boolean;
    children?: Parameter[];
};

export declare type SelectItem = {
    value: number | string;
    label: string | Snippet;
    children?: SelectItem[];
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
    setData(data: TinyflowData): void;
    destroy(): void;
}

export declare type TinyflowData = Partial<ReturnType<ReturnType<typeof useSvelteFlow>['toObject']>>;

export declare type TinyflowOptions = {
    element: string | Element;
    data?: TinyflowData | string;
    provider?: {
        llm?: () => SelectItem[] | Promise<SelectItem[]>;
        knowledge?: () => SelectItem[] | Promise<SelectItem[]>;
        searchEngine?: () => SelectItem[] | Promise<SelectItem[]>;
    };
    customNodes?: Record<string, CustomNode>;
    onNodeExecute?: (node: Node_2) => void;
    onDataChange?: (data: TinyflowData, event: {
        eventType: string;
    }) => void;
};

export { }
