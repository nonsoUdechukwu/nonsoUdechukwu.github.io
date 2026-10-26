# NonsoTech Insights

Personal blog of **Nonso Udechukwu** — Azure, DevOps, Platform Engineering, Kubernetes, IaC and home labs.

Live: <https://nonsoudechukwu.github.io>

## Stack

- [Astro](https://astro.build) (static output, view transitions, MDX)
- [Pagefind](https://pagefind.app) full-text search (⌘K / Ctrl+K)
- RSS (`/rss.xml`) and sitemap
- Dark/light theme, dual-theme Shiki code highlighting
- Deployed to GitHub Pages via GitHub Actions

## Development

Requires Node.js `>=22.23.4`.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro build + pagefind index -> dist/
npm run preview   # serve the built site (search works here)
npm run check     # type check
```

> Search is powered by Pagefind and only works on a built site (`npm run build && npm run preview`).

## Writing posts

Add a Markdown or MDX file to `src/content/blog/`. The file name becomes the URL (`/blog/<file-name>`).

```yaml
---
title: "My post title"
description: "One-line summary used on cards and for SEO."
pubDate: 2025-01-31
updatedDate: 2025-02-02   # optional
heroImage: /images/my-post.png  # optional, place file in public/images/
tags: [Azure, Kubernetes]
draft: false              # drafts are hidden in production builds
---
```

## Customising

| What | Where |
| --- | --- |
| Site title, author, socials, nav, home-page topics | `src/config.ts` |
| About page text, skills, certifications | `src/data/about.ts` |
| Colours, fonts, design tokens | `src/styles/global.css` |
| Layout / meta tags | `src/layouts/BaseLayout.astro` |

## Deployment

`.github/workflows/pages-deploy.yml` builds and deploys on every push to `main`.
In the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
