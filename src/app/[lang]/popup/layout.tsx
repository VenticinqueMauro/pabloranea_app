import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://pabloranea.com/'),
    title: {
        default: 'Pop Up Dinners de Pablo Ranea: Experiencias Gastronómicas Itinerantes',
        template: '%s - Pablo Ranea',
    },
    description: 'Descubre las experiencias gastronómicas itinerantes de Pablo Ranea a través de sus Pop Up Dinners, que llevan la nueva cocina argentina y latinoamericana a deslumbrantes lugares alrededor del mundo. Conecta con Argentina a través de sus vinos y sabores únicos en escenarios como San Francisco, New York, Asheville, Mendoza, Shanghai y más.',
    keywords: [
        'Pop Up Dinners',
        'Cenas popup',
        'Cenas pop - up',
        'PopUp dinners',
        'Cena puertas adentro',
        'Pop - up dinners',
        'Experiencias Gastronómicas',
        'Cocina Argentina',
        'Cocina Latinoamericana',
        'Traveling Cuisine',
        'Vinos Argentinos',
        'Gastronomía Internacional',
        'Eventos Gastronómicos',
        'Cenas Itinerantes',
        'Pablo Ranea',
        'Mendoza',
        'San Francisco',
        'New York',
        'Shanghai',
        'Asheville',
    ],
    openGraph: {
        title: 'Pop Up Dinners de Pablo Ranea: Experiencias Gastronómicas Itinerantes',
        images: '/popups/img2.jpg',
        description: 'Descubre las experiencias gastronómicas itinerantes de Pablo Ranea a través de sus Pop Up Dinners, que llevan la nueva cocina argentina y latinoamericana a deslumbrantes lugares alrededor del mundo. Conecta con Argentina a través de sus vinos y sabores únicos en escenarios como San Francisco, New York, Asheville, Mendoza, Shanghai y más.',
    },
    referrer: 'origin-when-cross-origin',
    creator: 'Insiders Agencia & MVDEV',
    publisher: 'Insiders Agencia & MVDEV',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


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
