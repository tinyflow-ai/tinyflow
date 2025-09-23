<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading, Select } from '../base';
    import { Textarea } from '../base/index.js';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';
    import { useAddParameter } from '../utils/useAddParameter.svelte';
    import OutputDefList from '../core/OutputDefList.svelte';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();
    // 添加生命周期函数
    import { onMount } from 'svelte';
    // 在组件挂载时检查并设置默认值
    onMount(() => {
        if (!data.engine) {
            updateNodeData(currentNodeId, ()=>{
                return {
                    engine: 'qlexpress'
                }
            })
        }
    });
    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();


    const { updateNodeData } = useSvelteFlow();

    const engines = [
        { label: 'QLExpress', value: 'qlexpress' },
        { label: 'Groovy', value: 'groovy' },
        { label: 'JavaScript', value: 'js' }
    ];


</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path>
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

    <Heading level={3} mt="10px">代码</Heading>
    <div class="setting-title">执行引擎</div>
    <div class="setting-item">
        <Select items={engines} style="width: 100%" placeholder="请选择执行引擎" onSelect={(item)=>{
              const newValue = item.value;
              updateNodeData(currentNodeId, ()=>{
                  return {
                      engine: newValue
                  }
              })
        }} value={data.engine ? [data.engine] : ['qlexpress']} />
    </div>

    <div class="setting-title">执行代码</div>
    <div class="setting-item">
        <Textarea rows={10} placeholder="请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value" style="width: 100%" onchange={(e:any)=>{
            updateNodeData(currentNodeId, ()=>{
                return {
                    code: e.target.value
                }
            })
        }} value={data.code as string||""} />
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



