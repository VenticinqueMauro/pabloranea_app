import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PopUps Dinners',
    description: 'Falta crear description'
}

type Props = {
    children: React.ReactNode
    params: {
        lang: 'es' | 'en'
    }
}

export default async function PopupsLayout({ children, params: { lang } }: Props) {

    const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

    return (
        <section>
            {children}
        </section>
    )
}
