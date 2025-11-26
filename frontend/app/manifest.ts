import { MetadataRoute } from 'next'

const Manifest = (): MetadataRoute.Manifest => ({
  name: 'Helder Lazarotto',
  short_name: 'Helder Lazarotto',
  description: `Helder Lazarotto`,
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
