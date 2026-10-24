// Kept free of dictionary imports so the proxy bundle stays tiny.
export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export const LOCALE_COOKIE = 'NEXT_LOCALE'

export function isLocale(value: string | undefined): value is Locale {
    return locales.includes(value as Locale)
}

// "/es/about" -> "/en/about"; "/es" -> "/en"
export function switchLocalePath(pathname: string, to: Locale): string {
    const [, first, ...rest] = pathname.split('/')
    const tail = isLocale(first) ? rest : [first, ...rest]
    return `/${[to, ...tail].filter(Boolean).join('/')}`
}
