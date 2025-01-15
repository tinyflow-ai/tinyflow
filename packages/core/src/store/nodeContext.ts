import { getContext } from 'svelte';
import { type Node, useStore } from '@xyflow/svelte';
import { get } from 'svelte/store';

export function getCurrentNodeId(): string {
    return getContext<string>('svelteflow__node_id');
}

export function getCurrentNode(): Node {
    const { nodeLookup } = useStore();
    return get(nodeLookup).get(getCurrentNodeId())?.internals.userNode as Node;
}

export function getCurrentNodeData(): Node['data'] {
    return getCurrentNode()?.['data'];
}
