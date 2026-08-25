import { type useSvelteFlow } from '@xyflow/svelte';
import { systemPrefersMode } from 'mode-watcher';
import { componentName } from './consts';
import type { TinyflowData, TinyflowOptions } from './types';
import { deepEqual } from './components/utils/deepEqual';

type FlowInstance = ReturnType<typeof useSvelteFlow>;
type MutableOptions = Partial<Omit<TinyflowOptions, 'element'>>;
type TinyflowElement = HTMLElement & {
    options: TinyflowOptions;
    onInit: (svelteFlowInstance: FlowInstance) => void;
};

/** 这些配置会改变节点集合或渲染结构，更新时需要重新创建 Web Component。 */
const STRUCTURAL_OPTION_KEYS = new Set<keyof MutableOptions>([
    'data',
    'provider',
    'customNodes',
    'hiddenNodes',
    'defaultTheme',
    'formRefTypeEnable'
]);

/** 将字符串工作流规范化为对象，仅用于判断受控数据是否与当前画布相同。 */
const normalizeData = (data: TinyflowOptions['data']) => {
    if (typeof data !== 'string') return data;
    try {
        return JSON.parse(data.trim()) as TinyflowData;
    } catch {
        return data;
    }
};

/**
 * Tinyflow 原生挂载器。
 *
 * 每个实例只管理自己创建的 `<tinyflow-component>`。结构配置更新需要重建组件时，
 * 会先保存当前画布数据；回调更新则直接修改共享 options 对象，避免丢失编辑状态。
 */
export class Tinyflow {
    private options: TinyflowOptions;
    private onDataChange?: TinyflowOptions['onDataChange'];
    private lastEmittedData?: TinyflowData;
    private readonly rootEl: Element;
    private tinyflowEl?: TinyflowElement;
    private svelteFlowInstance?: FlowInstance;
    private themeMediaQuery?: MediaQueryList;
    private readonly handleSystemThemeChange = () => this.applyHostTheme();
    private readonly handleDataChange: NonNullable<TinyflowOptions['onDataChange']> = (data) => {
        // 记录核心刚发出的对象，用于识别 React/Vue/Svelte 受控组件的原样回写。
        // XYFlow 的 toObject() 可能比回调数据多 measured/selected 等临时字段，不能只比较它。
        this.lastEmittedData = data;
        this.onDataChange?.(data);
    };

    constructor(options: TinyflowOptions) {
        this.rootEl = this.resolveRoot(options.element);
        this.onDataChange = options.onDataChange;
        // 保留 system 原值，SvelteFlow 和宿主 class 才能继续响应系统主题变化。
        this.options = {
            ...options,
            onDataChange: this.handleDataChange,
            defaultTheme: options.defaultTheme ?? 'system'
        };
        this.mount();
    }

    /** 将选择器或元素统一解析为稳定的宿主节点。 */
    private resolveRoot(element: TinyflowOptions['element']) {
        if (typeof element === 'string') {
            const root = document.querySelector(element);
            if (!root) {
                throw new Error(`element not found by document.querySelector('${element}')`);
            }
            return root;
        }
        if (element instanceof Element) return element;
        throw new Error('element must be a string or Element');
    }

    /** 创建核心 Web Component，并接收其内部 XYFlow 实例。 */
    private mount() {
        const tinyflowEl = document.createElement(componentName) as TinyflowElement;
        tinyflowEl.style.display = 'block';
        tinyflowEl.style.width = '100%';
        tinyflowEl.style.height = '100%';
        tinyflowEl.classList.add('tf-root');
        tinyflowEl.options = this.options;
        tinyflowEl.onInit = (svelteFlowInstance: FlowInstance) => {
            this.svelteFlowInstance = svelteFlowInstance;
        };

        this.tinyflowEl = tinyflowEl;
        this.applyHostTheme();
        this.watchSystemTheme();
        this.rootEl.appendChild(tinyflowEl);
    }

    /** 根据固定主题或系统媒体查询更新 Tinyflow 自身的暗色变量 class。 */
    private applyHostTheme() {
        const prefersDark =
            typeof window !== 'undefined' && typeof window.matchMedia === 'function'
                ? window.matchMedia('(prefers-color-scheme: dark)').matches
                : systemPrefersMode.current === 'dark';
        const dark =
            this.options.defaultTheme === 'dark' ||
            (this.options.defaultTheme === 'system' && prefersDark);
        this.tinyflowEl?.classList.toggle('dark', dark);
    }

    /** 仅 system 模式订阅媒体查询；固定主题不保留无用监听器。 */
    private watchSystemTheme() {
        this.stopWatchingSystemTheme();
        if (
            this.options.defaultTheme === 'system' &&
            typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function'
        ) {
            this.themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            this.themeMediaQuery.addEventListener('change', this.handleSystemThemeChange);
        }
    }

    private stopWatchingSystemTheme() {
        this.themeMediaQuery?.removeEventListener('change', this.handleSystemThemeChange);
        this.themeMediaQuery = undefined;
    }

    /** 返回当前生效配置；对象引用保持稳定，供 Svelte context 中的消费者读取。 */
    getOptions() {
        return this.options;
    }

    /** 导出当前节点、边与 viewport；组件尚未初始化或已销毁时返回 null。 */
    getData() {
        return this.svelteFlowInstance?.toObject() ?? null;
    }

    /**
     * 更新公开配置。
     * - 与当前画布相同的受控 data 不重建，阻断 onDataChange 回写循环；
     * - 只更新回调时原位修改 options；
     * - 结构更新重建前保存当前数据，避免主题/provider 修改清空用户编辑。
     */
    setOptions(options: MutableOptions) {
        const currentData = this.getData();
        const nextData = Object.hasOwn(options, 'data') ? normalizeData(options.data) : undefined;
        const previousData = normalizeData(this.options.data);
        const dataActuallyChanged =
            Object.hasOwn(options, 'data') &&
            !deepEqual(nextData, previousData) &&
            !deepEqual(nextData, this.lastEmittedData);
        const entries = Object.entries(options) as [keyof MutableOptions, unknown][];
        const shouldRemount = entries.some(([key, value]) => {
            if (!STRUCTURAL_OPTION_KEYS.has(key)) return false;
            if (key === 'data' && currentData) {
                const normalized = normalizeData(value as TinyflowOptions['data']);
                return (
                    !deepEqual(normalized, currentData) &&
                    !deepEqual(normalized, this.lastEmittedData)
                );
            }
            // 适配器会一次传入完整结构配置，未变化的字段不能导致额外重建。
            return !deepEqual(value, this.options[key]);
        });

        if (Object.hasOwn(options, 'onDataChange')) {
            this.onDataChange = options.onDataChange;
        }
        const assignableOptions = { ...options };
        delete assignableOptions.onDataChange;
        // 必须原位更新：组件树中的 context 持有的正是这个对象引用；内部回调包装器
        // 也必须保留，外部更新只替换其最终调用目标。
        Object.assign(this.options, assignableOptions, {
            element: this.options.element,
            onDataChange: this.handleDataChange
        });

        if (!shouldRemount) {
            if (this.tinyflowEl) this.tinyflowEl.options = this.options;
            return;
        }

        if (!dataActuallyChanged && currentData) {
            this.options.data = currentData;
        }
        this.destroy();
        this.mount();
    }

    /** 使用受控数据更新画布；等值数据不会触发重建。 */
    setData(data: TinyflowData) {
        this.setOptions({ data });
    }

    /** 切换固定或系统主题，同时保留当前工作流。 */
    setTheme(theme: 'light' | 'dark' | 'system') {
        this.setOptions({ defaultTheme: theme });
    }

    /** 只释放本实例创建的节点和媒体查询监听器，不触碰宿主的其他子元素。 */
    destroy() {
        this.stopWatchingSystemTheme();
        this.tinyflowEl?.remove();
        this.tinyflowEl = undefined;
        this.svelteFlowInstance = undefined;
    }
}
