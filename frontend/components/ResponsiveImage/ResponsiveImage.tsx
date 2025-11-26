import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

import PlaceholderImage from './images/placeholder.png'

interface Props
  extends Omit<ImageProps, 'src' | 'alt' | 'sizes' | 'width' | 'height'> {
  width: number
  height: number
  mobileWidth?: number
  src?: string | null
  alt?: string | null
}

const ResponsiveImage: FC<Props> = ({
  width,
  height,
  mobileWidth,
  src,
  alt,
  ...rest
}) => (
  <Image
    src={src || PlaceholderImage}
    width={width}
    height={height}
    alt={alt || ''}
    sizes={`(min-width: 1001px) ${width}px, (max-width: 1000px) ${
      mobileWidth || 400
    }px`}
    {...rest}
  />
)

export default ResponsiveImage
