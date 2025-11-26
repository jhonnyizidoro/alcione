import { parseAttribute } from './parse-attribute'
import { ComponentSchema } from './types'
import { pascalCase } from './utils'
import { readFile } from 'node:fs/promises'

export const createComponentInterface = async (
  schemaPath: string,
  componentFullName: string
) => {
  const componentName = componentFullName.split('.')[0].replace('/', '.')
  const interfaceName = pascalCase(componentFullName.split(/[./]/)[1])
  let tsInterface = `\ninterface ${interfaceName} {\n__component?: '${componentName}'\nid?: number;\n`
  const schemaFile = await readFile(schemaPath, 'utf8')
  const schema = JSON.parse(schemaFile) as ComponentSchema

  const attributes = Object.entries(schema.attributes)
  for (const [attributeName, attributeDef] of attributes) {
    tsInterface += parseAttribute(attributeName, attributeDef)
  }

  tsInterface += '}\n'

  return tsInterface
}
