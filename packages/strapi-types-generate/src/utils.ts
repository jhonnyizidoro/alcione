import { Attribute } from './types'
import { mkdir, stat } from 'node:fs/promises'

export const pascalCase = (str = '') => {
  const words = str.match(/[a-z]+/gi) || []
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join('')
}

export const isNullable = (attribute: Attribute) => {
  return !('required' in attribute) || attribute.required === true
}

export const exists = async (path: string) => {
  try {
    await stat(path)
    return true
  } catch {
    return false
  }
}

export const createDir = async (path: string) => {
  if (await exists(path)) {
    return
  }

  await mkdir(path)
}
