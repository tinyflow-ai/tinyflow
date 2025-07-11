<script lang="ts">
    import { Handle, type NodeProps, NodeToolbar, Position, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Collapse, FloatingTrigger, Input, Textarea } from '../base';
    import { type Snippet } from 'svelte';
    import { useDeleteNode } from '../utils/useDeleteNode.svelte';
    import { useCopyNode } from '../utils/useCopyNode.svelte';
    import { getOptions } from '../utils/NodeUtils';
    import { getCurrentNodeId } from '#store/nodeContext';

    const {
        data,
        id = '',
        icon,
        handle,
        children,
        allowExecute = true,
        allowCopy = true,
        allowDelete = true,
        allowSetting = true,
        allowSettingOfCondition = true,
        showSourceHandle = true,
        showTargetHandle = true,
        onCollapse
    }: {
        data: NodeProps['data'],
        id?: NodeProps['id'],
        icon?: Snippet,
        handle?: Snippet,
        children: Snippet,
        allowExecute?: boolean,
        allowCopy?: boolean,
        allowDelete?: boolean,
        allowSetting?: boolean,
        allowSettingOfCondition?: boolean,
        showSourceHandle?: boolean,
        showTargetHandle?: boolean,
        onCollapse?: (key: string) => void,
    } = $props();

    let activeKeys = data.expand ? ['key'] : [];
    const { updateNodeData, getNode } = useSvelteFlow();

    const items = $derived.by(() => {
        return [{
            key: 'key',
            icon,
            title: data.title as string,
            description: data.description as string,
            content: children
        }];
    });


    const { deleteNode } = useDeleteNode();
    const { copyNode } = useCopyNode();

    const options = getOptions();

    const executeNode = () => {
        options.onNodeExecute?.(getNode(id)!);
    };

    let currentNodeId = getCurrentNodeId();

</script>


{#if allowExecute || allowCopy || allowDelete}
    <NodeToolbar position={Position.Top} align="end">
        <div class="tf-node-toolbar">
            {#if allowDelete}
                <Button class="tf-node-toolbar-item" onclick={()=>{ deleteNode(id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                    </svg>
                </Button>
            {/if}
            {#if allowCopy}
                <Button class="tf-node-toolbar-item" onclick={()=>{copyNode(id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                    </svg>
                </Button>
            {/if}
            {#if allowExecute}
                <Button class="tf-node-toolbar-item" onclick={executeNode}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path>
                    </svg>
                </Button>
            {/if}
            {#if allowSetting}
                <FloatingTrigger placement="bottom">
                    <Button class="tf-node-toolbar-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path>
                        </svg>
                    </Button>
                    {#snippet floating()}
                        <div class="settings">

                            <div class="input-item">
                                节点名称：
                                <Input style="width: 100%;" onchange={(event)=>{
                                    const value =  (event.target as any).value;
                                    updateNodeData(currentNodeId,{
                                        title: value
                                    })
                                }} value={data.title} />
                            </div>

                            <div class="input-item">
                                参数描述：
                                <Textarea rows={3} style="width: 100%;" onchange={(event)=>{
                                    const value =  (event.target as any).value;
                                     updateNodeData(currentNodeId,{
                                        description: value
                                    })
                                }} value={data.description} />
                            </div>

                            {#if allowSettingOfCondition}
                                <div class="input-item">
                                    执行条件：
                                    <Textarea rows={2} style="width: 100%;" onchange={(event)=>{
                                    const value =  (event.target as any).value;
                                     updateNodeData(currentNodeId,{
                                        condition: value
                                    })
                                }} value={data.condition} />
                                </div>
                            {/if}

                            <label class="input-item-inline">
                                <span>异步执行：</span>
                                <input type="checkbox" checked={!!data.async} onchange={(event)=>{
                                    const value =  (event.target as any).checked;
                                     updateNodeData(currentNodeId,{
                                        async: value
                                    })
                                }} />
                            </label>

                            <label class="input-item-inline">
                                <span>循环执行：</span>
                                <input type="checkbox" checked={!!data.loopEnable} onchange={(event)=>{
                                    const value =  (event.target as any).checked;
                                     updateNodeData(currentNodeId,{
                                        loopEnable: value
                                    })
                                }} />
                            </label>

                            {#if !!data.loopEnable}
                                <div class="input-item">
                                    循环间隔时间（单位：毫秒）：
                                    <Textarea rows={1} style="width: 100%;" onchange={(event)=>{
                                    const value =  (event.target as any).value;
                                     updateNodeData(currentNodeId,{
                                        loopIntervalMs: value
                                    })
                                }} value={data.loopIntervalMs || '1000'} />
                                </div>

                                <div class="input-item">
                                    最大循环次数（0 表示不限制）：
                                    <Textarea rows={1} style="width: 100%;" onchange={(event)=>{
                                    const value =  (event.target as any).value;
                                     updateNodeData(currentNodeId,{
                                        maxLoopCount: value
                                    })
                                }} value={data.maxLoopCount || '0'} />
                                </div>

                                <div class="input-item">
                                    退出条件：
                                    <Textarea rows={2} style="width: 100%;" onchange={(event)=>{
                                    const value =  (event.target as any).value;
                                     updateNodeData(currentNodeId,{
                                        loopBreakCondition: value
                                    })
                                }} value={data.loopBreakCondition} />
                                </div>
                            {/if}

                        </div>
                    {/snippet}
                </FloatingTrigger>
            {/if}
        </div>
    </NodeToolbar>
{/if}

<div class="tf-node-wrapper">
    <div class="tf-node-wrapper-title">
        TinyFlow.ai
    </div>
    <div class="tf-node-wrapper-body">
        <Collapse {items} activeKeys={activeKeys} onChange={(_,actionKeys) => {
            updateNodeData(id, {expand: actionKeys?.includes('key')})
            onCollapse?.(actionKeys?.includes('key') ? 'key' : '')
        }} />
    </div>
</div>

{#if showTargetHandle}
    <Handle type="target" position={Position.Left} style=" left: -12px;top: 20px" />
{/if}
{#if showSourceHandle}
    <Handle type="source" position={Position.Right} style="right: -12px;top: 20px" />
{/if}
{@render handle?.()}

<style lang="less">
  .tf-node-toolbar {
    display: flex;
    gap: 5px;
    padding: 5px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  :global(.tf-node-toolbar-item) {
    border: 1px solid transparent;
  }

  .settings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);

    .input-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 12px;
      color: #666;
    }

    .input-item-inline {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #666;
    }
  }
</style>


