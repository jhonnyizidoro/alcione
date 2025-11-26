import defaultConfig from '../prettier.config.mjs'

/** @type {import("prettier").Config} */
const config = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-css-order',
  ],
  importOrder: ['@/util', '@/components', '@/assets|@/icons', '\\./'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  ...defaultConfig,
}

export default config
