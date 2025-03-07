import { useStore } from '@xyflow/svelte';
import { get } from 'svelte/store';

export const useGetNode = () => {
    const { nodeLookup } = useStore();
    const getNode = (id: string) => {
        const $nodeLookup = get(nodeLookup);
        return $nodeLookup.get(id)?.internals.userNode;
    };
    return {
        getNode
    };
};
