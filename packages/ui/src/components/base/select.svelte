<script lang="ts">
    import { FloatingTrigger, Render } from './index';
    import type { SelectItem } from '#types';

    let {
        items,
        onSelect,
        value = [],
        defaultValue = [],
        expandAll = true,
        multiple = false,
        expandValue = [],
        placeholder,
        ...rest
    }: {
        items: SelectItem[],
        onSelect?: (item: SelectItem) => void,
        value?: (any)[],
        defaultValue?: (number | string | undefined)[],
        expandAll?: boolean,
        expandValue?: (number | string)[],
        multiple?: boolean
        placeholder?: string
        [key: string]: any
    } = $props();


    let activeItemsState = $derived.by(() => {
        const resultItems: SelectItem[] = [];
        const fillResult = (items: SelectItem[]) => {
            for (let item of items) {
                if (value.length > 0) {
                    if (value.includes(item.value)) {
                        resultItems.push(item);
                    }
                } else {
                    if (defaultValue.includes(item.value)) {
                        resultItems.push(item);
                    }
                }

                if (item.children && item.children.length > 0) {
                    fillResult(item.children);
                }
            }
        };
        fillResult(items);
        return resultItems;
    });

    let triggerObject: any;
    function handlerOnSelect(item: SelectItem) {
        triggerObject?.hide();
        onSelect?.(item);
    }
</script>


{#snippet selectItems(items: SelectItem[])}
    {#each items as item, index (`${index}_${item.value}`)}
        <button class="tf-select-content-item"
                onclick={() => handlerOnSelect(item)}
        >
            <span>
            {#if item.children && item.children.length > 0}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path
                    d="M12 14L8 10H16L12 14Z"></path></svg>
            {/if}
            </span>
            <Render target={item.label} />
        </button>
        {#if (item.children && item.children.length > 0 && (expandAll || expandValue.includes(item.value)))}
            <div class="tf-select-content-children">
                {@render selectItems(item.children)}
            </div>
        {/if}
    {/each}

{/snippet}


<div {...rest} class="tf-select {rest['class']}">
    <FloatingTrigger bind:this={triggerObject}>
        <button class="tf-select-input nopan nodrag" {...rest}>
            <div class="tf-select-input-value">
                {#each activeItemsState as item, index (`${index}_${item.value}`)}
                    {#if !multiple}
                        {#if index === 0}
                            <Render target={item.label} />
                        {/if}
                    {:else}
                        <Render target={item.label} />
                        {#if index < activeItemsState.length - 1}
                            ,
                        {/if}
                    {/if}
                {:else}
                    <div class="tf-select-input-placeholder">
                        {placeholder}
                    </div>
                {/each}
            </div>
            <div class="tf-select-input-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
            </div>
        </button>

        {#snippet floating()}
            <div class="tf-select-content nopan nodrag nowheel ">
                {@render selectItems(items)}
            </div>
        {/snippet}
    </FloatingTrigger>
</div>
