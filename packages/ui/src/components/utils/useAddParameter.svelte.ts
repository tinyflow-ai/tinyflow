import { genShortId } from './IdGen';
import { useSvelteFlow } from '@xyflow/svelte';
import type { Parameter } from '#types';

export const fillParameterId = (parameters?: Parameter[]) => {
    if (!parameters || parameters.length == 0) {
        return parameters;
    }
    parameters.forEach((parameter) => {
        if (!parameter.id) {
            parameter.id = genShortId();
        }
        fillParameterId(parameter.children);
    });

    return parameters;
};

export const useAddParameter = () => {
    const { updateNodeData } = useSvelteFlow();
    return {
        addParameter: (
            nodeId: string,
            dataKey: string = 'parameters',
            parameter?: Parameter | Parameter[]
        ) => {
            if (Array.isArray(parameter)) {
                parameter.forEach((p) => fillParameterId(p?.children));
            } else {
                fillParameterId(parameter?.children);
            }

            function createNewParameter(parameter: Parameter) {
                return {
                    name: '',
                    dataType: 'String',
                    refType: 'ref',
                    ...parameter,
                    id: genShortId()
                };
            }

            const newParameters: Parameter[] = [];
            if (Array.isArray(parameter)) {
                newParameters.push(...parameter.map(createNewParameter));
            } else {
                newParameters.push(createNewParameter(parameter as Parameter));
            }

            updateNodeData(nodeId, (node) => {
                let parameters = node.data[dataKey] as Array<any>;
                if (parameters) {
                    parameters.push(newParameters);
                } else {
                    parameters = [...newParameters];
                }
                return {
                    [dataKey]: [...parameters]
                };
            });
        }
    };
};
