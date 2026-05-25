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
      { source: '/favicon.ico', destination: '/favicon.svg', permanent: false }
    ]
  }
})
