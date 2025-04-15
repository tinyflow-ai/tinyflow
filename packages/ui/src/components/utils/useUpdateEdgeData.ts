import { useStore } from '@xyflow/svelte';
import { get } from 'svelte/store';

export const useUpdateEdgeData = () => {
    const store = useStore();
    const updateEdgeData = (id: string, dataUpdate: any, options?: { replace: boolean }) => {
        const edge = get(store.edgeLookup).get(id);
        if (!edge) {
            return;
        }

        const nextData = typeof dataUpdate === 'function' ? dataUpdate(edge) : dataUpdate;
        edge.data = options?.replace ? nextData : { ...edge.data, ...nextData };
        store.edges.update((eds) =>
            eds.map((e) => {
                if (e.id === id) {
                    return edge;
                }
                return e;
            })
        );
    };
    return {
        updateEdgeData
    };
};
