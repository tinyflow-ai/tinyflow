<script lang="ts">
    import NodeWrapper from '../core/NodeWrapper.svelte';
    import { type NodeProps, useSvelteFlow } from '@xyflow/svelte';
    import { Button, Heading, Select } from '../base';
    import { Input, Textarea } from '../base/index.js';
    import RefParameterList from '../core/RefParameterList.svelte';
    import { getCurrentNodeId } from '../../store/nodeContext';
    import { useAddParameterSvelte } from '../utils/useAddParameter.svelte';
    import OutputDefList from '../core/OutputDefList.svelte';

    const { data, ...rest }: {
        data: NodeProps['data'],
        [key: string]: any
    } = $props();

    // 添加生命周期函数
    import { onMount } from 'svelte';
    // 在组件挂载时检查并设置默认值
    onMount(() => {
        if (!data.method) {
            updateNodeData(currentNodeId, () => {
                return {
                    method: 'get'
                };
            });
        }
    });
    const method = [
        { value: 'get', label: 'GET' },
        { value: 'post', label: 'POST' },
        { value: 'put', label: 'PUT' },
        { value: 'delete', label: 'DELETE' },
        { value: 'head', label: 'HEAD' },
        { value: 'patch', label: 'PATCH' }
    ];

    const currentNodeId = getCurrentNodeId();
    const { addParameter } = useAddParameterSvelte();
    const { updateNodeData } = useSvelteFlow();
</script>


<NodeWrapper {data} {...rest}>

    {#snippet icon()}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path>
        </svg>
    {/snippet}


    <div class="heading">
        <Heading level={3}>输入参数</Heading>
        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId)
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>
    <RefParameterList />

    <Heading level={3} mt="10px">URL 地址</Heading>
    <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0">
        <div>
            <Select items={method} style="width: 100%" placeholder="请选择请求方式" onSelect={(item)=>{
              const newValue = item.value;
              updateNodeData(currentNodeId, ()=>{
                  return {
                      method: newValue
                  }
              })
        }} value={data.method ? [data.method] : ['get']} />
        </div>
        <div style="width: 100%">
            <Input placeholder="请输入url" style="width: 100%" onchange={(e:any)=>{
            updateNodeData(currentNodeId, ()=>{
                return {
                    url: e.target.value
                }
            })
        }} value={data.url as string||""} />
        </div>
    </div>

    <div class="heading">
        <Heading level={3}>Http 头信息</Heading>
        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId,'headers')
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>
    <RefParameterList dataKeyName="headers" />


    <Heading level={3} mt="10px">Body</Heading>

    <div class="radio-group">
        <label><Input type="radio" name="bodyType" value="" checked={!data.bodyType} onchange={(e:any)=>{
            if (e.target?.checked){
                updateNodeData(currentNodeId,{
                    bodyType: '',
                })
            }
        }} />none</label>
        <label><Input type="radio" name="bodyType" value="form-data" checked={data.bodyType === 'form-data'} onchange={(e:any)=>{
            if (e.target?.checked){
                updateNodeData(currentNodeId,{
                    bodyType: 'form-data',
                })
            }
        }} />form-data</label>
        <label><Input type="radio" name="bodyType" value="x-www-form-urlencoded"
                      checked={data.bodyType === 'x-www-form-urlencoded'} onchange={(e:any)=>{
                          if (e.target?.checked){
                              updateNodeData(currentNodeId,{
                                  bodyType: 'x-www-form-urlencoded',
                              })
                          }
        }} />x-www-form-urlencoded</label>
        <label><Input type="radio" name="bodyType" value="json" checked={data.bodyType === 'json'} onchange={(e:any)=>{
            if (e.target?.checked){
                updateNodeData(currentNodeId,{
                    bodyType: 'json',
                })
            }
        }} />json</label>
        <label><Input type="radio" name="bodyType" value="raw" checked={data.bodyType === 'raw'} onchange={(e:any)=>{
            if (e.target?.checked){
                updateNodeData(currentNodeId,{
                    bodyType: 'raw',
                })
            }
        }} />raw</label>
    </div>


    {#if data.bodyType === 'form-data'}
        <div class="heading" style="padding-top: 10px">
            <Heading level={3}>参数</Heading>
            <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId,'formData')
        }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
            </Button>
        </div>
        <RefParameterList dataKeyName="formData" />
    {/if}


    {#if data.bodyType === 'x-www-form-urlencoded'}
        <div class="heading" style="padding-top: 10px">
            <Heading level={3}>Body 参数</Heading>
            <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId,'formUrlencoded')
        }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
            </Button>
        </div>
        <RefParameterList dataKeyName="formUrlencoded" />
    {/if}

    {#if data.bodyType === 'json'}
        <div style="width: 100%">
            <Textarea rows={5} style="width: 100%" placeholder="请输入 json 信息" value={data.bodyJson}
                      oninput={(e:any)=>{
                          updateNodeData(currentNodeId,{
                              bodyJson: e.target.value,
                          })
                      }} />
        </div>
    {/if}


    {#if data.bodyType === 'raw'}
        <div style="width: 100%">
            <Textarea rows={5} style="width: 100%" placeholder="请输入请求信息" value={data.bodyRaw}
                      oninput={(e:any)=>{
                          updateNodeData(currentNodeId,{
                              bodyRaw: e.target.value,
                          })
                      }} />
        </div>
    {/if}


    <div class="heading">
        <Heading level={3} mt="10px">输出参数</Heading>
        <Button class="input-btn-more" style="margin-left: auto" onclick={()=>{
            addParameter(currentNodeId,'outputDefs')
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
        </Button>
    </div>
    <OutputDefList />

</NodeWrapper>

<style lang="less">
  .heading {
    display: flex;
    margin-bottom: 10px;
  }

  .radio-group {
    display: flex;
    margin: 10px 0;

    label {
      display: flex;
      font-size: 14px;
    }
  }

</style>



