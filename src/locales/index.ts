import { createI18n } from 'vue-i18n'

import en from './en.json'
import de from './de.json'

const messages = {
  en,
  de
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
