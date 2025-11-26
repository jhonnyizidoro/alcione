declare namespace Collections {
  interface Category {
    name: string
    description: string
  }

  interface Tag {
    name: string
  }

  interface Post {
    title: string
    body: string
    publishedAt: string
    publishDate: string
    image: SingleType<Collections.Image>
    category: SingleType<Collections.Category>
    tags: Collection<Collections.Tag>
    gallery: Collection<Collections.Image>
  }

  interface Feed {
    description: string
    url: string
    date: string
    gallery: Collection<Collections.Image>
  }

  interface Image {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    url: string
    previewUrl: string
    provider: 'aws-s3'
    provider_metadata: string
    alternativeText: string
    caption: string
    formats: {
      ['thumbnail' | 'small' | 'medium' | 'large']: {
        name: string
        hash: string
        ext: string
        mime: string
        path: string
        width: number
        height: number
        size: number
        public_id: string
        url: string
      }
    }
  }

  interface File {
    name: string
    alternativeText: string
    caption: string
    width: string
    height: string
    formats: string
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string
    provider: string
    provider_metadata: string
  }
}

declare namespace Components {
  namespace Home {
    interface NumbersSection {
      id: number
      title: string
      subtitle: string
      text: string
    }
  }

  namespace About {
    interface TimelineItem {
      id: number
      title: string
      date: string
      description: string
      link?: string
    }
  }

  namespace Class {
    interface ClassItem {
      id: number
      title: string
      description: string
      image: SingleType<Collections.Image>
    }
  }
}
