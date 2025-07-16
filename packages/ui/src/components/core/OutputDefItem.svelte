<script lang="ts">
    import { Input, MenuButton, Textarea } from '../base';
    import { Button, FloatingTrigger, Select } from '../base/index.js';
    import { getCurrentNodeId } from '#components/utils/NodeUtils';
    import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
    import { parameterDataTypes } from '../utils/Consts';
    import { genShortId } from '../utils/IdGen';
    import type { Parameter } from '#types';
    import { deepClone } from '../utils/deepClone';

    const { parameter, position, dataKeyName, placeholder = '请输入参数值' }: {
        parameter: Parameter,
        position: number[],
        dataKeyName: string,
        placeholder?: string,
    } = $props();


    let currentNodeId = getCurrentNodeId();
    let node = useNodesData(currentNodeId);
    let currentParameter = $derived.by(() => {
        let parameters = node?.current?.data?.[dataKeyName] as Parameter[];
        let param;
        if (parameters && position.length > 0) {
            let params = parameters as Array<Parameter>;
            for (let i = 0; i < position.length; i++) {
                const pos = position[i];
                if (i == position.length - 1) {
                    param = params[pos];
                } else {
                    params = params[pos].children!;
                }
            }
        }

        return {
            ...parameter,
            ...param
        };
    });

    const { updateNodeData } = useSvelteFlow();

    const updateAttribute = (key: string, value: any) => {
        updateNodeData(currentNodeId, (node) => {
            const parameters = node.data?.[dataKeyName] as Array<Parameter>;
            if (parameters && position.length > 0) {
                let params = parameters as Parameter[];
                for (let i = 0; i < position.length; i++) {
                    const pos = position[i];
                    if (i == position.length - 1) {
                        params[pos] = {
                            ...params[pos],
                            [key]: value
                        };
                    } else {
                        params = params[pos].children!;
                    }
                }
            }
            return {
                [dataKeyName]: [...deepClone(parameters)]
            };
        });
    };


    const updateByEvent = (name: string, event: Event) => {
        const newValue = (event.target as any).value;
        updateAttribute(name, newValue);
    };


    const updateDataType = (item: any) => {
        const newValue = item.value;
        updateAttribute('dataType', newValue);
    };


    let triggerObject: any;
    const handleDelete = () => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data?.[dataKeyName] as Array<Parameter>;
            if (parameters && position.length > 0) {
                let params = parameters as Array<Parameter>;
                for (let i = 0; i < position.length; i++) {
                    const pos = position[i];
                    if (i == position.length - 1) {
                        params.splice(pos, 1);
                    } else {
                        params = params[pos].children!;
                    }
                }
            }
            return {
                [dataKeyName]: [...deepClone(parameters)]
            };
        });
        triggerObject?.hide();
    };


    const handleAddChildParameter = () => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data?.[dataKeyName] as Array<Parameter>;
            if (parameters && position.length > 0) {
                let params = parameters as Array<Parameter>;
                for (let i = 0; i < position.length; i++) {
                    const pos = position[i];
                    if (i == position.length - 1) {
                        if (params[pos].children) {
                            params[pos].children.push({
                                id: genShortId(),
                                name: 'newParam',
                                dataType: 'String'
                            });
                        } else {
                            params[pos].children = [
                                {
                                    id: genShortId(),
                                    name: 'newParam',
                                    dataType: 'String'
                                }
                            ];
                        }
                    } else {
                        params = params[pos].children!;
                    }
                }
            }

            return {
                [dataKeyName]: [...deepClone(parameters)]
            };
        });
    };
</script>


<div class="input-item">
    {#if (position.length > 1)}
        {#each position as p} &nbsp;{/each}
    {/if}
    <Input style="width: 100%;" value={currentParameter.name} placeholder={placeholder}
           oninput={(e)=>{updateByEvent('name',e)}} disabled={currentParameter.nameDisabled === true} />
</div>
<div class="input-item">
    <Select items={parameterDataTypes} style="width: 100%" defaultValue={["String"]}
            value={currentParameter.dataType ? [currentParameter.dataType]:[]}
            disabled={currentParameter.dataTypeDisabled === true}
            onSelect={updateDataType} />
    {#if (currentParameter.dataType === "Object" || currentParameter.dataType === "Array") && currentParameter.addChildDisabled !== true}
        <Button class="input-btn-more" style="margin-left: auto" onclick={handleAddChildParameter}>
            <svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="currentColor">
                <path
                    d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path>
            </svg>
        </Button>
    {/if}
</div>
<div class="input-item">
    <FloatingTrigger placement="bottom" bind:this={triggerObject}>
        <MenuButton />
        {#snippet floating()}
            <div class="input-more-setting">
                <div class="input-more-item">
                    默认值：
                    <Textarea rows={1} style="width: 100%;"
                              value={currentParameter.defaultValue||''}
                              onchange={(event)=>{
                        updateByEvent( 'defaultValue', event)
                    }} />
                </div>
                <div class="input-more-item">
                    参数描述：
                    <Textarea rows={3} style="width: 100%;"
                              value={currentParameter.description||''}
                              onchange={(event)=>{
                         updateByEvent( 'description', event)
                    }} />
                </div>

                {#if currentParameter.deleteDisabled !== true}
                    <div class="input-more-item">
                        <Button onclick={handleDelete}>删除</Button>
                    </div>
                {/if}
            </div>
        {/snippet}
    </FloatingTrigger>
</div>


<style lang="less">

  .input-item {
    display: flex;
    align-items: center;
    gap: 2px;
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


