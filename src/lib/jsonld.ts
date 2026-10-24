import type { CalendarItem, SpecialStay } from '@/data/calendar'
import type { PressItem } from '@/components/press/CardPress'
import type { Dictionary } from './i18n'
import type { Locale } from './locales'
import { PAGE_PATHS, type PageKey } from './seo'
import { HOST_FORM_URL, SITE_NAME, SITE_URL, SOCIAL_LINKS } from './site'

// schema.org structured data. Every entity is built from the same data the
// page renders, so search engines and AI assistants read exactly what visitors see.

type Thing = Record<string, unknown>

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

const graph = (...nodes: Thing[]) => ({ '@context': 'https://schema.org', '@graph': nodes })

const KNOWS_ABOUT: Record<Locale, string[]> = {
    es: ['Nueva cocina argentina', 'Cocina latinoamericana', 'Vino argentino', 'Maridaje', 'Pop-up dinners', 'Clases de cocina'],
    en: ['New Argentine cuisine', 'Latin American cuisine', 'Argentine wine', 'Food and wine pairing', 'Pop-up dinners', 'Cooking classes'],
}

// Site-wide: who Pablo is and the website he publishes.
export function siteJsonLd(lang: Locale, dictionary: Dictionary) {
    return graph(
        {
            '@type': 'Person',
            '@id': PERSON_ID,
            name: SITE_NAME,
            url: `${SITE_URL}/${lang}/about`,
            image: `${SITE_URL}/og/about.jpg`,
            jobTitle: lang === 'es' ? 'Chef y sommelier' : 'Chef and sommelier',
            description: dictionary.aboutpablo.description,
            nationality: { '@type': 'Country', name: 'Argentina' },
            homeLocation: { '@type': 'Place', name: 'Mendoza, Argentina' },
            alumniOf: { '@type': 'EducationalOrganization', name: 'Gato Dumas' },
            hasCredential: {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'Sommelier',
                dateCreated: '2013',
                recognizedBy: { '@type': 'Organization', name: 'Escuela Argentina de Sommeliers' },
            },
            knowsAbout: KNOWS_ABOUT[lang],
            email: 'mailto:chefpabloranea@gmail.com',
            sameAs: Object.values(SOCIAL_LINKS),
        },
        {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            url: SITE_URL,
            name: SITE_NAME,
            inLanguage: ['es', 'en'],
            publisher: { '@id': PERSON_ID },
            about: { '@id': PERSON_ID },
        }
    )
}

const breadcrumb = (lang: Locale, dictionary: Dictionary, page: Exclude<PageKey, 'home'>, name: string): Thing => ({
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: dictionary.menu.home, item: `${SITE_URL}/${lang}` },
        { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}/${lang}${PAGE_PATHS[page]}` },
    ],
})

const webPage = (type: string, lang: Locale, page: PageKey, dictionary: Dictionary, extra: Thing = {}): Thing => ({
    '@type': type,
    url: `${SITE_URL}/${lang}${PAGE_PATHS[page]}`,
    name: dictionary.meta[page].title,
    description: dictionary.meta[page].description,
    inLanguage: lang,
    isPartOf: { '@id': WEBSITE_ID },
    ...extra,
})

export function aboutJsonLd(lang: Locale, dictionary: Dictionary) {
    return graph(
        webPage('ProfilePage', lang, 'about', dictionary, { mainEntity: { '@id': PERSON_ID } }),
        breadcrumb(lang, dictionary, 'about', dictionary.menu.aboutpablo)
    )
}

export function popupJsonLd(lang: Locale, dictionary: Dictionary) {
    return graph(
        webPage('WebPage', lang, 'popup', dictionary, {
            about: {
                '@type': 'Service',
                name: dictionary.meta.popup.h1,
                serviceType: 'Pop-up dinner',
                provider: { '@id': PERSON_ID },
                areaServed: ['United States', 'Argentina'],
                url: HOST_FORM_URL,
            },
        }),
        breadcrumb(lang, dictionary, 'popup', dictionary.menu.popups)
    )
}

export function partnersJsonLd(lang: Locale, dictionary: Dictionary, wineries: string[]) {
    return graph(
        webPage('CollectionPage', lang, 'partners', dictionary, {
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: wineries.map((name, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    item: { '@type': 'Organization', name },
                })),
            },
        }),
        breadcrumb(lang, dictionary, 'partners', dictionary.menu.partners)
    )
}

export function pressJsonLd(lang: Locale, dictionary: Dictionary, press: PressItem[]) {
    return graph(
        webPage('CollectionPage', lang, 'press', dictionary, {
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: press.map((note, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    item: {
                        '@type': 'Article',
                        headline: note.title,
                        url: note.linkPress,
                        image: note.image,
                        datePublished: note.date.toISOString().slice(0, 7),
                        publisher: { '@type': 'Organization', name: note.diary.replace(/^www\.|\/$/g, '') },
                        about: { '@id': PERSON_ID },
                    },
                })),
            },
        }),
        breadcrumb(lang, dictionary, 'press', dictionary.menu.press)
    )
}

// "Houston, USA" -> { addressLocality: "Houston", addressCountry: "USA" }
function address(location: string): Thing {
    const parts = location.split(',').map((p) => p.trim())
    const country = parts.length > 1 ? parts.pop() : undefined
    return { '@type': 'PostalAddress', addressLocality: parts.join(', '), ...(country && { addressCountry: country }) }
}

// Home: upcoming one-off events from the tour calendar (null when there are none).
export function homeJsonLd(lang: Locale, dictionary: Dictionary, calendar: CalendarItem[]) {
    const today = new Date().toISOString().slice(0, 10)
    const events = calendar
        .filter((item): item is SpecialStay => item.special === true && item.date >= today)
        .map((event) => ({
            '@type': 'FoodEvent',
            name: event.description?.[lang] ?? dictionary.meta.popup.h1,
            startDate: event.date,
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            location: { '@type': 'Place', name: event.location[lang], address: address(event.location.en) },
            image: `${SITE_URL}/og/popup.jpg`,
            url: event.link ?? `${SITE_URL}/${lang}#calendar`,
            organizer: { '@id': PERSON_ID },
            performer: { '@id': PERSON_ID },
        }))

    return events.length ? graph(...events) : null
}
