import { getDictionary } from '@/lib/i18n'
import { isLocale, locales } from '@/lib/locales'
import { pageMarkdown } from '@/lib/markdown'
import { PAGE_PATHS, type PageKey } from '@/lib/seo'

// Markdown version of each page. Not linked anywhere: src/proxy.ts rewrites
// requests that prefer `Accept: text/markdown` to these URLs.
export const dynamic = 'force-static'
export const dynamicParams = false

const isPage = (page: string): page is PageKey => page in PAGE_PATHS

export function generateStaticParams() {
    return locales.flatMap((lang) => Object.keys(PAGE_PATHS).map((page) => ({ lang, page })))
}

export async function GET(_request: Request, { params }: RouteContext<'/md/[lang]/[page]'>) {
    const { lang, page } = await params
    if (!isLocale(lang) || !isPage(page)) return new Response('Not found', { status: 404 })

    return new Response(pageMarkdown(lang, page, await getDictionary(lang)), {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            Vary: 'Accept',
            'X-Robots-Tag': 'noindex',
        },
    })
}
