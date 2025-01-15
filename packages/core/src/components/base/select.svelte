<script lang="ts">
    import type { Snippet } from 'svelte';
    import { FloatingTrigger, Render } from './index';

    interface Item {
        value: number | string;
        label: string | Snippet;
    }

    export let items: Item[] = [];

    export let onChange: ((item: Item, index: number) => void) = () => {
    };

    export let activeIndex: number = 0;

    let triggerObject: any;

    function handlerOnChange(item: Item, index: number) {
        activeIndex = index;
        onChange?.(item, index);
        triggerObject?.hide();
    }
</script>

<div {...$$restProps} class="tf-select {$$restProps.class}">
    <FloatingTrigger bind:this={triggerObject}>
        <button class="tf-select-input nopan nodrag" {...$$restProps}>
            <div class="tf-select-input-value">
                <Render target={items[activeIndex]?.label} />
            </div>
            <div class="tf-select-input-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
            </div>
        </button>

        {#snippet floating()}
            <div class="tf-select-content nopan nodrag">
                {#each items as item, index}
                    <button class="tf-select-content-item"
                            onclick={() => handlerOnChange(item,index)}
                    >
                        <Render target={item.label} />
                    </button>
                {/each}
            </div>
        {/snippet}
    </FloatingTrigger>
</div>
