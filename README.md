# RetrosPact

**RetrosPact** is a personal website theme for [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), styled after classic desktop UIs in the spirit of [SerenityOS](https://serenityos.org/).

It is meant for small personal sites: home, about, blog, and contact — not marketing landing pages.

**Live demo:** [https://retros-pact.vercel.app](https://retros-pact.vercel.app)

## Features

- SerenityOS-inspired window chrome (title bars, bevels, menu bar)
- Blog with Markdown/MDX, tags, categories, and RSS
- Optional **Giscus comments** on blog posts (GitHub Discussions)
- Lightweight pages with a calm, desktop-like layout
- Image optimization via Astro assets

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
/
├── public/                 # Static files (robots, giscus theme CSS, …)
├── src/
│   ├── assets/             # Images, styles, favicons
│   ├── components/         # UI + widgets
│   ├── content/post/       # Blog posts (Markdown / MDX)
│   ├── layouts/
│   ├── pages/              # Routes (home, about, blog, contact, …)
│   ├── utils/
│   ├── config.yaml         # Site name, SEO, blog, comments
│   └── navigation.ts       # Header / footer links
└── package.json
```

## Configuration

Edit `src/config.yaml` for site name, URL, and metadata.  
Edit `src/navigation.ts` for the menu (default: Home · About · Blog · Contact).

Replace sample posts in `src/content/post/` with your own writing.

## Comments (Giscus)

This template includes an optional comment module on each blog post, powered by [Giscus](https://giscus.app) (GitHub Discussions). The [live demo](https://retros-pact.vercel.app/welcome-to-my-corner) has comments turned on. If you fork this theme, replace the demo `repo` / `repoId` / `categoryId` with your own, or set `enabled: false`.

To enable them:

1. Create a **public** GitHub repository and turn on **Discussions**.
2. Install the [Giscus GitHub App](https://github.com/apps/giscus) on that repository.
3. Open [giscus.app](https://giscus.app), select the repo and category, then copy `repo`, `repoId`, `category`, and `categoryId`.
4. Paste those values into `src/config.yaml` under `apps.blog.comments` and set `enabled: true`.

```yaml
apps:
  blog:
    comments:
      enabled: true
      repo: 'your-user/your-comments-repo'
      repoId: 'R_kgDO…'
      category: 'Announcements'
      categoryId: 'DIC_kwDO…'
      mapping: pathname
```

5. In that comments repository (default branch, repo root), add a `giscus.json` that lists your site origins. If the origin is missing, the comment iframe redirects to GitHub and the browser shows that github.com refused the connection.

```json
{
  "origins": ["http://localhost:4321", "https://your-site.example"],
  "originsRegex": ["http://localhost:[0-9]+"],
  "defaultCommentOrder": "oldest"
}
```

The widget uses `public/giscus-serenity.css`. Production hosts should send `Access-Control-Allow-Origin: https://giscus.app` for that file (already set in `vercel.json`).

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start local dev server          |
| `npm run build`   | Build production site to `dist` |
| `npm run preview` | Preview the production build    |
| `npm run check`   | Run Astro / ESLint / Prettier   |

## License

MIT. See [LICENSE.md](./LICENSE.md).

Originally derived from an Astro starter; RetrosPact is maintained as an independent personal-site theme.

### Third-party notices

- **SerenityOS icons** (16×16 PNGs under `src/assets/icons/serenity/`): © SerenityOS developers, **BSD 2-Clause**. See that folder’s `LICENSE` and `NOTICE.txt`.
- Sample cover images from [Unsplash](https://unsplash.com/license) (Unsplash License).
