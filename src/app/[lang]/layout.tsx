import Navbar from '@/components/header/Navbar'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import '../globals.css'
import { Providers } from '../providers'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pablo Ranea [Chef & Somm]',
  description: 'Falta crear description'
}

type Props = {
  children: React.ReactNode
  params: {
    lang: 'es' | 'en'
  }
}

export default async function RootLayout({ children, params: { lang } }: Props) {

  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

  return (
    <html lang={lang} className='light'>
      <body className={` h-screen overflow-x-hidden relative`}>
        <Providers>
          <Navbar dictionary={dictionary} />
          {children}
        </Providers>
      </body>
    </html >
  )
}
