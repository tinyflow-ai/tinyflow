import { type Edge, type Node, useEdges, useNodes, useNodesData, useStore } from '@xyflow/svelte';
import type { Parameter } from './Consts';
import { getCurrentNodeId } from '../../store/nodeContext';
import { derived, get } from 'svelte/store';

const fillSourceNodeIds = (nodeIds: string[], currentNodeId: string, edges: Edge[]) => {
    for (let edge of edges) {
        if (edge.target === currentNodeId && edge.source) {
            nodeIds.push(edge.source);
            fillSourceNodeIds(nodeIds, edge.source, edges);
        }
    }
};

const nodeToOptions = (node: Node, isChildren: boolean) => {
    if (node.type === 'startNode') {
        const inputParameters = node.data.inputParameters as Array<Parameter>;
        const children = [];
        if (inputParameters)
            for (let inputParam of inputParameters) {
                children.push({
                    label:
                        inputParam.name +
                        (isChildren
                            ? ` (Array<${inputParam.dataType || 'String'}>)`
                            : ` (${inputParam.dataType || 'String'})`),
                    value: node.id + '.' + inputParam.name
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
        const outputParameters = node.data.outputParameters;
        if (outputParameters) {
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
                children: getChildren(outputParameters, node.id)
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
            for (let node of nodes) {
                if (node.parentId === currentNode!.id) {
                    const nodeOptions = nodeToOptions(node, node.parentId === currentNode!.id);
                    nodeOptions && resultOptions.push(nodeOptions);
                }
            }
        } else {
            const refNodeIds: string[] = [];
            fillSourceNodeIds(refNodeIds, currentNodeId, edges);
            for (let node of nodes) {
                if (refNodeIds.includes(node.id)) {
                    const nodeOptions = nodeToOptions(node, node.parentId === currentNode!.id);
                    nodeOptions && resultOptions.push(nodeOptions);
                }
            }
        }
        return resultOptions;
    });
};
