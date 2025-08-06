<script lang="ts">
    import { Input, MenuButton, Textarea } from '../base';
    import { Button, FloatingTrigger, Select } from '../base/index.js';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';
    import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
    import { contentTypes, parameterRefTypes } from '#consts';
    import { useRefOptions } from '../utils/useRefOptions.svelte';
    import { onMount } from 'svelte';
    import type { Parameter } from '#types';

    onMount(() => {
        if (!param.refType) {
            updateRefType({ value: 'ref' }); // 设置数据来源默认值
        }
    });

    const { parameter, index, dataKeyName, useChildrenOnly, showContentType = false }: {
        parameter: Parameter,
        index: number,
        dataKeyName: string,
        useChildrenOnly?: boolean,
        showContentType?: boolean,
    } = $props();


    let currentNodeId = getCurrentNodeId();
    let node = useNodesData(currentNodeId);
    let param = $derived.by(() => {
        return {
            ...parameter,
            ...(node?.current?.data?.[dataKeyName] as Array<Parameter>)[index]
        };
    });

    const { updateNodeData } = useSvelteFlow();

    const updateParam = (key: string, value: any) => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data?.[dataKeyName] as Array<Parameter>;
            parameters[index] = {
                ...parameters[index],
                [key]: value
            };
            return {
                [dataKeyName]: parameters
            };
        });
    };


    const updateParamByEvent = (name: string, event: Event) => {
        const newValue = (event.target as any).value;
        updateParam(name, newValue);
    };


    const updateRef = (item: any) => {
        const newValue = item.value;
        updateParam('ref', newValue);
    };


    const updateRefType = (item: any) => {
        const newValue = item.value;
        updateParam('refType', newValue);
    };

    const updateContentType = (item: any) => {
        const newValue = item.value;
        updateParam('contentType', newValue);
    };


    let triggerObject: any;
    const handleDelete = () => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data?.[dataKeyName] as Array<Parameter>;
            parameters.splice(index, 1);
            return {
                [dataKeyName]: [...parameters]
            };
        });
        triggerObject?.hide();
    };
    let selectItems = useRefOptions(useChildrenOnly);
</script>


<div class="input-item">
    <Input style="width: 100%;" value={param.name} placeholder="请输入参数名称"
           disabled={param.nameDisabled === true}
           oninput={(event)=>updateParamByEvent('name', event)} />
</div>
<div class="input-item">
    {#if param.refType === 'fixed'}
        <Input value={param.value} placeholder="请输入参数值" oninput={(event)=>updateParamByEvent('value', event)} />
    {:else if (param.refType !== 'input')}
        <Select items={selectItems.current} style="width: 100%" defaultValue={["ref"]} value={[param.ref]}
                expandAll
                onSelect={updateRef} />
    {/if}
</div>
<div class="input-item">
    <FloatingTrigger placement="bottom" bind:this={triggerObject}>
        <MenuButton />
        {#snippet floating()}
            <div class="input-more-setting">
                <div class="input-more-item">
                    数据来源：
                    <Select items={parameterRefTypes} style="width: 100%" defaultValue={["ref"]}
                            value={param.refType ? [param.refType] : []}
                            onSelect={updateRefType}
                    />
                </div>
                {#if showContentType }
                    <div class="input-more-item">
                        数据内容：
                        <Select items={contentTypes} style="width: 100%" defaultValue={["text"]}
                                value={param.contentType ? [param.contentType] : []}
                                onSelect={updateContentType}
                        />
                    </div>
                {/if}
                <div class="input-more-item">
                    默认值：
                    <Textarea rows={1} style="width: 100%;" onchange={(event)=>{
                        updateParamByEvent('defaultValue', event)
                    }} value={param.defaultValue} />
                </div>
                <div class="input-more-item">
                    参数描述：
                    <Textarea rows={3} style="width: 100%;" onchange={(event)=>{
                        updateParamByEvent('description', event)
                    }} value={param.description} />
                </div>

                <div class="input-more-item">
                    <Button onclick={handleDelete}>删除</Button>
                </div>
            </div>
        {/snippet}
    </FloatingTrigger>
</div>


<style lang="less">

  .input-item {
    display: flex;
    align-items: center;
  }

  .input-more-setting {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);

    .input-more-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 12px;
      color: #666;
    }
  }

</style>


