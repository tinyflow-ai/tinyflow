<script lang="ts">
    import type { MyHTMLInputAttributes } from './types';

    const { ...rest }: MyHTMLInputAttributes = $props();
</script>
<input type="checkbox" {...rest} class="tf-checkbox nopan nodrag {rest.class}" />
