import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import zh from './locals/zh/index.js'
import en from './locals/en/index.js'

i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      },
    },
    lng:'en',
    // backend: {
    //   loadPath: `./locales/{{lng}}.json`
    // },
    react: {
      useSuspense: true
    },
    fallbackLng: 'en',
   preload: ['en','zh'],
    // keySeparator: false,
    // interpolation: { escapeValue: false }
  })



export default i18next
