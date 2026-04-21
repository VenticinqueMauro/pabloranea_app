import './globals.css';
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://pabloranea.com'),
  title: {
    default: 'Pablo Ranea: Chef y Sommelier - Experiencias Gastronómicas por Todo el Mundo',
    template: '%s - Pablo Ranea',
  },
  description: 'Descubre las experiencias gastronómicas únicas de Pablo Ranea...',
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
    images: 'https://pabloranea.com/icon.png',
    description: 'Descubre las experiencias gastronómicas únicas de Pablo Ranea...',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
