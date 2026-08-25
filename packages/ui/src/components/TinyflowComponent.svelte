<svelte:options
    customElement={{
        tag: 'tinyflow-component',
        shadow: 'none'
        // props: {
        // 		options: { reflect: true, type: 'Object', attribute: 'options' },
        // 		onInit: { reflect: true, type: 'Object', attribute: 'onInit' }
        // 	},
    }}
/>

<script lang="ts">
    import { SvelteFlowProvider, type useSvelteFlow } from '@xyflow/svelte';
    import TinyflowCore from './TinyflowCore.svelte';
    import { createStore, provideStore } from '#store/stores.svelte';
    import type { TinyflowData, TinyflowOptions } from '#types';
    import { setContext } from 'svelte';

    const {
        options,
        onInit
    }: {
        options: TinyflowOptions;
        onInit: (svelteFlow: ReturnType<typeof useSvelteFlow>) => void;
    } = $props();

    let { data } = options;

    if (typeof data === 'string') {
        try {
            data = JSON.parse(data.trim());
        } catch {
            console.error('Invalid JSON data:', data);
        }
    }
    const workflowData = data as TinyflowData;
    const store = provideStore(createStore());
    store.init(workflowData?.nodes || [], workflowData?.edges || [], workflowData?.viewport);
    setContext('tinyflow_options', options);
</script>

<SvelteFlowProvider>
    <TinyflowCore {onInit} />
</SvelteFlowProvider>
