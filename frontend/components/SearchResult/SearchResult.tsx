import { FC } from 'react'

import { get } from '@/util/api'

import PostCard from '@/components/PostCard/PostCard'

import styles from './SearchResult.module.scss'

type PostData = CollectionRes<Collections.Post>

interface Props {
  sort?: string
  category?: string
  tag?: string
  search?: string
}

const buildSearchString = ({ sort, category, tag, search }: Props) => {
  let searchString = '&pagination[pageSize]=999'

  if (category) {
    searchString += `&filters[category][name][$eq]=${category}`
  }

  if (tag) {
    searchString += `&filters[tags][name][$eq]=${tag}`
  }

  if (!sort || sort === 'Mais recentes') {
    searchString += '&sort=publishDate:desc'
  } else if (sort === 'Mais antigas') {
    searchString += '&sort=publishDate'
  } else if (sort === 'A - Z') {
    searchString += '&sort=title'
  } else if (sort === 'Z - A') {
    searchString += '&sort=title:desc'
  }

  if (search) {
    searchString += `&_q=${search}`
  }

  return searchString
}

const SearchResult: FC<Props> = async ({ sort, category, tag, search }) => {
  const searchString = buildSearchString({ sort, category, tag, search })
  const { data } = await get<PostData>(`posts?populate=deep,2${searchString}`)

  if (data.length === 0) {
    return (
      <div className={styles.noResultsWrapper}>
        <div className={styles.noResultsTitle}>Nenhum resultado encontrado</div>
        <div>Tente alterar os filtros da pesquisa</div>
      </div>
    )
  }

  return data.map((post) => (
    <PostCard key={post.id} {...post.attributes} id={post.id} />
  ))
}

export default SearchResult
