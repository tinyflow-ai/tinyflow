<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { Handle, type NodeProps, Position } from '@xyflow/svelte';
    import { Button, Heading } from '../base';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { useAddParameter } from '../utils/useAddParameter';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();


    $effect(() => {
        if (!data.parameters || data.parameters.length === 0) {
            addParameter(currentNodeId, 'parameters', {
                name: 'loopVar',
                dataType: 'String',
                nameDisabled: true,
                deleteDisabled: true
            });
        }
    });

</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
        </svg>
    {/snippet}

    {#snippet handle()}
        <Handle type="source" position={Position.Bottom} id="loop_handle" style="bottom: -12px;width: 100px"
                class="loop_handle_wrapper" />
    {/snippet}

    <div class="heading">
        <Heading level={3}>循环变量</Heading>
<!--        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{-->
<!--            addParameter(currentNodeId)-->
<!--        }}>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">-->
<!--                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>-->
<!--            </svg>-->
<!--        </Button>-->
    </div>
    <RefParameterList />

    <div class="heading">
        <Heading level={3}>输出参数</Heading>
        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId,'outputDefs')
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>
    <RefParameterList noneParameterText="无输出参数" dataKeyName="outputDefs" useChildrenOnly={true} />

</NodeWrapper>

<style lang="less">
  .heading {
    display: flex;
    margin: 10px 0;
    align-items: center;
  }

  :global(.loop_handle_wrapper ) {
    &::after {
      //display: none;
      content: '循环体';
      width: 100px;
      height: 20px;
      background: #000;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>



