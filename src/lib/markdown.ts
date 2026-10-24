import { pressMap } from '@/components/press/CardPress'
import { isEvent, upcomingStays } from '@/data/calendar'
import { wineries } from '@/data/wineries'
import type { Dictionary } from './i18n'
import type { Locale } from './locales'
import { PAGE_PATHS, type PageKey } from './seo'
import { HOST_FORM_URL, SITE_URL, SOCIAL_LINKS } from './site'

// Markdown versions of the pages, served to AI agents that send
// `Accept: text/markdown` (see src/proxy.ts) and reused by /llms.txt.

const T = {
    es: {
        dates: 'Próximas fechas del tour',
        noDates: 'Próximamente nuevas fechas.',
        available: 'disponible para pop-up dinners y clases de cocina',
        to: 'al',
        contact: 'Contacto',
        host: 'Convertite en anfitrión (formulario)',
        more: 'Más información',
        notFound: 'Página no encontrada',
        notFoundText: 'Esta dirección no existe en el sitio de Pablo Ranea.',
        tryThese: 'Páginas disponibles',
    },
    en: {
        dates: 'Upcoming tour dates',
        noDates: 'New dates coming soon.',
        available: 'available for pop-up dinners and cooking classes',
        to: 'to',
        contact: 'Contact',
        host: 'Become a host (request form)',
        more: 'More information',
        notFound: 'Page not found',
        notFoundText: 'This address does not exist on Pablo Ranea’s website.',
        tryThese: 'Available pages',
    },
}

const today = () => new Date().toISOString().slice(0, 10)

export function upcomingDatesMarkdown(lang: Locale): string {
    const t = T[lang]
    const lines = upcomingStays(today()).map((s) =>
            isEvent(s)
                ? `- ${s.date}: ${s.location[lang]}${s.description ? ` — ${s.description[lang]}` : ''}${s.link ? ` (${s.link})` : ''}`
                : `- ${s.startDate} ${t.to} ${s.endDate}: ${s.location[lang]} — ${t.available}`
        )
    return lines.length ? lines.join('\n') : t.noDates
}

export function contactMarkdown(lang: Locale): string {
    return [
        `- Email: chefpabloranea@gmail.com`,
        `- WhatsApp ${lang === 'es' ? 'EE.UU.' : 'USA'}: +1 (720) 284-9937`,
        `- WhatsApp Argentina: +54 9 261 6832720`,
        `- ${T[lang].host}: ${HOST_FORM_URL}`,
        `- Instagram: ${SOCIAL_LINKS.instagram}`,
    ].join('\n')
}

const pagesMarkdown = (lang: Locale, dictionary: Dictionary) =>
    (Object.keys(PAGE_PATHS) as PageKey[])
        .filter((page) => page !== 'travelmendoza' && page !== 'privacy')
        .map((page) => `- [${dictionary.meta[page].title}](${SITE_URL}/${lang}${PAGE_PATHS[page]})`)
        .join('\n')

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '')

function body(lang: Locale, page: PageKey, d: Dictionary): string {
    const t = T[lang]
    switch (page) {
        case 'home':
            return [
                `## ${d.popups.title1}${d.popups.title2}`,
                d.popups.description,
                `## ${t.dates}`,
                upcomingDatesMarkdown(lang),
                `## ${d.aboutpablo.title}`,
                d.aboutpablo.description,
                `## ${d.classes.title}`,
                d.classes.description,
                `## ${d.partners.title1} ${d.partners.title2}`,
                d.partners.description,
                `## ${t.more}`,
                pagesMarkdown(lang, d),
            ].join('\n\n')
        case 'about': {
            const { section2, section3, section4 } = d.aboutpablo.page
            return [
                section2.description1,
                section2.description2,
                `## ${section3.title}`,
                section3.description,
                `## ${section3.title2}`,
                section3.description2,
                `## ${section4.title}`,
                stripTags(section4.description1),
                section4.description2,
                `CV: ${SITE_URL}/aboutpablo/cv.pdf`,
            ].join('\n\n')
        }
        case 'popup': {
            const { section2, section3 } = d.popups.page
            return [
                section2.popupsdinners1,
                section2.popupsdinners2,
                `## ${section3.title}`,
                section3.description1,
                section3.description2,
                `## ${t.dates}`,
                upcomingDatesMarkdown(lang),
            ].join('\n\n')
        }
        case 'partners':
            return [
                d.partners.description,
                ...wineries.map((w) => `## ${lang === 'es' ? w.title : w.titleEn}\n\n${lang === 'es' ? w.description : w.descriptionEn}`),
            ].join('\n\n')
        case 'press':
            return [...pressMap]
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .map((n) => `- [${n.title}](${n.linkPress}) — ${n.diary.replace(/^www\.|\/$/g, '')}, ${n.date.toISOString().slice(0, 7)}`)
                .join('\n')
        case 'privacy':
            return d.privacy.sections.map(({ h, p }) => `## ${h}\n\n${p}`).join('\n\n')
        case 'travelmendoza':
            return `https://drive.google.com/file/d/1WEWaPM-Faz0myiSOZhrrR-v9EmkheCHs/preview`
    }
}

export function pageMarkdown(lang: Locale, page: PageKey, dictionary: Dictionary): string {
    const { title, description } = dictionary.meta[page]
    return [
        `# ${page === 'home' ? title : `${title} | Pablo Ranea`}`,
        `> ${description}`,
        body(lang, page, dictionary),
        `## ${T[lang].contact}`,
        contactMarkdown(lang),
        `---\n${SITE_URL}/${lang}${PAGE_PATHS[page]}`,
    ].join('\n\n') + '\n'
}

export function notFoundMarkdown(lang: Locale, dictionary: Dictionary): string {
    const t = T[lang]
    return [
        `# 404 — ${t.notFound}`,
        t.notFoundText,
        `## ${t.tryThese}`,
        pagesMarkdown(lang, dictionary),
        `- [llms.txt](${SITE_URL}/llms.txt)`,
        `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    ].join('\n\n') + '\n'
}
