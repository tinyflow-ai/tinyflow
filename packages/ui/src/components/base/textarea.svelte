<script lang="ts">
    import { cn, type WithElementRef, type WithoutChildren } from '../utils/cn';
    import type { HTMLTextareaAttributes } from 'svelte/elements';
    let {
        ref = $bindable(null),
        value = $bindable(),
        class: className,
        'data-slot': dataSlot = 'textarea',
        height,
        autoHeight = true,
        maxHeight,
        onHeightChange,
        ...restProps
    }: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> & {
        height?: string | number;
        autoHeight?: boolean;
        maxHeight?: string | number;
        onHeightChange?: (height: string) => void;
    } = $props();

    let textareaEl: HTMLTextAreaElement;
    let defaultHeight: number;

    // 统一的高度调整函数
    function adjustHeight() {
        if (textareaEl && autoHeight) {
            // 如果外部指定了固定高度，则使用指定高度
            if (height !== undefined) {
                const fixedHeight = typeof height === 'number' ? `${height}px` : height;
                textareaEl.style.height = fixedHeight;
                textareaEl.style.overflowY = 'hidden';
                onHeightChange?.(fixedHeight);
                return;
            }

            textareaEl.style.height = 'auto';
            textareaEl.style.overflowY = 'hidden';

            let newHeight = textareaEl.scrollHeight;

            // defaultHeight 只计算一次
            if (!defaultHeight) {
                const defaultRows = restProps.rows || 1;
                const computedStyle = getComputedStyle(textareaEl);
                const lineHeight = parseFloat(computedStyle.fontSize) * 1.2;
                defaultHeight =
                    lineHeight * defaultRows +
                    parseFloat(computedStyle.paddingTop) +
                    parseFloat(computedStyle.paddingBottom) +
                    parseFloat(computedStyle.borderTopWidth);
            }

            if (newHeight < defaultHeight) {
                newHeight = defaultHeight;
            }

            // 应用最大高度限制
            if (maxHeight) {
                const max_height = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
                if (newHeight > parseInt(max_height)) {
                    textareaEl.style.height = max_height;
                    textareaEl.style.overflowY = 'auto';
                } else {
                    textareaEl.style.height = `${newHeight}px`;
                }
            } else {
                textareaEl.style.height = `${newHeight}px`;
            }
            onHeightChange?.(textareaEl.style.height);
        }
    }

    $effect(() => {
        adjustHeight();
    });
</script>

<textarea
    bind:this={textareaEl}
    spellcheck="false"
    {...restProps}
    data-slot={dataSlot}
    oninput={(e) => {
        adjustHeight();
        restProps.oninput?.(e);
    }}
    onchange={(e) => {
        adjustHeight();
        restProps.onchange?.(e);
    }}
    class={cn('nodrag nowheel tf-textarea', className)}
    bind:value
></textarea>
