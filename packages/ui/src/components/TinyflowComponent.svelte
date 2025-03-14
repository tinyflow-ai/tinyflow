<svelte:options customElement={{
  tag: "tinyflow-component",
  shadow: "none"
}} />

<script lang="ts">
    import { SvelteFlowProvider, type useSvelteFlow } from '@xyflow/svelte';
    import TinyflowCore from './TinyflowCore.svelte';
    import { store } from '../store/stores.js';
    import type { TinyflowOptions } from '../Tinyflow';
    import { setContext } from 'svelte';

    const { options, onInit }: {
        options: TinyflowOptions,
        onInit: (svelteFlow: ReturnType<typeof useSvelteFlow>) => void,
    } = $props();
    const { data } = options;
    store.init(data?.nodes || [], data?.edges || []);

    setContext('tinyflow_options', options);
</script>


<SvelteFlowProvider fitView>
    <TinyflowCore {onInit} />
</SvelteFlowProvider>
