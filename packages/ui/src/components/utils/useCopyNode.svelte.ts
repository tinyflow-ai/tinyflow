import { genShortId } from './IdGen';
import { getStore } from '#store/stores.svelte';
import { deepClone } from '#components/utils/deepClone';
import type { Node } from '@xyflow/svelte';
import { transformParameterData } from './parameterTransforms';

export const useCopyNode = () => {
    const store = getStore();
    const copyNode = (id: string) => {
        const node = store.getNode(id);
        if (node) {
            const newNode = {
                ...deepClone(node),
                id: genShortId(),
                data: transformParameterData(deepClone(node.data), {
                    regenerateIds: true,
                    clearRefs: true
                }),
                position: {
                    x: node.position.x + 50,
                    y: node.position.y + 50
                }
            } as Node;

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
