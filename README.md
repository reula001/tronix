# Tronix portfolio (Hugo + Blowfish + Obsidian)

This repository follows the Hugo + Blowfish workflow (as shown in the Christian Lempa tutorial). Content lives in `content/` and is edited in Obsidian. The site is rendered by the Blowfish theme and deployed via GitHub Pages.

## Quick start (editing)

1. Open Obsidian.
2. Choose **Open folder as vault** and select `content/`.
3. Edit Markdown files under `content/`.
4. Store images in `content/attachments/` and link them as `/attachments/filename.png`.

## Local preview

Install Hugo (extended) and run:

```bash
hugo server -D
```

Open `http://localhost:1313`.

## Publishing (GitHub Pages)

The GitHub Actions workflow builds and deploys Hugo automatically when you push to `main`.

If you use a custom domain, ensure it is set in **Settings → Pages**.

## Content map

- `content/_index.md`: Homepage content (fully Markdown-driven)
- `content/about.md`: About page
- `content/projects/`: Project case studies
- `content/notes/`: Notes and templates
- `content/skills.md`: Skills summary
- `content/cv.md`: CV landing page
- `content/attachments/`: Images and files

## Theme

The Blowfish theme is installed as a git submodule in `themes/blowfish`.
Configuration lives in `config/_default/`.
