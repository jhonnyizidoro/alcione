export const payload = `
  interface Payload<T> {
    data: T;
    error?: {
        status: number,
        name: 'NotFoundError',
        message: 'Not Found',
        details: unknown
    };
    meta?: {
      pagination?: {
        page: number; 
        pageSize: number;
        pageCount: number;
        total: number;
      }
    };
  }
`

export const user = `
  interface User {
    id?: number;
    username?: string;
    email?: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
`

export const mediaFormat = `
  interface MediaFormat {
    name?: string;
    hash?: string;
    ext?: string;
    mime?: string;
    width?: number;
    height?: number;
    size?: number;
    path?: string;
    url?: string;
  }
`

export const media = `
  interface Media {
    id?: number;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: { thumbnail: MediaFormat; medium: MediaFormat; small: MediaFormat; };
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
`

export const strapiInterfaces = [payload, user, mediaFormat, media]

export const customFieldMap = {
  'plugin::color-picker.color': '`#${string}`',
  'plugin::ckeditor5.CKEditor': 'string',
} as const
