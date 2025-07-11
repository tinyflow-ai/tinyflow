import { store } from '#store/stores.svelte';

export const useGetEdgesByTarget = () => {
    const getEdgesByTarget = (target: string) => {
        const edges = store.getEdges();
        return edges.filter((edge) => edge.target === target);
    };
    return {
        getEdgesByTarget
    };
};
