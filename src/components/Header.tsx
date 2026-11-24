import Link from 'next/link'

import { Logo } from '@/components/Logo'

export const Header = () => (
  <header className="sticky top-0 flex h-header items-center border-b bg-background px-4 md:px-8">
    <Link href="/" aria-label="DevNotes, domů" className="flex h-10 items-center">
      <Logo />
    </Link>
  </header>
)
