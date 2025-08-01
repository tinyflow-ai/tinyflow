<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading, Select } from '../base';
    import { MenuButton, Textarea } from '../base/index.js';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';
    import { useAddParameter } from '../utils/useAddParameter.svelte';
    import { getOptions } from '../utils/NodeUtils';
    import { onMount } from 'svelte';
    import OutputDefList from '../core/OutputDefList.svelte';
    import type { SelectItem } from '#types';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();

    const options = getOptions();

    let llmArray = $state<SelectItem[]>([]);
    onMount(async () => {
        const newLLMs = await options.provider?.llm?.();
        llmArray.push(...(newLLMs || []));
    });

    const { updateNodeData } = useSvelteFlow();
    const setOutType = (value: string) => {
        updateNodeData(currentNodeId, () => {
            return {
                outType: value
            };
        });

        if (value === 'text') {
            updateNodeData(currentNodeId, {
                outputDefs: [{
                    name: 'output',
                    dataType: 'String',
                    dataTypeDisabled: true,
                    deleteDisabled: true
                }]
            });
        } else {
            updateNodeData(currentNodeId, {
                outputDefs: []
            });
        }
    };

    $effect(() => {
        if (!data.outType) {
            setOutType('text');
        }
    });


</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path>
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

    <Heading level={3} mt="10px">模型设置</Heading>
    <div class="setting-title">模型</div>
    <div class="setting-item">
        <Select items={llmArray} style="width: 100%" placeholder="请选择模型" onSelect={(item)=>{
              const newValue = item.value;
              updateNodeData(currentNodeId, ()=>{
                  return {
                      llmId: newValue
                  }
              })
        }} value={data.llmId ? [data.llmId] : []} />
        <MenuButton />
    </div>

    <!-- 在原有采样参数部分添加事件阻止 -->
    <div class="setting-title">采样参数</div>

    <div class="setting-item">
        <div class="slider-container">
            <span>Temperature: {data.temperature ?? 0.5}</span>
            <input
                class="nodrag"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={data.temperature ?? 0.5}
                oninput={(e) => updateNodeData(currentNodeId, { temperature: parseFloat(e.target.value) })}
            />
        </div>
    </div>

    <div class="setting-item">
        <div class="slider-container">
            <span>Top P: {data.topP ?? 0.9}</span>
            <input
                class="nodrag"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={data.topP ?? 0.9}
                oninput={(e) => updateNodeData(currentNodeId, { topP: parseFloat(e.target.value) })}
            />
        </div>
    </div>

    <div class="setting-item">
        <div class="slider-container">
            <span>Top K: {data.topK ?? 50}</span>
            <input
                class="nodrag"
                type="range"
                min="0"
                max="100"
                step="1"
                value={data.topK ?? 50}
                oninput={(e) => updateNodeData(currentNodeId, { topK: parseInt(e.target.value) })}
            />
        </div>
    </div>

    <div class="setting-title">系统提示词</div>
    <div class="setting-item">
        <Textarea
            rows={5}
            placeholder="请输入系统提示词"
            style="width: 100%"
            value={data.systemPrompt || ''}
            oninput={(e)=>{
                updateNodeData(currentNodeId, {
                    systemPrompt: e.target.value
                });
            }}

        />
    </div>

    <div class="setting-title">用户提示词</div>
    <div class="setting-item">
        <Textarea
            rows={5}
            placeholder="请输入用户提示词"
            style="width: 100%"
            value={data.userPrompt || ''}
            oninput={(e)=>{
                updateNodeData(currentNodeId, {
                    userPrompt: e.target.value
                });
            }}
        />
    </div>

    <div class="heading">
        <Heading level={3}>输出参数</Heading>
        <Select items={[{
            label: '文本',
            value: 'text'
        }, {
            label: 'JSON',
            value: 'json'
        }]} style="width: 100px;margin-left: auto" defaultValue="text" onSelect={(item)=>{
              setOutType(item.value);
        }} value={data.outType ? [data.outType] : []} />

        {#if data.outType === 'json'}
            <Button class="input-btn-more" style="margin-left: 10px" onclick={()=>{
            addParameter(currentNodeId,'outputDefs')
        }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
            </Button>
        {/if}
    </div>
    <OutputDefList />

</NodeWrapper>

<style>
    .heading {
        display: flex;
        align-items: center;
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

    /* 新增样式 */
    .slider-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .slider-container span {
        font-size: 12px;
        color: #666;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input[type="range"] {
        width: 100%;
        height: 4px;
        background: #ddd;
        border-radius: 2px;
        outline: none;
        -webkit-appearance: none;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 14px;
        height: 14px;
        background: #007bff;
        border-radius: 50%;
        cursor: pointer;
    }
</style>



