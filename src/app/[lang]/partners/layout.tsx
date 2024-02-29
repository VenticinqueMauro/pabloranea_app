import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://pabloranea.com/'),
    title: {
        default: 'Socios del Tour de Pablo Ranea: Destacadas Bodegas de Vinos Argentinos',
        template: '%s - Pablo Ranea',
    },
    description: 'Descubre a los socios del tour de Pablo Ranea, destacadas bodegas de vinos argentinos que ofrecen una selección excepcional de vinos en la gira del año 2024. Explora las novedades y los vinos emblemáticos de Bodega Trivento, Achaval Ferrer, Antigal, Otronia, Argento, Lagarde y más.',
    keywords: [
        'Socios del Tour',
        'Bodegas de Vinos Argentinos',
        'Bodega Trivento',
        'Bodega Achaval Ferrer',
        'Bodega Antigal',
        'Bodega Otronia',
        'Bodega Argento',
        'Bodega Lagarde',
        'Vinos del Tour',
        'Tour de Vinos',
        'Vinos Argentinos',
        'Vinos Premiados',
        'Vinos Orgánicos',
    ],
    openGraph: {
        title: 'Socios del Tour de Pablo Ranea: Destacadas Bodegas de Vinos Argentinos',
        images: '/partners/partners.jpg',
        description: 'Descubre a los socios del tour de Pablo Ranea, destacadas bodegas de vinos argentinos que ofrecen una selección excepcional de vinos en la gira del año 2024. Explora las novedades y los vinos emblemáticos de Bodega Trivento, Achaval Ferrer, Antigal, Otronia, Argento, Lagarde y más.',
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

export default async function PartnersLayout({ children, params: { lang } }: Props) {

    return (
        <section className='lg:pt-44'>
            {children}
        </section>
    )
}
