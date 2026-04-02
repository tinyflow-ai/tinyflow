<script lang="ts">
    import { Select as SelectPrimitive } from 'bits-ui';
    import { cn, type WithoutChildren } from '../utils/cn';
    import { Render } from './index';
    import type { SelectItem } from '#types';
    import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';

    let {
        items,
        onSelect,
        value = [],
        defaultValue = [],
        expandAll = true,
        multiple = false,
        expandValue = [],
        placeholder,
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
        class?: string;
        [key: string]: any;
    }> = $props();

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

    // 递归渲染树形选项
    function renderTreeItems(items: SelectItem[], level = 0): SelectItem[] {
        const result: SelectItem[] = [];
        for (const item of items) {
            result.push(item);
            const shouldExpand = expandAll || expandValue.includes(item.value);
            if (item.children?.length && shouldExpand) {
                result.push(...renderTreeItems(item.children, level + 1));
            }
        }
        return result;
    }

    // 获取显示的选项列表
    let displayItems = $derived(renderTreeItems(items));

    // 判断是否为子项（用于缩进显示）
    function isChildItem(item: SelectItem): boolean {
        const isDirectChild = items.findIndex((i) => i.value === item.value) === -1;
        return isDirectChild;
    }

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
    <SelectPrimitive.Root type="multiple" value={multipleValue} {...restProps}>
        <SelectPrimitive.Trigger
            class={cn(
                'nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm',
                className
            )}
        >
            <span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left">
                {#if selectedItems.length > 0}
                    {#each selectedItems as item, index (item.value)}
                        <Render target={item.label} />
                        {#if index < selectedItems.length - 1}
                            <span class="mx-1">,</span>
                        {/if}
                    {/each}
                {:else}
                    <span class="text-muted-foreground">{placeholder ?? ''}</span>
                {/if}
            </span>
            <ChevronDownIcon class="size-4 opacity-50" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                class="nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md"
            >
                <SelectPrimitive.Viewport class="p-1">
                    {#each displayItems as item (item.value)}
                        {@const hasChildren = item.children && item.children.length > 0}
                        {@const option = toSelectOption(item)}
                        <SelectPrimitive.Item
                            value={option.value}
                            label={option.label}
                            class={cn(
                                'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
                                isChildItem(item) && 'pl-6'
                            )}
                            onclick={(e: MouseEvent) => handleSelect(e, item)}
                        >
                            {#snippet children({ selected })}
                                <span class="flex items-center gap-2">
                                    {#if hasChildren}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="size-4"
                                        >
                                            <path d="M12 14L8 10H16L12 14Z"></path>
                                        </svg>
                                    {/if}
                                    <Render target={item.label} />
                                </span>
                                {#if selected}
                                    <span
                                        class="absolute right-2 flex size-3.5 items-center justify-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="size-4"
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
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
{:else}
    <!-- 单选模式 -->
    <SelectPrimitive.Root type="single" value={singleValue} {...restProps}>
        <SelectPrimitive.Trigger
            class={cn(
                'nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm',
                className
            )}
        >
            <span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left">
                {#if selectedItems.length > 0}
                    <Render target={selectedItems[0].label} />
                {:else}
                    <span class="text-muted-foreground">{placeholder ?? ''}</span>
                {/if}
            </span>
            <ChevronDownIcon class="size-4 opacity-50" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                class="nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md"
            >
                <SelectPrimitive.Viewport class="p-1">
                    {#each displayItems as item (item.value)}
                        {@const hasChildren = item.children && item.children.length > 0}
                        {@const option = toSelectOption(item)}
                        <SelectPrimitive.Item
                            value={option.value}
                            label={option.label}
                            class={cn(
                                'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
                                isChildItem(item) && 'pl-6'
                            )}
                            onclick={(e: MouseEvent) => handleSelect(e, item)}
                        >
                            {#snippet children({ selected })}
                                <span class="flex items-center gap-2">
                                    {#if hasChildren}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="size-4"
                                        >
                                            <path d="M12 14L8 10H16L12 14Z"></path>
                                        </svg>
                                    {/if}
                                    <Render target={item.label} />
                                </span>
                                {#if selected}
                                    <span
                                        class="absolute right-2 flex size-3.5 items-center justify-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="size-4"
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
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
{/if}
