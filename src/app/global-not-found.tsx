import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'

const aileronLight = localFont({
  src: '../fonts/Aileron-Light.woff2',
  variable: '--font-aileron-light',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '404 | Pablo Ranea',
  description: 'Page not found · Página no encontrada',
}

// Unmatched URLs have no [lang] segment to read, so the page is bilingual.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={aileronLight.variable}>
      <body className="light min-h-screen flex flex-col items-center justify-center gap-8 px-4 text-center">
        <Image src="/logo.png" alt="Pablo Ranea" width={200} height={72} loading="eager" />
        <h1 className="text-8xl lg:text-9xl font-bold tracking-[-6px]">404</h1>
        <p className="uppercase tracking-[0.15em] text-sm text-gray-600">
          Page not found · Página no encontrada
        </p>
        <nav className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">
          <Link href="/en" className="flex-1 border-2 border-black px-8 py-4 uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/es" className="flex-1 border-2 border-black bg-black text-white px-8 py-4 uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-colors">
            Inicio
          </Link>
        </nav>
      </body>
    </html>
  )
}
