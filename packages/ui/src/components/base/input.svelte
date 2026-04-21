<script lang="ts">
    import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';
    import { cn, type WithElementRef } from '../utils/cn';
    type InputType = Exclude<HTMLInputTypeAttribute, 'file'>;
    type Props = WithElementRef<
        Omit<HTMLInputAttributes, 'type'> &
            ({ type: 'file'; files?: FileList } | { type?: InputType; files?: undefined })
    >;
    let {
        ref = $bindable(null),
        value = $bindable(),
        type,
        files = $bindable(),
        class: className,
        'data-slot': dataSlot = 'input',
        ...restProps
    }: Props = $props();
</script>

{#if type === 'file'}
    <input
        bind:this={ref}
        data-slot={dataSlot}
        class={cn('nopan nodrag tf-input', className)}
        type="file"
        bind:files
        bind:value
        {...restProps}
    />
{:else}
    <input
        bind:this={ref}
        data-slot={dataSlot}
        spellcheck="false"
        class={cn('nopan nodrag tf-input', className)}
        {type}
        bind:value
        {...restProps}
    />
{/if}
