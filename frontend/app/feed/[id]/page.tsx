import { FC } from 'react'

import { get } from '@/util/api'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import FeedItem from '@/components/FeedItem/FeedItem'

type FeedData = SingleTypeRes<Collections.Feed>

type Props = Params<'id'>

export const generateMetadata = async ({ params }: Props) => {
  const feed = await get<FeedData>(`feeds/${params.id}`)

  return defaultMetadata(
    `Helder Lazarotto | ${feed.data.attributes.description}`.slice(0, 70),
    `${feed.data.attributes.description?.slice(0, 160)}...`,
  )
}

const getData = async (id: string) => {
  const res = await get<FeedData>(`feeds/${id}?populate=deep,2`)

  return {
    feed: res.data.attributes,
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
