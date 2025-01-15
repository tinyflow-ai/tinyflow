<script lang="ts">
    import { onMount, type Snippet } from 'svelte';
    import { createFloating } from '../utils/createFloating';
    import type { Placement } from '@floating-ui/dom';

    const { children, floating, placement = 'bottom' }:
        {
            children: Snippet,
            floating: Snippet,
            placement?: Placement,
        } = $props();

    let triggerEl!: HTMLDivElement, contentEl!: HTMLDivElement;
    let floatingInstance: ReturnType<typeof createFloating>;

    onMount(() => {
        floatingInstance = createFloating({
            trigger: triggerEl,
            floatContent: contentEl,
            interactive: true,
            placement
        });
        return () => {
            floatingInstance.destroy();
        };
    });

    export function hide() {
        floatingInstance.hide();
    }
</script>
<div style="position: relative">
    <div bind:this={triggerEl}>
        {@render children() }
    </div>
    <div style="display: none; width: 100%;z-index: 9999" bind:this={contentEl}>
        {@render floating() }
    </div>
</div>

