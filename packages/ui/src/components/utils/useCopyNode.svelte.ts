import { genShortId } from './IdGen';
import { store } from '#store/stores.svelte';
import { deepClone } from '#components/utils/deepClone';
import type { Parameter } from '#types';
import type { Node } from '@xyflow/svelte';

export const useCopyNode = () => {
    const copyNode = (id: string) => {
        const node = store.getNode(id);
        if (node) {
            const newNode = {
                ...deepClone(node),
                id: genShortId(),
                position: {
                    x: node.position.x + 50,
                    y: node.position.y + 50
                }
            } as Node;

            if (newNode.data?.parameters) {
                for (let parameter of newNode.data.parameters as Parameter[]) {
                    parameter.id = genShortId();
                    parameter.ref = undefined;
                }
            }

            store.updateNodes((nodes) => {
                const newNodes = nodes.map((n) => ({ ...n, selected: false }));
                return [...newNodes, newNode];
            });
        }
    };
    return {
        copyNode
    };
};
