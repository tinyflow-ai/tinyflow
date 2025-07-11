<script lang="ts">
    import { Input, Textarea } from '../base';
    import { Button, Checkbox, FloatingTrigger, Select } from '../base/index.js';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
    import { parameterDataTypes } from '../utils/Consts';
    import type { SelectItem, Parameter } from '../../types';

    const { parameter, index }: {
        parameter: Parameter,
        index: number
    } = $props();


    let currentNodeId = getCurrentNodeId();
    let node = $derived(useNodesData(currentNodeId));
    let param = $derived.by(() => {
        return {
            ...parameter,
            ...(node?.data?.parameters as Array<Parameter>)[index]
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

    const updateName = (event: Event) => {
        const newValue = (event.target as any).value;
        updateParameter('name', newValue);
    };


    const updateRequired = (event: Event) => {
        const checked = (event.target as any).checked;
        updateParameter('required', checked);
    };


    const updateDataType = (item: SelectItem) => {
        const dataType = item.value as string;
        if (dataType) {
            updateParameter('dataType', dataType);
        }
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
                    参数类型：
                    <Select items={parameterDataTypes} style="width: 100%" onSelect={updateDataType}
                            value={param.dataType ?[param.dataType]:['String']} />
                </div>
                <div class="input-more-item">
                    默认值：
                    <Textarea rows={1} style="width: 100%;"
                              value={param.defaultValue}
                              onchange={event => {
                        const newValue = (event.target as any).value;
                        updateParameter('defaultValue', newValue)
                    }}
                    />
                </div>
                <div class="input-more-item">
                    参数描述：
                    <Textarea rows={3} style="width: 100%;"
                              value={param.description}
                              onchange={event => {
                        const newValue = (event.target as any).value;
                        updateParameter('description', newValue)
                    }}
                    />
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


