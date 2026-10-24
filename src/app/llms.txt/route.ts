import { stays, type CalendarItem, type SpecialStay } from '@/data/calendar'
import { getDictionary } from '@/lib/i18n'
import { locales } from '@/lib/locales'
import { PAGE_PATHS, type PageKey } from '@/lib/seo'
import { HOST_FORM_URL, SITE_URL, SOCIAL_LINKS } from '@/lib/site'

// /llms.txt (llmstxt.org): a plain-markdown briefing for AI assistants, built
// from the same dictionaries and calendar the site renders.
export const dynamic = 'force-static'

const PAGES: PageKey[] = ['home', 'about', 'popup', 'partners', 'press']

const isEvent = (item: CalendarItem): item is SpecialStay => item.special === true

export async function GET() {
    const [en, es] = await Promise.all([getDictionary('en'), getDictionary('es')])
    const dicts = { en, es }
    const today = new Date().toISOString().slice(0, 10)

    const upcoming = stays
        .filter((s) => (isEvent(s) ? s.date : s.endDate) >= today)
        .map((s) =>
            isEvent(s)
                ? `- ${s.date}: ${s.location.en}${s.description ? ` — ${s.description.en}` : ''}`
                : `- ${s.startDate} to ${s.endDate}: ${s.location.en} — available for pop-up dinners and cooking classes`
        )

    const pages = locales.flatMap((lang) =>
        PAGES.map((page) => {
            const { title, description } = dicts[lang].meta[page]
            return `- [${title}](${SITE_URL}/${lang}${PAGE_PATHS[page]}) (${lang}): ${description}`
        })
    )

    const body = `# Pablo Ranea

> ${en.meta.home.description}

${en.aboutpablo.description}

## Key facts

- Argentine chef and sommelier from Mendoza, Argentina, who tours the United States every year.
- Trained at the Gato Dumas culinary school (Buenos Aires); certified sommelier by the Argentine School of Sommeliers (2013).
- Led the kitchen at Azafrán restaurant in Mendoza for a decade.
- Hosts around 60 pop-up dinners a year, with 16 to 25 guests on average per gathering.
- Teaches cooking and Argentine wine classes; invited by The Culinary Institute of America, The Institute of Culinary Education (New York), the Macao University of Science and Urban Kitchen (Lima).
- Ambassador for Argentine wineries such as El Enemigo, Catena Zapata, Susana Balbo, Trivento, Rutini, Achaval Ferrer, Colomé and Otronia.
- The site is bilingual: English under /en, Spanish under /es.

## Pages

${pages.join('\n')}

## Upcoming tour dates

${upcoming.length ? upcoming.join('\n') : `New dates coming soon. See ${SITE_URL}/en#calendar`}

## FAQ

${en.faq.items.map(({ q, a }) => `### ${q}\n\n${a}`).join('\n\n')}

## Contact

- Email: chefpabloranea@gmail.com
- WhatsApp (USA): +1 (720) 284-9937
- WhatsApp (Argentina): +54 9 261 6832720
- Become a host (pop-up dinner request form): ${HOST_FORM_URL}
- Instagram: ${SOCIAL_LINKS.instagram}
- Facebook: ${SOCIAL_LINKS.facebook}
- TikTok: ${SOCIAL_LINKS.tiktok}
- Pinterest: ${SOCIAL_LINKS.pinterest}
`

    return new Response(body, {
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    })
}
