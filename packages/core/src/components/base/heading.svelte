<script lang="ts">
    import type { Snippet } from 'svelte';

    const { children, level = 1 }: {
        children: Snippet;
        level: 1 | 2 | 3 | 4 | 5 | 6;
    } = $props();
</script>

<svelte:element this={`h${level}`} class="tf-heading">
    {@render children?.()}
</svelte:element>
