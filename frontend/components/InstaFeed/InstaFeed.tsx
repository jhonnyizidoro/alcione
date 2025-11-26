import Script from 'next/script'
import { FC } from 'react'

const InstaFeed: FC = () => (
  <>
    <Script
      src='https://static.elfsight.com/platform/platform.js'
      strategy='lazyOnload'
    />
    <div
      className='elfsight-app-72124541-68ae-44f6-95c7-f1052e6f98a5'
      data-elfsight-app-lazy
    />
  </>
)

export default InstaFeed
