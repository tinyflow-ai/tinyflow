import type { Edge, Node } from '@xyflow/svelte';

/** 收集根节点及所有层级的子节点，兼容 Loop 内继续嵌套容器节点的情况。 */
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

/**
 * 深度复制业务数据，并移除指向已删除节点的引用。
 * 这里只识别 Tinyflow 的 refType/ref 契约，不会误伤固定值中的普通字符串。
 */
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

/**
 * 清理由 XYFlow 键盘删除完成后留下的跨节点引用。
 * XYFlow 会自动删除父节点的所有后代和关联边，但不了解 Tinyflow 的参数引用语义。
 */
export const clearNodeReferences = (nodes: Node[], deletedIds: Set<string>) =>
    nodes.map((node) => ({
        ...node,
        data: clearDeletedRefs(node.data, deletedIds) as Node['data']
    }));

/** 原子地删除一个节点子树、关联边以及其他节点中的悬空引用。 */
export const deleteNodeAndDependencies = (nodes: Node[], edges: Edge[], rootId: string) => {
    const deletedIds = collectDescendantIds(nodes, rootId);
    const nextNodes = clearNodeReferences(
        nodes.filter((node) => !deletedIds.has(node.id)),
        deletedIds
    );
    const nextEdges = edges.filter(
        (edge) => !deletedIds.has(edge.source) && !deletedIds.has(edge.target)
    );

    return { nodes: nextNodes, edges: nextEdges, deletedIds };
};
