import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

export default defineConfig({
    root: resolve(__dirname, 'packages/ui'),
    plugins: [svelte()],
    ssr: {
        noExternal: ['@xyflow/svelte', 'mode-watcher']
    },
    test: {
        environment: 'node',
        include: ['src/**/*.test.ts'],
        coverage: {
            reporter: ['text', 'html']
        }
    }
});
