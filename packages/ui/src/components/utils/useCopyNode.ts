import { useStore } from '@xyflow/svelte';
import { get } from 'svelte/store';
import { genShortId } from './IdGen';

export const useCopyNode = () => {
    const { nodes, nodeLookup } = useStore();
    const copyNode = (id: string) => {
        const $nodeLookup = get(nodeLookup);
        const node = $nodeLookup.get(id)?.internals.userNode;

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

            //添加新节点
            nodes.update((nodes) => [...nodes, newNode]);

            //更新选择状态
            nodes.update((nodes) =>
                nodes.map((n) =>
                    n.id === newNodeId ? { ...n, selected: true } : { ...n, selected: false }
                )
            );
        }
    };
    return {
        copyNode
    };
};
