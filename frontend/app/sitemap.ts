import { MetadataRoute } from 'next'

import { get } from '@/util/api'
import { feedUrl, postUrl } from '@/util/url'

const domain = String(process.env.NEXT_PUBLIC_DOMAIN)

type CategoriesData = CollectionRes<Collections.Category>

type TagsData = CollectionRes<Collections.Tag>

type PostData = CollectionRes<Collections.Post>

type FeedData = CollectionRes<Collections.Feed>

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const staticPages = [
    '/',
    '/pesquisar',
    '/hospital-de-colombo',
    '/sobre-mim',
    '/aulas-gratuitas',
    '/sugestao',
    '/plano-de-governo',
  ]

  const links: MetadataRoute.Sitemap = staticPages.map((url) => ({
    url: domain + url,
    lastModified: new Date(),
    changeFrequency: 'always',
    priority: 1,
  }))

  const res = await Promise.all([
    get<CategoriesData>(`categories`),
    get<TagsData>(`tags`),
    get<PostData>(`posts?pagination[pageSize]=999`),
    get<FeedData>(`feeds`),
  ])

  res[0].data.forEach((c) => {
    links.push({
      url: `${domain}/pesquisar?categoria=${c.attributes.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  res[1].data.forEach((t) => {
    links.push({
      url: `${domain}/pesquisar?tag=${t.attributes.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  res[2].data.forEach((p) => {
    links.push({
      url: `${domain}${postUrl(p.attributes.title, p.id)}`,
      lastModified: p.attributes.updatedAt,
      changeFrequency: 'weekly',
      priority: 1,
    })
  })

  res[3].data.forEach((p) => {
    links.push({
      url: `${domain}${feedUrl(p.id)}`,
      lastModified: p.attributes.updatedAt,
      changeFrequency: 'weekly',
      priority: 1,
    })
  })

  return links.map((l) => ({ ...l, url: l.url.replaceAll('&', '&amp;') }))
}

export default Sitemap
