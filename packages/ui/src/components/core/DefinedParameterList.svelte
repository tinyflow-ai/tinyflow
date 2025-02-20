<script lang="ts">
    import DefinedParameterItem from './DefinedParameterItem.svelte';
    import { useNodesData } from '@xyflow/svelte';
    import { getCurrentNodeId } from '../../store/nodeContext';

    let currentNodeId = getCurrentNodeId();
    let node = $derived(useNodesData(currentNodeId));
    let parameters = $derived.by(() => {
        return [...$node?.data?.parameters as Array<any> || []];
    });
</script>


<div class="input-container">
    {#if (parameters.length !== 0)}
        <div class="input-header">参数名称</div>
        <div class="input-header">必填</div>
        <div class="input-header"></div>
    {/if}
    {#each parameters as param, index (param.id)}
        <DefinedParameterItem parameter={param} index={index} />
    {:else }
        <div class="none-params">无输入参数</div>
    {/each}
</div>


<style lang="less">
  .input-container {
    display: grid;
    grid-template-columns: 80% 10% 10%;
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


