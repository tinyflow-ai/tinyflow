import { getContext } from 'svelte';
import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
import type { TinyflowOptions } from '../../Tinyflow';

export const useCurrentNodeId = () => {
    return getContext<string>('svelteflow__node_id');
};

export const getOptions = () => {
    return getContext<TinyflowOptions>('tinyflow_options');
};

export const useCurrentNodeData = () => {
    const currentNodeId = useCurrentNodeId();
    return useNodesData<any>(currentNodeId);
};

export const useUpdateNodeData = () => {
    const { updateNodeData } = useSvelteFlow();
    const currentNodeId = useCurrentNodeId();
    return {
        updateNodeData: (data: any) => {
            updateNodeData(currentNodeId, data);
        }
    };
};
