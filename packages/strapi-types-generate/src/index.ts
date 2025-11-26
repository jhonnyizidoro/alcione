import { strapiInterfaces } from './constants/interfaces'
import { createComponentInterface } from './create-component-interface'
import { createNamespace } from './create-namespace'
import { generateInterface } from './generate-interface'
import { generateRoutesEnum } from './generate-routes-enum'
import { prettify } from './prettify'
import { createDir, pascalCase } from './utils'
import { readdir, rm } from 'node:fs/promises'

const src = {
  dist: '../../frontend/@types',
  root: '../../backend',
  api: `../../backend/src/api`,
  components: `../../backend/src/components`,
}

const apiFolders = (await readdir(src.api)).filter((x) => !x.startsWith('.'))
const componentCategoryFolders = await readdir(src.components)

const componentFolders = (
  await Promise.all(
    componentCategoryFolders.map((f) =>
      readdir(`${src.components}/${f}`).then((c) => c.map((c) => `${f}/${c}`)),
    ),
  )
).flat()

const apiInterfaces = await Promise.all(
  apiFolders.map((f) =>
    generateInterface(`${src.api}/${f}/content-types/${f}/schema.json`, f),
  ),
)

const componentsInterfaces = await Promise.all(
  componentFolders.map((f) =>
    createComponentInterface(`${src.components}/${f}`, f),
  ),
)

await rm(src.dist, { recursive: true })
await createDir(src.dist)
await createNamespace(src.dist, apiInterfaces, 'Api')
await createNamespace(src.dist, componentsInterfaces, 'Components')
await createNamespace(src.dist, strapiInterfaces, 'Strapi')
await generateRoutesEnum(src.api, src.dist)
prettify(src.dist)
