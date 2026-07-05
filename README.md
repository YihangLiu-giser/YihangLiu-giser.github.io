# Academic Homepage

This site is designed to stay editable after deployment.

## Best way to update it later

Edit the repository directly on GitHub.

The main file you will update most often is:

- `content.js`

That file controls:

- headline text
- sidebar links
- section content
- links
- images
- GIFs
- videos

## What each file does

- `index.html`: page structure
- `styles.css`: layout and responsive styling
- `script.js`: renders content into the page
- `content.js`: the main editable content file
- `assets/`: images, GIFs, SVGs, videos, and other media files

## How to edit online

1. Open your GitHub repository
2. Open `content.js`
3. Click the pencil icon
4. Edit the content
5. Commit the change
6. GitHub Pages will redeploy automatically

## How rich content works

Fields ending in `Html` support HTML directly.

That means you can insert:

- links
- images
- GIFs
- videos
- embedded iframes
- lists

Example:

```html
<p>This is a paragraph with an <a href="https://example.com">external link</a>.</p>
<img src="./assets/demo.gif" alt="Demo GIF" />
<video controls src="./assets/demo.mp4"></video>
```

## How to add images, GIFs, and videos

1. Upload the file into `assets/` on GitHub
2. Reference it inside `content.js`

Examples:

```html
<img src="./assets/my-photo.jpg" alt="Photo" />
<img src="./assets/demo.gif" alt="GIF demo" />
<video controls src="./assets/demo.mp4"></video>
```

## Recommended editing pattern

Use plain strings for short text.

Use `Html` fields when you want richer formatting or media.

Examples in `content.js`:

- `about.summaryHtml`
- `about.points[].html`
- `projects.items[].html`
- `journey.items[].html`
- `contact.bodyHtml`

## Local source vs published repo

This local folder is your source workspace:

- `C:\\Users\\YH\\Documents\\pano\\github-homepage`

If you want, this source can also be published as the live repo structure so that future edits on GitHub are straightforward.
