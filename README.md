# ProxyDoc

代理 IP 使用与配置知识库。基于 [VitePress](https://vitepress.dev) 构建的静态文档站，支持本地搜索、深浅色主题、手机与 PC 自适应。

## 技术栈

- VitePress 1.x
- Node.js 22 LTS 及以上
- Markdown 内容 + TypeScript 配置
- VitePress 本地全文搜索（MiniSearch）
- 部署：GitHub + Cloudflare Pages（无后端、无数据库）

## 目录结构

```text
ProxyDoc/
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── docs/
    ├── index.md                     # 首页
    ├── .vitepress/
    │   ├── config.mts               # 站点配置（导航、侧边栏、搜索）
    │   └── theme/
    │       └── custom.css           # 主题样式（蓝白配色、深浅色、响应式）
    ├── public/
    │   ├── images/                  # 截图
    │   │   ├── android/
    │   │   ├── ios/
    │   │   ├── windows/
    │   │   └── common/
    │   └── videos/                  # 视频
    ├── guide/                       # 入门指南
    │   ├── quick-start.md
    │   └── proxy-basics.md
    ├── mobile/                      # 手机端
    │   ├── android-chain.md
    │   └── ios-chain.md
    ├── desktop/                     # PC 端（后续扩展）
    │   └── README.md
    └── help/                        # 排查与常见问题
        ├── troubleshooting.md
        └── faq.md
```

## 本地环境安装

需要 Node.js 22 LTS 及以上（推荐 22/24）。确认版本：

```bash
node --version
npm --version
```

安装依赖：

```bash
npm install
```

## 本地运行与预览

启动开发服务器（热更新）：

```bash
npm run docs:dev
```

浏览器打开终端提示的地址（默认 http://localhost:5173）。

构建生产版本：

```bash
npm run docs:build
```

本地预览构建结果：

```bash
npm run docs:preview
```

## 如何新增一篇文章

1. 在对应目录新建 Markdown 文件，例如 `docs/mobile/xxx.md`；
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 对应分组里加一行：

   ```ts
   { text: '文章标题', link: '/mobile/xxx' }
   ```

3. 如需出现在顶部导航，在 `nav` 里加对应入口。

文章标题用一级 `#`，章节用 `##`、`###`（会自动生成右侧目录）。步骤配图用 `![说明](/images/.../xx.png)`。

## 如何添加和替换截图

1. 把图片放到 `docs/public/images/<分类>/` 下，分类：`android` / `ios` / `windows` / `common`；
2. 命名建议有序、易懂，如 `android/step-01-groups.png`；
3. 在文章中引用：

   ```markdown
   ![添加分组](/images/android/step-01-groups.png)
   ```

4. **替换**：直接用同名新文件覆盖即可，无需改文章。

> 注意：截图中的真实账号、密码、IP 等敏感信息务必打码后再上传。

## 如何添加视频

小视频（几 MB 内）放到 `docs/public/videos/`，在文章中插入：

```html
<video controls playsinline preload="metadata"
       style="width:100%; aspect-ratio:16/9; border-radius:8px;">
  <source src="/videos/xxx.mp4" type="video/mp4" />
  当前浏览器不支持视频播放。
</video>
```

要点：

- 只保留 MP4（H.264）保证浏览器兼容；
- `preload="metadata"` 让视频不自动下载，不影响加载速度；
- 不自动播放（不加 `autoplay`）；
- 较大的视频建议放外部托管或 Cloudflare R2，只在 `src` 里替换成完整 URL 即可，视频存储位置与内容结构解耦。

## 如何扩展 PC 端分类

后续新增 PC 内容时：

1. 在 `docs/desktop/` 下创建 Markdown 文件（如 `windows-proxy.md`）；
2. 在 `config.mts` 的 `sidebar['/desktop/']` 里加对应条目；
3. 需要的话在顶部 `nav` 的「PC 端」下加子项。

无需改动网站框架。

## 如何上传 GitHub

```bash
git init
git add .
git commit -m "init: ProxyDoc 文档站"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

## 如何配置 Cloudflare Pages

1. 登录 Cloudflare 控制台，进入 **Workers & Pages → Create → Pages → Connect to Git**；
2. 授权并选择你的 GitHub 仓库；
3. 构建参数填：

   | 参数 | 值 |
   | --- | --- |
   | Build command | `npm run docs:build` |
   | Build output directory | `docs/.vitepress/dist` |
   | Root directory | `/` |

4. 点击 **Save and Deploy**，等待首次构建完成，即可通过 `https://<项目>.pages.dev` 访问。

## 如何更新网站

日常更新只需：

1. 新增/修改 Markdown、图片或视频；
2. `git add . && git commit -m "描述" && git push`；

Cloudflare Pages 检测到 GitHub 变更后会自动重新构建并发布，无需手动操作。

## 免责声明

本网站提供代理 IP 技术知识和客户端配置，不保证代理服务器始终在线，不保证第三方网站一定允许代理 IP 访问，也不保证第三方账号不会触发风控。代理连通性与第三方业务结果属于不同问题。用户应遵守所在地法律法规及相关平台服务条款。
