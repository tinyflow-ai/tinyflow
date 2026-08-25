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
    type: 'input' | 'textarea' | 'select' | 'chosen' | 'slider' | 'heading';
    label: string;
    description?: string;
    name: string;
    placeholder?: string;
    defaultValue?: string | number | boolean;
    attrs?: Record<string, any>;
    options?: SelectItem[];
    chosen?: {
        labelDataKey: string;
        valueDataKey: string;
        buttonText?: string;
        onChosen?: (updateNodeData: (data: Record<string, any>) => void, value?: string, label?: string, event?: Event) => void;
    };
};

declare type MutableOptions = Partial<Omit<TinyflowOptions, 'element'>>;

export declare type Parameter = {
    id?: string;
    name?: string;
    nameDisabled?: boolean;
    dataType?: string;
    dataTypeItems?: SelectItem[];
    dataTypeDisabled?: boolean;
    contentType?: string;
    ref?: string;
    refType?: string;
    value?: string;
    description?: string;
    required?: boolean;
    defaultValue?: string;
    deleteDisabled?: boolean;
    addChildDisabled?: boolean;
    children?: Parameter[];
    enums?: string[];
    formType?: string;
    formLabel?: string;
    formDescription?: string;
    formPlaceholder?: string;
    formAttrs?: string;
};

export declare type SelectItem = {
    value: number | string;
    label: string | Snippet;
    children?: SelectItem[];
};

/**
 * Tinyflow 原生挂载器。
 *
 * 每个实例只管理自己创建的 `<tinyflow-component>`。结构配置更新需要重建组件时，
 * 会先保存当前画布数据；回调更新则直接修改共享 options 对象，避免丢失编辑状态。
 */
export declare class Tinyflow {
    private options;
    private onDataChange?;
    private lastEmittedData?;
    private readonly rootEl;
    private tinyflowEl?;
    private svelteFlowInstance?;
    private themeMediaQuery?;
    private readonly handleSystemThemeChange;
    private readonly handleDataChange;
    constructor(options: TinyflowOptions);
    /** 将选择器或元素统一解析为稳定的宿主节点。 */
    private resolveRoot;
    /** 创建核心 Web Component，并接收其内部 XYFlow 实例。 */
    private mount;
    /** 根据固定主题或系统媒体查询更新 Tinyflow 自身的暗色变量 class。 */
    private applyHostTheme;
    /** 仅 system 模式订阅媒体查询；固定主题不保留无用监听器。 */
    private watchSystemTheme;
    private stopWatchingSystemTheme;
    /** 返回当前生效配置；对象引用保持稳定，供 Svelte context 中的消费者读取。 */
    getOptions(): TinyflowOptions;
    /** 导出当前节点、边与 viewport；组件尚未初始化或已销毁时返回 null。 */
    getData(): {
        nodes: Node_2[];
        edges: Edge[];
        viewport: Viewport;
    } | null;
    /**
     * 更新公开配置。
     * - 与当前画布相同的受控 data 不重建，阻断 onDataChange 回写循环；
     * - 只更新回调时原位修改 options；
     * - 结构更新重建前保存当前数据，避免主题/provider 修改清空用户编辑。
     */
    setOptions(options: MutableOptions): void;
    /** 使用受控数据更新画布；等值数据不会触发重建。 */
    setData(data: TinyflowData): void;
    /** 切换固定或系统主题，同时保留当前工作流。 */
    setTheme(theme: 'light' | 'dark' | 'system'): void;
    /** 只释放本实例创建的节点和媒体查询监听器，不触碰宿主的其他子元素。 */
    destroy(): void;
}

export declare type TinyflowData = Partial<ReturnType<ReturnType<typeof useSvelteFlow>['toObject']>>;

export declare type TinyflowNodeData = Record<string, any>;

export declare type TinyflowOptions = {
    element: string | Element;
    data?: TinyflowData | string;
    provider?: {
        llm?: () => SelectItem[] | Promise<SelectItem[]>;
        knowledge?: () => SelectItem[] | Promise<SelectItem[]>;
        searchEngine?: () => SelectItem[] | Promise<SelectItem[]>;
    } & Record<string, () => SelectItem[] | Promise<SelectItem[]>>;
    customNodes?: Record<string, CustomNode>;
    onNodeExecute?: (node: Node_2) => void;
    hiddenNodes?: string[] | (() => string[]);
    onDataChange?: (data: TinyflowData) => void;
    /** 默认主题，default: system */
    defaultTheme?: 'light' | 'dark' | 'system';
    formRefTypeEnable?: boolean;
};

export { }
