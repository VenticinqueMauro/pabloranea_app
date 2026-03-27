# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint (next/core-web-vitals)
```

## Architecture

**Next.js 14 App Router** full-stack app for chef Pablo Ranea's website. Multi-language (en/es), MongoDB backend, JWT auth, deployed on Vercel.

### Routing & i18n

- `src/app/[lang]/` — all public pages use dynamic `[lang]` param (en/es)
- Dictionaries at `src/app/dictionaries/{en,es}.json`, loaded server-side via dynamic import
- `src/app/api/` — REST API routes for auth, events, stays
- `src/middleware.ts` — protects `/dashboard/*` routes via JWT cookie (`PR_app`)

### Data Layer

- **MongoDB** via Mongoose (`src/lib/mongodb.ts` connection helper)
- **Models** (`src/models/`): User, Event, Stay
- **Stay** has i18n fields (`description.en`, `description.es`) and references Event[] via ObjectIds
- **Types** mirror models at `src/types/`
- Date handling: `dayjs` for formatting, stored as YYYY-MM-DD

### Auth Flow

- JWT token stored in `PR_app` httpOnly cookie (30-day expiry)
- Login: POST `/api/auth/login` → bcrypt verify → JWT → cookie
- Middleware (`src/middleware.ts`) verifies token with `jose` jwtVerify for dashboard routes
- Env vars: `MONGODB_URI`, `JWT_KEY`, `NEXT_PUBLIC_BASE_URL`

### Frontend

- **NextUI v2** + **TailwindCSS 3** for UI (config in `tailwind.config.ts`)
- **Zustand** store (`src/store/dashboard.ts`) — single `refresh` toggle to trigger refetches in dashboard
- **Framer Motion** for animations, **embla-carousel** for sliders
- **Million.js** compiler enabled in `next.config.js` for performance
- Dynamic imports with `next/dynamic` for non-critical sections (Instagram, etc.)
- Path alias: `@/*` → `./src/*`

### Key Patterns

- Public pages: server components orchestrated by `src/components/HomeContent.tsx`
- Dashboard: client components with modal-based CRUD (create/edit/delete) + Sonner toasts
- `src/utils/helpers.ts` — `getStays()` sorts active stays (endDate >= today) first by startDate
- API routes: consistent try/catch with NextResponse.json() + status codes

### Calendar (CalendarFront.tsx)

Hardcoded event data in `src/components/calendar/CalendarFront.tsx`. Two types:
- **Stay** (date range): `startDate`, `endDate`, `location` (en/es)
- **SpecialStay** (single event): `date`, `location` (en/es), `description` (en/es)

**Format rule**: all entries must follow the same visual format — date on top, LOCATION in uppercase below, description on the right side. NYC = "New York, USA" / "Nueva York, EE.UU."

### Portada (Hero Carousel)

`src/components/portada/Portada.tsx` — embla-carousel with desktop/mobile image variants. All desktop images normalized to **1920x1080**. Container aspect ratio: `calc(100% / 1.78)`. Mobile ratio: `calc(100% / 1.25)` (1679x1344).
