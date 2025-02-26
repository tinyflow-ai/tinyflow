import type { NodeTypes } from '@xyflow/svelte';
import StartNode from './StartNode.svelte';
import EndNode from './EndNode.svelte';
import LLMNode from './LLMNode.svelte';
import CodeNode from './CodeNode.svelte';

/**
 * @description 节点类型（en: node type）
 */
export const nodeTypes = {
    startNode: StartNode,
    codeNode: CodeNode,
    llmNode: LLMNode,
    endNode: EndNode
} as any as NodeTypes;
