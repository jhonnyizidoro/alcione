'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import CloseIcon from '@/icons/Close'

import styles from './FloaterImage.module.scss'

interface Props {
  src: string
}

const FloaterImage: FC<Props> = ({ src }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const lastShown = localStorage.getItem('floater-pooup')
    const yesterday = Date.now() - 86400000
    setShow(!lastShown || Number(lastShown) < yesterday)
    localStorage.setItem('floater-pooup', String(Date.now()))
  }, [])

  return (
    show && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <button
            type='button'
            aria-label='Fechar janela'
            className={styles.button}
            onClick={() => setShow(false)}
          >
            <CloseIcon width={20} />
          </button>
          <Image
            src={src}
            alt=''
            width={600}
            height={750}
            className={styles.image}
          />
        </div>
      </div>
    )
  )
}

export default FloaterImage
