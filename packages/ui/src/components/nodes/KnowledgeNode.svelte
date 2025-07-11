<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading, Input, Select } from '../base';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '#store/nodeContext';
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

    let knowledgeArray = $state<SelectItem[]>([]);
    onMount(async () => {
        const newLLMs = await options.provider?.knowledge?.();
        knowledgeArray.push(...(newLLMs || []));
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
                        },
                        {
                            name: 'documentId',
                            dataType: 'Number',
                            nameDisabled: true,
                            dataTypeDisabled: true,
                            deleteDisabled: true
                        },
                        {
                            name: 'knowledgeId',
                            dataType: 'Number',
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
                d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path>
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

    <Heading level={3} mt="10px">知识库设置</Heading>
    <div class="setting-title">知识库</div>
    <div class="setting-item">
        <Select items={knowledgeArray} style="width: 100%" placeholder="请选择知识库" onSelect={(item)=>{
              const newValue = item.value;
              updateNodeData(currentNodeId, ()=>{
                  return {
                      knowledgeId: newValue
                  }
              })
        }} value={data.knowledgeId ? [data.knowledgeId] : []} />
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


    <div class="setting-title">获取数据量</div>
    <div class="setting-item">
        <Input placeholder="搜索的数据条数" style="width: 100%" onchange={(e)=>{
            const newValue = e.target.value;
            updateNodeData(currentNodeId, ()=>{
                return {
                    limit: newValue
                }
            })
        }} value={data.limit || ''} />
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



