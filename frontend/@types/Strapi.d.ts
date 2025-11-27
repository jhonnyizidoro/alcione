declare namespace Strapi {
  interface Payload<T> {
    data: T
    error?: {
      status: number
      name: 'NotFoundError'
      message: 'Not Found'
      details: unknown
    }
    meta?: {
      pagination?: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }

  interface MediaFormat {
    name?: string
    hash?: string
    ext?: string
    mime?: string
    width?: number
    height?: number
    size?: number
    path?: string
    url?: string
    sizeInBytes?: number
  }

  interface Media {
    id?: number
    name?: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
    formats?: {
      thumbnail: MediaFormat
      medium: MediaFormat
      small: MediaFormat
    }
    hash?: string
    ext?: string
    mime?: string
    size?: number
    url?: string
    previewUrl?: string
    provider?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    provider_metadata?: unknown
  }
}
