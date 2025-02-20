import { genShortId } from './IdGen';
import { useSvelteFlow } from '@xyflow/svelte';

export const useAddParameter = () => {
    const { updateNodeData } = useSvelteFlow();
    return {
        addParameter: (nodeId: string, dataKey: string = 'parameters') => {
            updateNodeData(nodeId, (node) => {
                let parameters = node.data[dataKey] as Array<any>;
                if (parameters) {
                    parameters.push({
                        id: genShortId()
                    });
                } else {
                    parameters = [{ id: genShortId() }];
                }
                return {
                    [dataKey]: [...parameters]
                };
            });
        }
    };
};
