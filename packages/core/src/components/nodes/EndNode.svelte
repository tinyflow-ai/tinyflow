<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading } from '../base';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { genShortId } from '../utils/IdGen';
    import RefParameterList from '../core/RefParameterList.svelte';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    const currentNodeId = getCurrentNodeId();


    const { updateNodeData } = useSvelteFlow();

    const onclick = () => {
        updateNodeData(currentNodeId, (node) => {
            let outputParameters = node.data.outputParameters as Array<any>;
            if (outputParameters) {
                outputParameters.push({
                    id: genShortId()
                });
            } else {
                outputParameters = [{ id: genShortId() }];
            }
            return {
                outputParameters: [...outputParameters]
            };
        });
    };

</script>


<NodeWrapper {data} {...rest}>
    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path>
        </svg>
    {/snippet}
    <div class="heading">
        <Heading level={3}>输出参数</Heading>
        <Button class="input-btn-more" style="margin-left: auto" {onclick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>
    <RefParameterList noneParameterText="无输出参数" dataKeyName="outputParameters" />
</NodeWrapper>


<style lang="less">

  .heading {
    display: flex;
    margin-bottom: 10px;
  }

</style>


