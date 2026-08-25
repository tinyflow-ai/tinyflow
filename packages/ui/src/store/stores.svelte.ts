import { getContext, setContext } from 'svelte';
import { type Edge, type Node, type Viewport } from '@xyflow/svelte';

const STORE_CONTEXT_KEY = Symbol('tinyflow_store');

export const createStore = () => {
    // raw 状态避免 Svelte 对 XYFlow 的大型节点对象做深层代理；所有写操作通过下方
    // 方法替换数组/对象引用，从而同时保证响应式更新和多实例隔离。
    let nodesInternal = $state.raw([] as Node[]);
    let edgesInternal = $state.raw([] as Edge[]);
    let viewport = $state.raw({ x: 250, y: 100, zoom: 1 } as Viewport);

    return {
        // nodes: nodesInternal,
        // edges: edgesInternal,
        // viewport,
        /** 使用导入数据初始化完整画布；缺少 viewport 时采用编辑器默认视角。 */
        init: (nodes: Node[], edges: Edge[], initialViewport?: Viewport) => {
            nodesInternal = nodes;
            edgesInternal = edges;
            viewport = initialViewport ?? { x: 250, y: 100, zoom: 1 };
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

export type TinyflowStore = ReturnType<typeof createStore>;

export const provideStore = (store: TinyflowStore) => {
    // Symbol key 防止与宿主应用或其他组件库的字符串 context key 冲突。
    setContext(STORE_CONTEXT_KEY, store);
    return store;
};

export const getStore = () => {
    const store = getContext<TinyflowStore>(STORE_CONTEXT_KEY);
    if (!store) {
        throw new Error('Tinyflow store is not available outside a Tinyflow component');
    }
    return store;
};
