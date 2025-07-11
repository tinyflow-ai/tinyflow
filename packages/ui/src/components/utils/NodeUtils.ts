import { getContext } from 'svelte';
import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
import type { TinyflowOptions } from '#types';

export const getCurrentNodeId = () => {
    return getContext<string>('svelteflow__node_id');
};

export const getOptions = () => {
    return getContext<TinyflowOptions>('tinyflow_options');
};

export const useCurrentNodeData = () => {
    const currentNodeId = getCurrentNodeId();
    return useNodesData<any>(currentNodeId);
};

export const useUpdateNodeData = () => {
    const { updateNodeData } = useSvelteFlow();
    const currentNodeId = getCurrentNodeId();
    return {
        updateNodeData: (data: any) => {
            updateNodeData(currentNodeId, data);
        }
    };
};
