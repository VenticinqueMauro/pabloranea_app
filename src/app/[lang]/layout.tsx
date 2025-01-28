import '../globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/header/Navbar'
import { Providers } from '../providers'
import Head from 'next/head';

type Props = {
  children: React.ReactNode
  params: {
    lang: 'es' | 'en'
  }
}

export const metadata: Metadata = {
  title: {
    default: 'Pablo Ranea: Chef y Sommelier - Experiencias Gastronómicas por Todo el Mundo',
    template: '%s - Pablo Ranea',
  },
  alternates: {
    canonical: 'https://pabloranea.com/en',
  },
  description: 'Descubre las experiencias gastronómicas únicas de Pablo Ranea, chef y sommelier argentino, que lleva la nueva cocina argentina y latinoamericana a diversos destinos en todo el mundo. Explora sus cenas pop-up, tours gastronómicos, clases de cocina y maridaje, y sumérgete en el fascinante mundo de los vinos argentinos.',
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
  ],
  openGraph: {
    title: 'Pablo Ranea: Experiencias Gastronómicas por Todo el Mundo',
    images: '/icon.png',
    description: 'Descubre las experiencias gastronómicas únicas de Pablo Ranea, chef y sommelier argentino, que lleva la nueva cocina argentina y latinoamericana a diversos destinos en todo el mundo. Explora sus cenas pop-up, tours gastronómicos, clases de cocina y maridaje, y sumérgete en el fascinante mundo de los vinos argentinos.',
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
}

export default async function RootLayout({ children, params: { lang } }: Props) {
  const alternateLinks = [
    { href: "https://pabloranea.com/en", hreflang: "en" },
    { href: "https://pabloranea.com/es", hreflang: "es" },
    { href: "https://pabloranea.com", hreflang: "x-default" },
  ];

  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

  return (
    <html lang={lang} className='light'>
      <Head>
        {alternateLinks.map(({ href, hreflang }) => (
          <link rel="alternate" href={href} hrefLang={hreflang} key={hreflang} />
        ))}
      </Head>
      <body className={`h-screen overflow-x-hidden relative`}>
        <Providers>
          <Navbar dictionary={dictionary} />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html >
  )
}
