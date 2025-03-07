<script lang="ts">
    import {
        SvelteFlow,
        Background,
        Controls,
        MiniMap,
        useSvelteFlow,
        type Node, MarkerType, type Handle, Panel
    } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    import '../styles/index.ts';
    import { store } from '../store/stores';
    import { nodeTypes } from './nodes';
    import Toolbar from './Toolbar.svelte';
    import { genShortId } from './utils/IdGen';
    import { useGetNode } from './utils/useGetNode';
    import { useEnsureParentInNodesBefore } from './utils/useEnsureParentInNodesBefore';
    import { Textarea } from './base';

    const { onInit } = $props();
    const svelteFlow = useSvelteFlow();

    onInit(svelteFlow);

    let showEdgePanel = $state(false);


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

        // 允许链接
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
            const parentNode = getNode(newNode.parentId) as Node;
            newNode.position = {
                x: toNode.position.x - parentNode.position.x,
                y: toNode.position.y - parentNode.position.y
            };
            ensureParentInNodesBefore(fromNode.id, toNode.id);
            svelteFlow.updateNode(toNode.id, newNode);
        }
    };


    const onconnectstart = (event: any, node: any) => {
        console.log('onconnectstart: ', event, node);
    };


    const onconnect = (event: any) => {
        console.log('onconnect: ', event);
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
                onconnect={onconnect}
                connectionRadius={50}
                on:edgeclick={() => {
                    showEdgePanel = true;
                }}
                onclick={(e) => {
                    const el = e.target as HTMLElement;
                    if (el.classList.contains("svelte-flow__edge-interaction")
                        || el.classList.contains('panel-content')
                        || el.closest('.panel-content')){
                     return
                    }
                     showEdgePanel = false;
                }}
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

        {#if showEdgePanel}
            <Panel>
                <div class="panel-content">
                    <div>边属性设置</div>
                    <div class="setting-title">边条件设置</div>
                    <div class="setting-item">
                        <Textarea
                            rows={3}
                            placeholder="请输入边条件"
                            style="width: 100%"
                            oninput={(e)=>{
                            }}
                        />
                    </div>
                </div>
            </Panel>
        {/if}
    </SvelteFlow>
</div>

<style>
    .panel-content {
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 200px;
        border: 1px solid #efefef;
    }

    .setting-title {
        margin: 10px 0;
        font-size: 12px;
        color: #999;
    }
</style>
