# Tronix portfolio (Hugo + Obsidian)

This repository is set up to publish a Hugo site from Obsidian-friendly Markdown in `content/`. The homepage uses a custom Hugo layout that reproduces the original static design, while other pages can be expanded gradually.

## Quick start (editing)

1. Open Obsidian.
2. Choose **Open folder as vault** and select `content/`.
3. Edit the Markdown files under `content/`.
4. Add images to `content/attachments/` and reference them in Markdown.

## Local preview (Hugo)

Install Hugo (extended) and run:

```bash
hugo server -D
```

Then open `http://localhost:1313`.

## Publishing (GitHub Pages)

The GitHub Actions workflow builds and deploys Hugo automatically when you push to `main`.

If you use a custom domain, ensure it is set in **Settings → Pages**.

## Content map

- `content/_index.md`: Home content (currently unused by the homepage template)
- `content/about.md`: About page
- `content/projects/`: Project case studies
- `content/notes/`: Notes and templates
- `content/skills.md`: Skills summary
- `content/cv.md`: CV landing page
- `content/attachments/`: Images and files
