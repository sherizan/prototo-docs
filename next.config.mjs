import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.tsx'
    }
  },
  async redirects() {
    return [
      { source: '/introduction', destination: '/', permanent: true },
      {
        source: '/getting-started/install',
        destination: '/getting-started/prerequisites',
        permanent: true
      },
      {
        source: '/getting-started',
        destination: '/getting-started/prerequisites',
        permanent: false
      },
      { source: '/favicon.ico', destination: '/favicon.svg', permanent: false }
    ]
  }
})
