import { TypeSchema } from './types'
import { pascalCase } from './utils'
import { readFile, readdir, stat, writeFile } from 'node:fs/promises'

export const generateRoutesEnum = async (path: string, outputPath: string) => {
  let enumType = `export enum StrapiRoute {\n`
  const routes = await readdir(path)

  for (const r of routes) {
    if (!(await stat(`${path}/${r}`)).isDirectory()) {
      continue
    }

    const file = await readFile(
      `${path}/${r}/content-types/${r}/schema.json`,
      'utf-8'
    )
    const schema = JSON.parse(file) as TypeSchema
    const endpoint =
      schema.kind === 'collectionType'
        ? schema.info.pluralName
        : schema.info.singularName

    enumType += `${pascalCase(r)} = '${endpoint}',\n`
  }

  enumType += '}\n'

  await writeFile(`${outputPath}/Routes.ts`, enumType)
}
