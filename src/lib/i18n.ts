import { notFound } from 'next/navigation'
import { isLocale, type Locale } from './locales'

const dictionaries = {
    en: () => import('@/app/dictionaries/en.json').then((m) => m.default),
    es: () => import('@/app/dictionaries/es.json').then((m) => m.default),
}

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['en']>>

export function getDictionary(lang: Locale): Promise<Dictionary> {
    return dictionaries[lang]()
}

// Route params arrive as a Promise<string>; narrow them to a known locale.
export async function resolveLang(params: Promise<{ lang: string }>): Promise<Locale> {
    const { lang } = await params
    if (!isLocale(lang)) notFound()
    return lang
}
