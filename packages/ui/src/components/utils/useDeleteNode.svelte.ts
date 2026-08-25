import { getStore } from '#store/stores.svelte';
import { deleteNodeAndDependencies } from './workflowMutations';

export const useDeleteNode = () => {
    const store = getStore();
    const deleteNode = (id: string) => {
        const result = deleteNodeAndDependencies(store.getNodes(), store.getEdges(), id);
        store.setNodes(result.nodes);
        store.setEdges(result.edges);
    };
    return { deleteNode };
};
