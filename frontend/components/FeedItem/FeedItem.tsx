import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { timeAgo } from '@/util/date'
import { feedUrl } from '@/util/url'

import Carousel from '@/components/Carousel/Carousel'

import VerifiedIcon from '@/icons/Verified'

import styles from './FeedItem.module.scss'
import User from './images/user.jpg'

interface Props extends Api.Feed {
  shortDescription?: boolean
  showButton?: boolean
}

const FeedItem: FC<Props> = ({
  id,
  date,
  gallery,
  description,
  url,
  shortDescription,
  showButton,
}) => (
  <div className={styles.wrapper}>
    <Link
      href={feedUrl(id)}
      aria-label='Ver postagem completa'
      className={styles.header}
    >
      <Image
        width={42}
        height={42}
        src={User}
        alt=''
        className={styles.userImage}
      />
      <strong className={styles.username}>TODO: instagram</strong>
      <VerifiedIcon width={18} className={styles.userIcon} />
      <span className={styles.date}>{timeAgo(date)}</span>
    </Link>
    <Carousel itemsToShow={[{ items: 1, size: [0, 9999] }]}>
      {gallery?.map((g, i) => (
        <Link
          href={feedUrl(id)}
          aria-label='Ver postagem completa'
          key={i}
          className={styles.mediaWrapper}
        >
          {g.mime?.includes('video') ? (
            <video
              src={g.url || ''}
              width={790}
              height={1350}
              controls
              className={styles.media}
            />
          ) : (
            <Image
              alt=''
              src={g.url || ''}
              width={790}
              height={1350}
              className={styles.media}
            />
          )}
        </Link>
      ))}
    </Carousel>
    <Link
      href={feedUrl(id)}
      aria-label='Ver postagem completa'
      className={styles.description}
      data-short={!!shortDescription}
    >
      {description}
    </Link>
    {showButton && url && (
      <Link className={styles.button} href={url}>
        Ver postagem no Instagram
      </Link>
    )}
  </div>
)

export default FeedItem
