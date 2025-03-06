// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        });
    },
    enhanceApp({ app, router, siteData }) {
        // ...

        if (typeof window === 'undefined'){
            return;
        }
        // 定义支持的语言列表
        const supportedLanguages = ['en', 'zh'];
        const nav = navigator as any;
        // 获取用户的首选语言
        const userLang = nav.language || nav.userLanguage;
        const primaryLang = userLang.split('-')[0]; // 提取主要语言代码，如 "en" 或 "zh"

        // 如果当前路径已经是语言路径，则不跳转
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/en') || currentPath.startsWith('/zh')) {
            return;
        }

        // 判断是否支持用户语言，若支持则跳转，否则跳转到默认语言
        const targetLang = supportedLanguages.includes(primaryLang) ? primaryLang : 'en';

        // 执行跳转
        window.location.href = `/${targetLang}${currentPath === '/' ? '' : currentPath}`;
    }
} satisfies Theme;
