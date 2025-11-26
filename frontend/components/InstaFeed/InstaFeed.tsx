import Script from 'next/script'
import { FC } from 'react'

const InstaFeed: FC = () => (
  <>
    <Script
      src='https://static.elfsight.com/platform/platform.js'
      strategy='lazyOnload'
    />
    <div
      className='elfsight-app-42cb858b-cb4e-45d9-a7b0-a581523f27ee'
      data-elfsight-app-lazy
    />
  </>
)

export default InstaFeed
