<script>

    import { onMount } from 'svelte';
    import { Tinyflow } from '@tinyflow-ui/core';

    onMount(() => {
        window.tf = new Tinyflow({
            element: '.tinyflow',
            data: {
                nodes: [
                    {
                        id: '2',
                        type: 'llmNode',
                        data: { title: '大模型', description: '处理大模型相关问题' },
                        position: { x: 600, y: 50 }
                    },
                    {
                        id: '3',
                        type: 'startNode',
                        data: { title: '开始节点', description: '开始定义输入参数', expand: true },
                        position: { x: 150, y: 25 }
                    },
                    {
                        id: '4',
                        type: 'endNode',
                        data: { title: '结束节点', description: '结束定义输出参数', expand: true },
                        position: { x: 650, y: 300 }
                    }
                ],
                edges: []
            },
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
    <div class="tinyflow" style="height: 100vh"></div>
</main>
<style>
</style>
