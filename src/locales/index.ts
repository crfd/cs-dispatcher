import { createI18n } from 'vue-i18n/index'

const messages = {
  en: {
    'app.title': 'Hello World',
    'app.description':
      'This is a simple example of a Vue.js application with Pinia.'
  },
  de: {
    'app.title': 'Hallo Welt',
    'app.description':
      'Dies ist ein einfaches Beispiel einer Vue.js Anwendung mit Pinia.'
  },
  fr: {
    'app.title': 'Bonjour le monde',
    'app.description':
      "Ceci est un exemple simple d'une application Vue.js avec Pinia."
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
