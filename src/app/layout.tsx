import type { Metadata } from 'next'
import { JetBrains_Mono, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'latin-ext'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
  title: 'DevNotes',
  description: 'Poznámky pro vývojáře',
}

const RootLayout = ({ children }: LayoutProps<'/'>) => (
  <html lang="cs" className={`${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}>
    <body className="flex min-h-full flex-col bg-background text-sm text-foreground">
      {children}
    </body>
  </html>
)

export default RootLayout
