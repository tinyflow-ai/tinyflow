import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

/**
 * 框架适配器使用各自的 Vite 编译插件单独测试，避免核心 UI 的 Svelte 测试配置
 * 掩盖 React/Vue 生命周期问题。
 */
export default defineConfig({
    root: resolve(__dirname),
    // pnpm 不会把各适配包的 peer/dev dependency 提升到仓库根目录，测试配置需要
    // 明确从对应包解析框架运行时。
    resolve: {
        alias: {
            react: resolve(__dirname, 'packages/react/node_modules/react'),
            'react-dom': resolve(__dirname, 'packages/react/node_modules/react-dom'),
            vue: resolve(__dirname, 'packages/vue/node_modules/vue')
        }
    },
    plugins: [react(), vue()],
    test: {
        environment: 'jsdom',
        include: ['packages/{react,vue}/src/**/*.test.{ts,tsx}']
    }
});
