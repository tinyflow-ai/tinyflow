import { useStore } from '@xyflow/svelte';

export const useDeleteNode = () => {
    const store = useStore();
    const deleteNode = (id: string) => {
        store.nodes.update((nodes) => nodes.filter((node) => node.id !== id));
        store.edges.update((edges) =>
            edges.filter((edge) => edge.source !== id && edge.target !== id)
        );
    };
    return {
        deleteNode
    };
};
