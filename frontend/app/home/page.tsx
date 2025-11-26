import Link from 'next/link'
import { FC } from 'react'

import { get } from '@/util/api'
import { formatDateTime } from '@/util/date'

import Container from '@/components/Container/Container'
import CoverPhoto from '@/components/CoverPhoto/CoverPhoto'
import Date from '@/components/Date/Date'
import FeedItem from '@/components/FeedItem/FeedItem'
import InstaFeed from '@/components/InstaFeed/InstaFeed'
import PostCard from '@/components/PostCard/PostCard'
import PostContent from '@/components/PostContent/PostContent'
import PostGallery from '@/components/PostGallery/PostGallery'
import PostTags from '@/components/PostTags/PostTags'
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage'
import SocialLinks from '@/components/SocialLinks/SocialLinks'

import styles from './page.module.scss'

type HomeData = SingleTypeRes<{
  headerTitle: string
  headerSubtitle: string
  headerImage: SingleType<Collections.Image>
  feed: Collection<Collections.Feed>
  featuredPosts: Collection<Collections.Post>
  featuredPost: SingleType<Collections.Post>
  featuredCategories: Collection<Collections.Category>
  numbersSection: Array<Components.Home.NumbersSection>
  aboutImage: SingleType<Collections.Image>
  aboutText: string
  featuredProjects: Collection<Collections.Post>
}>

const getData = async () => {
  const res = await get<HomeData>('home?populate=deep,3')

  return {
    data: res.data.attributes,
  }
}

const HomePage: FC = async () => {
  const { data } = await getData()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>{data.headerTitle}</h1>
          <h2 className={styles.headerSubtitle}>{data.headerSubtitle}</h2>
          <SocialLinks
            background='yellow'
            fill='lightPurple'
            showText
            textColor='white'
          />
          <Link href='/sobre-mim' className={styles.headerButton}>
            Me conheça
          </Link>
        </div>

        <div className={styles.headerImageWrapper}>
          <ResponsiveImage
            alt='Helder Lazarotto'
            className={styles.headerImage}
            width={1200}
            height={500}
            src={data.headerImage?.data?.attributes.url}
          />
        </div>
      </header>
      <Container className={styles.postsWrapper}>
        <div className={styles.postsSection}>
          <h2 className={styles.postsTitle}>Publicações em destaque</h2>
          {data.featuredPosts?.data.map((post) => (
            <PostCard key={post.id} {...post.attributes} id={post.id} />
          ))}
          <Link className={styles.postsButton} href='/pesquisar'>
            Veja mais publicações
          </Link>
        </div>
        <article className={styles.preview}>
          {data.feed?.data.map((f, i) => (
            <FeedItem key={i} id={f.id} {...f.attributes} shortDescription />
          ))}
          <div className={styles.previewImage}>
            <CoverPhoto
              width={790}
              alt={data.featuredPost?.data?.attributes.title}
              label={
                data.featuredPost?.data?.attributes.category?.data?.attributes
                  .name
              }
              src={
                data.featuredPost?.data?.attributes.image?.data?.attributes.url
              }
            />
          </div>
          <Date>
            {formatDateTime(data.featuredPost?.data?.attributes.publishDate)}
          </Date>
          <h1 className={styles.previewTitle}>
            {data.featuredPost?.data?.attributes.title}
          </h1>
          <PostContent content={data.featuredPost?.data?.attributes.body} />
          <PostGallery
            images={data.featuredPost?.data?.attributes.gallery}
            title='Galeria de fotos do evento | Faça o download de sua foto'
          />
          <PostTags
            tags={data.featuredPost?.data?.attributes.tags}
            category={data.featuredPost?.data?.attributes.category}
          />
          <br />
          <br />
          <InstaFeed />
        </article>
        <div className={styles.postsSection}>
          <h2 className={styles.postsTitle}>Categorias</h2>
          {data.featuredCategories?.data
            .sort((a, b) =>
              String(a.attributes.name) > String(b.attributes.name) ? 1 : -1,
            )
            .map((category) => (
              <Link
                key={category.id}
                className={styles.category}
                href={`/pesquisar?categoria=${category.attributes.name}`}
              >
                <div>
                  <div className={styles.categoryTitle}>
                    {category.attributes.name}
                  </div>
                  <div className={styles.categoryText}>
                    {category.attributes.description}
                  </div>
                </div>
                <div className={styles.categoryButton}>Ver publicações</div>
              </Link>
            ))}
        </div>
      </Container>
      <div className={styles.numbersWrapper}>
        <Container className={styles.numbers}>
          {data.numbersSection?.map((item) => (
            <div className={styles.numbersItem} key={item.id}>
              <h2 className={styles.numbersTitle}>{item.title}</h2>
              <h3 className={styles.numbersSubtitle}>{item.subtitle}</h3>
              <p className={styles.numbersText}>{item.text}</p>
            </div>
          ))}
        </Container>
      </div>
      <section className={styles.aboutWrapper}>
        <Container className={styles.about} size={1000}>
          <ResponsiveImage
            alt='Helder Lazarotto'
            className={styles.aboutImage}
            width={400}
            height={540}
            src={data.aboutImage?.data?.attributes.url}
          />
          <div>
            <h1 className={styles.aboutTitle}>Sobre mim</h1>
            <p className={styles.aboutText}>{data.aboutText}</p>
            <SocialLinks background='purple' fill='white' />
            <Link href='/sobre-mim' className={styles.aboutButton}>
              Saiba mais
            </Link>
          </div>
        </Container>
      </section>
      <h2 className={styles.projectsTitle}>Projetos</h2>
      <Container className={styles.projectsGrid}>
        {data.featuredProjects?.data.map((post) => (
          <PostCard key={post.id} {...post.attributes} id={post.id} />
        ))}
      </Container>
    </>
  )
}

export default HomePage
