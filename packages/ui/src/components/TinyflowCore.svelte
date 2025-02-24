<script lang="ts">
    import {
        SvelteFlow,
        Background,
        Controls,
        MiniMap,
        useSvelteFlow,
        type Node, MarkerType
    } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    import '../styles/index.ts';
    import { store } from '../store/stores';
    import { nodeTypes } from './nodes';
    import Toolbar from './Toolbar.svelte';
    import { genShortId } from './utils/IdGen';

    const { onInit } = $props();
    const svelteFlow = useSvelteFlow();

    onInit(svelteFlow);


    const onDragOver = (event: DragEvent) => {
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }
    };

    const onDrop = (event: DragEvent) => {
        event.preventDefault();

        const position = svelteFlow.screenToFlowPosition({
            x: event.clientX - 250,
            y: event.clientY - 100
        });

        const baseNodeJsonString = event.dataTransfer?.getData('application/tinyflow');
        const baseNode = baseNodeJsonString ? JSON.parse(baseNodeJsonString) : {};
        const newNode = {
            id: `node_${genShortId()}`,
            position,
            data: {},
            ...baseNode
        } satisfies Node;

        store.addNode(newNode);
        store.selectNodeOnly(newNode.id);
    };


    // function onNodeDragStart(event: CustomEvent) {
    //     console.log('onNodeDragStart: ', event);
    // }
    //
    // const onconnect = (event: any) => {
    //     // console.log('onconnect: ', event);
    // };
    //
    // const onconnectend = (event: any, node: any) => {
    //     // console.log('onconnectend: ', event, node);
    // };
    //
    // const onconnectstart = (event: any, node: any) => {
    //     console.log('onconnectstart: ', event, node);
    // };

</script>


<div style="position: relative; height: 100%; width: 100%">
    <Toolbar />
    <SvelteFlow {nodeTypes} {...store}
                class="tinyflow-logo"
                on:drop={onDrop}
                on:dragover={onDragOver}
                defaultEdgeOptions={{
                    // animated: true,
                    // label: 'edge label',
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        // color: 'red',
                        width: 20,
                        height: 20
                    }
                }}
    >
        <Background />
        <Controls />
        <MiniMap />
    </SvelteFlow>
</div>
