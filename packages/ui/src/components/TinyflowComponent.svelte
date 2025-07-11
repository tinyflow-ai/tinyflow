<svelte:options customElement={{
  tag: "tinyflow-component",
  shadow: "none",
  // props: {
	// 		options: { reflect: true, type: 'Object', attribute: 'options' },
	// 		onInit: { reflect: true, type: 'Object', attribute: 'onInit' }
	// 	},
}} />

<script lang="ts">
    import { SvelteFlowProvider, type useSvelteFlow } from '@xyflow/svelte';
    import TinyflowCore from './TinyflowCore.svelte';
    import { store } from '#store/stores.svelte';
    import type { TinyflowData, TinyflowOptions } from '#types';
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


<SvelteFlowProvider>
    <TinyflowCore {onInit} />
</SvelteFlowProvider>
