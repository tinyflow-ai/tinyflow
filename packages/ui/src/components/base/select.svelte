<script lang="ts">
    import { Select as SelectPrimitive } from 'bits-ui';
    import { cn, type WithoutChildren } from '../utils/cn';
    import { Render } from './index';
    import type { SelectItem } from '#types';
    import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
    import { getOptions } from '../utils/NodeUtils';

    let {
        items,
        onSelect,
        value = [],
        defaultValue = [],
        expandAll = true,
        multiple = false,
        expandValue = [],
        placeholder,
        disabled = false,
        class: className,
        ...restProps
    }: WithoutChildren<{
        items: SelectItem[];
        onSelect?: (item: SelectItem) => void;
        value?: any[];
        defaultValue?: any[];
        expandAll?: boolean;
        expandValue?: any[];
        multiple?: boolean;
        placeholder?: string;
        disabled?: boolean;
        class?: string;
        [key: string]: any;
    }> = $props();

    let theme = getOptions().defaultTheme;

    // 扁平化所有选项用于查找
    let flatItems = $derived.by(() => {
        const result: SelectItem[] = [];
        const flatten = (items: SelectItem[]) => {
            for (const item of items) {
                result.push(item);
                if (item.children?.length) {
                    flatten(item.children);
                }
            }
        };
        flatten(items);
        return result;
    });

    // 获取当前选中的项
    let selectedItems = $derived.by(() => {
        const result: SelectItem[] = [];
        const valuesToCheck = value.length > 0 ? value : defaultValue;
        for (const val of valuesToCheck) {
            if (val === undefined || val === null) continue;
            const item = flatItems.find((i) => i.value === val);
            if (item) result.push(item);
        }
        return result;
    });

    // 单选时的当前值（转换为 string 以兼容 bits-ui）
    let singleValue = $derived(
        !multiple && selectedItems.length > 0 ? String(selectedItems[0].value) : ''
    );

    // 多选时的当前值（转换为 string 数组以兼容 bits-ui）
    let multipleValue = $derived(multiple ? selectedItems.map((item) => String(item.value)) : []);

    // 处理选择事件
    function handleSelect(event: MouseEvent, item: SelectItem) {
        event.stopPropagation();
        onSelect?.(item);
    }

    // 递归渲染树形选项，返回带层级的项
    function renderTreeItems(
        items: SelectItem[],
        level = 0
    ): { item: SelectItem; level: number }[] {
        const result: { item: SelectItem; level: number }[] = [];
        if (items) {
            for (const item of items) {
                result.push({ item, level });
                const shouldExpand = expandAll || expandValue.includes(item.value);
                if (item.children?.length && shouldExpand) {
                    result.push(...renderTreeItems(item.children, level + 1));
                }
            }
        }
        return result;
    }

    // 获取显示的选项列表
    let displayItems = $derived(renderTreeItems(items));

    // 将 SelectItem 转换为 bits-ui 需要的格式
    function toSelectOption(item: SelectItem) {
        return {
            value: String(item.value),
            label: typeof item.label === 'string' ? item.label : String(item.value),
            disabled: false
        };
    }
</script>

{#if multiple}
    <!-- 多选模式 -->
    <SelectPrimitive.Root type="multiple" value={multipleValue} {disabled} {...restProps}>
        <SelectPrimitive.Trigger
            class={cn('nopan nodrag tf-select', disabled && 'tf-select-disabled', className)}
            {disabled}
        >
            <span class="tf-select-heading">
                {#if selectedItems.length > 0}
                    {#each selectedItems as item, index (item.value)}
                        <Render target={item.label} />
                        {#if index < selectedItems.length - 1}
                            <span class="tf-select-heading-item">,</span>
                        {/if}
                    {/each}
                {:else}
                    <span class="tf-select-heading-span">{placeholder ?? ''}</span>
                {/if}
            </span>
            <ChevronDownIcon class="tf-select-heading-icon" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                class={cn(
                    'nopan nodrag nowheel tf-root tf-select-content',
                    theme === 'dark' && 'dark'
                )}
            >
                <SelectPrimitive.Viewport style="padding: 4px;">
                    {#if displayItems.length === 0}
                        <div class="tf-select-empty">暂无数据</div>
                    {:else}
                        {#each displayItems as { item, level }, index (`${index}_${item.value}`)}
                            {@const hasChildren = item.children && item.children.length > 0}
                            {@const option = toSelectOption(item)}
                            <SelectPrimitive.Item
                                value={option.value}
                                label={option.label}
                                class="tf-select-option"
                                style="padding-left: {level * 12}px"
                                onclick={(e: MouseEvent) => handleSelect(e, item)}
                            >
                                {#snippet children({ selected })}
                                    <span class="tf-select-option-content">
                                        {#if hasChildren}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                style="width: 16px;height: 16px;"
                                            >
                                                <path d="M12 14L8 10H16L12 14Z"></path>
                                            </svg>
                                        {:else}
                                            <span style="width: 16px;height: 16px;"></span>
                                        {/if}
                                        <Render target={item.label} />
                                    </span>
                                    {#if selected}
                                        <span class="tf-select-option-selected">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                style="width: 16px;height: 16px;"
                                            >
                                                <path
                                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                                ></path>
                                            </svg>
                                        </span>
                                    {/if}
                                {/snippet}
                            </SelectPrimitive.Item>
                        {/each}
                    {/if}
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
{:else}
    <!-- 单选模式 -->
    <SelectPrimitive.Root type="single" value={singleValue} {disabled} {...restProps}>
        <SelectPrimitive.Trigger
            class={cn('nopan nodrag tf-select', disabled && ' tf-select-disabled', className)}
            {disabled}
        >
            <span class="tf-select-heading">
                {#if selectedItems.length > 0}
                    <Render target={selectedItems[0].label} />
                {:else}
                    <span class="tf-select-heading-span">{placeholder ?? ''}</span>
                {/if}
            </span>
            <ChevronDownIcon class="tf-select-icon" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                class={cn(
                    'nopan nodrag nowheel tf-root tf-select-content',
                    theme === 'dark' && 'dark'
                )}
            >
                <SelectPrimitive.Viewport style="padding: 4px;">
                    {#if displayItems.length === 0}
                        <div class="tf-select-empty">暂无数据</div>
                    {:else}
                        {#each displayItems as { item, level }, index (`${index}_${item.value}`)}
                            {@const hasChildren = item.children && item.children.length > 0}
                            {@const option = toSelectOption(item)}
                            <SelectPrimitive.Item
                                value={option.value}
                                label={option.label}
                                class="tf-select-option"
                                style="padding-left: {level * 12}px"
                                onclick={(e: MouseEvent) => handleSelect(e, item)}
                            >
                                {#snippet children({ selected })}
                                    <span class="tf-select-option-content">
                                        {#if hasChildren}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                style="width: 16px;height: 16px;"
                                            >
                                                <path d="M12 14L8 10H16L12 14Z"></path>
                                            </svg>
                                        {:else}
                                            <span style="width: 16px;height: 16px;"></span>
                                        {/if}
                                        <Render target={item.label} />
                                    </span>
                                    {#if selected}
                                        <span class="tf-select-option-selected">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                style="width: 16px;height: 16px;"
                                            >
                                                <path
                                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                                ></path>
                                            </svg>
                                        </span>
                                    {/if}
                                {/snippet}
                            </SelectPrimitive.Item>
                        {/each}
                    {/if}
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
{/if}
