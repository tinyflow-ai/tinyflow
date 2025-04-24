<script lang="ts">
    import type { MyHTMLTextareaAttributes } from './types';

    const { value, ...rest }: MyHTMLTextareaAttributes & {
        value?: any;
    } = $props();

</script>
<textarea spellcheck="false" {...rest} class="tf-textarea nodrag nowheel {rest.class}">{value || ""}</textarea>
