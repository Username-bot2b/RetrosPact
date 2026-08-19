# RetrosPact

**RetrosPact** is a personal website theme for [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), styled after classic desktop UIs in the spirit of [SerenityOS](https://serenityos.org/).

It is meant for small personal sites: home, about, blog, and contact — not marketing landing pages.

## Features

- SerenityOS-inspired window chrome (title bars, bevels, menu bar)
- Blog with Markdown/MDX, tags, categories, RSS, and optional Giscus comments
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
│   ├── config.yaml         # Site name, SEO, blog settings
│   └── navigation.ts       # Header / footer links
└── package.json
```

## Configuration

Edit `src/config.yaml` for site name, URL, and metadata.  
Edit `src/navigation.ts` for the menu (default: Home · About · Blog · Contact).

Replace sample posts in `src/content/post/` with your own writing.

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
