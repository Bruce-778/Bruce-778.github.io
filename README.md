# Bruce Tu · Personal Portfolio

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

1. 在 GitHub 新建一个仓库，例如 `bruce-tu-portfolio`。
2. 将整个项目目录推送到仓库的 `main` 分支。
3. 在仓库的 **Settings → Pages** 中，将发布来源设置为 **GitHub Actions**。
4. 每次推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布。

项目使用相对资源路径，因此可以部署在 `username.github.io/repository-name/` 这样的子路径下。

## 更新内容

- 中英文内容：`src/main.js`
- 页面样式与响应式布局：`src/style.css`
- 图片和简历素材：`public/assets/`
- 页面标题、图标和基础元数据：`index.html`
