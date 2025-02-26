<script lang="ts">
    import { Input, MenuButton, Textarea } from '../base';
    import { Button, FloatingTrigger, Select } from '../base/index.js';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { useNodesData, useSvelteFlow } from '@xyflow/svelte';
    import { type Parameter, parameterDataTypes } from '../utils/Consts';
    import { genShortId } from '../utils/IdGen';

    const { parameter, position, dataKeyName }: {
        parameter: Parameter,
        position: number[],
        dataKeyName: string,
    } = $props();


    let currentNodeId = getCurrentNodeId();
    let node = $derived(useNodesData(currentNodeId));
    let param = $derived.by(() => {
        let parameters = $node?.data[dataKeyName] as Parameter[];
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
            const parameters = node.data[dataKeyName] as Array<Parameter>;
            if (parameters && position.length > 0) {
                let params = parameters as Array<Parameter>;
                for (let i = 0; i < position.length; i++) {
                    const pos = position[i];
                    if (i == position.length - 1) {
                        params[pos] = {
                            ...params[pos],
                            [key]: value
                        };
                    } else {
                        params = parameters[pos].children!;
                    }
                }
            }
            return {
                [dataKeyName]: parameters
            };
        });
    };


    const updateName = (event: Event) => {
        const newValue = (event.target as any).value;
        updateAttribute('name', newValue);
    };


    const updateDataType = (item: any) => {
        const newValue = item.value;
        updateAttribute('dataType', newValue);
    };


    let triggerObject: any;
    const handleDelete = () => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data[dataKeyName] as Array<Parameter>;
            // parameters.splice(index, 1);

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
                [dataKeyName]: [...parameters]
            };
        });
        triggerObject?.hide();
    };


    const addChild = () => {
        updateNodeData(currentNodeId, (node) => {
            let parameters = node.data[dataKeyName] as Array<Parameter>;
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
                [dataKeyName]: [...parameters]
            };
        });
    };
</script>


<div class="input-item">
    {#if (position.length > 1)}
        {#each position as p} &nbsp;{/each}
    {/if}
    <Input style="width: 100%;" value={param.name} placeholder="请输入参数名称"
           oninput={updateName} disabled={param.nameDisabled === true} />
</div>
<div class="input-item">
    <Select items={parameterDataTypes} style="width: 100%" defaultValue={["String"]}
            value={param.dataType ? [param.dataType]:[]}
            disabled={param.dataTypeDisabled === true}
            onSelect={updateDataType} />
    {#if param.dataType === "Object" || param.dataType === "Array"}
        <Button class="input-btn-more" style="margin-left: auto" onclick={addChild}>
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

                {#if param.deleteDisabled !== true}
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


