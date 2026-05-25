import type { Metadata } from 'next'
import { Head } from 'nextra/components'
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
          hue: 336,
          saturation: 73,
          lightness: { light: 66, dark: 72 }
        }}
        backgroundColor={{
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(24, 20, 22)'
        }}
      />
      <body>{children}</body>
    </html>
  )
}
