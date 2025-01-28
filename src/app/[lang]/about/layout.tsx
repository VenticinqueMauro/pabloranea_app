import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: 'Pablo Ranea: Chef y Sommelier - Trayectoria y Experiencias Gastronómicas',
        template: '%s - Pablo Ranea',
    },
    alternates: {
        canonical: 'https://pabloranea.com/en',
    },
    description: 'Formado en la prestigiosa escuela de cocina del Gato Dumas en Buenos Aires, Pablo Ranea emerge como un chef y sommelier argentino que ha dedicado varios años de su vida a llevar lo mejor de la cocina argentina y latinoamericana por todo el mundo. Descubre sus experiencias gastronómicas únicas, sus cenas pop-up, tours gastronómicos, clases de cocina y maridaje, así como su pasión por los vinos argentinos.',
    keywords: [
        'Pablo Ranea',
        'Chef argentino',
        'Sommelier',
        'Experiencias gastronómicas',
        'Cenas Pop-Up',
        'Tours gastronómicos',
        'Clases de cocina',
        'Maridaje',
        'Vino argentino',
        'Escuela de cocina',
        'Gato Dumas',
        'Nueva Cocina Argentina',
        'Cocina Latinoamericana',
        'Gastronomía mundial',
        'Vinos del mundo',
    ],
    openGraph: {
        title: 'Pablo Ranea: Experiencias Gastronómicas por Todo el Mundo',
        images: '/aboutpablo/pablo1.jpg',
        description: 'Formado en la prestigiosa escuela de cocina del Gato Dumas en Buenos Aires, Pablo Ranea emerge como un chef y sommelier argentino que ha dedicado varios años de su vida a llevar lo mejor de la cocina argentina y latinoamericana por todo el mundo. Descubre sus experiencias gastronómicas únicas, sus cenas pop-up, tours gastronómicos, clases de cocina y maridaje, así como su pasión por los vinos argentinos.',
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

export default async function AboutLayout({ children, params: { lang } }: Props) {

    return (
        <section >
            {children}
        </section>
    )
}
