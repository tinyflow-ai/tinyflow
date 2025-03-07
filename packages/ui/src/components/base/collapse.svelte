<script lang="ts">
    import type { Snippet } from 'svelte';
    import { Render } from './index';

    interface Item {
        key: string;
        icon?: string | Snippet;
        title: string | Snippet;
        description?: string | Snippet;
        content: string | Snippet;
    }

    let { items, onChange, activeKeys = $bindable([]), ...rest }: {
        items: Item[],
        onChange?: (item: Item, activeKeys: string[]) => void,
        activeKeys?: string[],
        [key: string]: any
    } = $props();

    function handlerOnChange(item: Item) {
        if (activeKeys.includes(item.key)) {
            activeKeys = activeKeys.filter(key => key !== item.key);
        } else {
            activeKeys.push(item.key);
            activeKeys = activeKeys;
        }
        onChange?.(item, activeKeys);
    }

</script>
<div style={rest.style} class="tf-collapse {rest.class}">
    {#each items as item, index}
        <div class="tf-collapse-item">
            <div class="tf-collapse-item-title" role="button" tabindex={index}
                 onclick={() => handlerOnChange(item)}
                 onkeydown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handlerOnChange(item);
                    }
             }}
            >
                {#if item.icon}
                <span class="tf-collapse-item-title-icon">
                    <Render target={item.icon} />
                </span>
                {/if}

                <Render target={item.title} />

                <span class="tf-collapse-item-title-arrow {activeKeys.includes(item.key) ? 'rotate-90' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path
                        d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                </span>
            </div>
            {#if item.description}
                <div class="tf-collapse-item-description">
                    <Render target={item.description} />
                </div>
            {/if}

            {#if activeKeys.includes(item.key)}
                <div class="tf-collapse-item-content">
                    <Render target={item.content} />
                </div>
            {/if}
        </div>
    {/each}
</div>


<style>
    /* 定义旋转的 CSS 类 */
    .rotate-90 {
        transform: rotate(90deg);
        transition: transform 0.3s ease;
    }
</style>
