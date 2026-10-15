# Binghao Tu (Bruce) · Personal Portfolio

双语个人介绍网站，面向 GitHub Pages、Vercel 等静态托管平台。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建结果在 `dist/` 目录。

## 部署到 GitHub Pages

当前仓库为 `Bruce-778/Bruce-778.github.io`，线上地址为 https://bruce-778.github.io/ 。

1. 本地运行 `npm run build`，检查中英文页面。
2. 将修改提交并推送到 `main` 分支。
3. `.github/workflows/deploy.yml` 会自动构建并发布；等待 GitHub Actions 的部署任务成功。

仓库的 **Settings → Pages** 发布来源使用 **GitHub Actions**。

项目使用相对资源路径，因此可以部署在 `username.github.io/repository-name/` 这样的子路径下。

## 更新内容

- 中英文内容：`src/main.js`
- 页面样式与响应式布局：`src/style.css`
- 图片和简历素材：`public/assets/`
- 页面标题、图标和基础元数据：`index.html`

公开简历为 `public/assets/bruce-tu-resume.pdf`，首页和联系区均提供新标签页打开的 PDF 链接。此文件于 2026-10-15 替换为用户提供的 `屠炳豪-简历.pdf`，保持原文件内容。以后更新简历时直接替换此文件并重新部署即可，中英文入口使用同一份简历。

教育经历使用 `journey.items` 中的结构化记录：学校、学位、学院、专业、研究方向和导师分开维护。智能体构建与设计、人机交互、数据分析及导师许玮归属于浙江工业大学。

英文首页使用 **Binghao Tu**，英文名 **Bruce** 通过问候语展示；中文首页保留中文姓名。切换语言会保留当前阅读位置。长校名与专业名以完整词组换行，新增文案时请同时检查中英文的手机和平板布局。

页面按关于我、实习经历、项目经历、学习经历、论文发表和联系方式组织。使用直接的栏目名称和事实描述。实习经历按时间倒序排列。

About 区域的图片轮播由 `about.gallery` 维护，展示真实校园照片、项目首页截图和论文原图。支持按钮、方向键及横向滑动，切换语言保留当前图片，默认手动播放。隐藏轮播页使用 `inert`，避免键盘进入不可见链接。新增图片需同时提供中英文标题、图片说明与相关链接。

关于我使用独立命名的 `bt-profile-*` 类，显式保持“简介与图片在上、数据在下”的布局，避免通用类名冲突。指标区以容器宽度切换四列或两列。手机端使用可展开导航，支持 Escape 关闭。

论文由 `journey.papers` 与 `publications` 共同维护。缩略图链接至原图所在的论文页或研究项目页，标题和阅读链接指向原论文。图片来源和提取页码见 [ASSET_SOURCES.md](ASSET_SOURCES.md)。

正文通过 `protectLineEndings` 保留结尾词组，中文通过 `Intl.Segmenter` 找到完整结尾；其余正文保持连续文本。标题使用平衡或自然换行。轮播过渡和计数动画尊重系统的减少动态效果设置。
