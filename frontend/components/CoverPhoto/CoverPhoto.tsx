import { FC } from 'react'

import Category from '@/components/Category/Category'
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage'

import styles from './CoverPhoto.module.scss'

interface Props {
  alt?: string | null
  width: number
  label?: string | null
  src?: string | null
}

const CoverPhoto: FC<Props> = ({ alt, width, label, src }) => (
  <div className={styles.wrapper}>
    <ResponsiveImage
      alt={alt}
      className={styles.image}
      width={width}
      height={width * 0.55}
      src={src}
    />
    {label && <Category type='label'>{label}</Category>}
  </div>
)

export default CoverPhoto
