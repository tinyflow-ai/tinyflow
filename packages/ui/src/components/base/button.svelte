<script lang="ts" module>
    import { cn, type WithElementRef } from '../utils/cn';
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

    const variants = {
        default: 'tf-btn-default',
        outline: 'tf-btn-outline',
        secondary: 'tf-btn-secondary',
        ghost: 'tf-btn-ghost',
        destructive: 'tf-btn-destructive',
        link: 'tf-btn-link'
    };

    const sizes = {
        default: 'tf-btn-default',
        xs: 'tf-btn-xs',
        sm: 'tf-btn-sm',
        lg: 'tf-btn-lg',
        icon: 'tf-btn-icon',
        'icon-xs': 'tf-btn-icon-xs',
        'icon-sm': 'tf-btn-icon-sm',
        'icon-lg': 'tf-btn-icon-lg'
    };

    export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
        WithElementRef<HTMLAnchorAttributes> & {
            variant?: keyof typeof variants;
            size?: keyof typeof sizes;
            primary?: boolean;
        };
</script>

<script lang="ts">
    let {
        class: className,
        variant = 'outline',
        size = 'default',
        ref = $bindable(null),
        href = undefined,
        type = 'button',
        disabled,
        children,
        primary,
        ...restProps
    }: ButtonProps = $props();

    if (primary) {
        variant = 'default';
    }
</script>

{#if href}
    <a
        bind:this={ref}
        data-slot="button"
        class={cn('nopan nodrag tf-btn', variants[variant], sizes[size], className)}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        role={disabled ? 'link' : undefined}
        tabindex={disabled ? -1 : undefined}
        {...restProps}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        bind:this={ref}
        data-slot="button"
        class={cn('nopan nodrag tf-btn', variants[variant], sizes[size], className)}
        {type}
        {disabled}
        {...restProps}
    >
        {@render children?.()}
    </button>
{/if}
