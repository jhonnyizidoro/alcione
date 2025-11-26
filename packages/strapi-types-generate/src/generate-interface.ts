import { parseAttribute } from './parse-attribute'
import { Attribute, TypeSchema } from './types'
import { pascalCase } from './utils'
import { readFile } from 'node:fs/promises'

export const generateInterface = async (
  schemaPath: string,
  interfaceFullName: string
) => {
  const interfaceName = pascalCase(interfaceFullName)
  let tsInterface = `\ninterface ${interfaceName} {\n id?: number;\n`
  const schemaFile = await readFile(schemaPath, 'utf-8')
  const schema = JSON.parse(schemaFile) as TypeSchema
  const attributes = Object.entries(schema.attributes) as [string, Attribute][]

  for (let [attributeName, attributeDef] of attributes) {
    tsInterface += parseAttribute(attributeName, attributeDef)
  }

  if (schema.pluginOptions?.i18n?.localized) {
    tsInterface += `\nlocale: string;\nlocalizations?: { data: ${interfaceName}[] }`
  }

  tsInterface += `}\n`

  return tsInterface
}
