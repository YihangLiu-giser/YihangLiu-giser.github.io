# Yihang Liu — Academic Portfolio

Personal academic website for **Yihang Liu / 刘一航**, published with GitHub Pages.

## 在线修改内容（推荐）

网站采用“内容与样式分离”的结构。日常更新通常只需要修改 [`content.js`](./content.js)：

1. 在 GitHub 仓库中打开 `content.js`。
2. 点击右上角铅笔图标。
3. 修改英文 `en` 或中文 `zh` 下的文字。
4. 点击 **Commit changes**。
5. 等待 GitHub Pages 自动更新。

也可以访问网站的 `/admin/` 页面，使用集中管理入口：

```text
https://yihangliu-giser.github.io/admin/
```

## 文件说明

| 文件 | 用途 | 是否经常修改 |
| --- | --- | --- |
| `content.js` | 个人信息、中英文文案、项目、经历和链接 | 是 |
| `assets/` | 头像、图片、GIF 和视频 | 按需 |
| `index.html` | 页面结构 | 否 |
| `styles.css` | 视觉与响应式样式 | 否 |
| `script.js` | 内容渲染和中英文切换 | 否 |
| `admin/index.html` | 内容管理入口与说明 | 否 |

## 更换头像

将新头像上传到 `assets/`，然后在 `content.js` 中修改：

```js
avatar: "./assets/你的图片文件名.jpg",
```

建议使用竖版 JPG 或 PNG，尺寸至少为 600 × 800 像素。

## 本地预览

因为网站没有构建步骤，可以直接用任意静态文件服务器预览。例如：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署

仓库名称为 `YihangLiu-giser.github.io`，提交到 `main` 分支后由 GitHub Pages 自动发布。站点地址：

<https://yihangliu-giser.github.io>
