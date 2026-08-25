import { describe, expect, it } from 'vitest';
import type { Edge, Node } from '@xyflow/svelte';
import { createStore } from './stores.svelte';

const node = (id: string): Node => ({ id, data: {}, position: { x: 0, y: 0 } });

describe('createStore', () => {
    it('keeps nodes, edges, and viewport isolated between instances', () => {
        const first = createStore();
        const second = createStore();
        const firstViewport = { x: 10, y: 20, zoom: 0.75 };
        const secondViewport = { x: -30, y: 40, zoom: 1.5 };

        first.init([node('first')], [{ id: 'first-edge', source: 'first', target: 'first' }] as Edge[], firstViewport);
        second.init([node('second')], [], secondViewport);
        first.addNode(node('first-added'));

        expect(first.getNodes().map(({ id }) => id)).toEqual(['first', 'first-added']);
        expect(second.getNodes().map(({ id }) => id)).toEqual(['second']);
        expect(first.getEdges()).toHaveLength(1);
        expect(second.getEdges()).toHaveLength(0);
        expect(first.getViewport()).toEqual(firstViewport);
        expect(second.getViewport()).toEqual(secondViewport);
    });

    it('resets viewport to the documented default when reinitialized without one', () => {
        const store = createStore();
        store.init([], [], { x: 1, y: 2, zoom: 3 });
        store.init([], []);

        expect(store.getViewport()).toEqual({ x: 250, y: 100, zoom: 1 });
    });
});
