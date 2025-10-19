import { store } from '#store/stores.svelte';

export const useGetNodeRelativePosition = () => {
    const getNodeRelativePosition = (parentNodeId: string) => {
        let node = store.getNode(parentNodeId);
        const position = { x: 0, y: 0 };
        while (node) {
            position.x += node.position.x;
            position.y += node.position.y;

            if (node.parentId) {
                node = store.getNode(node.parentId);
            } else {
                node = undefined;
            }
        }
        return position;
    };
    return {
        getNodeRelativePosition
    };
};
