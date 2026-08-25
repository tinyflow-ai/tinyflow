import { createApp, h, nextTick, reactive } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';

const native = vi.hoisted(() => ({
    instances: [] as Array<{
        options: Record<string, unknown>;
        setOptions: ReturnType<typeof vi.fn>;
        destroy: ReturnType<typeof vi.fn>;
    }>
}));

vi.mock('@tinyflow-ai/ui', () => ({
    Tinyflow: class {
        options: Record<string, unknown>;
        setOptions = vi.fn();
        destroy = vi.fn();

        constructor(options: Record<string, unknown>) {
            this.options = options;
            native.instances.push(this);
        }

        getData() {
            return { nodes: [] };
        }
    }
}));

import Tinyflow from './Tinyflow.vue';

describe('Vue Tinyflow adapter', () => {
    afterEach(() => {
        document.body.innerHTML = '';
        native.instances.length = 0;
    });

    it('updates structural props without recreating the native instance', async () => {
        const host = document.createElement('div');
        document.body.append(host);
        const firstCallback = vi.fn();
        const latestCallback = vi.fn();
        const props = reactive({
            data: { nodes: [] },
            defaultTheme: 'light' as 'light' | 'dark',
            onDataChange: firstCallback
        });
        const app = createApp({ render: () => h(Tinyflow, props) });

        app.mount(host);
        expect(native.instances).toHaveLength(1);
        const instance = native.instances[0];

        props.defaultTheme = 'dark';
        props.onDataChange = latestCallback;
        await nextTick();

        expect(native.instances).toHaveLength(1);
        expect(instance.setOptions).toHaveBeenCalledWith(
            expect.objectContaining({ defaultTheme: 'dark' })
        );
        (instance.options.onDataChange as (data: { nodes: never[] }) => void)({ nodes: [] });
        expect(latestCallback).toHaveBeenCalledOnce();
        expect(firstCallback).not.toHaveBeenCalled();

        app.unmount();
        expect(instance.destroy).toHaveBeenCalledOnce();
    });
});
