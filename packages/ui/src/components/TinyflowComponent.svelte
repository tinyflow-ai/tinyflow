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

    // Web Component 是框架无关入口。这里只做一次输入归一化，具体交互全部交给
    // TinyflowCore；结构配置变化由外层 Tinyflow 类通过受控重建处理。
    let { data } = options;

    if (typeof data === 'string') {
        try {
            data = JSON.parse(data.trim());
        } catch {
            console.error('Invalid JSON data:', data);
        }
    }
    const workflowData = data as TinyflowData;
    // 每个自定义元素创建独立 store，避免同一页面多个编辑器共享节点或 viewport。
    const store = provideStore(createStore());
    store.init(workflowData?.nodes || [], workflowData?.edges || [], workflowData?.viewport);
    // options 对象由 Tinyflow 原位更新，因此子组件读取到的回调始终是最新版本。
    setContext('tinyflow_options', options);
</script>

<SvelteFlowProvider>
    <TinyflowCore {onInit} />
</SvelteFlowProvider>
