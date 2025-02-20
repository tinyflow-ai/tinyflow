<script lang="ts">
    import { type HTMLInputAttributes } from 'svelte/elements';

    const { ...rest }: HTMLInputAttributes = $props();
</script>
<input type="text" {...rest} class="tf-input  nopan nodrag {rest.class}" />
