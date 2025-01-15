<script lang="ts">
    import { useNodesData } from '@xyflow/svelte';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import RefParameterItem from './RefParameterItem.svelte';

    let currentNodeId = getCurrentNodeId();
    let node = $derived(useNodesData(currentNodeId));
    let inputParameters = $derived.by(() => {
        return [...$node?.data?.inputParameters as Array<any> || []];
    });
</script>


<div class="input-container">
    {#if (inputParameters.length !== 0)}
        <div class="input-header">参数名称</div>
        <div class="input-header">参数值</div>
        <div class="input-header"></div>
    {/if}
    {#each inputParameters as param, index (param.id)}
        <RefParameterItem parameter={param} index={index} />
    {:else }
        <div class="none-params">无输入参数</div>
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

  :global(.input-btn-more) {
    border: 1px solid transparent;
    padding: 3px;

    &:hover {
      background: #eee;
      border: 1px solid transparent;
    }
  }
</style>


