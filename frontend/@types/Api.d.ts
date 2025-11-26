declare namespace Api {
  interface About {
    id?: number
    headerTitle?: null | string
    headerSubtitle?: null | string
    headerImage?: Strapi.Media
    aboutText?: null | string
    timelineItems?: null | Components.TimelineItem[]
    bottomText?: null | string
    bottomImage?: Strapi.Media
  }

  interface Category {
    id?: number
    name?: null | string
    description?: null | string
  }

  interface ElectionPlatform {
    id?: number
    file?: null | Strapi.Media
    content?: null | string
    title?: null | string
  }

  interface Floater {
    id?: number
    floater?: null | Strapi.Media
  }

  interface Footer {
    id?: number
    text?: null | string
  }

  interface Home {
    id?: number
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
    name?: null | string
  }
}
