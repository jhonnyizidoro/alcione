import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { socialLinks } from '@/components/SocialLinks/SocialLinks'

import DownloadIcon from '@/icons/Download'
import WebIcon from '@/icons/Web'

import styles from './SocialLinksOverlay.module.scss'
import ProfilePhoto from './images/profile-photo.jpg'

const allLinks = [
  { url: '/', Icon: WebIcon, label: 'Visite meu site' },
  { url: '/plano-de-governo', Icon: DownloadIcon, label: 'Plano de governo' },
  ...socialLinks,
]

const SocialLinksOverlay: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Image
        src={ProfilePhoto}
        width={100}
        height={100}
        alt='Professor Alcione'
        className={styles.image}
      />
      <h1 className={styles.title}>
        Acompanhe o Professor Alcione nas redes sociais!
      </h1>
      {allLinks.map(({ url, Icon, label }) => (
        <Link
          key={url}
          href={url}
          rel={url.includes('http') ? 'noopener' : undefined}
          target={url.includes('http') ? '_blank' : '_self'}
          className={styles.link}
          aria-label={label}
          title={label}
        >
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} width={22} height={22} />
          </div>
          <h2 className={styles.text}>{label}</h2>
        </Link>
      ))}
    </div>
  </div>
)

export default SocialLinksOverlay
