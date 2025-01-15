import type { NodeTypes } from '@xyflow/svelte';
import StartNode from './StartNode.svelte';
import EndNode from './EndNode.svelte';
import LLMNode from './LLMNode.svelte';

/**
 * @description 节点类型（en: node type）
 */
export const nodeTypes = {
    startNode: StartNode,
    llmNode: LLMNode,
    endNode: EndNode,
} as any as  NodeTypes;
