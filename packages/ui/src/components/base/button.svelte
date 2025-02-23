<script lang="ts">

    import type { MyHTMLButtonAttributes } from './types';

    const { ...rest }: MyHTMLButtonAttributes = $props();
</script>
<button type="button" {...rest} class="tf-btn nopan nodrag {rest.class}">
    <slot></slot>
</button>
