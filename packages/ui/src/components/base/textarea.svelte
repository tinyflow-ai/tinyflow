<script lang="ts">
    import type { MyHTMLTextareaAttributes } from './types';

    const { ...rest }: MyHTMLTextareaAttributes = $props();
</script>
<textarea {...rest} class="tf-textarea nodrag {rest.class}"
></textarea>
