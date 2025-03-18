<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading, Select } from '../base';
    import { Textarea } from '../base/index.js';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { useAddParameter } from '../utils/useAddParameter';
    import OutputDefList from '../core/OutputDefList.svelte';
    import { getOptions } from '../utils/NodeUtils';
    import type { Item } from '../../Tinyflow';
    import { onMount } from 'svelte';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();


    const { updateNodeData } = useSvelteFlow();

    const options = getOptions();

    let InternalArray = $state<Item[]>([]);
    onMount(async () => {
        const newInternals = await options.provider?.internal?.();
        InternalArray.push(...(newInternals || []));
    });


</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" p-id="2577" width="200" height="200"><path d="M312.096 408.576l67.84 67.84 45.312-45.216a32 32 0 0 1 45.248 45.248l-45.28 45.248 90.496 90.496 45.28-45.216a32 32 0 0 1 45.248 45.248l-45.248 45.248 67.904 67.872-90.528 90.528a224.064 224.064 0 0 1-292.544 21.024L176.32 906.368a32 32 0 0 1-45.248-45.248l69.504-69.472a224.064 224.064 0 0 1 21.024-292.576l90.496-90.496z m0 90.496L266.848 544.32a160 160 0 0 0-4.8 221.28l4.8 4.992a160 160 0 0 0 221.248 4.8l5.024-4.8 45.248-45.248-226.272-226.24z m610.272-384a32 32 0 0 1 0 45.248l-69.44 69.504a224.064 224.064 0 0 1-21.056 292.544l-90.528 90.528-316.8-316.8 90.56-90.496a224.064 224.064 0 0 1 292.544-21.024l69.44-69.504a32 32 0 0 1 45.28 0zM565.344 246.08l-5.024 4.8-45.248 45.248 226.272 226.272 45.248-45.248a160 160 0 0 0 4.8-221.28l-4.8-4.992a160 160 0 0 0-221.248-4.8z" p-id="2578"></path></svg>
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

    <Heading level={3} mt="10px">接口</Heading>
    <div class="setting-title">选择内部接口</div>
    <div class="setting-item">
        <Select items={InternalArray} style="width: 100%" placeholder="请选择内部接口" onSelect={(item)=>{
              const newValue = item.value;
              updateNodeData(currentNodeId, ()=>{
                  return {
                      method: newValue
                  }
              })
        }} value={data.method ? [data.method] : ['']} />
    </div>

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

    .setting-title {
        font-size: 12px;
        color: #999;
        margin-bottom: 4px;
        margin-top: 10px;
    }

    .setting-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        gap: 10px;
    }

</style>