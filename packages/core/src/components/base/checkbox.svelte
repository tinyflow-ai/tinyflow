<script lang="ts">
    import { type HTMLInputAttributes } from 'svelte/elements';

    const { ...rest }: HTMLInputAttributes = $props();
</script>
<input type="checkbox" {...rest} class="tf-checkbox nopan nodrag {rest.class}" />
