<script lang="ts">
    import { Handle, type NodeProps, NodeToolbar, Position, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Collapse } from '../base';
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


<NodeToolbar position={Position.Top} offset={860} align="end">
    <div class="tf-node-toolbar">
        <Button class="tf-node-toolbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path>
            </svg>
        </Button>
        <Button class="tf-node-toolbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
            </svg>
        </Button>
        <Button class="tf-node-toolbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
            </svg>
        </Button>
    </div>
</NodeToolbar>

<div class="tf-node-wrapper">
    <div class="tf-node-wrapper-title">
        TinyFlow.ai
    </div>
    <div class="tf-node-wrapper-body">
        <Collapse {items} activeKeys={activeKeys} onChange={(_,actionKeys) => {
            updateNodeData(id, {expand: actionKeys?.includes('key')})
        }} />
    </div>
</div>

<Handle type="target" position={Position.Left} style=" left: -12px;top: 20px" />
<Handle type="source" position={Position.Right} style="right: -12px;top: 20px" />

<style>
    .tf-node-toolbar {
        display: flex;
        gap: 5px;
        padding: 5px;
        border-radius: 5px;
        background: #fff;
        border: 1px solid #eee;
        box-shadow:  0 0 5px rgba(0,0,0,0.1);
    }
    :global(.tf-node-toolbar-item) {
        border: 1px solid transparent;
    }
</style>


