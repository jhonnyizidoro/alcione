import { GoogleAnalytics } from '@next/third-parties/google'
import type { Viewport } from 'next'
import { FC } from 'react'

import { defaultViewport } from '@/util/seo'

import Floater from '@/components/Floater/Floater'
import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import Share from '@/components/Share/Share'

import proximaNova from '@/assets/fonts/proxima-nova'
import '@/assets/styles/global.scss'

export const viewport: Viewport = defaultViewport

const RootLayout: FC<Children> = ({ children }) => (
  <html lang='pt-br'>
    <body className={proximaNova.variable}>
      <Nav />
      {children}
      <Footer />
      <Floater />
      <Share />
    </body>
    <GoogleAnalytics gaId='G-7EHDYBT6M5' />
  </html>
)

export default RootLayout
