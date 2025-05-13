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

    const printInConsole = () => {
        console.log(window.tinyflowRef.getData());
    };

    const customNodes = {
        'custom-node': {
            title: '自定义节点',
            description: '这是一个测试的自定义节点',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11H1L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11H20V20ZM18 19V9.15745L12 3.7029L6 9.15745V19H18ZM12 17L8.64124 13.6412C7.76256 12.7625 7.76256 11.3379 8.64124 10.4592C9.51992 9.58056 10.9445 9.58056 11.8232 10.4592L12 10.636L12.1768 10.4592C13.0555 9.58056 14.4801 9.58056 15.3588 10.4592C16.2374 11.3379 16.2374 12.7625 15.3588 13.6412L12 17Z"></path></svg>',
            sortNo: 2,
            render: (parent, node, flowInstance) => {
                // const div = document.createElement('div');
                // div.innerHTML = 'custom-content';
                // parent.appendChild(div);
                // return `<div>custom-content</div>`

                // parent = parent as HTMLElement;


                parent.innerHTML = `<select style="width: 100%">
                    <option>test</option>
                    <option>test1</option>
                    <option>test2</option>
                    </select>`;

                parent.querySelector('select')
                    ?.addEventListener('change', (e) => {
                        console.log('select change: ', e);
                        flowInstance.updateNodeData(node.id, {
                            test: e.target.value
                        });
                    })
                ;

                console.log('render: ', node, flowInstance);
            },
            onUpdate: (parent, node) => {
                console.log('onUpdate: ', node);
            }

        },


        'custom-node2': {
            title: '测试节点',
            description: '这是一个测试的自定义节点',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11H1L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11H20V20ZM18 19V9.15745L12 3.7029L6 9.15745V19H18ZM12 17L8.64124 13.6412C7.76256 12.7625 7.76256 11.3379 8.64124 10.4592C9.51992 9.58056 10.9445 9.58056 11.8232 10.4592L12 10.636L12.1768 10.4592C13.0555 9.58056 14.4801 9.58056 15.3588 10.4592C16.2374 11.3379 16.2374 12.7625 15.3588 13.6412L12 17Z"></path></svg>',
            sortNo: 310,
            group: 'base',
            parameters: [
                {
                    name: 'file',
                    nameDisabled: true,
                    dataType: 'String'
                }
            ],
            outputDefs: [
                {
                    name: 'text',
                    nameDisabled: true,
                    dataType: 'String'
                }
            ],
            outputDefsAddEnable: false,
            forms: [
                {
                    type: 'heading',
                    label: '测试节点'
                },
                {
                    type: 'input',
                    name: 'test',
                    label: '测试',
                    placeholder: '请输入测试内容'
                },
                {
                    type: 'chosen',
                    placeholder: '请选择测试内容',
                    label: '请选择插件',
                    chosen: {
                        labelDataKey: 'pluginName',
                        valueDataKey: 'pluginId',
                        // buttonText: '选择插件',
                        onChosen: (updateNodeData, value, label, event) => {
                            console.log('chosen: ', value, label, updateNodeData, event);
                            updateNodeData({
                                pluginId: '123',
                                pluginName: '测试的插件'
                            });
                        }
                    }
                },
                {
                    type: 'select',
                    name: 'test2',
                    label: '测试2',
                    placeholder: '请选择测试内容',
                    defaultValue: '1',
                    options: [
                        {
                            label: '选项1',
                            value: '1'
                        },
                        {
                            label: '选项2',
                            value: '2'
                        },
                        {
                            label: '选项3',
                            value: '3'
                        }
                    ]
                }
            ]
        }
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
            <button on:click="{printInConsole}">Console 打印当前数据</button>
        </div>
    </div>
    <div style="margin: 20px;border: 1px solid #ccc;">
        <Tinyflow data={JSON.parse(data)} style={{height:"calc(100vh - 58px)"}} bind:this={window.tinyflowRef}
                  onNodeExecute={(node)=>{
                      console.log('node execute: ', node)
                  }}

                  hiddenNodes={()=>{
                       // return ['startNode','loopNode'];
                  }}

                  onDataChange={(data,event)=>{
                      // console.log('data change: ', data, event)
                  }}
                  {customNodes}
        />
    </div>

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
