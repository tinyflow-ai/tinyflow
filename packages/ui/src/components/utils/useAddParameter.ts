import { genShortId } from './IdGen';
import { useSvelteFlow } from '@xyflow/svelte';
import type { Parameter } from './Consts';

const fillParameterId = (parameters?: Parameter[]) => {
    if (!parameters || parameters.length == 0) {
        return;
    }
    parameters.forEach((parameter) => {
        if (!parameter.id) {
            parameter.id = genShortId();
        }
        fillParameterId(parameter.children);
    });
};

export const useAddParameter = () => {
    const { updateNodeData } = useSvelteFlow();
    return {
        addParameter: (nodeId: string, dataKey: string = 'parameters', parameter?: Parameter) => {
            fillParameterId(parameter?.children);
            const newParameter = {
                ...parameter,
                id: genShortId()
            };
            updateNodeData(nodeId, (node) => {
                let parameters = node.data[dataKey] as Array<any>;
                if (parameters) {
                    parameters.push(newParameter);
                } else {
                    parameters = [newParameter];
                }
                return {
                    [dataKey]: [...parameters]
                };
            });
        }
    };
};
