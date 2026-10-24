import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from '@/lib/locales'

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

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const segment = pathname.split('/')[1]

    if (isLocale(segment)) {
        // Remember the last language the visitor browsed in.
        const response = NextResponse.next()
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
    // Skip Next internals, Vercel endpoints and any file with an extension
    // (images, robots.txt, sitemap.xml, llms.txt...).
    matcher: ['/((?!_next|_vercel|api|.*\\..*).*)'],
}

