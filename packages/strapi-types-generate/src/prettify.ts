import { execSync } from 'child_process'

export const prettify = (path: string) => {
  execSync(
    `prettier --write "${path}/**/*.{js,jsx,ts,tsx,json,css,scss,html,vue}"`,
    { stdio: 'inherit' }
  )
}
