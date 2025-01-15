<svelte:options customElement={{
  tag: "tinyflow-component",
  shadow: "none"
}} />

<script lang="ts">
    import { SvelteFlowProvider } from '@xyflow/svelte';
    import TinyflowCore from './TinyflowCore.svelte';
    import { store } from '../store/stores.js';
    const { data, onInit } = $props();
    store.init(data.nodes, data.edges);
</script>



<SvelteFlowProvider fitView>
    <TinyflowCore {onInit} />
</SvelteFlowProvider>
