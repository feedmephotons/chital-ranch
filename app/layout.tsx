import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chital Ranch | Texas-Bred Chocolate Fallow Deer',
  description: 'Quality chocolate fallow deer breeding operation in South Texas. Proven genetics, strong color, breeder bucks, covered does, and yearlings available.',
  keywords: ['fallow deer', 'chocolate fallow deer', 'Texas deer breeders', 'deer breeding', 'hunting ranch', 'breeder bucks', 'Floresville TX'],
  authors: [{ name: 'Chital Ranch' }],
  openGraph: {
    title: 'Chital Ranch | Texas-Bred Chocolate Fallow Deer',
    description: 'Quality chocolate fallow deer breeding operation in South Texas. Proven genetics and dependable results.',
    type: 'website',
    locale: 'en_US',
    url: 'https://chitalranch.com',
    siteName: 'Chital Ranch',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chital Ranch | Texas-Bred Chocolate Fallow Deer',
    description: 'Quality chocolate fallow deer breeding operation in South Texas.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
