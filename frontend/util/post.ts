import { parse } from 'marked'

export const parseBody = (body?: string | null) => parse(body || '') as string

export const getBodyText = (body?: string | null) =>
  parseBody(body).replace(/<[^>]*>?/gm, '')
