import { FC } from 'react'

import LoaderIcon from '@/icons/Loader'

import styles from './SearchResultLoader.module.scss'

export const SearchResultLoader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <LoaderIcon width={50} className={styles.icon} />
      Aguarde, carregando...
    </div>
  )
}

export default SearchResultLoader
