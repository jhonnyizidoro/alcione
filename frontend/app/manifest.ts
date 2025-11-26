import { MetadataRoute } from 'next'

const Manifest = (): MetadataRoute.Manifest => ({
  name: 'Professor Alcione',
  short_name: 'Professor Alcione',
  description: `Professor Alcione`,
  start_url: '/',
  display: 'standalone',
  background_color: '#fff',
  theme_color: '#DA374A',
  icons: [
    {
      src: '/metadata/og-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/metadata/og-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
  ],
})

export default Manifest
