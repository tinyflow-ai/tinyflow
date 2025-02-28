<script lang="ts">
    import { onMount } from 'svelte';
    import { Tinyflow as TinyflowNative, type TinyflowOptions } from '@tinyflow-ai/ui';
    import '@tinyflow-ai/ui/dist/index.css';

    const { style, className, data, ...rest }: {
        style?: Record<string, string> | string;
        className?: string;
        data: TinyflowOptions['data']
    } = $props();


    // Internal state
    let divRef: HTMLElement | null = null;
    let tinyflowInstance: TinyflowNative | null = null;

    // Expose imperative handle
    export function getData() {
        if (tinyflowInstance) {
            return tinyflowInstance.getData();
        }
        console.warn('Tinyflow instance is not initialized');
        return null;
    }

    // Lifecycle: Mount
    onMount(() => {
        if (divRef) {
            tinyflowInstance = new TinyflowNative({
                element: divRef,
                data
            });

            return () => {
                if (tinyflowInstance) {
                    tinyflowInstance.destroy();
                    tinyflowInstance = null;
                }
            };
        }
    });
    const defaultStyle = { height: '600px' };
    const combinedStyle = { ...defaultStyle, ...style as Record<string, string> };

    function styleObjectToString(styleObj: Record<string, string>): string {
        return Object.entries(styleObj)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');
    }

    const combinedStyleString = typeof style === 'string' ? style : styleObjectToString(combinedStyle);
</script>

<div
    bind:this={divRef}
    style={combinedStyleString }
    class={className}
    {...rest}
></div>
