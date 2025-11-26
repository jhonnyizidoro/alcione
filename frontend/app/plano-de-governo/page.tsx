import Link from 'next/link'
import { FC } from 'react'

import { get } from '@/util/api'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import PostContent from '@/components/PostContent/PostContent'

import styles from './page.module.scss'

type ElectionPlatformData = SingleTypeRes<{
  title: string
  content: string
  file: SingleType<Collections.File>
}>

export const metadata = defaultMetadata(
  'Helder Lazarotto | Plano de governo',
  'Helder Lazarotto: confira o plano de governo do prefeito Helder Lazarotto para a cidade de Colombo.',
)

const getData = async () => {
  const res = await get<ElectionPlatformData>(
    'election-platform?populate=deep,2',
  )

  return {
    data: res.data.attributes,
  }
}

const ElectionPlatformPage: FC = async () => {
  const { data } = await getData()

  return (
    <>
      <Container size={700}>
        <h1 className={styles.title}>{data.title}</h1>
        <Link
          className={styles.link}
          href={data.file?.data?.attributes.url || ''}
          download
          target='_blank'
          rel='noopener'
        >
          Faça o download do plano de governo
        </Link>
        <PostContent content={data.content} />
      </Container>
    </>
  )
}

export default ElectionPlatformPage
