import { getStore } from '#store/stores.svelte';

export const useGetEdgesBySource = () => {
    const store = getStore();
    const getEdgesBySource = (target: string) => {
        const edges = store.getEdges();
        return edges.filter((edge) => edge.source === target);
    };
    return {
        getEdgesBySource
    };
};
