import { FC } from 'react'

import { get } from '@/util/api'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import PostContent from '@/components/PostContent/PostContent'
import PostGallery from '@/components/PostGallery/PostGallery'
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage'

import styles from './page.module.scss'

type HospitalData = SingleTypeRes<{
  title: string
  topContent: string
  bottomContent: string
  images: Collection<Collections.Image>
  buildingImages: Collection<Collections.Image>
  banner: SingleType<Collections.File>
  journal: Collection<Collections.Image>
}>

export const metadata = defaultMetadata(
  'Helder Lazarotto | Hospital de Colombo',
  'Helder Lazarotto: a construção do Hospital Geral de Colombo avança, alcançando o 6º pavimento. Previsto para 2025, atenderá Colombo e municípios vizinhos, com 126 leitos e moderna infraestrutura.',
)

const getData = async () => {
  const res = await get<HospitalData>('hospital?populate=deep,3')

  return {
    data: res.data.attributes,
  }
}

const HospitalPage: FC = async () => {
  const { data } = await getData()

  return (
    <>
      <ResponsiveImage
        src={data.banner?.data?.attributes.url || ''}
        alt=''
        width={1920}
        height={711}
        className={styles.banner}
      />
      <Container size={700}>
        <h1 className={styles.title}>{data.title}</h1>
        <PostContent content={data.topContent} />
        <PostGallery images={data.images} />
        <PostContent content={data.bottomContent} />
        <PostGallery
          images={data.buildingImages}
          title='Acompanhe o andamento das obras'
        />
        <h1 className={styles.title}>Veja também</h1>
        {data.journal?.data.map((i) => (
          <ResponsiveImage
            key={i.id}
            src={i.attributes.url || ''}
            alt=''
            width={700}
            height={1000}
            className={styles.journalImage}
          />
        ))}
      </Container>
    </>
  )
}

export default HospitalPage
