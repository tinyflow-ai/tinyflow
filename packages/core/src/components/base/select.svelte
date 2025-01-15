<script lang="ts">
    import type { Snippet } from 'svelte';
    import { FloatingTrigger, Render } from './index';

    interface Item {
        value: number | string;
        label: string | Snippet;
        expand?: boolean;
        children?: Item[];
    }

    let { items, onChange, value, expandAll = true, multiple = false, ...rest }: {
        items: Item[],
        onChange?: (item: Item) => void,
        value?: number | string | (number | string)[],
        expandAll?: boolean,
        multiple?: boolean,
        [key: string]: any
    } = $props();


    const initExpand = (items: Item[]) => {
        items.forEach((item) => {
            if (typeof item.expand === 'undefined') {
                item.expand = expandAll;
            }
            if (item.children && item.children.length > 0) {
                initExpand(item.children);
            }
        });
        return items;
    };

    let itemsState = $state(initExpand(items));

    let activeValue = $state(!value ? [] : Array.isArray(value) ? value : [value]);

    $effect(() => {
        itemsState = [...initExpand(items)];
        activeValue = [...!value ? [] : Array.isArray(value) ? value : [value]];
    });

    let activeItemsState = $derived.by(() => {
        const resultItems: Item[] = [];
        const fillResult = (items: Item[]) => {
            for (let item of items) {
                if (activeValue.includes(item.value)) {
                    resultItems.push(item);
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

    function handlerOnChange(item: Item) {
        if (item.children && item.children.length > 0) {
            item.expand = !item.expand;
            return;
        }

        // 多选模式
        if (multiple) {
            if (activeValue.includes(item.value)) {
                activeValue.splice(activeValue.indexOf(item.value), 1);
            } else {
                activeValue.push(item.value);
            }
        }
        // 单选模式
        else {
            activeValue.splice(0, activeValue.length);
            activeValue.push(item.value);
        }

        triggerObject?.hide();
        onChange?.(item);
    }
</script>


{#snippet selectItems(items: Item[])}
    {#each items as item, index (item.value)}
        <button class="tf-select-content-item"
                onclick={() => handlerOnChange(item)}
        >
            <span>
            {#if item.children}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path
                    d="M12 14L8 10H16L12 14Z"></path></svg>
            {/if}
            </span>
            <Render target={item.label} />
        </button>
        {#if (item.children && item.children.length > 0 && item.expand)}
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
                {#each activeItemsState as item,index (item.value)}
                    <Render target={item.label} />
                    {#if index < activeItemsState.length - 1}
                        ,
                    {/if}
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
            <div class="tf-select-content nopan nodrag">
                {@render selectItems(itemsState)}
            </div>
        {/snippet}
    </FloatingTrigger>
</div>
