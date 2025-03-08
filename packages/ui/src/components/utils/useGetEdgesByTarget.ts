import { useStore } from '@xyflow/svelte';
import { get } from 'svelte/store';

export const useGetEdgesByTarget = () => {
    const { edges } = useStore();
    const getEdgesByTarget = (target: string) => {
        const $edges = get(edges);
        return $edges.filter((edge) => edge.target === target);
    };
    return {
        getEdgesByTarget
    };
};
