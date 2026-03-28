import type { Metadata } from 'next'
import '../index.css'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Quhan.im â Technology, Civilization, Science',
  description: 'Ideas worth thinking about. Exploring technology, civilization, science, and self-education.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
            {children}
          </Providers>
      </body>
    </html>
  )
}
