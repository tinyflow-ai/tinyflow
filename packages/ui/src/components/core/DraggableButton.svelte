<script lang="ts">
    import { Button } from '../base/';
    import { type Node } from '@xyflow/svelte';

    const { icon, title, type, description, extra }: {
        icon: string,
        title: string,
        type: string,
        description: string,
        extra?: Partial<Node['data']>,
    } = $props();

    const onDragStart = (event: DragEvent) => {
        if (!event.dataTransfer) {
            return null;
        }
        const node = {
            type,
            data: {
                title,
                description,
                ...extra
            }
        };
        event.dataTransfer.setData('application/tinyflow', JSON.stringify(node));
        event.dataTransfer.effectAllowed = 'move';
    };
</script>

<Button draggable ondragstart={onDragStart} data-node-type={type}>{@html icon} {title}</Button>
