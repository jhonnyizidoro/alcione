import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutTimelineItem extends Schema.Component {
  collectionName: 'components_about_timeline_items';
  info: {
    displayName: 'timelineItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    description: Attribute.String;
    link: Attribute.String;
  };
}

export interface ClassClasses extends Schema.Component {
  collectionName: 'components_class_classes';
  info: {
    displayName: 'classes';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface HomeNumbersSection extends Schema.Component {
  collectionName: 'components_home_numbers_sections';
  info: {
    displayName: 'numbersSection';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.timeline-item': AboutTimelineItem;
      'class.classes': ClassClasses;
      'home.numbers-section': HomeNumbersSection;
    }
  }
}
