import '../globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/header/Navbar'
import { getDictionary, resolveLang } from '@/lib/i18n'
import { locales } from '@/lib/locales'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const aileron = localFont({
  src: '../../fonts/Aileron-Regular.woff2',
  variable: '--font-aileron',
  display: 'swap',
})

const aileronLight = localFont({
  src: '../../fonts/Aileron-Light.woff2',
  variable: '--font-aileron-light',
  display: 'swap',
})

// Only /es and /en exist; anything else is a 404 (see global-not-found.tsx).
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: 'Insiders Agencia & MVDEV',
  publisher: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  formatDetection: { telephone: false },
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
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const lang = await resolveLang(params)
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang} className={`${aileron.variable} ${aileronLight.variable}`}>
      <body className="h-screen overflow-x-hidden relative">
        <Navbar dictionary={dictionary} lang={lang} />
        <main id="main">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
