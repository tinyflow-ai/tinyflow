<script lang="ts">
    import type { MyHTMLInputAttributes } from './types';

    const { ...rest }: MyHTMLInputAttributes = $props();
</script>
<input type="text" {...rest} class="tf-input  nopan nodrag {rest.class}" />
