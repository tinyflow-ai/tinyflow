import { type useSvelteFlow } from '@xyflow/svelte';
import { componentName } from './consts';

export type TinyflowData = Partial<ReturnType<ReturnType<typeof useSvelteFlow>['toObject']>>;

export type TinyflowOptions = {
    element: string | Element;
    data: TinyflowData;
};

export class Tinyflow {
    private options!: TinyflowOptions;
    private rootEl!: Element;
    private svelteFlowInstance!: ReturnType<typeof useSvelteFlow>;

    constructor(options: TinyflowOptions) {
        this._setOptions(options);
        this._init();
    }

    private _init() {
        if (typeof this.options.element === 'string') {
            this.rootEl = document.querySelector(this.options.element)!;
            if (!this.rootEl) {
                throw new Error(
                    "element not found by document.querySelector('" + this.options.element + "')"
                );
            }
        } else if (this.options.element instanceof Element) {
            this.rootEl = this.options.element;
        } else {
            throw new Error('element must be a string or Element');
        }

        const tinyflowEl = document.createElement(componentName) as any;
        tinyflowEl.data = this.options.data;
        tinyflowEl.onInit = (
            svelteFlowInstance: ReturnType<typeof useSvelteFlow>
        ) => {
            this.svelteFlowInstance = svelteFlowInstance;
        };

        (tinyflowEl as HTMLElement).style.display = 'block';
        (tinyflowEl as HTMLElement).style.width = '100%';
        (tinyflowEl as HTMLElement).style.height = '100%';
        (tinyflowEl as HTMLElement).classList.add('tf-theme-light');
        this.rootEl.appendChild(tinyflowEl);
    }

    private _setOptions(options: TinyflowOptions) {
        this.options = {
            ...options
        };
    }

    getOptions() {
        return this.options;
    }

    getData() {
        return this.svelteFlowInstance.toObject();
    }
}
