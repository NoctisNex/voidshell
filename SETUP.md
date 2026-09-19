# voidshell

A static personal portfolio built with Astro 7, plain CSS and Markdown. There is no client-side JavaScript, component library, CMS or database. The only direct dependency is Astro. Fonts come from the visitor's system.

## Run it

Use Node.js **22.12 or newer** (Node 24 LTS is a good choice) and npm.

```sh
npm ci
npm run dev
```

Open the address printed in your terminal. To make the static site:

```sh
npm run build
npm run preview
```

`dist/` contains everything needed by the web server. It needs no Node process once built. The downloadable package includes a ready-built copy in that folder.

## Start with your details

Edit `src/data/site.js`. It holds your name, introduction, description, full site URL, navigation and contact links. Your email, GitHub, GitLab and LinkedIn are filled in. Empty email and profile URLs are hidden. Add another profile by copying an existing object.

`currentFocus` controls the About page's "What's next" paragraph. It is deliberately empty for now, which displays "No update at the moment." Add a sentence when you have something to share; the section stays in place either way.

Before publishing on your own domain:

1. `url` is already set to `https://voidshell.ch`. Connect that domain to your chosen static host separately; changing this value does not change DNS.
2. Review your profile and course descriptions before making them public.
3. Set `allowIndexing: true` when you want search engines to index the public site.
4. Run `npm run build` again and deploy the new `dist/`.

The preview intentionally blocks indexing. Example project pages also have `noindex` and are excluded from the sitemap. Do not treat `robots.txt` as an access control.

## Where things live

| Change | File |
| --- | --- |
| Introduction, contacts, navigation, domain | `src/data/site.js` |
| Homepage headline and section text | `src/pages/index.astro` |
| About text | `src/pages/about.astro` |
| "What's next" update | `currentFocus` in `src/data/site.js` |
| Add, remove or reorder work | `src/content/projects/*.md` |
| Project page layout | `src/pages/work/[slug].astro` |
| Header and footer | `src/components/Header.astro`, `Footer.astro` |
| Project list layout | `src/components/ProjectRow.astro` |
| Colors, type, spacing, responsive layout | `src/styles/global.css` |
| Shared metadata | `src/layouts/Layout.astro` |
| Project field definitions | `src/content.config.ts` |

The small `getProjects()` function is shared by the list, detail pages and sitemap. It keeps hidden/draft entries out of all three.

## Add a project

Copy a Markdown file in `src/content/projects/`. Replace the frontmatter at the top and write normal Markdown below it. Only `title` and `description` are required. Smaller `order` values appear first. The filename becomes the address unless you supply a `slug`.

```yaml
---
title: "Your actual project title"
slug: "your-project"
description: "What you made and why it matters."
order: 10
year: "2026"
category: "Systems"
status: "In progress"
technologies: ["Linux", "Shell"]
example: false
draft: false
---
```

Those values illustrate the format; replace them with facts about your own project. A slug must contain lowercase letters, numbers and single hyphens, and must be unique. Delete unused optional fields instead of leaving blank values. Use `draft: true` to exclude an unfinished page, or delete the file to remove it. If you add a demonstration entry, `example: true` labels it visibly and `showExamples` controls whether it appears.

The two current entries describe your TBZ coursework in modules 346 and 169 and link to the corresponding GitLab folders. Their summaries distinguish module scope from specific implementation claims. The homepage's short course introduction is in `src/pages/index.astro`; update that line when you add work from other contexts.

Optional links and images use this shape:

```yaml
repository: "https://github.com/YOUR-USERNAME/YOUR-REPOSITORY"
live: "https://YOUR-ACTUAL-PROJECT-DOMAIN"
cover:
  src: "/assets/images/your-project.webp"
  alt: "Describe what is visible and relevant."
images:
  - src: "/assets/images/your-project-detail.webp"
    alt: "Describe this image."
    caption: "Optional context."
```

Put those files in `public/assets/images/`. These image fields handle the configured base path. Use the gallery fields for a GitHub Pages project site: raw absolute image paths written directly inside Markdown do not automatically receive a repository prefix. Prefer compressed WebP or AVIF, and resize images to a sensible display resolution before adding them.

## Replace the portrait

The portrait is your supplied photograph, resized and compressed without retouching. Replace `robin-400.webp`, `robin-800.webp` and `robin-1200.webp` in `public/assets/images/` with square exports at those widths. Keep the filenames, or update the image references in `index.astro` and `about.astro`. Adjust the alt text if the image changes. CSS controls the homepage crop.

## Branding and social image

Only web assets are copied into `public/assets/brand/`. The original package is untouched. `BRAND.txt` is the supplied usage guide. The horizontal logo displays its full symbol at approximately 64px, with the included clear space. Smaller placements use the supplied optical variants. Light and dark modes use the corresponding original SVGs.

Favicons and the manifest are linked in `Layout.astro`. Keep the manifest next to its app icons. `public/assets/images/social.png` is the 1200 × 630 sharing image, composed with the original white logo. Its editable SVG is included in `design/social.svg`. Export that SVG to PNG after changing its text. No font download is required by the website.

## Style and theme

The top of `global.css` holds the small set of shared values. Change `--width` for the maximum content width, `--gutter` for side margins or `--section-space` for vertical spacing. The rest of the stylesheet follows the page sections, followed by responsive and print rules.

The light/dark theme follows `prefers-color-scheme` without JavaScript or stored state. If you want one fixed theme, remove the dark-mode media rules and change `color-scheme` to `light` or `dark` in both CSS and `Layout.astro`.

## Metadata

`site.js` controls the default title, description and canonical origin. Individual page descriptions are in their Astro files; project descriptions come directly from Markdown. `Layout.astro` renders Open Graph and X card metadata. `sitemap.xml` and `robots.txt` are generated at build time. Rebuild after changing the domain or indexing settings.

## Host it

- **Cloudflare Pages or Netlify:** build command `npm run build`, output directory `dist`, Node 22.12+.
- **nginx, Apache or ordinary static hosting:** upload the contents of `dist/` to the document root. Serve directory URLs through `index.html` and configure `404.html` as the error page. Do not use a single-page-app rewrite that returns the homepage for every missing URL.
- **GitHub Pages:** use a static Pages build/deploy workflow with Node 22.12+ and upload `dist/`. On a custom domain or a user site, keep `base: '/'`. For a repository site, set `url` to your `https://USERNAME.github.io` origin and `base` to `'/REPOSITORY/'`, then rebuild.

An HTTPS static host is sufficient. There are no API keys or environment variables to configure. `.openai/hosting.json` associates the working checkout with the private preview; it is not needed on your own server.

## Checks

The implementation is built and checked for internal links, assets, metadata, no client JavaScript and responsive overflow. `QA.md` records the actual verification completed for this delivery. No synthetic Lighthouse score is claimed.

Astro's [content collection documentation](https://docs.astro.build/en/guides/content-collections/) explains the standard Markdown mechanism used here. There is no custom content framework to learn.
