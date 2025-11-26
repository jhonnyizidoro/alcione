import Link from 'next/link'
import { FC } from 'react'

import { formatDateTime } from '@/util/date'
import { getBodyText } from '@/util/post'
import { postUrl } from '@/util/url'

import CoverPhoto from '@/components/CoverPhoto/CoverPhoto'
import Date from '@/components/Date/Date'

import styles from './PostCard.module.scss'

interface Props extends Attributes<Collections.Post> {
  id: Entity<Collections.Post>['id']
}

const PostCard: FC<Props> = ({
  id,
  publishDate,
  title,
  body,
  image,
  category,
}) => (
  <Link className={styles.card} href={postUrl(title, id)}>
    <CoverPhoto
      alt={title}
      label={category?.data?.attributes.name}
      width={390}
      src={image?.data?.attributes.url}
    />
    <div className={styles.content}>
      <Date>{formatDateTime(publishDate)}</Date>
      <div className={styles.title}>{title}</div>
      <p className={styles.preview}>{getBodyText(body)}</p>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>Continue lendo</div>
      </div>
    </div>
  </Link>
)

export default PostCard
