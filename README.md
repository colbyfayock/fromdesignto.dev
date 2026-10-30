# From Design to Development

Static Astro site for the From Design to Development Crash Course. Styling uses browser-native CSS; the build does not depend on Sass, React, or Next.js.

Analytics use the site-specific Plausible snippet for `fromdesignto.dev`.

## Development

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

Astro generates static files in `dist/`. Netlify publishes that directory without an application server or Astro adapter.

The public pages are `/` and `/success`; the sitemap intentionally lists only the homepage.

Static icon SVGs are adapted from Font Awesome Free via react-icons. Font Awesome Free icons are licensed under CC BY 4.0: https://fontawesome.com/license/free.
