<script lang="ts">
    import { Button, Input } from './index';
    import type { MyHTMLAttributes } from './types';

    const { placeholder, label, value, buttonText = "选择...",onChosen, ...rest }: {
        placeholder?: string;
        label?: any;
        value?: any;
        buttonText?:string
        onChosen?: (value?: any, label?: any, event?: Event) => void,
    } & MyHTMLAttributes = $props();

</script>
<div {...rest} class="tf-chosen nopan nodrag {rest.class}">
    <input type="hidden" value={value}>
    <Input value={label} {placeholder} style="flex-grow: 1;" disabled/>
    <Button onclick={(e)=>{
        onChosen?.(value, label, e);
    }} style="padding: 3px" >{buttonText}</Button>
</div>

<style>
    .tf-chosen {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
     }
</style>
