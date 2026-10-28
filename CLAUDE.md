# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (port 3000, Turbopack)
npm run build    # Production build (also type-checks)
npm run start    # Start production server
npm run lint     # ESLint 9 flat config (eslint.config.mjs)
```

## Architecture

**Next.js 16 App Router** static marketing site for chef Pablo Ranea. React 19, Tailwind CSS 4, TypeScript. Bilingual (es/en), no backend. Deployed on Vercel at `https://www.pabloranea.com` (apex redirects to www).

### Routing & i18n

- `src/app/[lang]/layout.tsx` is the **only root layout** (`<html lang>` per locale). `generateStaticParams` + `dynamicParams = false` → only `/es` and `/en` exist; every page is prerendered (SSG).
- `src/proxy.ts` (Next 16's replacement for middleware) redirects locale-less URLs (`/`, `/about`…) to `/{locale}…` using the `NEXT_LOCALE` cookie, then `Accept-Language`, default `en`. It also stores the last visited locale in that cookie.
- `src/app/global-not-found.tsx` (experimental `globalNotFound`) renders the bilingual 404 for unmatched URLs.
- Dictionaries: `src/app/dictionaries/{en,es}.json`, loaded with `getDictionary(lang)` from `src/lib/i18n.ts`. Route params are async: use `resolveLang(params)`.
- `src/lib/locales.ts`: locale list, `isLocale`, `switchLocalePath` (kept free of dictionary imports for the proxy bundle).

### SEO

- `src/lib/seo.ts` → `pageMetadata(lang, page, dictionary)`: localized title/description (from `dictionary.meta`), self-canonical, hreflang alternates (+ `x-default`), OG/Twitter with 1200×630 images in `public/og/`.
- `src/lib/site.ts`: `SITE_URL`, `HOST_FORM_URL` (Google Form "be a host"), social links. Use these constants instead of hardcoding URLs.
- `src/app/sitemap.ts` / `src/app/robots.ts` are generated from the same constants. `travelmendoza` is `noindex` and excluded from the sitemap.
- Each page has exactly one `<h1>` (visually hidden on pages whose hero is an image).
- **Structured data** (`src/lib/jsonld.ts`, rendered with `<JsonLd>`): Person + WebSite site-wide (layout), upcoming FoodEvents on home, ProfilePage on about, CollectionPage (wineries / press articles) and BreadcrumbList on subpages. Built from the same data the pages render.
- **Markdown for agents**: requests that prefer `Accept: text/markdown` get the same URL as Markdown (`src/proxy.ts` rewrites to `src/app/md/[lang]/[page]`; unknown URLs to `md/[lang]/missing` with a 404). Content comes from `src/lib/markdown.ts` (also used by llms.txt).
- **Privacy**: `/[lang]/privacy` from `dictionary.privacy`, linked in the footer and listed in the sitemap.
- **AI visibility**: `/llms.txt` (`src/app/llms.txt/route.ts`, static) summarizes Pablo, pages, upcoming dates and contact from dictionaries + calendar. `robots.ts` explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…).

### Frontend

- No UI kit: plain Tailwind 4 (tokens in `src/app/globals.css` via `@theme`). `bg-background`/`text-foreground` follow the `.dark`/`.light` class on a section.
- Fonts: Aileron Regular/Light as local `woff2` (`src/fonts/`) through `next/font/local` (`--font-aileron`, `--font-aileron-light`; the `.light` class switches to Light). Navbar uses Roboto via `next/font/google`.
- Images: `next/image` for local assets (`preload` on the LCP image, not the deprecated `priority`); plain `<img loading="lazy">` for third-party press images.
- Carousels: embla-carousel. Contact modal: native `<dialog>`. Count-up stats: `src/components/ui/CountUp.tsx`. Instagram: official `embed.js` loaded when the section nears the viewport.
- Path alias: `@/*` → `./src/*`

### Calendar (CalendarFront.tsx)

Event data lives in `src/data/calendar.ts` (rendered by `CalendarFront.tsx`, also used for Event JSON-LD and llms.txt). Two types:
- **Stay** (date range): `startDate`, `endDate`, `location` (en/es)
- **SpecialStay** (single event): `date`, `location` (en/es), `description` (en/es)

Upcoming items are filtered by comparing `YYYY-MM-DD` strings against the visitor's local date (`useSyncExternalStore`; server/hydration use the `buildDate` prop). The home revalidates daily (`revalidate = 86400`). The first upcoming item is highlighted as "next date"; stays get a "book your date" CTA (host form) and events with `link` + `linkLabel` get a ticket button.

**Format rule**: all entries must follow the same visual format — date on top, LOCATION in uppercase below, description on the right side. NYC = "New York, USA" / "Nueva York, EE.UU."

### Portada (Hero Carousel)

`src/components/portada/Portada.tsx` — embla-carousel. Images are optimized JPEGs up to 2560px wide (3:2 or panoramic), each with a tuned `objectPosition` focal point. Sizing is pure CSS: below `md` the slide uses `aspect-[1.25]`, from `md` it fills `calc(100vh - 110px)`. Autoplay every 5s (paused on hover, disabled with reduced motion), dot indicators and two CTAs over the image (host form + `#calendar`; only the first on mobile).
