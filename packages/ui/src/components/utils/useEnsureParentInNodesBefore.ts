// import { useStore } from '@xyflow/svelte';
//
// export const useEnsureParentInNodesBefore = () => {
//     const { nodes } = useStore();
//
//     const ensureParentInNodesBefore = (parentNodeId: string, childNodeId: string) => {
//         nodes.update((nodeArray) => {
//             let parentIndex = -1;
//             for (let i = 0; i < nodeArray.length; i++) {
//                 if (nodeArray[i].id === parentNodeId) {
//                     parentIndex = i;
//                     break;
//                 }
//             }
//
//             if (parentIndex <= 0) {
//                 return nodeArray;
//             }
//
//             let firstChildIndex = -1;
//             for (let i = 0; i < parentIndex; i++) {
//                 if (nodeArray[i].parentId === parentNodeId || nodeArray[i].id === childNodeId) {
//                     firstChildIndex = i;
//                     break;
//                 }
//             }
//
//             if (firstChildIndex == -1) {
//                 return nodeArray;
//             }
//
//             const parentNode = nodeArray[parentIndex];
//             for (let i = parentIndex; i > firstChildIndex; i--) {
//                 nodeArray[i] = nodeArray[i - 1];
//             }
//             nodeArray[firstChildIndex] = parentNode;
//
//             return nodeArray;
//         });
//     };
//     return {
//         ensureParentInNodesBefore
//     };
// };
