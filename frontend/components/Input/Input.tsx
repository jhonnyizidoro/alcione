import { FC } from 'react'

import styles from './Input.module.scss'

export interface Props {
  value: string
  onChange(v: string): void
  placeholder: string
}

const Input: FC<Props> = ({ value, onChange, placeholder }) => (
  <input
    type='text'
    value={value}
    onChange={(ev) => onChange(ev.target.value)}
    className={styles.input}
    placeholder={placeholder}
  />
)

export default Input
