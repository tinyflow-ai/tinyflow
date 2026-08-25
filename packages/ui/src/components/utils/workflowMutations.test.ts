import { describe, expect, it } from 'vitest';
import type { Edge, Node } from '@xyflow/svelte';
import { deleteNodeAndDependencies } from './workflowMutations';

const node = (id: string, data: Node['data'] = {}, parentId?: string): Node => ({
    id,
    data,
    parentId,
    position: { x: 0, y: 0 }
});

describe('deleteNodeAndDependencies', () => {
    it('deletes a node, all descendants, and every connected edge', () => {
        const nodes = [
            node('loop'),
            node('child', {}, 'loop'),
            node('grandchild', {}, 'child'),
            node('outside')
        ];
        const edges = [
            { id: 'into-loop', source: 'outside', target: 'loop' },
            { id: 'inside', source: 'child', target: 'grandchild' },
            { id: 'keep', source: 'outside', target: 'outside' }
        ] as Edge[];

        const result = deleteNodeAndDependencies(nodes, edges, 'loop');

        expect(result.nodes.map(({ id }) => id)).toEqual(['outside']);
        expect(result.edges.map(({ id }) => id)).toEqual(['keep']);
        expect([...result.deletedIds]).toEqual(['loop', 'child', 'grandchild']);
    });

    it('clears nested references to deleted nodes without mutating input', () => {
        const outsideData = {
            parameters: [
                { id: 'p1', refType: 'ref', ref: 'child.output' },
                {
                    id: 'p2',
                    refType: 'fixed',
                    ref: 'child.keep-because-not-a-ref',
                    children: [{ id: 'p3', refType: 'ref', ref: 'outside.output' }]
                }
            ]
        };
        const nodes = [node('loop'), node('child', {}, 'loop'), node('outside', outsideData)];

        const result = deleteNodeAndDependencies(nodes, [], 'loop');
        const data = result.nodes[0].data as typeof outsideData;

        expect(data.parameters[0].ref).toBeUndefined();
        expect(data.parameters[1].ref).toBe('child.keep-because-not-a-ref');
        expect(data.parameters[1].children?.[0].ref).toBe('outside.output');
        expect(outsideData.parameters[0].ref).toBe('child.output');
    });

    it('is a no-op for unrelated workflow content when the id is absent', () => {
        const nodes = [node('one'), node('two')];
        const edges = [{ id: 'edge', source: 'one', target: 'two' }] as Edge[];
        const result = deleteNodeAndDependencies(nodes, edges, 'missing');

        expect(result.nodes).toEqual(nodes);
        expect(result.edges).toEqual(edges);
    });
});
