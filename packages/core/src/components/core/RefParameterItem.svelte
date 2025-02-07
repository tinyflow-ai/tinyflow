<script lang="ts">
    import { Input, MenuButton, Textarea } from '../base';
    import { Button, FloatingTrigger, Select } from '../base/index.js';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
    import { type Parameter, parameterRefTypes } from '../utils/Consts';
    import { useRefOptions } from '../utils/useRefOptions';

    const { parameter, index, dataKeyName }: {
        parameter: Parameter,
        index: number,
        dataKeyName: string,
    } = $props();


    let currentNodeId = getCurrentNodeId();
    let node = $derived(useNodesData(currentNodeId));
    let param = $derived.by(() => {
        return {
            ...parameter,
            ...($node?.data[dataKeyName] as Array<Parameter>)[index]
        };
    });

    const { updateNodeData } = useSvelteFlow();

    const updateAttribute = (key: string, value: any) => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data[dataKeyName] as Array<Parameter>;
            parameters[index] = {
                ...parameters[index],
                [key]: value
            };
            return {
                [dataKeyName]: parameters
            };
        });
    };


    const updateName = (event: Event) => {
        const newValue = (event.target as any).value;
        updateAttribute('name', newValue);
    };


    const updateValue = (event: Event) => {
        const newValue = (event.target as any).value;
        updateAttribute('value', newValue);
    };


    const updateRef = (item: any) => {
        const newValue = item.value;
        updateAttribute('ref', newValue);
    };


    const updateRefType = (item: any) => {
        const newValue = item.value;
        updateAttribute('refType', newValue);
    };


    let triggerObject: any;
    const handleDelete = () => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data[dataKeyName] as Array<Parameter>;
            parameters.splice(index, 1);
            return {
                [dataKeyName]: [...parameters]
            };
        });
        triggerObject?.hide();
    };
    const selectItems = useRefOptions();
</script>


<div class="input-item">
    <Input style="width: 100%;" value={param.name} placeholder="请输入参数名称"
           oninput={updateName} />
</div>
<div class="input-item">
    {#if param.refType === 'input'}
        <Input value={param.value} placeholder="请输入参数值" oninput={updateValue} />
    {:else}
        <Select items={$selectItems} style="width: 100%" defaultValue={["ref"]} value={[param.ref]}
                expandAll
                onSelect={updateRef} />
    {/if}
</div>
<div class="input-item">
    <FloatingTrigger placement="bottom" bind:this={triggerObject}>
        <MenuButton/>
        {#snippet floating()}
            <div class="input-more-setting">
                <div class="input-more-item">
                    数据来源：
                    <Select items={parameterRefTypes} style="width: 100%" defaultValue={["ref"]}
                            value={param.refType ? [param.refType] : []}
                            onSelect={updateRefType}
                    />
                </div>
                <div class="input-more-item">
                    默认值：
                    <Textarea rows={1} style="width: 100%;" onchange={(event:Event)=>{
                        const value =  (event.target as any).value;
                        updateAttribute('defaultValue', value)
                    }} />
                </div>
                <div class="input-more-item">
                    参数描述：
                    <Textarea rows={3} style="width: 100%;" onchange={(event:MouseEvent)=>{
                        const value =  (event.target as any).value;
                        updateAttribute('description', value)
                    }} />
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


