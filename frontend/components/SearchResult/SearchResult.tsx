import { StrapiRoute } from '@/@types/Routes'
import { FC } from 'react'

import { get } from '@/util/api'

import PostCard from '@/components/PostCard/PostCard'

import styles from './SearchResult.module.scss'

interface Props {
  sort?: string
  category?: string
  tag?: string
  search?: string
}

const buildSearchString = ({ sort, category, tag, search }: Props) => {
  const params: Record<string, string> = {
    'pagination[pageSize]': '999',
  }

  if (category) {
    params['filters[category][name][$eq]'] = category
  }

  if (tag) {
    params['&filters[tags][name][$eq]'] = tag
  }

  if (!sort || sort === 'Mais recentes') {
    params['sort'] = 'publishDate:desc'
  } else if (sort === 'Mais antigas') {
    params['sort'] = 'publishDate'
  } else if (sort === 'A - Z') {
    params['sort'] = 'title'
  } else if (sort === 'Z - A') {
    params['sort'] = 'title:desc'
  }

  if (search) {
    params['_q'] = search
  }

  return params
}

const SearchResult: FC<Props> = async ({ sort, category, tag, search }) => {
  // TODO: is this working?
  const params = buildSearchString({ sort, category, tag, search })
  const data = await get<Api.Post[]>(StrapiRoute.Post, { params })

  if (!data || data?.length === 0) {
    return (
      <div className={styles.noResultsWrapper}>
        <div className={styles.noResultsTitle}>Nenhum resultado encontrado</div>
        <div>Tente alterar os filtros da pesquisa</div>
      </div>
    )
  }

  return data.map((post) => <PostCard key={post.id} {...post} id={post.id} />)
}

export default SearchResult
