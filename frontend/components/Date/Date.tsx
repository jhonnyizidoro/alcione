import { FC } from 'react'

import CalendarIcon from '@/icons/Calendar'

import styles from './Date.module.scss'

const Date: FC<Children> = ({ children }) => (
  <div className={styles.date}>
    <CalendarIcon className={styles.dateIcon} width={14} />
    {children}
  </div>
)

export default Date
