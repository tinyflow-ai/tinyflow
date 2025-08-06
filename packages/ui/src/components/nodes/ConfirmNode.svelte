<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading } from '../base';
    import { Textarea } from '../base/index.js';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';
    import { useAddParameter } from '../utils/useAddParameter.svelte';
    import OutputDefList from '../core/OutputDefList.svelte';
    import ConfirmParameterList from '../core/ConfirmParameterList.svelte';
    import type { Parameter } from '#types';
    import { deepEqual } from '#components/utils/deepEqual';


    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();


    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameter();
    const { updateNodeData } = useSvelteFlow();

    $effect(() => {
        if (data.confirms) {
            const outputDefs = data.confirms.map((confirm: Parameter) => {
                return {
                    // id?: string;
                    // name?: string;
                    // nameDisabled?: boolean;
                    // dataType?: string;
                    // dataTypeDisabled?: boolean;
                    // ref?: string;
                    // refType?: string;
                    // value?: string;
                    // description?: string;
                    // required?: boolean;
                    // defaultValue?: string;
                    // deleteDisabled?: boolean;
                    // addChildDisabled?: boolean;
                    // children?: Parameter[];
                    ...confirm,
                    nameDisabled: true,
                    dataTypeDisabled: true,
                    dataType: confirm.formType === 'checkbox' || confirm.formType === 'select' ? 'Array' : 'String',
                    addChildDisabled: true
                } as Parameter;
            });

            // 判断 outputDefs 与 data.outputDefs 是否完全一致
            // 如果不判断，则会造成死循环更新
            if (!deepEqual(outputDefs, data.outputDefs)) {
                updateNodeData(currentNodeId, () => {
                    return {
                        outputDefs
                    };
                });
            }
        }
    });


</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path>
        </svg>
    {/snippet}

    <div class="heading">
        <Heading level={3}>确认数据</Heading>
        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId, 'confirms')
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>
    <ConfirmParameterList dataKeyName="confirms" noneParameterText="无确认数据" />

    <Heading level={3} mt="10px">确认消息</Heading>
    <div class="setting-title">消息内容</div>
    <div class="setting-item">
        <Textarea rows={5} placeholder="请输入用户需要确认的消息内容"
                  style="width: 100%" onchange={(e:any)=>{
            updateNodeData(currentNodeId, ()=>{
                return {
                    message: e.target.value
                }
            })
        }} value={data.message as string||""} />
    </div>


    <div class="heading">
        <Heading level={3} mt="10px">输出参数</Heading>
    </div>
    <OutputDefList placeholder="" />

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



