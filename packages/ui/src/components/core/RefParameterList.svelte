<script lang="ts">
    import { useNodesData } from '@xyflow/svelte';
    import { getCurrentNodeId } from '#store/nodeContext';
    import RefParameterItem from './RefParameterItem.svelte';

    const {
        noneParameterText = '无输入参数',
        dataKeyName = 'parameters',
        useChildrenOnly,
    }: {
        noneParameterText?: string;
        dataKeyName?: string;
        useChildrenOnly?: boolean,
    } = $props();

    let currentNodeId = getCurrentNodeId();
    let node = $derived(useNodesData(currentNodeId));

    let parameters = $derived.by(() => {
        return [...node?.data?.[dataKeyName] as Array<any> || []];
    });
</script>


<div class="input-container">
    {#if (parameters.length !== 0)}
        <div class="input-header">参数名称</div>
        <div class="input-header">参数值</div>
        <div class="input-header"></div>
    {/if}
    {#each parameters as param, index (param.id)}
        <RefParameterItem parameter={param} index={index} {dataKeyName} {useChildrenOnly}/>
    {:else }
        <div class="none-params">{noneParameterText}</div>
    {/each}
</div>


<style lang="less">
  .input-container {
    display: grid;
    grid-template-columns: 40% 50% 10%;
    row-gap: 5px;
    column-gap: 3px;

    .none-params {
      font-size: 12px;
      background: #f8f8f8;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      width: calc(100% - 5px);
      grid-column: 1 / -1; /* 从第一列开始到最后一列结束 */
    }

    .input-header {
      font-size: 12px;
      color: #666;
    }
  }

</style>


