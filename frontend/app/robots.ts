import { MetadataRoute } from 'next'

const domain = String(process.env.NEXT_PUBLIC_DOMAIN)

const Robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
  },
  sitemap: `${domain}/sitemap.xml`,
})

export default Robots
