# Delivery checks

Verified on 19 September 2026.

- Astro production build: successful. Five HTML pages plus sitemap and robots endpoints.
- Browser layout checks: homepage at 320, 375, 768, 1024, 1440 and 1920px in light and dark schemes. No horizontal overflow or broken visible images. Checks used same-origin browser frames at those widths; the desktop scrollbar occupies 15px of the content area.
- About page and both project pages: no horizontal overflow or broken images at 320 and 1440px.
- Visual review: desktop homepage, about page, project page, and full mobile homepage in both themes.
- Text enlargement: homepage at 320px with the root text size doubled from 16px to 32px. No horizontal overflow.
- Keyboard: the first Tab reveals the skip link with a visible outline; Enter moves focus to the main content.
- Navigation: header links, work links and individual project pages load correctly. Built HTML was checked for all local links, fragments, image sources and responsive image sources.
- Semantics: one H1 and a main landmark per page; supplied images have alt text; repeated decorative logo copies are hidden by the corresponding theme rules.
- Contrast: the normal secondary text colors are #5b5b5b on white and #aaaaaa on black; the inverse section uses #b5b5b5 on black or #545454 on #f0f0f0. These exceed 4.5:1.
- Metadata: page titles, descriptions, canonical URLs, Open Graph and X fields are present. The manifest's icons resolve and the sitemap is valid XML. The private preview is set to noindex.
- Runtime: no site-origin errors observed in the browser console. Browser-extension diagnostics are unrelated to the site.
- Build output: zero script tags and zero JavaScript files. All navigation and content use native HTML. The entire uncompressed static build is approximately 300 KB, including all portrait resolutions and app icons.

No Lighthouse score or full automated accessibility audit is claimed. Firefox, Safari and physical-device checks were not run.

## Content update

The profile, contact links and canonical domain have been filled in. The two example projects have been replaced by module 346 and 169 course pages. The About page uses the supplied CV and Robin's description of his interests and approach to troubleshooting. "What's next" remains available through `site.currentFocus`.

The module outlines supplied as PDFs establish the course scope. The CV supports the course dates and Docker work. GitLab could not be inspected directly in this environment, so the pages do not claim a particular cloud provider, architecture, deployment result or coverage of every course objective. The provided GitLab links are preserved.

DNS and public hosting for voidshell.ch are not configured by this source update. Search indexing remains disabled until Robin enables it for the public launch.

After the content update, the homepage, About page and both new module pages were checked at 320, 768 and 1440px with no horizontal overflow or broken images. The About page was visually reviewed. The production build, contact URLs, internal links, canonical domain and four sitemap entries passed verification. No example routes or client JavaScript remain.
