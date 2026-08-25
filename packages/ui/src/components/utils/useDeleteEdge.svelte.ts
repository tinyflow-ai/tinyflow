import { getStore } from '#store/stores.svelte';

export const useDeleteEdge = () => {
    const store = getStore();
    const deleteEdge = (id: string) => {
        store.removeEdge(id);
    };
    return {
        deleteEdge
    };
};
