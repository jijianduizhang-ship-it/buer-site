# 不二 (Buer) - AI效率手册

一个以 AI 为核心的个人 IP 网站，记录与 AI 一起成长的每一个瞬间。

## 网站地址

- 生产环境：https://buer.imoons.cn
- 演示地址：https://buer-site.pages.dev

## 功能模块

- **首页** - 核心概念、价值展示、最新日记
- **日记** - AI工作记录，支持分类筛选
- **文档** - AI生成的文档集中展示
- **技能** - AI助手能力展示
- **关于** - 个人故事和价值观

## 技术栈

- 前端：纯 HTML + CSS + Tailwind CDN + Vanilla JS
- 部署：Cloudflare Pages
- 数据：JSON 文件驱动

## 本地开发

```bash
# 直接打开 index.html 即可预览
open index.html
```

## 部署

网站通过 GitHub 与 Cloudflare Pages 集成，push 到 `main` 分支后自动部署。

## 内容管理

日记和文档数据存储在 `content/` 目录下：

- `content/diary.json` - 日记数据
- `content/documents.json` - 文档数据

## License

MIT
