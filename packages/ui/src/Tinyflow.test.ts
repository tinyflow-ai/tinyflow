// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { componentName } from './consts';
import { Tinyflow } from './Tinyflow';

class FakeTinyflowElement extends HTMLElement {
    options: unknown;
    static currentData: unknown = { marker: 'ready' };
    private _onInit?: (flow: { toObject: () => unknown }) => void;

    set onInit(callback: (flow: { toObject: () => unknown }) => void) {
        this._onInit = callback;
        callback({ toObject: () => FakeTinyflowElement.currentData });
    }

    get onInit() {
        return this._onInit!;
    }
}

if (!customElements.get(componentName)) {
    customElements.define(componentName, FakeTinyflowElement);
}

describe('Tinyflow', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        FakeTinyflowElement.currentData = { marker: 'ready' };
    });

    afterEach(() => vi.restoreAllMocks());

    it('mounts into selectors and exposes serialized workflow data', () => {
        const root = document.createElement('div');
        root.id = 'flow-root';
        document.body.append(root);

        const tinyflow = new Tinyflow({ element: '#flow-root', data: { nodes: [] } });

        expect(root.querySelector(componentName)).not.toBeNull();
        expect(tinyflow.getData()).toEqual({ marker: 'ready' });
    });

    it('updates options by replacing only its own custom element', () => {
        const root = document.createElement('div');
        const sibling = document.createElement('span');
        root.append(sibling);
        document.body.append(root);
        const tinyflow = new Tinyflow({
            element: root,
            data: { nodes: [] },
            defaultTheme: 'light'
        });
        const firstElement = root.querySelector(componentName);

        tinyflow.setOptions({
            data: { nodes: [{ id: 'updated', data: {}, position: { x: 0, y: 0 } }] },
            defaultTheme: 'dark'
        });

        const secondElement = root.querySelector(componentName) as FakeTinyflowElement;
        expect(secondElement).not.toBe(firstElement);
        expect(secondElement.options).toMatchObject({ defaultTheme: 'dark' });
        expect(root.contains(sibling)).toBe(true);
        expect(root.querySelectorAll(componentName)).toHaveLength(1);
    });

    it('does not remount for equivalent controlled data or callback updates', () => {
        const root = document.createElement('div');
        document.body.append(root);
        FakeTinyflowElement.currentData = {
            nodes: [],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 1 }
        };
        const tinyflow = new Tinyflow({ element: root, data: { nodes: [] } });
        const element = root.querySelector(componentName) as FakeTinyflowElement;
        const onDataChange = vi.fn();

        tinyflow.setOptions({
            data: { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } },
            onDataChange
        });

        expect(root.querySelector(componentName)).toBe(element);
        (element.options as { onDataChange: (data: { nodes: never[] }) => void }).onDataChange({
            nodes: []
        });
        expect(onDataChange).toHaveBeenCalledOnce();
    });

    it('recognizes data emitted by the core even when toObject contains transient fields', () => {
        const root = document.createElement('div');
        document.body.append(root);
        const callback = vi.fn();
        FakeTinyflowElement.currentData = {
            nodes: [{ id: 'one', measured: { width: 120 }, data: {}, position: { x: 0, y: 0 } }]
        };
        const tinyflow = new Tinyflow({ element: root, onDataChange: callback });
        const element = root.querySelector(componentName) as FakeTinyflowElement;
        const emitted = {
            nodes: [{ id: 'one', data: {}, position: { x: 0, y: 0 } }],
            edges: []
        };

        (element.options as { onDataChange: (data: typeof emitted) => void }).onDataChange(emitted);
        tinyflow.setOptions({ data: emitted });

        expect(callback).toHaveBeenCalledWith(emitted);
        expect(root.querySelector(componentName)).toBe(element);
    });

    it('preserves unsaved canvas data when structural options change', () => {
        const root = document.createElement('div');
        document.body.append(root);
        const tinyflow = new Tinyflow({
            element: root,
            data: { nodes: [] },
            defaultTheme: 'light'
        });
        const editedData = {
            nodes: [{ id: 'unsaved', data: {}, position: { x: 10, y: 20 } }],
            edges: [],
            viewport: { x: 30, y: 40, zoom: 1.2 }
        };
        FakeTinyflowElement.currentData = editedData;

        // 框架适配器会携带完整结构配置；未变化的 data 不能覆盖画布编辑。
        tinyflow.setOptions({ data: { nodes: [] }, defaultTheme: 'dark' });

        const remounted = root.querySelector(componentName) as FakeTinyflowElement;
        expect(remounted.options).toMatchObject({ data: editedData, defaultTheme: 'dark' });
    });

    it('keeps system theme semantics and removes its media-query listener on destroy', () => {
        const listeners = new Set<() => void>();
        const mediaQuery = {
            matches: true,
            addEventListener: vi.fn((_event: string, listener: () => void) =>
                listeners.add(listener)
            ),
            removeEventListener: vi.fn((_event: string, listener: () => void) =>
                listeners.delete(listener)
            )
        };
        vi.spyOn(window, 'matchMedia').mockReturnValue(mediaQuery as unknown as MediaQueryList);
        const root = document.createElement('div');
        document.body.append(root);

        const tinyflow = new Tinyflow({ element: root, defaultTheme: 'system' });
        const element = root.querySelector(componentName) as FakeTinyflowElement;
        expect(element.classList.contains('dark')).toBe(true);

        mediaQuery.matches = false;
        listeners.forEach((listener) => listener());
        expect(element.classList.contains('dark')).toBe(false);

        tinyflow.destroy();
        expect(mediaQuery.removeEventListener).toHaveBeenCalledOnce();
        expect(listeners).toHaveLength(0);
    });

    it('destroys independently mounted instances without clearing host content', () => {
        const firstRoot = document.createElement('div');
        const secondRoot = document.createElement('div');
        const sibling = document.createElement('span');
        firstRoot.append(sibling);
        document.body.append(firstRoot, secondRoot);
        const first = new Tinyflow({ element: firstRoot });
        new Tinyflow({ element: secondRoot });

        first.destroy();

        expect(firstRoot.querySelector(componentName)).toBeNull();
        expect(firstRoot.contains(sibling)).toBe(true);
        expect(secondRoot.querySelector(componentName)).not.toBeNull();
        expect(first.getData()).toBeNull();
    });

    it('throws a useful error when the mount target does not exist', () => {
        expect(() => new Tinyflow({ element: '#missing' })).toThrow(
            "element not found by document.querySelector('#missing')"
        );
    });
});
