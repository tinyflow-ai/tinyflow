import { describe, expect, it } from 'vitest';
import uiPackage from '../package.json';
import reactPackage from '../../react/package.json';
import vuePackage from '../../vue/package.json';
import sveltePackage from '../../svelte/package.json';

describe('package exports', () => {
    it.each([
        ['ui', uiPackage],
        ['react', reactPackage],
        ['vue', vuePackage],
        ['svelte', sveltePackage]
    ])('%s exposes only valid ESM entry points', (_name, packageJson) => {
        const rootExport = packageJson.exports['.'];

        expect(packageJson.type).toBe('module');
        expect(rootExport).toHaveProperty('import', './dist/index.js');
        expect(rootExport).not.toHaveProperty('require');
    });
});
