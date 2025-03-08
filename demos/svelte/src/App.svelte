<script>

    import { Tinyflow } from '@tinyflow-ai/svelte';
    // const data = ``
    const data = `{"nodes":[{"id":"2","type":"llmNode","data":{"title":"大模型","description":"处理大模型相关问题","expand":true,"outputDefs":[{"id":"pyiig8ntGWZhVdVz","dataType":"Object","name":"param","children":[{"id":"1","name":"newParam1","dataType":"String"},{"id":"2","name":"newParam2","dataType":"String"}]}]},"position":{"x":550,"y":50},"measured":{"width":322,"height":623},"selected":true},{"id":"3","type":"startNode","data":{"title":"开始节点","description":"开始定义输入参数","expand":true},"position":{"x":150,"y":25},"measured":{"width":306,"height":200},"selected":false},{"id":"4","type":"endNode","data":{"title":"结束节点","description":"结束定义输出参数","expand":true},"position":{"x":950,"y":100},"measured":{"width":306,"height":200},"selected":false}],"edges":[],"viewport":{"x":250,"y":100,"zoom":1}}`;

    const downloadJsonData = () => {
        const jsonData = window.tinyflowRef.getData();
        const jsonString = JSON.stringify(jsonData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.json';
        link.click();
        URL.revokeObjectURL(url);
    };

</script>

<main>
    <div class="header">
        <div class="title">Tinyflow</div>
        <div class="description">
            基于 Web Component 的 AI 工作流编排框架
            <a href="https://gitee.com/tinyflow-ai/tinyflow" target="_blank">Gitee</a>
            <a href="https://github.com/tinyflow-ai/tinyflow" target="_blank">Github</a>

            <button on:click="{downloadJsonData}">导出 JSON</button>
        </div>
    </div>
    <Tinyflow data={JSON.parse(data)} style={{height:"calc(100vh - 58px)"}} bind:this={window.tinyflowRef} />
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
