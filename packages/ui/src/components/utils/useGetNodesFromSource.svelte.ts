import { store } from '#store/stores.svelte';
import type { Edge, Node } from '@xyflow/svelte';

export const useGetNodesFromSource = () => {
    const getEdgesBySource = (target: string, edges: Edge[]) => {
        return edges.filter(
            // 排除循环节点的子节点，否则在多层循环嵌套时不正确
            (edge) => edge.source === target && edge.sourceHandle !== 'loop_handle'
        );
    };

    const getNodesFromSource = (sourceNodeId: string) => {
        const edges = store.getEdges();
        const result: Node[] = [];

        let edgesFromSource = getEdgesBySource(sourceNodeId, edges);
        while (edgesFromSource.length > 0) {
            const newEdgesFromSource: Edge[] = [];
            edgesFromSource.forEach((edge) => {
                result.push(store.getNode(edge.target)!);
                newEdgesFromSource.push(...getEdgesBySource(edge.target, edges));
            });
            edgesFromSource = newEdgesFromSource;
        }

        return result;
    };
    return {
        getNodesFromSource
    };
};
