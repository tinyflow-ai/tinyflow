<script lang="ts">
    import { Input, Textarea } from '../base';
    import { Button, Checkbox, FloatingTrigger, Select } from '../base/index.js';
    import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
    import { contentTypes, startFormTypes } from '#consts';
    import type { Parameter } from '#types';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';

    const { parameter, index }: {
        parameter: Parameter,
        index: number
    } = $props();


    let currentNodeId = getCurrentNodeId();
    let node = useNodesData(currentNodeId);
    let param = $derived.by(() => {
        return {
            ...parameter,
            ...(node?.current?.data?.parameters as Array<Parameter>)[index]
        };
    });

    const { updateNodeData } = useSvelteFlow();

    const updateParameter = (key: string, value: any) => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data.parameters as Array<Parameter>;
            (parameters[index] as any)[key] = value;
            return {
                parameters
            };
        });
    };

    const updateParamByEvent = (name: string, event: Event) => {
        const newValue = (event.target as any).value;
        updateParameter(name, newValue);
    };

    const updateName = (event: Event) => {
        const newValue = (event.target as any).value;
        updateParameter('name', newValue);
    };

    const updateRequired = (event: Event) => {
        const checked = (event.target as any).checked;
        updateParameter('required', checked);
    };

    const updateFormType = (item: any) => {
        const newValue = item.value;
        updateParameter('formType', newValue);
    };

    const updateContentType = (item: any) => {
        const newValue = item.value;
        updateParameter('contentType', newValue);
    };


    let triggerObject: any;
    const handleDelete = () => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data.parameters as Array<Parameter>;
            parameters.splice(index, 1);
            return {
                parameters: [...parameters]
            };
        });
        triggerObject?.hide();
    };

</script>


<div class="input-item">
    <Input style="width: 100%;" value={param.name} placeholder="请输入参数名称"
           oninput={updateName} />
</div>
<div class="input-item">
    <Checkbox checked={param.required} onchange={updateRequired} />
</div>
<div class="input-item">
    <FloatingTrigger placement="bottom" bind:this={triggerObject}>
        <Button class="input-btn-more">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path>
            </svg>
        </Button>
        {#snippet floating()}
            <div class="input-more-setting">
                <div class="input-more-item">
                    数据内容：
                    <Select items={contentTypes} style="width: 100%" defaultValue={["text"]}
                            value={param.contentType ? [param.contentType] : []}
                            onSelect={updateContentType}
                    />
                </div>
                <div class="input-more-item">
                    输入方式：
                    <Select items={startFormTypes} style="width: 100%" defaultValue={["input"]}
                            value={param.formType ? [param.formType] : []}
                            onSelect={updateFormType}
                    />
                </div>

                {#if param.formType === "radio" || param.formType === "checkbox" || param.formType === "select" }
                    <div class="input-more-item">
                        数据选项：
                        <Textarea rows={3} style="width: 100%;" onchange={(event)=>{
                        updateParameter('enums', event.target?.value.trim().split("\n"))
                    }} value={param.enums?.join("\n")} placeholder="一行一个选项" />
                    </div>
                {/if}

                <div class="input-more-item">
                    数据标题：
                    <Textarea rows={1} style="width: 100%;" onchange={(event)=>{
                        updateParamByEvent('formLabel', event)
                    }} value={param.formLabel} />
                </div>

                <div class="input-more-item">
                    数据描述：
                    <Textarea rows={2} style="width: 100%;" onchange={(event)=>{
                        updateParamByEvent('formDescription', event)
                    }} value={param.formDescription} />
                </div>

                <div class="input-more-item">
                    占位符：
                    <Textarea rows={2} style="width: 100%;" onchange={(event)=>{
                        updateParamByEvent('formPlaceholder', event)
                    }} value={param.formPlaceholder} />
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

  .input-item-inline {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;
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


