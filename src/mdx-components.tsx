import { Callout } from 'nextra/components'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import type { ReactNode } from 'react'

const themeComponents = getThemeComponents()

function Note({ children }: { children: ReactNode }) {
  return <Callout type="info">{children}</Callout>
}

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...themeComponents,
    Note,
    ...components
  }
}
