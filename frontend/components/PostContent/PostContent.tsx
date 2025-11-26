import { FC } from 'react'

import { parseBody } from '@/util/post'

import styles from './PostContent.module.scss'

interface Props {
  content?: string | null
}

const PostContent: FC<Props> = ({ content }) => (
  <article
    className={styles.wrapper}
    dangerouslySetInnerHTML={{ __html: parseBody(content || '') }}
  />
)

export default PostContent
