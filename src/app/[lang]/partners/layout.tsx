import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Partners',
    description: 'Falta crear description'
}

type Props = {
    children: React.ReactNode
    params: {
        lang: 'es' | 'en'
    }
}

export default async function PartnersLayout({ children, params: { lang } }: Props) {

    return (
        <section>
            {children}
        </section>
    )
}
