<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/assets/brand/voidshell-horizontal-white.svg">
    <source media="(prefers-color-scheme: light)" srcset="public/assets/brand/voidshell-horizontal-black.svg">
    <img src="public/assets/brand/voidshell-horizontal-black.svg" alt="voidshell" width="360">
  </picture>
</p>

<p align="center">
  Personal website.<br>
  Linux, systems &amp; practical IT.
</p>

<p align="center">
  <a href="https://voidshell.ch">voidshell.ch</a> &nbsp; / &nbsp;
  <a href="SETUP.md">Setup &amp; maintenance</a>
</p>

---

voidshell is where I share my work and what I'm learning about infrastructure, cloud and automation. It currently includes my background and coursework from the TBZ cloud-native course, covering cloud solutions and container services.

The site is built with Astro, plain CSS and Markdown. Astro generates static HTML at build time; the browser receives no client-side JavaScript. Layout, typography and the original monochrome identity do the visual work, with light and dark themes following the visitor's system preference.

## Run locally

Requires Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

`npm run build` generates the site in `dist/`. Use `npm run preview` to check that build locally. The output can be served by any static host.

## Working on the site

| Content | Location |
| --- | --- |
| Site details and contact links | [`src/data/site.js`](src/data/site.js) |
| Project write-ups | [`src/content/projects/`](src/content/projects/) |
| Pages | [`src/pages/`](src/pages/) |
| Styles | [`src/styles/global.css`](src/styles/global.css) |

The [setup guide](SETUP.md) covers adding projects, replacing images and deploying the site. Logo usage is documented in [BRAND.txt](BRAND.txt).
