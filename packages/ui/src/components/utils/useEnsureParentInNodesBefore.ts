import { useStore } from '@xyflow/svelte';

export const useEnsureParentInNodesBefore = () => {
    const { nodes } = useStore();

    const ensureParentInNodesBefore = (parentNodeId: string, childNodeId: string) => {
        nodes.update((nodeArray) => {
            let parentIndex = -1,
                childIndex = -1;
            for (let i = 0; i < nodeArray.length; i++) {
                if (nodeArray[i].id === parentNodeId) parentIndex = i;
                if (nodeArray[i].id === childNodeId) childIndex = i;

                if (parentIndex !== -1 && childIndex !== -1) {
                    break;
                }
            }

            if (parentIndex == -1 || childIndex == -1 || parentIndex < childIndex) {
                return nodeArray;
            }

            const parentNode = nodeArray[parentIndex];
            for (let i = parentIndex; i > childIndex; i--) {
                nodeArray[i] = nodeArray[i - 1];
            }
            nodeArray[childIndex] = parentNode;
            return nodeArray;
        });
    };
    return {
        ensureParentInNodesBefore
    };
};
