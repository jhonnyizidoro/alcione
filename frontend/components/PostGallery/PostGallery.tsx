'use client'

import { FC, useCallback } from 'react'

import Carousel from '@/components/Carousel/Carousel'
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage'

import DownloadIcon from '@/icons/Download'

import styles from './PostGallery.module.scss'

interface Props {
  images?: Collection<Collections.Image> | null
  title?: string
}

const PostGallery: FC<Props> = ({ images, title }) => {
  const handleDownload = useCallback(async (src: string) => {
    const res = await fetch(src)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = new Date().toString()
    a.click()
  }, [])

  if (!images?.data) {
    return
  }

  return (
    <div className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <Carousel itemsToShow={[{ items: 1, size: [0, 9999] }]}>
        {images.data.map((i, index) => (
          <div key={i.id} className={styles.slide}>
            <button
              type='button'
              onClick={() => handleDownload(i.attributes.url || '')}
              className={styles.button}
            >
              Download ({index + 1}/{images.data.length})
              <DownloadIcon width={16} className={styles.buttonIcon} />
            </button>
            <ResponsiveImage
              src={i.attributes.url || ''}
              alt=''
              width={1000}
              height={750}
              className={styles.image}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default PostGallery
