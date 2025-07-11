import { useStore, useSvelteFlow } from '@xyflow/svelte';

export const useDeleteEdge = () => {
    let { edges } = $derived(useStore())
    const instance = useSvelteFlow();
    const deleteEdge = (id: string) => {
        // edges.update((edges) => edges.filter((edge) => edge.id !== id));
        // edges = instance.removeEdge(id);
        edges = edges.filter((edge) => edge.id !== id);
    };
    return {
        deleteEdge
    };
};
