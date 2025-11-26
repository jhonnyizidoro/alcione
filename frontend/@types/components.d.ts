declare namespace Components {
  interface TimelineItem {
    __component?: 'about.timeline-item'
    id?: number
    title?: null | string
    date?: null | string
    description?: null | string
    link?: null | string
  }

  interface NumbersSection {
    __component?: 'home.numbers-section'
    id?: number
    title?: null | string
    subtitle?: null | string
    text?: null | string
  }
}
