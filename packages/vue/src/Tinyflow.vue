<template>
    <div ref="divRef" class="tinyflow" />
</template>

<script lang="ts">
import { Tinyflow as  TinyflowNative} from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';

export default {
    mounted() {
        new TinyflowNative({
            element: this.$refs.divRef as Element,
            data: {}
        });
    }
};
</script>
