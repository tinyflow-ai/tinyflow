<svelte:options customElement={{
  tag: "tinyflow-component",
  shadow: "none"
}} />

<script lang="ts">
    import { SvelteFlowProvider, type useSvelteFlow } from '@xyflow/svelte';
    import TinyflowCore from './TinyflowCore.svelte';
    import { store } from '../store/stores.js';
    import type { TinyflowData, TinyflowOptions } from '../Tinyflow';
    import { setContext } from 'svelte';

    const { options, onInit }: {
        options: TinyflowOptions,
        onInit: (svelteFlow: ReturnType<typeof useSvelteFlow>) => void,
    } = $props();
    let { data } = options;
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data.trim());
        } catch (e) {
            console.error('Invalid JSON data:', data);
        }
    }
    store.init((data as TinyflowData)?.nodes || [], (data as TinyflowData)?.edges || []);
    setContext('tinyflow_options', options);
</script>


<SvelteFlowProvider fitView>
    <TinyflowCore {onInit} />
</SvelteFlowProvider>
