<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type Node, type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Chosen, Heading, Input, Select, Textarea } from '../base';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';
    import { useAddParameter } from '../utils/useAddParameter.svelte';
    import { getOptions } from '../utils/NodeUtils';
    import OutputDefList from '../core/OutputDefList.svelte';
    import { fillParameterId } from '../utils/useAddParameter.svelte.js';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();
    const flowInstance = useSvelteFlow();
    const { updateNodeData: updateNodeDataInner } = flowInstance;

    const updateNodeData = (data: Record<string, any>) => {
        updateNodeDataInner(currentNodeId, data);
    };

    const updateNodeDataByEvent = (name: string, event: Event) => {
        updateNodeData({
            [name]: (event.target as any)?.value
        });
    };

    const node = {
        ...rest,
        id: currentNodeId,
        data
    } as Node;

    const externalElement = document.createElement('div') as HTMLElement;
    const options = getOptions();
    const customNode = options.customNodes![rest.type as string];
    customNode.render?.(externalElement, node, flowInstance);
    const forms = customNode.forms;

    let container: HTMLElement;
    $effect(() => {
        // 注意：由于 $effect 的 state 自动追踪问题，需要 data.expand 方在 if 里的最前面
        if (data.expand && container) {
            container.append(externalElement);
        }
    });

    $effect(() => {
        if (data) {
            customNode.onUpdate?.(externalElement, { ...node, data });
        }
    });

    $effect(() => {
        if (!data.parameters && customNode.parameters) {
            updateNodeData({
                parameters: fillParameterId(JSON.parse(JSON.stringify(customNode.parameters)))
            });
        }
    });

    $effect(() => {
        if (!data.outputDefs && customNode.outputDefs) {
            updateNodeData({
                outputDefs: fillParameterId(JSON.parse(JSON.stringify(customNode.outputDefs)))
            });
        }
    });

</script>


<NodeWrapper data={{...data, description: customNode.description}} {...rest}>

    {#snippet icon()}
        {@html customNode.icon}
    {/snippet}

    {#if customNode.parametersEnable !== false}
        <div class="heading">
            <Heading level={3}>输入参数</Heading>

            {#if customNode.parametersAddEnable !== false}
                <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
                    addParameter(currentNodeId)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                </Button>
            {/if}
        </div>

        <RefParameterList />
    {/if}


    {#if forms}
        {#each forms as form}
            {#if form.type === 'input'}
                <div class="setting-title">{form.label}</div>
                <div class="setting-item">
                    <Input
                        placeholder={form.placeholder}
                        style="width: 100%"
                        value={data[form.name] || form.defaultValue}
                        {...form.attrs}
                        onchange={(e)=>{
                                updateNodeDataByEvent(form.name,e)
                            }}
                    />
                </div>
            {:else if form.type === 'textarea'}
                <div class="setting-title">{form.label}</div>
                <div class="setting-item">
                        <Textarea
                            rows={3}
                            placeholder={form.placeholder}
                            style="width: 100%"
                            value={data[form.name] || form.defaultValue}
                            {...form.attrs}
                            onchange={(e)=>{
                                updateNodeDataByEvent(form.name,e)
                            }}
                        />
                </div>
            {:else if form.type === 'slider'}
                <div class="setting-title">{form.label}</div>
                <div class="setting-item">
                    <div class="slider-container">
                        <span>{form.description}: {data[form.name] ?? form.defaultValue}</span>
                        <input
                            class="nodrag"
                            type="range"
                            {...form.attrs}
                            value={data[form.name] ?? form.defaultValue}
                            oninput={(e) => updateNodeData({ [form.name]: parseFloat(e.target.value) })}
                        />
                    </div>
                </div>
            {:else if form.type === 'select'}
                <div class="setting-title">{form.label}</div>
                <div class="setting-item">
                    <Select items={form.options||[]} style="width: 100%" placeholder={form.placeholder} onSelect={(item)=>{
                      const newValue = item.value;
                      updateNodeData({
                              [form.name]: newValue
                      })
                }} value={data[form.name] ? [data[form.name]] : [form.defaultValue]} />
                </div>
            {:else if form.type === 'chosen'}
                <div class="setting-title">{form.label}</div>
                <div class="setting-item">
                    <Chosen style="width: 100%" placeholder={form.placeholder}
                            buttonText={form.chosen?.buttonText} onChosen={(value,label,event)=>{
                        form.chosen?.onChosen?.(updateNodeData,value,label,event);
                    }} value={data[form.chosen?.valueDataKey||""]} label={data[form.chosen?.labelDataKey||""]} />
                </div>
            {:else if form.type === 'heading'}
                <Heading level={3} mt="10px" {...form.attrs}>{form.label}</Heading>
            {/if}
        {/each}
    {/if}


    <div bind:this={container} style={customNode.rootStyle||""} class={customNode.rootClass}></div>


    {#if customNode.outputDefsEnable !== false}
        <div class="heading">
            <Heading level={3} mt="10px">输出参数</Heading>

            {#if customNode.outputDefsAddEnable !== false}
                <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
                    addParameter(currentNodeId,'outputDefs')
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                </Button>
            {/if}
        </div>
        <OutputDefList />
    {/if}

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



