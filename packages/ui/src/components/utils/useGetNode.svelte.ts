import { getStore } from '#store/stores.svelte';

export const useGetNode = () => {
    const store = getStore();
    const getNode = (id: string) => {
        return store.getNode(id);
    };
    return {
        getNode
    };
};
