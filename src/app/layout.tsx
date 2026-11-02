import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DevNotes',
  description: 'Poznámky pro vývojáře',
}

const RootLayout = ({ children }: LayoutProps<'/'>) => (
  <html lang="cs" className={`${geistSans.variable} h-full antialiased`}>
    <body className="flex min-h-full flex-col">{children}</body>
  </html>
)

export default RootLayout
