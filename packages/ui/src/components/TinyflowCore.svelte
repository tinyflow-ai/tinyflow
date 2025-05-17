<script lang="ts">
    import {
        SvelteFlow,
        Background,
        Controls,
        MiniMap,
        useSvelteFlow,
        type Node, MarkerType, type Handle, Panel, type Edge, type NodeTypes, useStore
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
    import { useGetEdgesByTarget } from './utils/useGetEdgesByTarget';
    import { getOptions } from './utils/NodeUtils';
    import CustomNode from './nodes/CustomNode.svelte';
    import { useUpdateEdgeData } from './utils/useUpdateEdgeData';
    import { Button } from '#components/base/index';
    import { useDeleteEdge } from '#components/utils/useDeleteEdge';

    const { onInit } = $props();
    const svelteFlow = useSvelteFlow();

    onInit(svelteFlow);

    let showEdgePanel = $state(false);
    let currentEdge = $state();

    const { updateEdgeData } = useUpdateEdgeData();

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
                    const edgeSourceNode = getNode(edge.source) as Node;
                    if (conn.sourceHandle === 'loop_handle' && edgeSourceNode.parentId !== sourceNode.id) {
                        return false;
                    }
                    if (sourceNode.parentId && edgeSourceNode.parentId !== sourceNode.parentId) {
                        return false;
                    }
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

        const toNode = state.toNode as Node;
        if (toNode.parentId) {
            return;
        }

        const fromNode = state.fromNode as Node;
        const fromHande = state.fromHandle as Handle;

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
            ensureParentInNodesBefore(newNode.parentId, toNode.id);
            svelteFlow.updateNode(toNode.id, newNode);
        }
    };

    const { getEdgesByTarget } = useGetEdgesByTarget();
    const onDelete = (params: any) => {
        const deleteEdges = params.edges as Edge[];
        deleteEdges.forEach((edge) => {
            const targetNode = getNode(edge.target) as Node;
            if (targetNode && targetNode.parentId) {
                const nodeEdges = getEdgesByTarget(edge.target);
                const loopNode = getNode(targetNode.parentId) as Node;
                if (nodeEdges.length === 0) {
                    svelteFlow.updateNode(targetNode.id, {
                        parentId: undefined,
                        position: {
                            x: targetNode.position.x + loopNode.position.x,
                            y: targetNode.position.y + loopNode.position.y
                        }
                    });
                } else {
                    let hasSameParent = false;
                    for (let i = 0; i < nodeEdges.length; i++) {
                        const edge = nodeEdges[i];
                        const sourceNode = getNode(edge.source) as Node;
                        if (sourceNode.parentId || sourceNode.type === 'loopNode') {
                            hasSameParent = true;
                            break;
                        }
                    }
                    if (!hasSameParent) {
                        svelteFlow.updateNode(targetNode.id, {
                            parentId: undefined,
                            position: {
                                x: targetNode.position.x + loopNode.position.x,
                                y: targetNode.position.y + loopNode.position.y
                            }
                        });
                    }
                }
            }
        });
    };

    const { deleteEdge } = useDeleteEdge();


    const onconnectstart = (event: any, node: any) => {
        // console.log('onconnectstart: ', event, node);
    };


    const onconnect = (event: any) => {
        // console.log('onconnect: ', event);
    };

    const customNodeTypes = {
        // ...nodeTypes
    } as NodeTypes;

    const customNodes = getOptions().customNodes;
    if (customNodes) {
        for (let key of Object.keys(customNodes)) {
            customNodeTypes[key] = CustomNode as any;
        }
    }

    const { nodes, edges, viewport } = useStore();
    const onDataChange = getOptions().onDataChange;
    if (onDataChange) {
        nodes.subscribe(() => {
            onDataChange({
                nodes: $nodes,
                edges: $edges,
                viewport: $viewport
            }, { eventType: 'nodesChange' });
        });

        edges.subscribe(() => {
            onDataChange({
                nodes: $nodes,
                edges: $edges,
                viewport: $viewport
            }, { eventType: 'edgesChange' });
        });

        viewport.subscribe(() => {
            onDataChange({
                nodes: $nodes,
                edges: $edges,
                viewport: $viewport
            }, { eventType: 'viewportChange' });
        });
    }


</script>


<div style="position: relative; height: 100%; width: 100%;overflow: hidden">
    <SvelteFlow nodeTypes={{ ...nodeTypes, ...customNodeTypes}}
                {...store}
                class="tinyflow-logo"
                on:drop={onDrop}
                on:dragover={onDragOver}
                isValidConnection={isValidConnection}
                onconnectend={onconnectend}
                onconnectstart={onconnectstart}
                onconnect={onconnect}
                connectionRadius={50}
                on:edgeclick={(e) => {
                    showEdgePanel = true;
                    currentEdge = e.detail.edge;
                    // console.log(e)
                }}
                ondelete={onDelete}
                onclick={(e) => {
                    const el = e.target as HTMLElement;
                    if (el.classList.contains("svelte-flow__edge-interaction")
                        || el.classList.contains('panel-content')
                        || el.closest('.panel-content')){
                     return
                    }
                     showEdgePanel = false;
                     currentEdge = null;
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
                            value={currentEdge?.data?.condition}
                            onchange={(e)=>{
                                if (currentEdge){
                                    updateEdgeData(currentEdge.id, {
                                        condition: e.target?.value
                                    })
                                }
                            }}
                        />
                    </div>
                    <div class="setting-item" style="padding: 8px 0">
                        <Button
                            onclick={() => {
                                deleteEdge(currentEdge?.id)
                                showEdgePanel = false;
                            }}
                        >
                            删除
                        </Button>

                        <Button
                            primary={true}
                            onclick={() => {
                                showEdgePanel = false;
                            }}
                        >
                            保存
                        </Button>
                    </div>
                </div>
            </Panel>
        {/if}
    </SvelteFlow>
    <Toolbar />
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

    .setting-item{
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: end;
    }
</style>
