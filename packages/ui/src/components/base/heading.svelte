<script lang="ts">
    import type { Snippet } from 'svelte';

    const { children, level = 1, mt, mb }: {
        children: Snippet;
        level: 1 | 2 | 3 | 4 | 5 | 6;
        mt?: string;
        mb?: string;
    } = $props();

</script>

<svelte:element this={`h${level}`} class="tf-heading" style="margin-top:{mt || '0'};margin-bottom:{mb||'0'}">
    {@render children?.()}
</svelte:element>
