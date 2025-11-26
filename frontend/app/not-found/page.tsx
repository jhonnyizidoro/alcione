import { FC } from 'react'

import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'

import styles from './page.module.scss'

export const metadata = defaultMetadata(
  '404 | Página não encontrada',
  `Ops! Parece que você se perdeu. A página que procura não foi encontrada. Volte para a página inicial e continue sua busca.`,
)

const JobsPage: FC = () => (
  <Container size={700} className={styles.container}>
    <h1>Página não encontrada</h1>
    <h2 className={styles.subtitle}>404</h2>
    <p className={styles.text}>Essa página não existe, ou foi desativada 😞</p>
  </Container>
)

export default JobsPage
