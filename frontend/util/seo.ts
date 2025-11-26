import type { Metadata, Viewport } from 'next'

export const defaultViewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3338af',
}

export const defaultMetadata = (
  title: string,
  description: string,
): Metadata => ({
  title,
  description,
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_DOMAIN)),
  generator: 'Next.js',
  applicationName: 'Helder Lazarotto',
  creator: 'Jhonny Izidoro Menarim',
  publisher: 'Jhonny Izidoro Menarim',
  manifest: '/manifest.webmanifest',
  authors: [
    {
      name: 'Jhonny Izidoro Menarim',
      url: 'https://www.linkedin.com/in/jhonnyizidoro/',
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    countryName: 'Brasil',
    siteName: 'Helder Lazarotto',
    title,
    description,
    images: [
      {
        url: '/metadata/og-1200x630.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: {
      url: '/metadata/icon.png',
      sizes: '124x124',
    },
    shortcut: '/metadata/icon.png',
    apple: {
      url: '/metadata/icon.png',
      sizes: '124x124',
    },
  },
})
