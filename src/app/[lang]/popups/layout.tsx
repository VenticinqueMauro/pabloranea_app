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

    return (
        <section className='lg:pt-44'>
            {children}
        </section>
    )
}
