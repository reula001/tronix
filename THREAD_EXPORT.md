# Tronix Thread Export (Hugo + Blowfish)

## Goal

Migrate the old GitHub Pages site to a Hugo + Blowfish site (Christian Lempa video style), driven by Markdown (Obsidian compatible). Keep custom content, make navigation consistent, and keep CI verification.

## Current State (Repo)

- Theme: Blowfish (git submodule) at `themes/blowfish`.

- Hugo version pinned in CI: `0.155.2` (extended).

- Content is Markdown under `content/`.

- Homepage is `content/_index.md` (Hugo list or home page content).

- Section lists use `_index.md` (required by Hugo for sections).

  

## Key Files

- Hugo config: `config/_default/hugo.toml`

- Theme params: `config/_default/params.toml`

- Menu: `config/_default/menus.en.toml`

- Language and author links: `config/_default/languages.en.toml`

- Markup: `config/_default/markup.toml`

- Custom CSS overrides: `assets/css/custom.css`

- CI workflow: `.github/workflows/deploy.yml`

- Site verification: `scripts/verify-site.mjs`

- Content guide: `CONTENT_GUIDE.md`

  

## Content Structure

- Home page: `content/_index.md`

- Section list pages: `content/projects/_index.md`, `content/notes/_index.md`

- Standalone pages: `content/pages/about.md`, `content/pages/skills.md`, `content/pages/cv.md`, `content/pages/contact.md`

- Project pages: `content/projects/*.md`

- Attachments: `content/attachments/*` (served as `/attachments/...`)

  

Note: `content/.obsidian` exists in the repo (tracked). If you want it out of git, you will need to `git rm -r content/.obsidian` and keep a `.gitignore` entry for `.obsidian/`.

  

## Menu (current)

Defined in `config/_default/menus.en.toml`:

- Home

- Projects

- About

- Skills

- Notes

- CV

- Contact

  

## Theme + Markdown Notes

- `homepage.layout = "page"` so `content/_index.md` is the homepage.

- `article.showTableOfContents = false` and other UI details are disabled in `config/_default/params.toml`.

  

### Obsidian compatibility rules (practical)

- Obsidian does not understand Hugo shortcodes like `{{< gallery >}}`. If you want the same file to preview cleanly in Obsidian and also render in Hugo, prefer plain HTML for custom layouts.

- Avoid leading TAB characters or 4 spaces at the start of HTML lines inside Markdown. Markdown treats that as an indented code block and will render it as text.

- Raw HTML inside Markdown requires Goldmark unsafe rendering enabled. If your HTML ever gets stripped, set:

  - `markup.goldmark.renderer.unsafe = true` (in your Hugo config)

  

## Homepage logo strip (SVG logos, centered, spacing, multi row)

Decision: use plain HTML (not Blowfish gallery shortcode) so it renders in both Hugo and Obsidian.

  

### Markup (place in `content/_index.md`)

This yields a 4 column row, and additional logos automatically wrap to the next row.

  

```html

<div class="home-logos">

  <div class="logo-row">

    <div class="logo-cell"><img src="/attachments/Nanosurf_logo.svg" alt="Nanosurf"></div>

    <div class="logo-cell"><img src="/attachments/Siemens-logo.svg" alt="Siemens"></div>

    <div class="logo-cell"><img src="/attachments/intek.svg" alt="Intek"></div>

    <div class="logo-cell"><img src="/attachments/ullrich_engineering.svg" alt="Ullrich Tech"></div>

  

    <!-- Optional forced line break after 4 logos -->

    <div class="logo-break"></div>

  

    <div class="logo-cell"><img src="/attachments/fagskolen_logo.svg" alt="Fagskolen Innlandet"></div>

    <div class="logo-cell"><img src="/attachments/s-mart-logo.svg" alt="S:mart"></div>

    <div class="logo-cell"><img src="/attachments/Agilis.svg" alt="Agilis"></div>

    <div class="logo-cell"><img src="/attachments/Brodboksen.svg" alt="Brodboksen"></div>

  </div>

</div>

```

  

### CSS (place in `assets/css/custom.css`)

Create the file if it does not exist. Blowfish will load `assets/css/custom.css` automatically.

  

```css

/* Homepage logos: 4 equal columns, centered, with padding between logos */

.home-logos .logo-row{

  display: flex;

  flex-wrap: wrap;

  align-items: center;

}

  

.home-logos .logo-cell{

  flex: 0 0 25%;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 8px 12px;

  box-sizing: border-box;

}

  

.home-logos .logo-cell img{

  max-width: 100%;

  height: auto;

  display: block;

}

  

/* Optional forced wrap point */

.home-logos .logo-break{

  flex-basis: 100%;

  height: 0;

}

```

  

Notes:

- Converting logos to SVG and trimming their whitespace is the correct move. Most alignment issues come from transparent padding in raster PNGs.

- If you do not need a forced wrap point, delete the `<div class="logo-break"></div>` and the CSS block for `.logo-break`. The layout will still wrap naturally after each 4 logos.

  

## Social links (LinkedIn)

Observed location for the LinkedIn link: `config/_default/languages.en.toml`. Update the LinkedIn URL there to your own profile.

  

If you use multiple languages, repeat the change in the corresponding `languages.xx.toml` files. Otherwise only some pages will show the updated link.

  

## CI / GitHub Actions

Workflow file: `.github/workflows/deploy.yml`

- Uses `peaceiris/actions-hugo@v3` with Hugo `0.155.2` (extended)

- Builds with `hugo --minify`

- Runs `node scripts/verify-site.mjs public`

- Deploys to GitHub Pages

  

### Important: verification script may require an email in `public/index.html`

A CI failure message you hit was:

  

- "Expected contact email in index.html"

  

Meaning: `scripts/verify-site.mjs` is enforcing an email presence in the generated homepage HTML. If you remove your email to reduce spam, you must also update the verification rule, otherwise CI will keep failing.

  

Recommended fix:

- Edit `scripts/verify-site.mjs` and remove the "contact email" assertion

- Replace it with a safer requirement, for example a LinkedIn URL presence, or a Contact page link, or a `mailto:` that points to a disposable alias

  

This keeps CI useful without forcing you to publish a raw email address.

  

## Running Locally (Windows Mac)

1. Install Hugo extended 0.155.2.

2. Initialize theme submodule:

   - `git submodule update --init --recursive`

3. Run local server:

   - `hugo server -D`

   - Open http://localhost:1313/

  

If you change the base URL or need Windows specific command shell, use:

- PowerShell: `hugo server -D --baseURL http://localhost:1313/`

  

## What’s Cleaned Up

- Old `themes/tronix` removed

- Root `hugo.toml` removed

- Old static HTML CSS assets removed or not used

- `.gitignore` includes `.obsidian/`, `public/`, `resources/`

  

## Known Open Questions / Potential Next Steps

- Decide whether to remove `content/.obsidian` from git.

- If you still want Hugo shortcodes for some pages but Obsidian preview too, keep two sources:

  - `content/` for Hugo

  - separate Obsidian vault for notes

- Refine CI checks to validate navigation, key pages, and assets without forcing a raw email address.