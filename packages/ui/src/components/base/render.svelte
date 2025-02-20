<script lang="ts">
    let { target } = $props();
    if (typeof target === 'undefined') target = "undefined";
</script>


{#if typeof target === 'function'}
    {@render target?.()}
{:else }
    {@html target}
{/if}

