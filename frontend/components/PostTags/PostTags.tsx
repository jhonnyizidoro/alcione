import Link from 'next/link'
import { FC } from 'react'

import styles from './PostTags.module.scss'

interface Props {
  tags?: Api.Tag[] | null
  category?: Api.Category | null
}

const PostTags: FC<Props> = ({ tags, category }) => (
  <div className={styles.tags}>
    {tags?.map((tag) => (
      <Link
        className={styles.tag}
        href={`/pesquisar?tag=${tag.name}`}
        key={tag.id}
      >
        {tag.name}
      </Link>
    ))}
    {category && (
      <Link
        className={styles.tag}
        href={`/pesquisar?categoria=${category.name}`}
      >
        {category.name}
      </Link>
    )}
  </div>
)

export default PostTags
