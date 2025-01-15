import { writable } from 'svelte/store';
import { type Edge, type Node, type Viewport } from '@xyflow/svelte';

const createStore = () => {
    const nodesInternal = writable([] as Node[]);
    const edgesInternal = writable([] as Edge[]);
    const viewport = writable({ x: 250, y: 100, zoom: 1 } as Viewport);

    return {
        nodes: nodesInternal,
        edges: edgesInternal,
        viewport,
        init: (nodes: Node[], edges: Edge[]) => {
            nodesInternal.set(nodes);
            edgesInternal.set(edges);
        },
        addNode: (node: Node) => {
            nodesInternal.update((nodes) => [...nodes, node]);
        },
        removeNode: (id: string) => {
            nodesInternal.update((nodes) => nodes.filter((node) => node.id !== id));
        },
        updateNode: (id: string, node: Node) => {
            nodesInternal.update((nodes) => nodes.map((n) => (n.id === id ? node : n)));
        },
        updateNodeData: (id: string, data: Node['data']) => {
            nodesInternal.update((nodes) =>
                nodes.map((n) => (n.id === id ? { ...n, data: { ...n.data, ...data } } : n))
            );
        },
        selectNodeOnly: (id: string) => {
            nodesInternal.update((nodes) =>
                nodes.map((n) =>
                    n.id === id ? { ...n, selected: true } : { ...n, selected: false }
                )
            );
        },
        addEdge: (edge: Edge) => {
            edgesInternal.update((edges) => [...edges, edge]);
        },
        removeEdge: (id: string) => {
            edgesInternal.update((edges) => edges.filter((edge) => edge.id !== id));
        },
        updateEdge: (id: string, edge: Edge) => {
            edgesInternal.update((edges) => edges.map((e) => (e.id === id ? edge : e)));
        },
        updateEdgeData: (id: string, data: Edge['data']) => {
            edgesInternal.update((edges) => edges.map((e) => (e.id === id ? { ...e, data } : e)));
        }
    };
};

export const store = createStore();
