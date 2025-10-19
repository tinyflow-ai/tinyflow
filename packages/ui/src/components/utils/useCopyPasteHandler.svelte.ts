import { store } from '#store/stores.svelte';
import { genShortId } from '#components/utils/IdGen';
import { type Node, type Edge, useSvelteFlow } from '@xyflow/svelte';

interface ClipboardData {
    tinyflowNodes: Node[];
    tinyflowEdges?: Edge[];
    version: string;
}

/**
 * 清理节点中不可序列化的字段，确保可安全 JSON.stringify
 */
function sanitizeNode(node: Node): Node {
    const { id, type, position, data, parentId } = node;
    return {
        id,
        type,
        position: { x: position.x, y: position.y },
        parentId: parentId ? parentId : undefined,
        data: data ? JSON.parse(JSON.stringify(data)) : {},
        ...(parentId !== undefined && { parentId })
    };
}

/**
 * 对 nodes 数组排序，确保每个父节点出现在其所有子节点之前。
 * 使用 Kahn 算法（拓扑排序）处理任意嵌套层级。
 */
export function sortNodesForSvelteFlow(nodes: Node[]): Node[] {
    const nodeMap = new Map<string, Node>();
    const inDegree = new Map<string, number>(); // 每个节点的“依赖数”（即是否为子节点）
    const childrenMap = new Map<string, string[]>(); // parentId -> childIds

    // 初始化
    for (const node of nodes) {
        nodeMap.set(node.id, node);
        inDegree.set(node.id, 0); // 默认无依赖
        if (node.parentId) {
            // 子节点依赖父节点
            inDegree.set(node.id, 1);
            if (!childrenMap.has(node.parentId)) {
                childrenMap.set(node.parentId, []);
            }
            childrenMap.get(node.parentId)!.push(node.id);
        }
    }

    // 所有根节点（无 parentId 或父不存在）入队
    const queue: Node[] = [];
    for (const node of nodes) {
        if (!node.parentId || !nodeMap.has(node.parentId)) {
            queue.push(node);
        }
    }

    const result: Node[] = [];
    const visited = new Set<string>();

    // BFS 拓扑排序
    while (queue.length > 0) {
        const node = queue.shift()!;
        if (visited.has(node.id)) continue;
        visited.add(node.id);
        result.push(node);

        // 将该节点的所有直接子节点入队（如果其父已处理）
        const children = childrenMap.get(node.id) || [];
        for (const childId of children) {
            if (!visited.has(childId)) {
                queue.push(nodeMap.get(childId)!);
            }
        }
    }

    // 补充可能遗漏的节点（如循环引用或孤立子节点）
    for (const node of nodes) {
        if (!visited.has(node.id)) {
            result.push(node);
        }
    }

    return result;
}

/**
 * 清理边中不可序列化的字段
 */
function sanitizeEdge(edge: Edge): Edge {
    const { id, source, target, sourceHandle, targetHandle, type, data } = edge;
    return {
        id,
        source,
        target,
        ...(sourceHandle !== undefined && { sourceHandle }),
        ...(targetHandle !== undefined && { targetHandle }),
        ...(type !== undefined && { type }),
        data: data ? JSON.parse(JSON.stringify(data)) : {}
    };
}

/**
 * 递归遍历对象，仅当遇到 { refType: 'ref', ref: string } 时重写 ref 的 id
 */
function rewriteRefsInData(obj: any, idMap: Map<string, string>): any {
    if (obj === null || obj === undefined) {
        return obj;
    }

    // 如果是数组，递归处理每个元素
    if (Array.isArray(obj)) {
        return obj.map((item) => rewriteRefsInData(item, idMap));
    }

    // 如果是对象，检查是否为引用对象
    if (typeof obj === 'object') {
        // 检查是否是引用定义：refType === 'ref' 且有 ref 字段
        if (obj.refType === 'ref' && typeof obj.ref === 'string') {
            const match = obj.ref.match(/^([^.\s]+)\.(.+)$/);
            if (match) {
                const [_, oldNodeId, paramId] = match;
                const newNodeId = idMap.get(oldNodeId);
                if (newNodeId !== undefined) {
                    // 返回新对象，避免修改原数据
                    return {
                        ...obj,
                        ref: `${newNodeId}.${paramId}`
                    };
                }
            }
        }

        // 递归处理所有子属性
        const result: Record<string, any> = {};
        for (const key in obj) {
            if (Object.hasOwn(obj, key)) {
                result[key] = rewriteRefsInData(obj[key], idMap);
            }
        }
        return result;
    }

    // 原始类型（string/number/boolean）直接返回
    return obj;
}

/**
 * 复制粘贴处理器 Hook
 */
export const useCopyPasteHandler = () => {
    const svelteFlow = useSvelteFlow();

    const copyHandler = async (event: ClipboardEvent | KeyboardEvent) => {
        const selectedNodes = store.getNodes().filter((node) => node.selected);
        if (selectedNodes.length === 0) return;

        // 获取完全包含在选中节点之间的边（起点和终点都被选中）
        const allEdges = store.getEdges();
        const relatedEdges = allEdges.filter(
            (edge) =>
                selectedNodes.some((n) => n.id === edge.source) &&
                selectedNodes.some((n) => n.id === edge.target)
        );

        const serializableNodes = selectedNodes.map(sanitizeNode);
        const serializableEdges = relatedEdges.map(sanitizeEdge);

        const clipboardData: ClipboardData = {
            tinyflowNodes: serializableNodes,
            tinyflowEdges: serializableEdges,
            version: '1.0'
        };

        const jsonStr = JSON.stringify(clipboardData, null, 0);

        try {
            // 优先使用 event.clipboardData（在 copy 事件中可用，无需权限）
            if ('clipboardData' in event && event.clipboardData) {
                event.clipboardData.setData('text/plain', jsonStr);
                if (event instanceof ClipboardEvent) {
                    event.preventDefault();
                }
            } else {
                // 降级到 navigator.clipboard（需用户手势）
                await navigator.clipboard.writeText(jsonStr);
            }
            console.log('Copied nodes and edges to clipboard');
        } catch (err) {
            console.error('Failed to copy:', err);
            // 可选：同源降级存储
            try {
                sessionStorage.setItem('tinyflow_clipboard', jsonStr);
            } catch {}
        }
    };


    const pasteHandler = (event: ClipboardEvent) => {
        const text = event.clipboardData?.getData('text/plain');
        if (!text) return;

        let parsed: ClipboardData | null = null;
        try {
            parsed = JSON.parse(text);
        } catch {
            return; // 忽略非 JSON 内容
        }

        if (!parsed?.tinyflowNodes || !Array.isArray(parsed.tinyflowNodes)) {
            return;
        }

        event.preventDefault();

        const pastedNodes = sortNodesForSvelteFlow(parsed.tinyflowNodes);
        const pastedEdges = parsed.tinyflowEdges || [];

        // 创建新节点（带新 ID 和偏移）
        const newNodeIdMap = new Map<string, string>();
        const newNodes: Node[] = [];

        for (const node of pastedNodes) {
            const newId = `node_${genShortId()}`;
            newNodeIdMap.set(node.id, newId);
        }

        // 构建新节点（含重写后的 data）
        for (const node of pastedNodes) {
            const newId = newNodeIdMap.get(node.id)!;

            const newParentId =
                node.parentId !== undefined
                    ? newNodeIdMap.get(node.parentId) // 安全：即使父不在粘贴范围内，也会是 undefined
                    : undefined;

            const newData = rewriteRefsInData(node.data, newNodeIdMap);

            newNodes.push({
                ...node,
                id: newId,
                parentId: newParentId,
                data: newData,
                position: {
                    x: (node.position?.x ?? 0) + 50,
                    y: (node.position?.y ?? 0) + 50
                },
                selected: true
            });
        }

        // 创建新边（仅当两端都在粘贴范围内）
        const newEdges: Edge[] = [];
        for (const edge of pastedEdges) {
            const newSource = newNodeIdMap.get(edge.source);
            const newTarget = newNodeIdMap.get(edge.target);
            if (newSource && newTarget) {
                newEdges.push({
                    ...edge,
                    id: `edge_${genShortId()}`,
                    source: newSource,
                    target: newTarget
                });
            }
        }

        // 更新 store：取消其他节点选中，添加新内容
        store.updateNodes((nodes) => {
            const unselected = nodes.map((n) => ({ ...n, selected: false }));
            return [...unselected, ...newNodes];
        });

        store.updateEdges((edges) => {
            const unselected = edges.map((n) => ({ ...n, selected: false }));
            return [...unselected, ...newEdges];
        });
    };

    return {
        copyHandler,
        pasteHandler
    };
};
