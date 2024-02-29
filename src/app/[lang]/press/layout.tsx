import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://pabloranea.com/'),
    title: {
        default: 'Prensa sobre Pablo Ranea: El Chef y Sommelier Trotamundos',
        template: '%s - Pablo Ranea',
    },
    description: 'Explora las noticias y artículos de prensa sobre Pablo Ranea, el chef y sommelier trotamundos que lleva la gastronomía mendocina y los vinos argentinos a lugares emblemáticos del mundo. Descubre las últimas entrevistas, reseñas y opiniones de expertos sobre la trayectoria y el legado de Pablo Ranea.',
    keywords: [
        'Prensa sobre Pablo Ranea',
        'Noticias sobre Pablo Ranea',
        'Entrevistas a Pablo Ranea',
        'Pablo Ranea en los medios',
        'Chef y Sommelier Trotamundos',
        'Gastronomía Mendocina',
        'Vinos Argentinos',
        'Cenas Pop Up',
    ],
    openGraph: {
        title: 'Prensa sobre Pablo Ranea: El Chef y Sommelier Trotamundos',
        images: '/aboutpablo/pablo3.jpg',
        description: 'Explora las noticias y artículos de prensa sobre Pablo Ranea, el chef y sommelier trotamundos que lleva la gastronomía mendocina y los vinos argentinos a lugares emblemáticos del mundo. Descubre las últimas entrevistas, reseñas y opiniones de expertos sobre la trayectoria y el legado de Pablo Ranea.',
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

export default async function PressLayout({ children, params: { lang } }: Props) {

    return (
        <section className='lg:pt-44'>
            {children}
        </section>
    )
}
