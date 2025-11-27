declare namespace Api {
  interface Category {
    id?: number
    documentId?: string
    name?: null | string
    description?: null | string
  }

  interface About {
    id?: number
    documentId?: string
    headerTitle?: null | string
    headerSubtitle?: null | string
    headerImage?: Strapi.Media
    aboutText?: null | string
    timelineItems?: null | Components.TimelineItem[]
    bottomText?: null | string
    bottomImage?: Strapi.Media
  }

  interface ElectionPlatform {
    id?: number
    documentId?: string
    file?: null | Strapi.Media
    content?: null | string
    title?: null | string
  }

  interface Floater {
    id?: number
    documentId?: string
    floater?: null | Strapi.Media
  }

  interface Footer {
    id?: number
    documentId?: string
    text?: null | string
  }

  interface Home {
    id?: number
    documentId?: string
    headerTitle?: string
    headerSubtitle?: null | string
    headerImage?: Strapi.Media
    featuredPosts?: null | Api.Post[]
    featuredPost?: null | Api.Post
    featuredCategories?: null | Api.Category[]
    numbersSection?: null | Components.NumbersSection[]
    aboutText?: null | string
    aboutImage?: Strapi.Media
    featuredProjects?: null | Api.Post[]
  }

  interface Post {
    id?: number
    documentId?: string
    title?: null | string
    body?: null | string
    publishDate?: null | string
    image?: Strapi.Media
    category?: null | Api.Category
    tags?: null | Api.Tag[]
    gallery?: null | Strapi.Media[]
  }

  interface Tag {
    id?: number
    documentId?: string
    name?: null | string
  }
}
