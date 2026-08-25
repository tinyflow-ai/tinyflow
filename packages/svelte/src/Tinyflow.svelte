<script lang="ts">
    import { onMount } from 'svelte';
    import { Tinyflow as TinyflowNative, type TinyflowOptions } from '@tinyflow-ai/ui';
    import '@tinyflow-ai/ui/dist/index.css';

    const {
        style,
        className,
        data,
        provider,
        customNodes,
        onNodeExecute,
        hiddenNodes,
        onDataChange,
        defaultTheme,
        formRefTypeEnable
    }: {
        style?: Record<string, string> | string;
        className?: string;
    } & Omit<TinyflowOptions, 'element'> = $props();

    /** 业务回调使用稳定代理，执行时再读取最新 prop，避免闭包过期和无意义重建。 */
    const forwardDataChange: NonNullable<TinyflowOptions['onDataChange']> = (nextData) =>
        onDataChange?.(nextData);
    const forwardNodeExecute: NonNullable<TinyflowOptions['onNodeExecute']> = (node) =>
        onNodeExecute?.(node);

    /** effect 只读取结构配置，回调 identity 的变化不会进入 setOptions。 */
    const getStructuralOptions = (): Omit<
        TinyflowOptions,
        'element' | 'onDataChange' | 'onNodeExecute'
    > => ({
        data,
        provider,
        customNodes,
        hiddenNodes,
        defaultTheme,
        formRefTypeEnable
    });

    // 一个适配组件只拥有一个原生实例；销毁时必须同步清空引用。
    let divRef: HTMLElement | null = null;
    let tinyflowInstance: TinyflowNative | null = null;
    let skipInitialOptionsEffect = true;

    /** 导出当前工作流，供 bind:this 后的宿主组件调用。 */
    export function getData() {
        if (tinyflowInstance) {
            return tinyflowInstance.getData();
        }
        console.warn('Tinyflow instance is not initialized');
        return null;
    }

    export function getInstance() {
        return tinyflowInstance;
    }

    /** Svelte DOM 挂载完成后创建原生实例。 */
    onMount(() => {
        if (divRef) {
            tinyflowInstance = new TinyflowNative({
                ...getStructuralOptions(),
                onDataChange: forwardDataChange,
                onNodeExecute: forwardNodeExecute,
                element: divRef
            });

            return () => {
                if (tinyflowInstance) {
                    tinyflowInstance.destroy();
                    tinyflowInstance = null;
                }
            };
        }
    });

    // 跳过首次 effect，因为 onMount 已使用相同配置创建实例。后续只同步结构配置；
    // 核心会对等值 data 去重，并在主题/provider 变化时保留用户正在编辑的数据。
    $effect(() => {
        const nextOptions = getStructuralOptions();
        if (skipInitialOptionsEffect) {
            skipInitialOptionsEffect = false;
            return;
        }
        tinyflowInstance?.setOptions(nextOptions);
    });
    const defaultStyle = { height: '600px' };

    function styleObjectToString(styleObj: Record<string, string>): string {
        return Object.entries(styleObj)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');
    }

    const combinedStyleString = $derived.by(() =>
        typeof style === 'string'
            ? style
            : styleObjectToString({ ...defaultStyle, ...(style ?? {}) })
    );
</script>

<div bind:this={divRef} style={combinedStyleString} class={className}></div>
