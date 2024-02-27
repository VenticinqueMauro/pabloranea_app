import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Press',
    description: 'Falta crear description'
}

type Props = {
    children: React.ReactNode
    params: {
        lang: 'es' | 'en'
    }
}

export default async function PressLayout({ children, params: { lang } }: Props) {

    return (
        <section className='lg:pt-44'>
            {children}
        </section>
    )
}
