import Link from 'next/link'
import { FC } from 'react'

import { get } from '@/util/api'
import { formatDate } from '@/util/date'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import Date from '@/components/Date/Date'
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage'
import SocialLinks from '@/components/SocialLinks/SocialLinks'

import LinkIcon from '@/icons/Link'

import styles from './page.module.scss'

type AboutData = SingleTypeRes<{
  headerTitle: string
  headerSubtitle: string
  headerImage: SingleType<Collections.Image>
  aboutText: string
  timelineItems: Array<Components.About.TimelineItem>
  bottomImage: SingleType<Collections.Image>
  bottomText: string
}>

export const metadata = defaultMetadata(
  'Helder Lazarotto | Sobre mim',
  'Helder Lazarotto: Confira minha trajetória, meus últimos projetos e muito mais!',
)

const getData = async () => {
  const res = await get<AboutData>('about?populate=deep,2')

  return {
    data: res.data.attributes,
  }
}

const AboutPage: FC = async () => {
  const { data } = await getData()

  return (
    <>
      <div className={styles.headerWrapper}>
        <Container className={styles.header} size={1000}>
          <ResponsiveImage
            alt='Helder Lazarotto'
            className={styles.headerImage}
            width={470}
            height={638}
            src={data.headerImage?.data?.attributes.url}
          />
          <div>
            <h1 className={styles.headerTitle}>{data.headerTitle}</h1>
            <h2 className={styles.headerSubtitle}>{data.headerSubtitle}</h2>
            <SocialLinks background='purple' fill='white' />
          </div>
        </Container>
      </div>
      <div className={styles.about}>
        <Container size={1000}>
          <h1 className={styles.aboutTitle}>Sobre mim</h1>
          <p className={styles.aboutText}>{data.aboutText}</p>
        </Container>
      </div>
      <Container size={700} className={styles.timeline}>
        <h1 className={styles.timelineTitle}>Minha trajetória</h1>
        <div className={styles.timelineCards}>
          {data.timelineItems?.map((item, i) => (
            <div
              key={item.id}
              className={styles.timelineCard}
              data-color={i % 2 ? 'yellow' : 'purple'}
              data-position={
                (i + 1) % 3 === 0
                  ? 'right'
                  : (i + 1) % 2 === 0
                    ? 'center'
                    : 'left'
              }
            >
              <div
                className={styles.timelineCardTitle}
                data-color={i % 2 ? 'yellow' : 'purple'}
              >
                {item.title}
              </div>
              <div className={styles.timelineCardContent}>
                <Date>{formatDate(item.date)}</Date>
                <div className={styles.timelineCardText}>
                  {item.description}
                </div>
                {item.link && (
                  <Link
                    href={item.link}
                    className={styles.timelineCardLink}
                    rel='noopener'
                  >
                    Saiba mais{' '}
                    <LinkIcon
                      className={styles.timelineCardLinkIcon}
                      width={13}
                    />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <div className={styles.bottomAbout}>
        <ResponsiveImage
          alt='Helder Lazarotto'
          className={styles.bottomAboutImage}
          width={1200}
          height={590}
          src={data.bottomImage?.data?.attributes.url}
        />

        <div className={styles.bottomAboutContent}>
          <p className={styles.bottomAboutText}>{data.bottomText}</p>
          <SocialLinks background='purple' fill='white' />
        </div>
      </div>
    </>
  )
}

export default AboutPage
