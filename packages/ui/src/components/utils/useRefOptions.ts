import { type Edge, type Node, useNodesData, useStore } from '@xyflow/svelte';
import type { Parameter } from '../../types';
import { getCurrentNodeId } from '../../store/nodeContext';
import { derived } from 'svelte/store';

const fillSourceNodeIds = (nodeIds: string[], currentNodeId: string, edges: Edge[]) => {
    for (const edge of edges) {
        if (edge.target === currentNodeId && edge.source) {
            nodeIds.push(edge.source);
            fillSourceNodeIds(nodeIds, edge.source, edges);
        }
    }
};

const nodeToOptions = (node: Node, isChildren: boolean) => {
    if (node.type === 'startNode') {
        const parameters = node.data.parameters as Array<Parameter>;
        const children = [];
        if (parameters)
            for (const parameter of parameters) {
                children.push({
                    label:
                        parameter.name +
                        (isChildren
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
    } else if (node.type === 'loopNode' && isChildren) {
        return {
            label: node.data.title,
            value: node.id,
            children: [
                {
                    label: 'loopItem',
                    value: node.id + '.loop'
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
            const getChildren = (params: any, parentId: string) => {
                if (!params || params.length === 0) return [];
                return params.map((param: any) => ({
                    label:
                        param.name +
                        (isChildren
                            ? ` (Array<${param.dataType || 'String'}>)`
                            : ` (${param.dataType || 'String'})`),
                    // label: param.name ,
                    value: parentId + '.' + param.name,
                    children: getChildren(param.children, parentId + '.' + param.name)
                }));
            };
            return {
                label: node.data.title,
                value: node.id,
                children: getChildren(outputDefs, node.id)
            };
        }
    }
};

export const useRefOptions: any = (useChildrenOnly: boolean = false) => {
    const currentNodeId = getCurrentNodeId();
    const currentNode = useNodesData(currentNodeId);
    const { nodes, edges } = useStore();

    return derived([currentNode, nodes, edges], ([currentNode, nodes, edges]) => {
        const resultOptions = [];
        if (useChildrenOnly) {
            for (const node of nodes) {
                if (node.parentId === currentNode!.id) {
                    const nodeOptions = nodeToOptions(node, node.parentId === currentNode!.id);
                    nodeOptions && resultOptions.push(nodeOptions);
                }
            }
        } else {
            const refNodeIds: string[] = [];
            fillSourceNodeIds(refNodeIds, currentNodeId, edges);
            for (const node of nodes) {
                if (refNodeIds.includes(node.id)) {
                    const nodeOptions = nodeToOptions(node, node.parentId === currentNode!.id);
                    nodeOptions && resultOptions.push(nodeOptions);
                }
            }
        }
        return resultOptions;
    });
};
