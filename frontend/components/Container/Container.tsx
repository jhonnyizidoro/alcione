import { FC, PropsWithChildren } from 'react'

import styles from './Container.module.scss'

interface Props {
  className?: string
  size?: 1640 | 1000 | 700
}

const Container: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  size,
}) => (
  <section
    className={`${styles.container} ${className || ''}`}
    data-size={size || 1640}
  >
    {children}
  </section>
)

export default Container
