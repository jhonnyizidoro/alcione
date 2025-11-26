import Link from 'next/link'
import { FC } from 'react'

import FacebookIcon from '@/icons/Facebook'
import InstagramIcon from '@/icons/Instagram'
import TikTokIcon from '@/icons/TikTok'
import XIcon from '@/icons/X'
import YouTubeIcon from '@/icons/YouTube'

import styles from './SocialLinks.module.scss'

interface Props {
  background: 'yellow' | 'purple'
  fill: 'lightPurple' | 'white' | 'dark'
  showText?: boolean
  textColor?: 'white'
}

export const socialLinks = [
  {
    label: 'Instagram',
    Icon: InstagramIcon,
    url: 'TODO',
  },
  {
    label: 'Facebook',
    Icon: FacebookIcon,
    url: 'TODO',
  },
  {
    label: 'Twitter',
    Icon: XIcon,
    url: 'TODO',
  },
  {
    label: 'TikTok',
    Icon: TikTokIcon,
    url: 'TODO',
  },
  {
    label: 'YouTube',
    Icon: YouTubeIcon,
    url: 'TODO',
  },
]

const SocialLinks: FC<Props> = ({ background, fill, showText, textColor }) => (
  <div>
    {showText && (
      <div className={styles.text} data-color={textColor}>
        Acompanhe meus trabalhos nas minhas redes sociais
      </div>
    )}

    <div className={styles.iconsWrapper}>
      {socialLinks.map(({ url, Icon, label }) => (
        <Link
          key={url}
          href={url}
          rel='noopener'
          target='_blank'
          aria-label={label}
          title={label}
          className={styles.link}
          data-background={background}
        >
          <Icon
            className={styles.icon}
            data-fill={fill}
            width={24}
            height={24}
          />
        </Link>
      ))}
    </div>
  </div>
)

export default SocialLinks
