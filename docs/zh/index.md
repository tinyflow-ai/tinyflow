---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Tinyflow
  text: AI 工作流编排框架
  tagline:  前端支持与 Vue、React 以及原生 JS 项目集成 <br />后端支持 Agents-Flex、SpringAI 或者 LangChain4j
#  image:
#    src: /assets/images/logo.png
#    alt: Tinyflow
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/quick-start
    - theme: alt
      text: 开发文档
      link: /zh/what-is-tinyflow

features:
  - title: 轻量组件
    details: Tinyflow 不是 AI 产品，而是可嵌入的智能编排组件。前端仅 100+KB，基于 Web Component，零框架依赖；后端提供执行逻辑库，不绑定任何框架。
  - title: 全栈自由
    details: 前端专注可视化编排（支持 React/Vue/原生等），后端专注执行逻辑。两者通过标准 JSON 契约通信，彼此独立，互不干扰。
  - title: 契约驱动
    details: 通过 type + parameters/outputDefs 契约扩展节点。新增能力只需注册前后端实现，无需修改核心代码，即插即用。
---

![screenshot_full.png](../assets/images/screenshot_full.png)
