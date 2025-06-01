import { type Edge, type Node, useNodesData, useStore } from '@xyflow/svelte';
import type { Parameter } from '../../types';
import { getCurrentNodeId } from '../../store/nodeContext';
import { derived } from 'svelte/store';

const fillRefNodeIds = (refNodeIds: string[], currentNodeId: string, edges: Edge[]) => {
    for (const edge of edges) {
        if (edge.target === currentNodeId && edge.source) {
            refNodeIds.push(edge.source);
            fillRefNodeIds(refNodeIds, edge.source, edges);
        }
    }
};

const getChildren = (params: any, parentId: string, nodeIsChildren: boolean) => {
    if (!params || params.length === 0) return [];
    return params.map((param: any) => ({
        label:
            param.name +
            (nodeIsChildren
                ? ` (Array<${param.dataType || 'String'}>)`
                : ` (${param.dataType || 'String'})`),
        value: parentId + '.' + param.name,
        children: getChildren(param.children, parentId + '.' + param.name, nodeIsChildren)
    }));
};

const nodeToOptions = (node: Node, nodeIsChildren: boolean, currentNode: Node) => {
    if (node.type === 'startNode') {
        const parameters = node.data.parameters as Array<Parameter>;
        const children = [];
        if (parameters)
            for (const parameter of parameters) {
                children.push({
                    label:
                        parameter.name +
                        (nodeIsChildren
                            ? ` (Array<${parameter.dataType || 'String'}>)`
                            : ` (${parameter.dataType || 'String'})`),
                    value: node.id + '.' + parameter.name
                });
            }
        return {
            label: node.data.title,
            value: node.id,
            children
        };
    } else if (node.type === 'loopNode' && currentNode.parentId) {
        return {
            label: node.data.title,
            value: node.id,
            children: [
                {
                    label: 'loopItem',
                    value: node.id + '.loopItem'
                },
                {
                    label: 'index (Number)',
                    value: node.id + '.index'
                }
            ]
        };
    } else {
        const outputDefs = node.data.outputDefs;
        if (outputDefs) {
            return {
                label: node.data.title,
                value: node.id,
                children: getChildren(outputDefs, node.id, nodeIsChildren)
            };
        }
    }
};

export const useRefOptions: any = (useChildrenOnly: boolean = false) => {
    const currentNodeId = getCurrentNodeId();
    const currentNode = useNodesData(currentNodeId);
    const { nodes, edges, nodeLookup } = useStore();
    return derived(
        [currentNode, nodes, edges, nodeLookup],
        ([currentNode, nodes, edges, nodeLookup]) => {
            if (!currentNode) {
                return [];
            }
            //通过 nodeLookup.get 才会得到有 parentId 的 node
            const cNode = nodeLookup.get(currentNodeId)!;
            const resultOptions = [];
            if (useChildrenOnly) {
                for (const node of nodes) {
                    const nodeIsChildren = node.parentId === currentNode!.id;
                    if (nodeIsChildren) {
                        const nodeOptions = nodeToOptions(node, nodeIsChildren, cNode);
                        nodeOptions && resultOptions.push(nodeOptions);
                    }
                }
            } else {
                const refNodeIds: string[] = [];
                fillRefNodeIds(refNodeIds, currentNodeId, edges);

                for (const node of nodes) {
                    if (refNodeIds.includes(node.id)) {
                        const nodeIsChildren = node.parentId === currentNode!.id;
                        const nodeOptions = nodeToOptions(node, nodeIsChildren, cNode);
                        nodeOptions && resultOptions.push(nodeOptions);
                    }
                }
            }
            return resultOptions;
        }
    );
};
