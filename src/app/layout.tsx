import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/header/Navbar'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={`${inter.className} h-screen`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
