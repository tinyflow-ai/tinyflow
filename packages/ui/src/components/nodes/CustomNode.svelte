<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading } from '../base';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { useAddParameter } from '../utils/useAddParameter';
    import { getOptions } from '../utils/NodeUtils';
    import OutputDefList from '../core/OutputDefList.svelte';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();
    const { updateNodeData } = useSvelteFlow();


    // let isRendered = $state(false);
    let container: HTMLElement;

    console.log('rest', { ...rest });

    const externalElement = document.createElement('div') as HTMLElement;
    const options = getOptions();
    const customNode = options.customNodes![rest.type as string];
    customNode.render?.(externalElement);

    $effect(() => {
        // 注意：由于 $effect 的 state 自动追踪问题，需要 data.expand 方在 if 里的最前面
        if (data.expand && container) {
            container.append(externalElement);
        }
    });


</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        {@html customNode.icon}
    {/snippet}

    <div class="heading">
        <Heading level={3}>输入参数</Heading>
        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId)
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>

    <RefParameterList />


    <div bind:this={container}></div>


    <div class="heading">
        <Heading level={3} mt="10px">输出参数</Heading>
        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId,'outputDefs')
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>
    <OutputDefList />

</NodeWrapper>

<style>
    .heading {
        display: flex;
        margin-bottom: 10px;
    }
</style>



