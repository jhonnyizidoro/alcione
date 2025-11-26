import type { Schema, Struct } from '@strapi/strapi'

export interface AboutTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_about_timeline_items'
  info: {
    description: ''
    displayName: 'Timeline Item'
  }
  attributes: {
    date: Schema.Attribute.Date
    description: Schema.Attribute.String
    link: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface HomeNumbersSection extends Struct.ComponentSchema {
  collectionName: 'components_home_numbers_sections'
  info: {
    displayName: 'Numbers Section'
  }
  attributes: {
    subtitle: Schema.Attribute.String
    text: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.timeline-item': AboutTimelineItem
      'home.numbers-section': HomeNumbersSection
    }
  }
}
