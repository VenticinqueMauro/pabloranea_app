import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from '@/lib/locales'
import { PAGE_PATHS } from '@/lib/seo'

const ONE_YEAR = 60 * 60 * 24 * 365

function preferredLocale(request: NextRequest): Locale {
    const fromCookie = request.cookies.get(LOCALE_COOKIE)?.value
    if (isLocale(fromCookie)) return fromCookie

    // "es-AR,es;q=0.9,en;q=0.8" -> best match among supported locales
    const ranked = (request.headers.get('accept-language') ?? '')
        .split(',')
        .map((part) => {
            const [tag, q] = part.trim().split(';q=')
            return { lang: tag.split('-')[0].toLowerCase(), q: q ? Number(q) : 1 }
        })
        .sort((a, b) => b.q - a.q)

    return (ranked.find(({ lang }) => isLocale(lang))?.lang as Locale) ?? defaultLocale
}

// q-value of a media type in the Accept header (-1 when absent).
function acceptQuality(accept: string, type: string): number {
    for (const part of accept.split(',')) {
        const [mediaType, ...params] = part.trim().split(';')
        if (mediaType.trim() !== type) continue
        const q = params.find((p) => p.trim().startsWith('q='))
        return q ? Number(q.trim().slice(2)) : 1
    }
    return -1
}

// AI agents that ask for Markdown (acceptmarkdown.com) over HTML.
function prefersMarkdown(request: NextRequest): boolean {
    const accept = request.headers.get('accept') ?? ''
    const markdown = acceptQuality(accept, 'text/markdown')
    return markdown > 0 && markdown >= acceptQuality(accept, 'text/html')
}

const PAGE_BY_PATH = new Map<string, string>(Object.entries(PAGE_PATHS).map(([page, path]) => [path, page]))

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const segment = pathname.split('/')[1]

    if (isLocale(segment)) {
        if (prefersMarkdown(request)) {
            // Same URL, Markdown body: /es/about -> /md/es/about; unknown -> Markdown 404.
            const page = PAGE_BY_PATH.get(pathname.slice(segment.length + 1).replace(/\/$/, ''))
            const url = request.nextUrl.clone()
            url.pathname = `/md/${segment}/${page ?? 'missing'}`
            const response = NextResponse.rewrite(url)
            response.headers.set('Vary', 'Accept')
            return response
        }

        // Remember the last language the visitor browsed in.
        const response = NextResponse.next()
        response.headers.set('Vary', 'Accept')
        if (request.cookies.get(LOCALE_COOKIE)?.value !== segment) {
            response.cookies.set(LOCALE_COOKIE, segment, { path: '/', maxAge: ONE_YEAR, sameSite: 'lax' })
        }
        return response
    }

    const url = request.nextUrl.clone()
    url.pathname = `/${preferredLocale(request)}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(url)
}

export const config = {
    // Skip Next internals, Vercel endpoints, the internal /md routes and any
    // file with an extension (images, robots.txt, sitemap.xml, llms.txt...).
    matcher: ['/((?!_next|_vercel|api|md/|.*\\..*).*)'],
}

