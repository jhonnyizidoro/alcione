'use client'

import { FC, PropsWithChildren, useMemo } from 'react'
import MultiCarousel from 'react-multi-carousel'
import type { CarouselProps } from 'react-multi-carousel'

import './Carousel.scss'

interface Props {
  showDots?: boolean
  itemsToShow: Array<{ size: [number, number]; items: number }>
  infinite?: boolean
  className?: string
  itemClassName?: string
}

const Carousel: FC<PropsWithChildren<Props>> = ({
  children,
  itemsToShow,
  showDots,
  infinite,
  className,
  itemClassName,
}) => {
  const responsive = useMemo(() => {
    const r: CarouselProps['responsive'] = {}

    itemsToShow.forEach((itemToShow, i) => {
      r[i] = {
        breakpoint: {
          min: itemToShow.size[0],
          max: itemToShow.size[1],
        },
        items: itemToShow.items,
        partialVisibilityGutter: 20,
      }
    })

    return r
  }, [itemsToShow])

  if (!children) {
    return
  }

  return (
    <MultiCarousel
      ssr
      infinite={infinite}
      showDots={showDots}
      responsive={responsive}
      itemClass={itemClassName}
      className={className}
    >
      {children}
    </MultiCarousel>
  )
}

export default Carousel
