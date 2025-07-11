import { store } from '#store/stores.svelte';

export const useGetEdgesBySourceSvelte = () => {
    const getEdgesBySource = (target: string) => {
        const edges = store.getEdges();
        return edges.filter((edge) => edge.source === target);
    };
    return {
        getEdgesBySource
    };
};
