<script lang="ts">
    import { Checkbox as CheckboxPrimitive } from 'bits-ui';
    import { cn, type WithoutChildrenOrChild } from '../utils/cn';
    import CheckIcon from '@lucide/svelte/icons/check';
    import MinusIcon from '@lucide/svelte/icons/minus';
    let {
        ref = $bindable(null),
        checked = $bindable(false),
        indeterminate = $bindable(false),
        class: className,
        ...restProps
    }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
    bind:ref
    data-slot="checkbox"
    class={cn('nopan nodrag tf-checkbox peer', className)}
    bind:checked
    bind:indeterminate
    {...restProps}
>
    {#snippet children({ checked, indeterminate })}
        <div data-slot="checkbox-indicator" class="tf-checkbox-indicator">
            {#if checked}
                <CheckIcon />
            {:else if indeterminate}
                <MinusIcon />
            {/if}
        </div>
    {/snippet}
</CheckboxPrimitive.Root>
