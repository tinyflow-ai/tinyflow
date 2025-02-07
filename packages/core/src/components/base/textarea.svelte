<script lang="ts">
    import { type HTMLTextareaAttributes } from 'svelte/elements';

    const { ...rest }: HTMLTextareaAttributes = $props();
</script>
<textarea {...rest} class="tf-textarea nodrag {rest.class}"
></textarea>
