import { FC } from 'react'

import { Props } from '@/components/Input/Input'
import styles from '@/components/Input/Input.module.scss'

const TextArea: FC<Props> = ({ value, onChange, placeholder }) => (
  <textarea
    value={value}
    onChange={(ev) => onChange(ev.target.value)}
    className={styles.input}
    placeholder={placeholder}
    rows={6}
  />
)

export default TextArea
