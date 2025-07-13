import type { NodeTypes } from '@xyflow/svelte';
import StartNode from './StartNode.svelte';
import EndNode from './EndNode.svelte';
import LLMNode from './LLMNode.svelte';
import CodeNode from './CodeNode.svelte';
import TemplateNode from './TemplateNode.svelte';
import HttpNode from './HttpNode.svelte';
import KnowledgeNode from './KnowledgeNode.svelte';
import SearchEngineNode from './SearchEngineNode.svelte';
import LoopNode from './LoopNode.svelte';
import ConfirmNode from './ConfirmNode.svelte';

/**
 * @description 节点类型（en: node type）
 */
export const nodeTypes = {
    startNode: StartNode,
    codeNode: CodeNode,
    confirmNode: ConfirmNode,
    llmNode: LLMNode,
    templateNode: TemplateNode,
    httpNode: HttpNode,
    knowledgeNode: KnowledgeNode,
    searchEngineNode: SearchEngineNode,
    loopNode: LoopNode,
    endNode: EndNode
} as any as NodeTypes;
