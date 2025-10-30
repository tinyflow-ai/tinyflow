<script lang="ts">
    import type { MyHTMLTextareaAttributes } from './types';

    const { value, height, autoHeight = true, maxHeight, onHeightChange, ...rest }: MyHTMLTextareaAttributes & {
        value?: any;
        height?: string | number;
        autoHeight?: boolean;
        rows?: number;
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
                const defaultRows = rest.rows || 1;
                const computedStyle = getComputedStyle(textareaEl);
                const lineHeight = parseFloat(computedStyle.fontSize) * 1.2;
                defaultHeight = (lineHeight * defaultRows + parseFloat(computedStyle.paddingTop)
                    + parseFloat(computedStyle.paddingBottom)) + parseFloat(computedStyle.borderTopWidth);
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
    {...rest}
    oninput={(e)=>{
        adjustHeight();
        rest.oninput?.(e);
    }}
    onchange={(e)=>{
        adjustHeight();
        rest.onchange?.(e);
    }}
    class="tf-textarea nodrag nowheel {rest.class}"
>{value || ""}</textarea>
