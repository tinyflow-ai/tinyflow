import { useStore } from '@xyflow/svelte';

export const useDeleteEdge = () => {
    const { edges } = useStore();
    const deleteEdge = (id: string) => {
        edges.update((edges) => edges.filter((edge) => edge.id !== id));
    };
    return {
        deleteEdge
    };
};
