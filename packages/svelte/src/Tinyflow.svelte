<script lang="ts">
    import { onMount } from 'svelte';
    import {
        Tinyflow as TinyflowNative,
        type TinyflowOptions
    } from '@tinyflow-ai/ui';
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

    const getNativeOptions = (): Omit<TinyflowOptions, 'element'> => ({
        data,
        provider,
        customNodes,
        onNodeExecute,
        hiddenNodes,
        onDataChange,
        defaultTheme,
        formRefTypeEnable
    });

    // Internal state
    let divRef: HTMLElement | null = null;
    let tinyflowInstance: TinyflowNative | null = null;
    let skipInitialOptionsEffect = true;

    // Expose imperative handle
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

    // Lifecycle: Mount
    onMount(() => {
        if (divRef) {
            tinyflowInstance = new TinyflowNative({
                ...getNativeOptions(),
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

    $effect(() => {
        const nextOptions = getNativeOptions();
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

<div
    bind:this={divRef}
    style={combinedStyleString }
    class={className}
></div>
