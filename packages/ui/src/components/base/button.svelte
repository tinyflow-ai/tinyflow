<script lang="ts">

    import type { MyHTMLButtonAttributes } from './types';
    import type { Snippet } from 'svelte';

    const { children, ...rest }: MyHTMLButtonAttributes & {
        children?: Snippet;
    } = $props();
</script>
<button type="button" {...rest} class="tf-btn nopan nodrag {rest.class}">
    {@render children?.()}
</button>
