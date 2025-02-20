<script lang="ts">

    import type { HTMLButtonAttributes } from 'svelte/elements';

    const { ...rest }: HTMLButtonAttributes = $props();
</script>
<button type="button" {...rest} class="tf-btn nopan nodrag {rest.class}">
    <slot></slot>
</button>
