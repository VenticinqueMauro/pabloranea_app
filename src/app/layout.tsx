import Navbar from '@/components/header/Navbar'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metada: Metadata = {
  title: 'Pablo Ranea [Chef & Somm]',
  description: 'Falta crear description'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={`${openSans.className} h-screen`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
