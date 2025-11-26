import { FC, PropsWithChildren } from 'react'

import TagIcon from '@/icons/Tag'

import styles from './Category.module.scss'

interface Props {
  type: 'label' | 'text'
}

const Category: FC<PropsWithChildren<Props>> = ({ children, type }) => (
  <div className={styles.category} data-type={type}>
    <TagIcon className={styles.categoryIcon} width={14} data-type={type} />
    {children}
  </div>
)

export default Category
