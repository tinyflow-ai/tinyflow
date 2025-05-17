<script lang="ts">

    import type { MyHTMLButtonAttributes } from './types';
    import type { Snippet } from 'svelte';

    const { children, primary, ...rest }: MyHTMLButtonAttributes & {
        children?: Snippet;
        primary?: boolean;
    } = $props();
</script>
<button type="button" {...rest} class="tf-btn {primary?'tf-btn-primary':''} nopan nodrag {rest.class}">
    {@render children?.()}
</button>
