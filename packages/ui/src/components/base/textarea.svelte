<script lang="ts">
    import type { MyHTMLTextareaAttributes } from './types';
    const { value, ...rest }: MyHTMLTextareaAttributes & {
        value?: any;
    } = $props();

</script>
<textarea {...rest} class="tf-textarea nodrag {rest.class}">{value||""}</textarea>
