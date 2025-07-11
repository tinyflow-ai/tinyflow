<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading, Input, Select } from '../base';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';
    import { useAddParameter } from '../utils/useAddParameter.svelte';
    import { getOptions } from '../utils/NodeUtils';
    import { onMount } from 'svelte';
    import OutputDefList from '../core/OutputDefList.svelte';
    import type { SelectItem } from '../../types';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();

    const options = getOptions();

    let searchEngines = $state<SelectItem[]>([]);
    onMount(async () => {
        const newLLMs = await options.provider?.searchEngine?.();
        searchEngines.push(...(newLLMs || []));
    });

    const { updateNodeData } = useSvelteFlow();

    $effect(() => {
        if (!data.outputDefs || data.outputDefs.length === 0) {
            addParameter(currentNodeId, 'outputDefs',
                {
                    name: 'documents',
                    dataType: 'Array',
                    nameDisabled: true,
                    dataTypeDisabled: true,
                    addChildDisabled: true,
                    deleteDisabled: true,
                    children: [
                        {
                            name: 'title',
                            dataType: 'String',
                            nameDisabled: true,
                            dataTypeDisabled: true,
                            deleteDisabled: true
                        },
                        {
                            name: 'content',
                            dataType: 'String',
                            nameDisabled: true,
                            dataTypeDisabled: true,
                            deleteDisabled: true
                        }
                    ]
                }
            );
        }
    });

</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
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

    <Heading level={3} mt="10px">搜索引擎设置</Heading>
    <div class="setting-title">搜索引擎</div>
    <div class="setting-item">
        <Select items={searchEngines} style="width: 100%" placeholder="请选择搜索引擎" onSelect={(item)=>{
              const newValue = item.value;
              updateNodeData(currentNodeId, ()=>{
                  return {
                      engine: newValue
                  }
              })
        }} value={data.engine ? [data.engine] : []} />
    </div>


    <div class="setting-title">关键字</div>
    <div class="setting-item">
        <Input placeholder="请输入关键字" style="width: 100%"
               value={data.keyword}
               onchange={(e)=>{
            const newValue = e.target.value;
            updateNodeData(currentNodeId, ()=>{
                return {
                    keyword: newValue
                }
            })
        }}
        />
    </div>

    <div class="setting-title">搜索数据量</div>
    <div class="setting-item">
        <Input placeholder="搜索的数据条数" style="width: 100%" value={data.limit}
               onchange={(e)=>{
            const newValue = e.target.value;
            updateNodeData(currentNodeId, ()=>{
                return {
                    limit: newValue
                }
            })
        }} />
    </div>


    <div class="heading">
        <Heading level={3} mt="10px">输出参数</Heading>
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



