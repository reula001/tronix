# Tronix portfolio (Hugo + Blowfish + Obsidian)

This repository uses Hugo + Blowfish. Content is managed in Markdown under `content/` and deployed to GitHub Pages via GitHub Actions.

## Local preview

Install Hugo extended `0.155.2` or newer and run:

```bash
hugo server -D
```

Open `http://localhost:1313`.

## Publishing

The workflow in `.github/workflows/deploy.yml` builds and deploys on `main`. It also validates generated output and internal links before deployment.

## Content map

- `content/_index.md`: Homepage
- `content/pages/about.md`: About page (skills + contact/CV request form)
- `content/projects/`: Project case studies
- `content/attachments/`: Images and files

## Theme

Blowfish is included as a git submodule in `themes/blowfish`.
Configuration lives in `config/_default/`.
