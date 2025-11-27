import { StrapiRoute } from '@/@types/Routes'
import Link from 'next/link'
import { FC } from 'react'

import { get } from '@/util/api'
import { formatDateTime } from '@/util/date'

import Container from '@/components/Container/Container'
import CoverPhoto from '@/components/CoverPhoto/CoverPhoto'
import Date from '@/components/Date/Date'
import InstaFeed from '@/components/InstaFeed/InstaFeed'
import PostCard from '@/components/PostCard/PostCard'
import PostContent from '@/components/PostContent/PostContent'
import PostGallery from '@/components/PostGallery/PostGallery'
import PostTags from '@/components/PostTags/PostTags'
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage'
import SocialLinks from '@/components/SocialLinks/SocialLinks'

import styles from './page.module.scss'

const getData = async () => {
  const res = await get<Api.Home>(StrapiRoute.Home)

  return {
    data: res,
  }
}

const HomePage: FC = async () => {
  const { data } = await getData()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>{data?.headerTitle}</h1>
          <h2 className={styles.headerSubtitle}>{data?.headerSubtitle}</h2>
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
            alt='Professor Alcione'
            className={styles.headerImage}
            width={1200}
            height={500}
            src={data?.headerImage?.url}
          />
        </div>
      </header>
      <Container className={styles.postsWrapper}>
        <div className={styles.postsSection}>
          <h2 className={styles.postsTitle}>Publicações em destaque</h2>
          {data?.featuredPosts?.map((post) => (
            <PostCard key={post.id} {...post} id={post.id} />
          ))}
          <Link className={styles.postsButton} href='/pesquisar'>
            Veja mais publicações
          </Link>
        </div>
        <article className={styles.preview}>
          <div className={styles.previewImage}>
            <CoverPhoto
              width={790}
              alt={data?.featuredPost?.title}
              label={data?.featuredPost?.category?.name}
              src={data?.featuredPost?.image?.url}
            />
          </div>
          <Date>{formatDateTime(data?.featuredPost?.publishDate)}</Date>
          <h1 className={styles.previewTitle}>{data?.featuredPost?.title}</h1>
          <PostContent content={data?.featuredPost?.body} />
          <PostGallery
            images={data?.featuredPost?.gallery}
            title='Galeria de fotos | Faça o download de sua foto'
          />
          <PostTags
            tags={data?.featuredPost?.tags}
            category={data?.featuredPost?.category}
          />
          <br />
          <br />
          <InstaFeed />
        </article>
        <div className={styles.postsSection}>
          <h2 className={styles.postsTitle}>Categorias</h2>
          {data?.featuredCategories
            ?.sort((a, b) => (String(a.name) > String(b.name) ? 1 : -1))
            .map((category) => (
              <Link
                key={category.id}
                className={styles.category}
                href={`/pesquisar?categoria=${category.name}`}
              >
                <div>
                  <div className={styles.categoryTitle}>{category.name}</div>
                  <div className={styles.categoryText}>
                    {category.description}
                  </div>
                </div>
                <div className={styles.categoryButton}>Ver publicações</div>
              </Link>
            ))}
        </div>
      </Container>
      <div className={styles.numbersWrapper}>
        <Container className={styles.numbers}>
          {data?.numbersSection?.map((item) => (
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
            alt='Professor Alcione'
            className={styles.aboutImage}
            width={400}
            height={540}
            src={data?.aboutImage?.url}
          />
          <div>
            <h1 className={styles.aboutTitle}>Sobre mim</h1>
            <p className={styles.aboutText}>{data?.aboutText}</p>
            <SocialLinks background='purple' fill='white' />
            <Link href='/sobre-mim' className={styles.aboutButton}>
              Saiba mais
            </Link>
          </div>
        </Container>
      </section>
      <h2 className={styles.projectsTitle}>Projetos</h2>
      <Container className={styles.projectsGrid}>
        {data?.featuredProjects?.map((post) => (
          <PostCard key={post.id} {...post} id={post.id} />
        ))}
      </Container>
    </>
  )
}

export default HomePage
