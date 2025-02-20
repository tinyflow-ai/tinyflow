<script>

    import { onMount } from 'svelte';
    import { Tinyflow } from '@tinyflow-ui/core';

    // const data = ``
    const data = `{"nodes":[{"id":"2","type":"llmNode","data":{"title":"大模型","description":"处理大模型相关问题","expand":true,"outputDefs":[{"id":"pyiig8ntGWZhVdVz","dataType":"Object","name":"param","children":[{"id":"1","name":"newParam1","dataType":"String"},{"id":"2","name":"newParam2","dataType":"String"}]}]},"position":{"x":550,"y":50},"measured":{"width":322,"height":623},"selected":true},{"id":"3","type":"startNode","data":{"title":"开始节点","description":"开始定义输入参数","expand":true},"position":{"x":150,"y":25},"measured":{"width":306,"height":200},"selected":false},{"id":"4","type":"endNode","data":{"title":"结束节点","description":"结束定义输出参数","expand":true},"position":{"x":950,"y":100},"measured":{"width":306,"height":200},"selected":false}],"edges":[],"viewport":{"x":250,"y":100,"zoom":1}}`;

    onMount(() => {
        window.tf = new Tinyflow({
            element: '.tinyflow',
            data: JSON.parse(data),
            provider: {
                llms: () => {
                    return [
                        {
                            value: 'gpt-4o',
                            label: 'gpt-4o'
                        },
                        {
                            value: 'gpt-4',
                            label: 'gpt-4'
                        },
                        {
                            value: 'gpt-3.5-turbo',
                            label: 'gpt-3.5-turbo'
                        }
                    ];
                }
            }
        });
    });
</script>

<main>
    <div class="header">
        <div class="title">Tinyflow</div>
        <div class="description">
            基于 Web Component 的流程图编辑器
            <a href="https://github.com/tinyflow-ai/tinyflow" target="_blank">Github</a>
        </div>
    </div>
    <div class="tinyflow" style="height: 100vh"></div>
</main>
<style lang="less">
  .header {
    display: flex;
    height: 40px;
    border-bottom: #ccc solid 1px;

    .description {
      margin-left: auto;
    }
  }
</style>
