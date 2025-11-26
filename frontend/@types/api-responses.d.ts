/**
 * HELPERS
 */

type NullableProps<T> = {
  [K in keyof T]: T[K] | null
}

type Attributes<T> = NullableProps<T> & {
  createdAt: string
  updatedAt: string
}

interface Entity<T> {
  id: number
  attributes: Attributes<T>
}

/**
 * RESPONSES
 */
interface SingleTypeRes<T> {
  data: Entity<T>
  meta: {}
}

interface CollectionRes<T> {
  data: Entity<T>[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

/**
 * NESTED ITEMS
 */
interface SingleType<T> {
  data: Entity<T> | null
}

interface Collection<T> {
  data: Entity<T>[]
}
