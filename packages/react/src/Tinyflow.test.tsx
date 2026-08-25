import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it, vi } from 'vitest';

// 告诉 React 19 当前测试运行器会用 act 包裹所有同步渲染和卸载操作。
(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT =
    true;

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

import Tinyflow from './Tinyflow';

describe('React Tinyflow adapter', () => {
    afterEach(() => {
        document.body.innerHTML = '';
        native.instances.length = 0;
    });

    it('reuses one native instance, forwards the latest callback and destroys on unmount', () => {
        const host = document.createElement('div');
        document.body.append(host);
        const root = createRoot(host);
        const firstCallback = vi.fn();
        const latestCallback = vi.fn();

        act(() => root.render(<Tinyflow data={{ nodes: [] }} onDataChange={firstCallback} />));
        expect(native.instances).toHaveLength(1);
        const instance = native.instances[0];

        act(() =>
            root.render(
                <Tinyflow data={{ nodes: [] }} defaultTheme="dark" onDataChange={latestCallback} />
            )
        );

        expect(native.instances).toHaveLength(1);
        expect(instance.setOptions).toHaveBeenCalledWith(
            expect.objectContaining({ defaultTheme: 'dark' })
        );
        (instance.options.onDataChange as (data: { nodes: never[] }) => void)({ nodes: [] });
        expect(latestCallback).toHaveBeenCalledOnce();
        expect(firstCallback).not.toHaveBeenCalled();

        act(() => root.unmount());
        expect(instance.destroy).toHaveBeenCalledOnce();
    });
});
