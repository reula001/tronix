# Tronix portfolio (Obsidian-first)

This repository now contains an Obsidian-compatible Markdown vault in `content/`. Use Obsidian to edit the notes and project pages, then publish with a static site template that supports Obsidian-style Markdown.

## Quick start (editing)

1. Open Obsidian.
2. Choose **Open folder as vault** and select `content/`.
3. Edit `index.md`, `about.md`, and the files under `projects/` and `notes/`.
4. Add images to `content/attachments/` and embed them with `![[attachments/filename.png]]`.

## Publishing (Quartz + GitHub Pages)

This repo is configured to build the Quartz site directly from `content/` using GitHub Actions.

Workflow: `.github/workflows/deploy.yml`

Steps:

1. In GitHub, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` and the workflow will build and publish the site.

If you use a custom domain, keep the `CNAME` file in the repo root. The workflow copies it into the published site automatically.

## Content map

- `content/index.md`: Home page
- `content/about.md`: About page
- `content/projects/`: Project case studies
- `content/notes/`: Notes and templates
- `content/skills.md`: Skills summary
- `content/cv.md`: CV landing page
- `content/attachments/`: Images and files
