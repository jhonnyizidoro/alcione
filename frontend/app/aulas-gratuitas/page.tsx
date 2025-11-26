import { FC } from 'react'

import { get } from '@/util/api'
import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage'

import styles from './page.module.scss'

type AboutData = SingleTypeRes<{
  classItems: Array<Components.Class.ClassItem>
}>

export const metadata = defaultMetadata(
  'Helder Lazarotto | Aulas de esporte gratuitas',
  'Helder Lazarotto: confira nossa programação das aulas de esporte gratuitas em Colombo. Helder Lazarotto: prefeito de Colombo',
)

const getData = async () => {
  const res = await get<AboutData>('class?populate=deep,3')

  return {
    data: res.data.attributes,
  }
}

const ClassesPage: FC = async () => {
  const { data } = await getData()

  return (
    <Container size={700}>
      {data.classItems?.map((item) => (
        <section key={item.id}>
          <h1 className={styles.title}>{item.title}</h1>
          <h1 className={styles.description}>{item.description}</h1>
          <ResponsiveImage
            alt='Helder Lazarotto'
            className={styles.image}
            width={700}
            height={1000}
            src={item.image.data?.attributes.url}
          />
        </section>
      ))}
    </Container>
  )
}

export default ClassesPage
