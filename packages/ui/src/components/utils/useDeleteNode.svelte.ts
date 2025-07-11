import { store } from '#store/stores.svelte';

export const useDeleteNode = () => {
    const deleteNode = (id: string) => {
        store.removeNode(id);
        store.updateEdges(edges => edges.filter(edge => edge.source !== id && edge.target !== id))
    };
    return {
        deleteNode
    };
};
