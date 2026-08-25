// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest';
import { componentName } from './consts';
import { Tinyflow } from './Tinyflow';

class FakeTinyflowElement extends HTMLElement {
    options: unknown;
    private _onInit?: (flow: { toObject: () => unknown }) => void;

    set onInit(callback: (flow: { toObject: () => unknown }) => void) {
        this._onInit = callback;
        callback({ toObject: () => ({ marker: 'ready' }) });
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
    });

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
        const tinyflow = new Tinyflow({ element: root, data: { nodes: [] }, defaultTheme: 'light' });
        const firstElement = root.querySelector(componentName);

        tinyflow.setOptions({ data: { nodes: [{ id: 'updated', data: {}, position: { x: 0, y: 0 } }] }, defaultTheme: 'dark' });

        const secondElement = root.querySelector(componentName) as FakeTinyflowElement;
        expect(secondElement).not.toBe(firstElement);
        expect(secondElement.options).toMatchObject({ defaultTheme: 'dark' });
        expect(root.contains(sibling)).toBe(true);
        expect(root.querySelectorAll(componentName)).toHaveLength(1);
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
