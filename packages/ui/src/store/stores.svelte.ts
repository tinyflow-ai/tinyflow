import { type Edge, type Node, type Viewport } from '@xyflow/svelte';

const createStore = () => {
    let nodesInternal = $state.raw([] as Node[]);
    let edgesInternal = $state.raw([] as Edge[]);
    let viewport = $state.raw({ x: 250, y: 100, zoom: 1 } as Viewport);

    return {
        // nodes: nodesInternal,
        // edges: edgesInternal,
        // viewport,
        init: (nodes: Node[], edges: Edge[]) => {
            nodesInternal = nodes;
            edgesInternal = edges;
        },

        getNodes: () => nodesInternal,
        setNodes: (nodes: Node[]) => {
            nodesInternal = nodes;
        },
        getEdges: () => edgesInternal,
        setEdges: (edges: Edge[]) => {
            edgesInternal = edges;
        },
        getViewport: () => viewport,
        setViewport: (v: Viewport) => {
            viewport = v;
        },

        getNode: (id: string) => nodesInternal.find((node) => node.id === id),
        addNode: (node: Node) => {
            nodesInternal = [...nodesInternal, node];
        },
        removeNode: (id: string) => {
            nodesInternal = nodesInternal.filter((node) => node.id !== id);
        },
        updateNode: (id: string, node: Node) => {
            nodesInternal = nodesInternal.map((n) => (n.id === id ? { ...n, ...node } : n));
        },
        updateNodes: (update: (nodes: Node[]) => Node[]) => {
            nodesInternal = update(nodesInternal);
        },
        updateNodeData: (id: string, data: Node['data']) => {
            nodesInternal = nodesInternal.map((n) =>
                n.id === id ? { ...n, data: { ...n.data, ...data } } : n
            );
        },
        selectNodeOnly: (id: string) => {
            nodesInternal = nodesInternal.map((n) =>
                n.id === id ? { ...n, selected: true } : { ...n, selected: false }
            );
        },
        getEdge: (id: string) => edgesInternal.find((edge) => edge.id === id),
        addEdge: (edge: Edge) => {
            edgesInternal = [...edgesInternal, edge];
        },
        removeEdge: (id: string) => {
            edgesInternal = edgesInternal.filter((edge) => edge.id !== id);
        },
        updateEdge: (id: string, edge: Edge) => {
            edgesInternal = edgesInternal.map((e) => (e.id === id ? { ...e, ...edge } : e));
        },
        updateEdges: (update: (edges: Edge[]) => Edge[]) => {
            edgesInternal = update(edgesInternal);
        },
        updateEdgeData: (id: string, data: Edge['data']) => {
            edgesInternal = edgesInternal.map((e) =>
                e.id === id ? { ...e, data: { ...e.data, ...data } } : e
            );
        }
    };
};

export const store = createStore();
