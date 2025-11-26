import { writeFile } from 'node:fs/promises'

export const createNamespace = async (
  path: string,
  content: string[],
  nsName: string,
) => {
  let ns = `declare namespace ${nsName} { ${content.join('\n')} }`

  await writeFile(`${path}/${nsName}.d.ts`, ns)
}
