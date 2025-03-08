import { useStore } from '@xyflow/svelte';
import { get } from 'svelte/store';

export const useGetEdgesBySource = () => {
    const { edges } = useStore();
    const getEdgesBySource = (target: string) => {
        const $edges = get(edges);
        return $edges.filter((edge) => edge.source === target);
    };
    return {
        getEdgesBySource
    };
};
