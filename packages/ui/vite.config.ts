import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';
// import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: true,
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            cssFileName: 'index',
            fileName: (format) => {
                return format === 'umd' ? 'index.umd.js' : 'index.js';
            },
            formats: ['es', 'umd'],
            name: 'Tinyflow'
        },
        rollupOptions:{
            output: {
                // 确保所有依赖都被打包
                inlineDynamicImports: true,
                exports: 'named',
            },
            plugins: [
                // replace({
                //     preventAssignment: true,
                //     'process.env.NODE_ENV': JSON.stringify('production') // 替换为生产环境
                // })
            ]
        }
    },
    plugins: [
        svelte({ emitCss: false }),
        dts({
            rollupTypes: true,
            tsconfigPath: './tsconfig.app.json'
        })
    ]
});
