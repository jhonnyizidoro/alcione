import Link from 'next/link'
import { FC } from 'react'

import styles from './PostTags.module.scss'

interface Props {
  tags?: Collection<Collections.Tag> | null
  category?: SingleType<Collections.Category> | null
}

const PostTags: FC<Props> = ({ tags, category }) => (
  <div className={styles.tags}>
    {tags?.data.map((tag) => (
      <Link
        className={styles.tag}
        href={`/pesquisar?tag=${tag.attributes.name}`}
        key={tag.id}
      >
        {tag.attributes.name}
      </Link>
    ))}
    {category?.data && (
      <Link
        className={styles.tag}
        href={`/pesquisar?categoria=${category.data.attributes.name}`}
      >
        {category.data.attributes.name}
      </Link>
    )}
  </div>
)

export default PostTags
