import { store } from '#store/stores.svelte';

export const useUpdateEdgeDataSvelte = () => {
    const updateEdgeData = (id: string, dataUpdate: any, options?: { replace: boolean }) => {
        const edge = store.getEdge(id);
        if (!edge) {
            return;
        }

        const nextData = typeof dataUpdate === 'function' ? dataUpdate(edge) : dataUpdate;
        edge.data = options?.replace ? nextData : { ...edge.data, ...nextData };

        store.updateEdges((edges) => {
            return edges.map((e) => {
                if (e.id === id) {
                    return edge;
                }
                return e;
            });
        });
    };
    return {
        updateEdgeData
    };
};
