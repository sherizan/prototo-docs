import { DocsShell } from '@/components/docs-shell'
import { Head } from 'nextra/components'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Proto',
    template: '%s – Proto'
  },
  description: 'The first prompt-native design environment.',
  icons: { icon: '/favicon.svg' }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 174,
          saturation: 100,
          lightness: { light: 35, dark: 40 }
        }}
      />
      <body>
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  )
}
