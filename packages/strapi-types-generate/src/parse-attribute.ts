import { customFieldMap } from './constants/interfaces'
import { Attribute } from './types'
import { isNullable, pascalCase } from './utils'

export const parseAttribute = (
  attributeName: string,
  attributeDef: Attribute,
) => {
  let key = `${attributeName}?:`
  let tsPropertyType = ''
  let tsProperty = ''

  if (isNullable(attributeDef)) {
    key = `${key} null | `
  }

  if (attributeDef.type === 'relation') {
    tsPropertyType = pascalCase(attributeDef.target.split(/[:.]/g).pop())
    const isArray = attributeDef.relation.endsWith('ToMany')
    const bracketsIfArray = isArray ? '[]' : ''
    tsProperty = `${key} Api.${tsPropertyType}${bracketsIfArray};\n`
  }
  // -------------------------------------------------
  // Component
  // -------------------------------------------------
  else if (attributeDef.type === 'component') {
    tsPropertyType = pascalCase(attributeDef.component.split('.').pop())
    const bracketsIfArray = attributeDef.repeatable ? '[]' : ''
    tsProperty = `${key} Components.${tsPropertyType}${bracketsIfArray};\n`
  }
  // -------------------------------------------------
  // Dynamic zone
  // -------------------------------------------------
  else if (attributeDef.type === 'dynamiczone') {
    tsPropertyType = attributeDef.components
      .map((c) => 'Components.' + pascalCase(c.split('.').pop()))
      .join(' | ')
    tsProperty = `${key} (${tsPropertyType})[];\n`
  }
  // -------------------------------------------------
  // Media
  // -------------------------------------------------
  else if (attributeDef.type === 'media') {
    tsPropertyType = 'Media'
    tsProperty = `${key} Strapi.${tsPropertyType}${
      attributeDef.multiple ? '[]' : ''
    };\n`
  }
  // -------------------------------------------------
  // Enumeration
  // -------------------------------------------------
  else if (attributeDef.type === 'enumeration') {
    const enumOptions = attributeDef.enum.map((v) => `'${v}'`).join(' | ')
    tsProperty = `${key} ${enumOptions};\n`
  }
  // -------------------------------------------------
  // Text, RichText, Email, UID
  // -------------------------------------------------
  else if (
    attributeDef.type === 'string' ||
    attributeDef.type === 'text' ||
    attributeDef.type === 'richtext' ||
    attributeDef.type === 'email' ||
    attributeDef.type === 'uid' ||
    attributeDef.type === 'blocks'
  ) {
    tsPropertyType = 'string'
    tsProperty = `${key} ${tsPropertyType};\n`
  }
  // -------------------------------------------------
  // Json
  // -------------------------------------------------
  else if (attributeDef.type === 'json') {
    tsPropertyType = 'any'
    tsProperty = `${key} ${tsPropertyType};\n`
  }
  // -------------------------------------------------
  // Password
  // -------------------------------------------------
  else if (attributeDef.type === 'password') {
    tsProperty = ''
  }
  // -------------------------------------------------
  // Number
  // -------------------------------------------------
  else if (
    attributeDef.type === 'integer' ||
    attributeDef.type === 'biginteger' ||
    attributeDef.type === 'decimal' ||
    attributeDef.type === 'float'
  ) {
    tsPropertyType = 'number'
    tsProperty = `${key} ${tsPropertyType};\n`
  }
  // -------------------------------------------------
  // Date
  // -------------------------------------------------
  else if (
    attributeDef.type === 'date' ||
    attributeDef.type === 'datetime' ||
    attributeDef.type === 'time'
  ) {
    tsPropertyType = 'string'
    tsProperty = `${key} ${tsPropertyType};\n`
  }
  // -------------------------------------------------
  // Boolean
  // -------------------------------------------------
  else if (attributeDef.type === 'boolean') {
    tsPropertyType = 'boolean'
    tsProperty = `${key} ${tsPropertyType};\n`
  }
  // -------------------------------------------------
  // Custom field
  // -------------------------------------------------
  else if (attributeDef.type === 'customField') {
    const custom =
      customFieldMap[attributeDef.customField as keyof typeof customFieldMap]
    tsPropertyType = custom || 'unknown'
    tsProperty = `${key} ${tsPropertyType};\n`
  }
  // ----------- --------------------------------------
  // Others
  // -------------------------------------------------
  else {
    tsPropertyType = 'any'
    tsProperty = `${key} ${tsPropertyType};\n`
  }

  return tsProperty
}
