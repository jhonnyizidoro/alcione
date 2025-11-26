import { FC, PropsWithChildren } from 'react'

import CalendarIcon from '@/icons/Calendar'

import styles from './Date.module.scss'

const Date: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.date}>
    <CalendarIcon className={styles.dateIcon} width={14} />
    {children}
  </div>
)

export default Date
