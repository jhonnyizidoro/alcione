import { StrapiRoute } from '@/@types/Routes'
import { MetadataRoute } from 'next'

import { get } from '@/util/api'
import { postUrl } from '@/util/url'

const domain = String(process.env.NEXT_PUBLIC_DOMAIN)

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const staticPages = ['/', '/pesquisar', '/sobre-mim', '/plano-de-governo']

  const links: MetadataRoute.Sitemap = staticPages.map((url) => ({
    url: domain + url,
    lastModified: new Date(),
    changeFrequency: 'always',
    priority: 1,
  }))

  const res = await Promise.all([
    get<Api.Category[]>(StrapiRoute.Category),
    get<Api.Tag[]>(StrapiRoute.Tag),
    get<Api.Post[]>(StrapiRoute.Post),
  ])

  res[0]?.forEach((c) => {
    links.push({
      url: `${domain}/pesquisar?categoria=${c.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  res[1]?.forEach((t) => {
    links.push({
      url: `${domain}/pesquisar?tag=${t.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  res[2]?.forEach((p) => {
    links.push({
      url: `${domain}${postUrl(p.title, p.id)}`,
      lastModified: p.publishDate || '',
      changeFrequency: 'weekly',
      priority: 1,
    })
  })

  return links.map((l) => ({ ...l, url: l.url.replaceAll('&', '&amp;') }))
}

export default Sitemap
