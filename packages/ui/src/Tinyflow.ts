import { type useSvelteFlow } from '@xyflow/svelte';
import { systemPrefersMode } from 'mode-watcher';
import { componentName } from './consts';
import type { TinyflowData, TinyflowOptions } from './types';

type FlowInstance = ReturnType<typeof useSvelteFlow>;
type TinyflowElement = HTMLElement & {
    options: TinyflowOptions;
    onInit: (svelteFlowInstance: FlowInstance) => void;
};

const resolveTheme = (theme: TinyflowOptions['defaultTheme']) =>
    !theme || theme === 'system' ? systemPrefersMode.current : theme;

export class Tinyflow {
    private options: TinyflowOptions;
    private rootEl: Element;
    private tinyflowEl?: TinyflowElement;
    private svelteFlowInstance?: FlowInstance;

    constructor(options: TinyflowOptions) {
        this.rootEl = this.resolveRoot(options.element);
        this.options = {
            ...options,
            defaultTheme: resolveTheme(options.defaultTheme)
        };
        this.mount();
    }

    private resolveRoot(element: TinyflowOptions['element']) {
        if (typeof element === 'string') {
            const root = document.querySelector(element);
            if (!root) {
                throw new Error(`element not found by document.querySelector('${element}')`);
            }
            return root;
        }
        if (element instanceof Element) {
            return element;
        }
        throw new Error('element must be a string or Element');
    }

    private mount() {
        const tinyflowEl = document.createElement(componentName) as TinyflowElement;
        tinyflowEl.style.display = 'block';
        tinyflowEl.style.width = '100%';
        tinyflowEl.style.height = '100%';
        tinyflowEl.classList.add(
            ...(this.options.defaultTheme === 'dark' ? ['tf-root', 'dark'] : ['tf-root'])
        );
        tinyflowEl.options = this.options;
        tinyflowEl.onInit = (svelteFlowInstance: FlowInstance) => {
            this.svelteFlowInstance = svelteFlowInstance;
        };

        this.tinyflowEl = tinyflowEl;
        this.rootEl.appendChild(tinyflowEl);
    }

    getOptions() {
        return this.options;
    }

    getData() {
        return this.svelteFlowInstance?.toObject() ?? null;
    }

    setOptions(options: Partial<Omit<TinyflowOptions, 'element'>>) {
        this.options = {
            ...this.options,
            ...options,
            element: this.options.element,
            defaultTheme: resolveTheme(options.defaultTheme ?? this.options.defaultTheme)
        };
        this.destroy();
        this.mount();
    }

    setData(data: TinyflowData) {
        this.setOptions({ data });
    }

    setTheme(theme: 'light' | 'dark' | 'system') {
        this.setOptions({ defaultTheme: theme });
    }

    destroy() {
        this.tinyflowEl?.remove();
        this.tinyflowEl = undefined;
        this.svelteFlowInstance = undefined;
    }
}
