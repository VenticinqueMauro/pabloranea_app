import './globals.css';
import { Metadata } from "next";

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
  icons: {
    icon: '/icon.png',
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
