import { Logo } from '@/components/logo'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'

export default async function SiteLayout({
  children
}: {
  children: ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <Layout
        navbar={
          <Navbar
            logo={<Logo />}
            logoLink="/"
            projectLink="https://github.com/sherizan/proto"
          >
            <a
              href="https://prototo.app"
              target="_blank"
              rel="noreferrer"
              className="x:max-md:hidden x:inline-flex x:items-center x:rounded-md x:bg-primary-600 x:px-3 x:py-1.5 x:text-sm x:font-medium x:text-white x:no-underline x:hover:opacity-90"
            >
              prototo.app
            </a>
          </Navbar>
        }
        footer={
          <Footer>
            <div className="x:flex x:gap-4">
              <a
                href="https://github.com/sherizan/proto"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Footer>
        }
        docsRepositoryBase="https://github.com/sherizan/prototo-docs/tree/main"
        sidebar={{ defaultMenuCollapseLevel: 1 }}
        pageMap={pageMap}
      >
      {children}
    </Layout>
  )
}
