import type { Metadata } from 'next'
import type { Dictionary } from './i18n'
import { locales, type Locale } from './locales'
import { SITE_NAME } from './site'

export const PAGE_PATHS = {
    home: '',
    about: '/about',
    popup: '/popup',
    partners: '/partners',
    press: '/press',
    travelmendoza: '/travelmendoza',
} as const

export type PageKey = keyof typeof PAGE_PATHS

const OG_LOCALES: Record<Locale, string> = { es: 'es_AR', en: 'en_US' }

// Per-page, per-language metadata: self-referencing canonical, hreflang
// alternates and a 1200x630 social image. URLs are resolved against
// metadataBase (set in the root layout).
export function pageMetadata(lang: Locale, page: PageKey, dictionary: Dictionary): Metadata {
    const path = PAGE_PATHS[page]
    const { title, description } = dictionary.meta[page]
    const url = `/${lang}${path}`
    const image = `/og/${page === 'travelmendoza' ? 'home' : page}.jpg`

    return {
        // The home title already includes the brand, so skip the template.
        title: page === 'home' ? { absolute: title } : title,
        description,
        alternates: {
            canonical: url,
            languages: {
                ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
                'x-default': path ? `/en${path}` : '/',
            },
        },
        openGraph: {
            type: page === 'about' ? 'profile' : 'website',
            siteName: SITE_NAME,
            locale: OG_LOCALES[lang],
            alternateLocale: locales.filter((l) => l !== lang).map((l) => OG_LOCALES[l]),
            url,
            title,
            description,
            images: [{ url: image, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
    }
}
