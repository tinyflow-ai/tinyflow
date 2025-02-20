<script lang="ts">
    import { useNodesData } from '@xyflow/svelte';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { type Parameter } from '../utils/Consts';
    import OutputDefItem from './OutputDefItem.svelte';

    const {
        noneParameterText = '无输出参数',
        dataKeyName = 'outputDefs'
    }: {
        noneParameterText?: string;
        dataKeyName?: string;
    } = $props();

    let currentNodeId = getCurrentNodeId();
    let node = $derived(useNodesData(currentNodeId));

    let parameters = $derived.by(() => {
        return [...$node?.data[dataKeyName] as Array<any> || []];
    });
</script>

{#snippet parameterList(params: Parameter[], position: number[])}
    {#each params as param, index (`${param.id}_${param.children ? param.children.length : 0}`)}
        <OutputDefItem parameter={param} position={[...position, index]} {dataKeyName} />
        {#if param.children}
            {@render parameterList(param.children, [...position, index])}
        {/if}
    {:else }
        {#if position.length === 0}
            <div class="none-params">{noneParameterText}</div>
        {/if}
    {/each}
{/snippet}


<div class="input-container">
    {#if (parameters.length !== 0)}
        <div class="input-header">参数名称</div>
        <div class="input-header">参数类型</div>
        <div class="input-header"></div>
    {/if}
    {@render parameterList(parameters || [], [])}
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


