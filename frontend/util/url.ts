import { ReadonlyURLSearchParams } from 'next/navigation'

export const paramToUrl = (
  currentParams: ReadonlyURLSearchParams,
  pathname: string,
  prop: string,
  value: string,
) => {
  const newParams = new URLSearchParams()

  currentParams.forEach((value, key) => {
    newParams.append(key, value)
  })

  if (value) {
    newParams.set(prop, value)
  } else {
    newParams.delete(prop)
  }

  return `${pathname}?${newParams.toString()}`
}

const slugify = (string: string | null | undefined) =>
  encodeURIComponent(
    (string || '')
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/-/g, '_')
      .replace(/\s+/g, '-'),
  )

export const postUrl = (string: null | string | undefined, id = 0) =>
  `/postagem/${slugify(string)}-${id}`

export const getId = (string: null | string | undefined) => {
  const id = string?.split('-').pop()

  if (['number', 'string'].includes(typeof id) && !!id && !isNaN(Number(id))) {
    return id
  }

  throw new Error('Invalid ID')
}
