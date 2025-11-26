'use client'

import { FC } from 'react'

import ShareIcon from '@/icons/Share'

import styles from './Share.module.scss'

const Share: FC = () => (
  <button
    onClick={() =>
      navigator.share({
        url: window.location.href,
        text: document.querySelector('meta[name="description"]')?.innerHTML,
        title: document.title,
      })
    }
    type='button'
    aria-label='Compartilhar página'
    className={styles.button}
  >
    Compartilhar
    <ShareIcon width={20} className={styles.icon} />
  </button>
)

export default Share
