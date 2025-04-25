import type { Snippet } from 'svelte';
import type { Node, useSvelteFlow } from '@xyflow/svelte';

export type TinyflowData = Partial<ReturnType<ReturnType<typeof useSvelteFlow>['toObject']>>;

export type SelectItem = {
    value: number | string;
    label: string | Snippet;
    children?: SelectItem[];
};

export type CustomNodeForm = {
    type:
        | 'input'
        | 'textarea'
        | 'select'
        // | 'checkbox'
        // | 'radio'
        // | 'switch'
        | 'slider'
        // | 'number'
        // | 'date'
        // | 'time'
        // | 'datetime'
        // | 'color'
        // | 'file'
        // | 'range'
        // | 'image'
        // | 'password'
        | 'heading';
    label: string;
    description?: string;
    name: string;
    placeholder?: string;
    defaultValue?: string | number | boolean;
    attrs?: Record<string, any>;
    options?: SelectItem[];
};

export type CustomNode = {
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
    render?: (
        parent: HTMLElement,
        node: Node,
        flowInstance: ReturnType<typeof useSvelteFlow>
    ) => void;
    onUpdate?: (parent: HTMLElement, node: Node) => void;
    forms?: CustomNodeForm[];
};

export type TinyflowOptions = {
    element: string | Element;
    data?: TinyflowData | string;
    provider?: {
        llm?: () => SelectItem[] | Promise<SelectItem[]>;
        knowledge?: () => SelectItem[] | Promise<SelectItem[]>;
        searchEngine?: () => SelectItem[] | Promise<SelectItem[]>;
    };
    //type : node
    customNodes?: Record<string, CustomNode>;
    onNodeExecute?: (node: Node) => void;
    onDataChange?: (data: TinyflowData, event: { eventType: string }) => void;
};

export type Parameter = {
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
