import { StrapiRoute } from '@/@types/Routes'
import Link from 'next/link'
import { FC } from 'react'

import { get } from '@/util/api'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import PostContent from '@/components/PostContent/PostContent'

import styles from './page.module.scss'

export const metadata = defaultMetadata(
  'Professor Alcione | Plano de governo',
  'Professor Alcione: confira o plano de governo do Professor Alcione.',
)

const getData = async () => {
  const res = await get<Api.ElectionPlatform>(StrapiRoute.ElectionPlatform)

  return {
    data: res,
  }
}

const ElectionPlatformPage: FC = async () => {
  const { data } = await getData()

  return (
    <>
      <Container size={700}>
        <h1 className={styles.title}>{data?.title}</h1>
        <Link
          className={styles.link}
          href={data?.file?.url || ''}
          download
          target='_blank'
          rel='noopener'
        >
          Faça o download do plano de governo
        </Link>
        <PostContent content={data?.content} />
      </Container>
    </>
  )
}

export default ElectionPlatformPage
