import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DataProvider } from '@/context/data-context'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desafio Cielo',
  description: 'Ada + Cielo Challenge App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <DataProvider>
          {children}
        </DataProvider>
        <Footer />
      </body>
    </html>
  )
}
