import { genShortId } from './IdGen';
import { store } from '#store/stores.svelte';

export const useCopyNode = () => {
    const copyNode = (id: string) => {
        const node = store.getNode(id);
        if (node) {
            const newNodeId = genShortId();
            const newNode = {
                ...node,
                id: newNodeId,
                position: {
                    x: node.position.x + 50,
                    y: node.position.y + 50
                }
            };

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
