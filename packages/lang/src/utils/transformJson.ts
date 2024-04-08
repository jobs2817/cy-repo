import { merge } from 'lodash-es'
export function transformJson() {
  const resources = Object.create(null)
  const dir = import.meta.glob('../locales/*/*.ts', { eager: true })
  console.log(dir, 'dir')
  for (const [filePath, content] of Object.entries(dir)) {
    const jsonData = content.default
    const [_, lang, module] = filePath.match(/\.\.\/locales\/(.*)\/(.*)\.ts/)

    merge(resources, { [lang]: { [module]: jsonData } })
  }

  return resources
}
 