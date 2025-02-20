<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Item {
        value: number | string;
        label: string | Snippet;
    }

    export let items: Item[] = [];

    export let onChange: ((item: Item, index: number) => void) = () => {
    };

    export let activeIndex: number = 0;

    function handlerOnChange(item: Item, index: number) {
        activeIndex = index;
        onChange?.(item, index);
    }

</script>
<div {...$$restProps} class="tf-tabs {$$restProps.class}">
    {#each items as item, index}
        <div class="tf-tabs-item {index === activeIndex ? 'active' : ''}" role="button" tabindex={index}
             onclick={() => handlerOnChange(item,index)}
             onkeydown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handlerOnChange(item,index);
                    }
             }}
        >
            {#if typeof item.label === 'string'}
                {item.label}
            {:else }
                {@render item.label?.()}
            {/if}
        </div>
    {/each}
</div>
