import { store } from '#store/stores.svelte';

export const useGetNodeSvelte = () => {
    const getNode = (id: string) => {
        return store.getNode(id);
    };
    return {
        getNode
    };
};
