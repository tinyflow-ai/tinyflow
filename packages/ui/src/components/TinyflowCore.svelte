<script lang="ts">
    import {
        SvelteFlow,
        Background,
        Controls,
        MiniMap,
        useSvelteFlow,
        type Node, MarkerType, type Handle
    } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    import '../styles/index.ts';
    import { store } from '../store/stores';
    import { nodeTypes } from './nodes';
    import Toolbar from './Toolbar.svelte';
    import { genShortId } from './utils/IdGen';
    import { useGetNode } from './utils/useGetNode';
    import { useEnsureParentInNodesBefore } from './utils/useEnsureParentInNodesBefore';

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


    const { getNode } = useGetNode();

    const isValidConnection = (conn: any) => {

        const sourceNode = getNode(conn.source)!;
        const targetNode = getNode(conn.target)!;


        // 阻止循环节点连接到父级节点 或者 父级节点连接到子级节点
        if (conn.sourceHandle === 'loop_handle' || sourceNode.parentId) {
            const edges = svelteFlow.getEdges();
            for (let edge of edges) {
                if (edge.target === conn.target) {
                    return false;
                }
            }
        }

        if (!sourceNode.parentId && targetNode.parentId && targetNode.parentId !== sourceNode.id) {
            return false;
        }

        // 运行执行
        return true;
    };


    const { ensureParentInNodesBefore } = useEnsureParentInNodesBefore();
    const onconnectend = (_: any, state: any) => {

        if (!state.isValid) {
            return;
        }

        const fromNode = state.fromNode as Node;
        const fromHande = state.fromHandle as Handle;
        const toNode = state.toNode as Node;

        const newNode = {
            position: { ...toNode.position }
        } as Node;

        if (fromHande.id === 'loop_handle') {
            newNode.parentId = fromNode.id;
        } else if (fromNode.parentId) {
            newNode.parentId = fromNode.parentId;
        }

        if (newNode.parentId) {
            newNode.position = {
                x: toNode.position.x - fromNode.position.x,
                y: toNode.position.y - fromNode.position.y
            };

            ensureParentInNodesBefore(fromNode.id, toNode.id);
            svelteFlow.updateNode(toNode.id, newNode);
        }
    };

    const onconnectstart = (event: any, node: any) => {
        console.log('onconnectstart: ', event, node);
    };

</script>


<div style="position: relative; height: 100%; width: 100%">
    <Toolbar />
    <SvelteFlow {nodeTypes} {...store}
                class="tinyflow-logo"
                on:drop={onDrop}
                on:dragover={onDragOver}
                isValidConnection={isValidConnection}
                onconnectend={onconnectend}
                onconnectstart={onconnectstart}
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
