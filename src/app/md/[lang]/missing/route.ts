import { getDictionary } from '@/lib/i18n'
import { defaultLocale, isLocale } from '@/lib/locales'
import { notFoundMarkdown } from '@/lib/markdown'

// Markdown 404 for agents (Accept: text/markdown) on unknown URLs.
export async function GET(_request: Request, { params }: RouteContext<'/md/[lang]/missing'>) {
    const { lang: raw } = await params
    const lang = isLocale(raw) ? raw : defaultLocale

    return new Response(notFoundMarkdown(lang, await getDictionary(lang)), {
        status: 404,
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            Vary: 'Accept',
            'X-Robots-Tag': 'noindex',
        },
    })
}
