import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'

export async function DocsShell({ children }: { children: ReactNode }) {
  return (
    <Layout
      navbar={
        <Navbar
          logo={
            <div>
              <b>Proto</b>
            </div>
          }
          logoLink="/"
          projectLink="https://github.com/sherizan/proto"
          chatLink="https://x.com/sherizan"
        />
      }
      footer={<Footer>MIT {new Date().getFullYear()} © Proto</Footer>}
      docsRepositoryBase="https://github.com/sherizan/prototo-docs/tree/main"
      pageMap={await getPageMap()}
    >
      {children}
    </Layout>
  )
}
