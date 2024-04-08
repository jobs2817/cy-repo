import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { transformJson } from './utils/transformJson'

const resources = transformJson()

console.log(resources, '<----resources')

export const initI18n = () => {

  i18n
    // 注入 react-i18next 实例
    .use(initReactI18next)
    // 初始化 i18next
    .init({
      resources,
      ns: ['member', 'order', 'c'],
      defaultNs: 'member',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true, // 如果使用React 18和Suspense特性，可开启此项
      }
    })
}

// initI18n()