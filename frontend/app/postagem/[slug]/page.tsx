import Link from 'next/link'
import { FC } from 'react'

import { get } from '@/util/api'
import { formatDateTime, stripHtml } from '@/util/date'
import { defaultMetadata } from '@/util/seo'
import { getId } from '@/util/url'

import Category from '@/components/Category/Category'
import Container from '@/components/Container/Container'
import CoverPhoto from '@/components/CoverPhoto/CoverPhoto'
import Date from '@/components/Date/Date'
import PostCard from '@/components/PostCard/PostCard'
import PostContent from '@/components/PostContent/PostContent'
import PostGallery from '@/components/PostGallery/PostGallery'
import PostTags from '@/components/PostTags/PostTags'

import styles from './page.module.scss'

type PostData = SingleTypeRes<Collections.Post>

type RecentPostsData = CollectionRes<Collections.Post>

type Props = Params<'slug'>

export const generateMetadata = async ({ params }: Props) => {
  const id = getId(params.slug)
  const post = await get<PostData>(`posts/${id}`)

  return defaultMetadata(
    `Helder Lazarotto | ${post.data.attributes.title}`.slice(0, 70),
    `${stripHtml(post.data.attributes.body).slice(0, 160)}...`,
  )
}

const getData = async (id: string) => {
  const res = await Promise.all([
    get<PostData>(`posts/${id}?populate=deep,2`),
    get<RecentPostsData>(
      'posts?populate=deep,2&sort=publishDate:desc&pagination[limit]=8',
    ),
  ])

  return {
    post: res[0].data.attributes,
    recentPosts: res[1].data,
  }
}

const PostPage: FC<Props> = async ({ params }) => {
  const id = getId(params.slug)
  const { post, recentPosts } = await getData(id)

  return (
    <>
      <Container size={1000}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <div className={styles.headerTitle} data-color='purple'>
              Publicado em
            </div>
            <Date>{formatDateTime(post.publishDate)}</Date>
          </div>
          {post.category?.data && (
            <div className={styles.headerItem}>
              <div className={styles.headerTitle} data-color='orange'>
                Categoria
              </div>
              <Category type='text'>
                {post.category.data.attributes.name}
              </Category>
            </div>
          )}
        </div>
        <div className={styles.previewImage}>
          <CoverPhoto
            alt={post.title}
            label={post.category?.data?.attributes.name}
            width={1000}
            src={post.image?.data?.attributes.url}
          />
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <PostContent content={post.body} />
        <PostGallery
          images={post.gallery}
          title='Galeria de fotos do evento | Faça o download de sua foto'
        />
        <PostTags tags={post.tags} category={post.category} />
      </Container>
      <Container>
        <h2 className={styles.sectionTitle}>Publicações Recentes</h2>
        <div className={styles.recentPostsGrid}>
          {recentPosts?.map((post) => (
            <PostCard key={post.id} {...post.attributes} id={post.id} />
          ))}
        </div>
        <Link href='/pesquisar' className={styles.sectionButton}>
          Veja mais publicações
        </Link>
      </Container>
    </>
  )
}

export default PostPage
