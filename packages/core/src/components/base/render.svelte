<script lang="ts">
    let { target } = $props();
</script>


{#if typeof target === 'function'}
    {@render target?.()}
{:else }
    {@html target}
{/if}

