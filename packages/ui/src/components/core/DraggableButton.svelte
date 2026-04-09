<script lang="ts">
    import { Button } from '../base/';
    import { type Node, useSvelteFlow } from '@xyflow/svelte';
    import { store } from '#store/stores.svelte';
    import { genShortId } from '../utils/IdGen';

    const {
        icon,
        title,
        type,
        description,
        extra
    }: {
        icon: string;
        title: string;
        type: string;
        description: string;
        extra?: Partial<Node['data']>;
    } = $props();

    const svelteFlow = useSvelteFlow();

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

    const onClick = () => {
        // 获取视口尺寸
        const width = window.innerWidth;
        const height = window.innerHeight;

        // 使用 screenToFlowPosition 将屏幕中心坐标转换为流程图坐标
        const centerPosition = svelteFlow.screenToFlowPosition({
            x: width / 2,
            y: height / 2
        });

        const newNode = {
            id: `node_${genShortId()}`,
            type,
            position: centerPosition,
            data: {
                title,
                description,
                ...extra
            }
        } satisfies Node;

        store.addNode(newNode);
        store.selectNodeOnly(newNode.id);
    };
</script>

<Button draggable ondragstart={onDragStart} onclick={onClick} data-node-type={type}
    >{@html icon} {title}</Button
>
