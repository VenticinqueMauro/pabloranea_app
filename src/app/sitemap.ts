import type { MetadataRoute } from 'next'
import { locales } from '@/lib/locales'
import { PAGE_PATHS, type PageKey } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

// travelmendoza is a private, noindex itinerary, so it's left out.
const pages: PageKey[] = ['home', 'about', 'popup', 'partners', 'press']

export default function sitemap(): MetadataRoute.Sitemap {
    return pages.flatMap((page) => {
        const path = PAGE_PATHS[page]
        const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`]))

        return locales.map((lang) => ({
            url: `${SITE_URL}/${lang}${path}`,
            alternates: { languages },
        }))
    })
}
