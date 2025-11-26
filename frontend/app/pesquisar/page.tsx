import { StrapiRoute } from '@/@types/Routes'
import { Metadata } from 'next'
import { FC, Suspense } from 'react'

import { get } from '@/util/api'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import SearchBar from '@/components/SearchBar/SearchBar'
import SearchResult from '@/components/SearchResult/SearchResult'
import SearchResultLoader from '@/components/SearchResultLoader/SearchResult'
import Select from '@/components/Select/Select'

import styles from './page.module.scss'

type Props = {
  searchParams: {
    ordem: string
    categoria: string
    tag: string
    texto: string
  }
}

export const generateMetadata = ({ searchParams }: Props): Metadata => {
  let search = 'Busca por '

  Object.keys(searchParams).forEach((key) => {
    const type = key.toUpperCase()
    const value = searchParams[key as keyof typeof searchParams]
    search += `(${type}: ${value}) `
  })

  return defaultMetadata(
    `Professor Alcione | ${search}`,
    `Veja os resultados da busca por ${search}`,
  )
}

const getData = async () => {
  // TODO: is this working?
  const res = await Promise.all([
    get<Api.Category[]>(StrapiRoute.Category, { params: { sort: 'name' } }),
    get<Api.Tag[]>(StrapiRoute.Tag, { params: { sort: 'name' } }),
  ])

  return {
    categories: res[0],
    tags: res[1],
  }
}

const SearchPage: FC<Props> = async ({ searchParams }) => {
  const { categories, tags } = await getData()

  return (
    <>
      <Container size={700}>
        <SearchBar initialValue={searchParams.texto} />
        <div className={styles.formSelects}>
          <Select
            defaultValue='Mais recentes'
            prop='ordem'
            label='Ordenar por'
            options={['Mais recentes', 'Mais antigas', 'A - Z', 'Z - A']}
          />
          <Select
            prop='categoria'
            label='Categoria'
            options={categories?.map((category) => String(category.name)) || []}
          />
          <Select
            prop='tag'
            label='Tag'
            options={tags?.map((tag) => String(tag.name)) || []}
          />
        </div>
      </Container>
      <Container>
        <Suspense
          fallback={<SearchResultLoader />}
          key={JSON.stringify(searchParams)}
        >
          <div className={styles.result}>
            <SearchResult
              sort={searchParams.ordem}
              category={searchParams.categoria}
              tag={searchParams.tag}
              search={searchParams.texto}
            />
          </div>
        </Suspense>
      </Container>
    </>
  )
}

export default SearchPage
