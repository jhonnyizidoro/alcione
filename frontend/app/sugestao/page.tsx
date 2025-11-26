import { FC } from 'react'

import { defaultMetadata } from '@/util/seo'

import Container from '@/components/Container/Container'
import SuggestionForm from '@/components/SuggestionForm/SuggestionForm'

import styles from './page.module.scss'

export const metadata = defaultMetadata(
  'Helder Lazarotto | Deixe sua sugestão',
  'Helder Lazarotto: Deixe sua sugestão para uma Colombo melhor',
)

const SuggestionsPage: FC = async () => (
  <Container size={700}>
    <h1 className={styles.title}>Deixe sua sugestão</h1>
    <SuggestionForm />
  </Container>
)

export default SuggestionsPage
