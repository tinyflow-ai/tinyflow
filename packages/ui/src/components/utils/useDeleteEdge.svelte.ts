import {store}   from '#store/stores.svelte';

export const useDeleteEdge = () => {
    const deleteEdge = (id: string) => {
        store.removeEdge( id);
    };
    return {
        deleteEdge
    };
};
