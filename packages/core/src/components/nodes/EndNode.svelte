<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import type { NodeProps } from '@xyflow/svelte';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

</script>


<NodeWrapper {data} {...rest}>
    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path>
        </svg>
    {/snippet}
    aaa
</NodeWrapper>



