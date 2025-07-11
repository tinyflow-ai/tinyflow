import { store } from '#store/stores.svelte';

export const useGetNode = () => {
    const getNode = (id: string) => {
        return store.getNode(id);
    };
    return {
        getNode
    };
};
