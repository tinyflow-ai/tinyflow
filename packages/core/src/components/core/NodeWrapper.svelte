<script lang="ts">
    import { Handle, type NodeProps, Position, useSvelteFlow } from '@xyflow/svelte';
    import { Collapse } from '../base';
    import type { Snippet } from 'svelte';

    const { data, id = '', icon, children }: {
        data: NodeProps['data'],
        id?: NodeProps['id'],
        icon: Snippet,
        children: Snippet
    } = $props();

    let activeKeys = data.expand ? ['key'] : [];
    const { updateNodeData } = useSvelteFlow();

    const items = [{
        key: 'key',
        icon,
        title: data.title as string,
        description: data.description as string,
        content: children
    }];
</script>
<div class="tf-node-wrapper">
    <div class="tf-node-wrapper-title">
        TinyFlow
    </div>
    <div class="tf-node-wrapper-body">
        <Collapse {items} activeKeys={activeKeys} onChange={(_,actionKeys) => {
            updateNodeData(id, {expand: actionKeys?.includes('key')})
        }} />
    </div>
</div>

<Handle type="target" position={Position.Left} style=" left: -12px;top: 20px" />
<Handle type="source" position={Position.Right} style="right: -12px;top: 20px" />


