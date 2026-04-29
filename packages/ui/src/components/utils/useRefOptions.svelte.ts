import { type Edge, type Node, useNodesData, useStore } from '@xyflow/svelte';
import type { Parameter } from '#types';
import { getCurrentNodeId } from '#components/utils/NodeUtils';

const fillRefNodeIds = (refNodeIds: string[], currentNodeId: string, edges: Edge[]) => {
    for (const edge of edges) {
        if (edge.target === currentNodeId && edge.source && !refNodeIds.includes(edge.source)) {
            refNodeIds.push(edge.source);
            fillRefNodeIds(refNodeIds, edge.source, edges);
        }
    }
};

const getChildren = (
    params: any,
    parentId: string,
    isArrayType: boolean,
    getParameterDataTypeString: (param: Parameter, isArray: boolean) => string | undefined
) => {
    if (!params || params.length === 0) return [];
    return params.map((parameter: any) => {
        return {
            label: parameter.name + getParameterDataTypeString(parameter, isArrayType),
            value: parentId + '.' + parameter.name,
            children: getChildren(
                parameter.children,
                parentId + '.' + parameter.name,
                isArrayType,
                getParameterDataTypeString
            )
        };
    });
};

const isTextFormType = (param: Parameter) => {
    return param.contentType === 'text' || !param.contentType;
};

const nodeToOptions = (
    node: Node,
    isArrayType: boolean,
    currentNode: Node,
    getParameterDataTypeString: (param: Parameter, isArray: boolean) => string | undefined
) => {
    if (node.type === 'startNode') {
        const parameters = node.data.parameters as Array<Parameter>;
        const children = [];
        if (parameters)
            for (const parameter of parameters) {
                children.push({
                    label:
                        parameter.name! +
                        getParameterDataTypeString(
                            parameter,
                            isArrayType ||
                                (!isTextFormType(parameter) && parameter.formType === 'checkbox')
                        ),
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
                children: getChildren(
                    outputDefs,
                    node.id,
                    isArrayType || node.type === 'loopNode',
                    getParameterDataTypeString
                )
            };
        }
    }
};

/**
 * 获取当前节点的引用项
 * @param useChildrenOnly 只获取子节点的内容，比如 Loop 循环
 */
const useRefOptions: any = (useChildrenOnly: boolean = false) => {
    const currentNodeId = getCurrentNodeId();
    const currentNode = useNodesData(currentNodeId);
    const { nodes, edges, nodeLookup } = $derived(useStore());

    let selectItems = $derived.by(() => {
        const resultOptions = [];
        if (!currentNode.current) {
            return [];
        }

        //通过 nodeLookup.get 才会得到有 parentId 的 node
        const cNode = nodeLookup.get(currentNodeId)!;

        const getParameterDataType = (param: Parameter, isArray: boolean) => {
            if (param?.dataType) {
                return convertParameterDataTypeString(param.dataType, isArray);
            }
            if (param?.ref) {
                const nodeIdAndParamId = param?.ref?.split('.');
                for (const node of nodes) {
                    if (node.id === nodeIdAndParamId[0]) {
                        if (node.data.parameters) {
                            for (let parameter of node.data.parameters as Parameter[]) {
                                if (parameter.name === nodeIdAndParamId[1]) {
                                    if (parameter.dataType) {
                                        return convertParameterDataTypeString(
                                            parameter.dataType,
                                            isArray
                                        );
                                    } else if (!parameter.ref) {
                                        return getParameterDataType(parameter, isArray);
                                    }
                                }
                            }
                        }

                        if (node.data.outputDefs) {
                            for (let parameter of node.data.outputDefs as Parameter[]) {
                                if (parameter.name === nodeIdAndParamId[1]) {
                                    if (parameter.dataType) {
                                        return convertParameterDataTypeString(
                                            parameter.dataType,
                                            isArray
                                        );
                                    } else if (!parameter.ref) {
                                        return getParameterDataType(parameter, isArray);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return convertParameterDataTypeString('', isArray); // default is String
        };

        const convertParameterDataTypeString = (dataType: string, isArray: boolean) => {
            // const dataType = getParameterDataType(param);
            console.log('dataType', dataType);
            if (isArray) {
                return dataType ? ` (Array&lt;${dataType}&gt;)` : ` (Array&lt;&gt;)`;
            } else {
                return ` (${dataType})`;
            }
        };

        // 只获取子节点，比如 LoopNode
        if (useChildrenOnly) {
            for (const node of nodes) {
                const isCurrentNodeChild = node.parentId === currentNode.current.id;
                if (isCurrentNodeChild) {
                    const nodeOptions = nodeToOptions(
                        node,
                        isCurrentNodeChild,
                        cNode,
                        getParameterDataType
                    );
                    nodeOptions && resultOptions.push(nodeOptions);
                }
            }
        }
        // 获取所有引用项(不包括子节点)
        else {
            const refNodeIds: string[] = [];
            fillRefNodeIds(refNodeIds, currentNodeId, edges);

            for (const node of nodes) {
                if (refNodeIds.includes(node.id)) {
                    const isCurrentNodeChild = node.parentId === currentNode.current.id;
                    const nodeOptions = nodeToOptions(
                        node,
                        isCurrentNodeChild,
                        cNode,
                        getParameterDataType
                    );
                    nodeOptions && resultOptions.push(nodeOptions);
                }
            }
        }

        return resultOptions;
    });

    return {
        get current() {
            return selectItems;
        }
    };
};
export default useRefOptions;
