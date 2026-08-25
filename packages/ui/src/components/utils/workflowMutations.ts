import type { Edge, Node } from '@xyflow/svelte';

const collectDescendantIds = (nodes: Node[], rootId: string) => {
    const ids = new Set([rootId]);
    let changed = true;

    while (changed) {
        changed = false;
        for (const node of nodes) {
            if (node.parentId && ids.has(node.parentId) && !ids.has(node.id)) {
                ids.add(node.id);
                changed = true;
            }
        }
    }

    return ids;
};

const clearDeletedRefs = (value: unknown, deletedIds: Set<string>): unknown => {
    if (Array.isArray(value)) {
        return value.map((item) => clearDeletedRefs(item, deletedIds));
    }
    if (!value || typeof value !== 'object') {
        return value;
    }

    const record = value as Record<string, unknown>;
    const result: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(record)) {
        result[key] = clearDeletedRefs(child, deletedIds);
    }

    if (record.refType === 'ref' && typeof record.ref === 'string') {
        const referencedNodeId = record.ref.split('.', 1)[0];
        if (deletedIds.has(referencedNodeId)) {
            result.ref = undefined;
        }
    }

    return result;
};

export const deleteNodeAndDependencies = (nodes: Node[], edges: Edge[], rootId: string) => {
    const deletedIds = collectDescendantIds(nodes, rootId);
    const nextNodes = nodes
        .filter((node) => !deletedIds.has(node.id))
        .map((node) => ({
            ...node,
            data: clearDeletedRefs(node.data, deletedIds) as Node['data']
        }));
    const nextEdges = edges.filter(
        (edge) => !deletedIds.has(edge.source) && !deletedIds.has(edge.target)
    );

    return { nodes: nextNodes, edges: nextEdges, deletedIds };
};
