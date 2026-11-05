import { defineConfig } from 'vitepress'

// ================================================================
// ProxyDoc — 站点主配置
// ----------------------------------------------------------------
// 本文件负责：站点元信息、顶部导航(nav)、侧边栏(sidebar)、
// 本地搜索、页脚、深浅色模式。
//
// ── 如何新增一篇文章 ─────────────────────────────────────────────
//   1. 在对应目录新建 Markdown 文件，例如 docs/mobile/xxx.md；
//   2. 在下方 sidebar 对应分组的 items 数组里加一行：
//      { text: '文章标题', link: '/mobile/xxx' }
//   3. 如需出现在顶部导航，在 nav 数组里加对应入口。
//
// ── 如何新增图片 ────────────────────────────────────────────────
//   把图片放到 docs/public/images/<分类>/ 下（分类：android / ios /
//   windows / common），在文章中引用：
//      ![步骤说明](/images/android/step-01.png)
//
// ── 如何新增视频 ────────────────────────────────────────────────
//   小视频放到 docs/public/videos/ 下，在文章中插入：
//   <video controls playsinline preload="metadata"
//          style="width:100%; aspect-ratio:16/9; border-radius:8px;">
//     <source src="/videos/xxx.mp4" type="video/mp4" />
//   </video>
//   大视频建议放外部托管或 Cloudflare R2，只改 src 即可。
// ================================================================

export default defineConfig({
  lang: 'zh-CN',
  title: 'ProxyDoc',
  description: '代理 IP 使用与配置知识库',

  // 站点 <head>：favicon
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],

  // 深浅色模式：true = 跟随系统，用户可手动切换
  appearance: true,

  themeConfig: {
    // 顶部导航：保持简洁
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/quick-start' },
      {
        text: '手机端教程',
        items: [
          { text: 'Android 链式代理', link: '/mobile/android-chain' },
          { text: 'iOS 链式代理', link: '/mobile/ios-chain' },
        ],
      },
      { text: 'PC 端教程', link: '/desktop/' },
      {
        text: '问题排查',
        items: [
          { text: '连接失败排查', link: '/help/troubleshooting' },
          { text: '常见问题', link: '/help/faq' },
        ],
      },
    ],

    // 侧边栏：按目录分组，保证两次点击内找到教程
    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '基础知识', link: '/guide/proxy-basics' },
          ],
        },
      ],
      '/mobile/': [
        {
          text: '手机端教程',
          items: [
            { text: 'Android 链式代理', link: '/mobile/android-chain' },
            { text: 'iOS 链式代理', link: '/mobile/ios-chain' },
          ],
        },
      ],
      '/desktop/': [
        {
          text: 'PC 端教程',
          items: [{ text: 'PC 端教程（即将更新）', link: '/desktop/' }],
        },
      ],
      '/help/': [
        {
          text: '问题排查',
          items: [
            { text: '连接失败排查', link: '/help/troubleshooting' },
            { text: '常见问题', link: '/help/faq' },
          ],
        },
      ],
    },

    // 右侧「本页目录」
    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    // 本地全文搜索（MiniSearch，中文可用）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    // 页脚
    footer: {
      message: 'ProxyDoc · 代理 IP 使用与配置知识库',
      copyright: 'Copyright © 2026 ProxyDoc',
    },
  },
})
