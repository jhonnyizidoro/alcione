import { StrapiRoute } from '@/@types/Routes'
import { FC } from 'react'

import { get } from '@/util/api'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import FeedItem from '@/components/FeedItem/FeedItem'

type Props = {
  params: { id: string }
}

export const generateMetadata = async ({ params }: Props) => {
  const feed = await get<Api.Feed>(StrapiRoute.Feed, { suffix: params.id })

  return defaultMetadata(
    `Professor Alcione | ${feed?.description}`.slice(0, 70),
    `${feed?.description?.slice(0, 160)}...`,
  )
}

const getData = async (id: string) => {
  const res = await get<Api.Feed>(StrapiRoute.Feed, { suffix: id })

  return {
    feed: res,
  }
}

const PostPage: FC<Props> = async ({ params }) => {
  const { feed } = await getData(params.id)

  return (
    <Container size={700}>
      <FeedItem {...feed} id={Number(params.id)} showButton />
    </Container>
  )
}

export default PostPage
