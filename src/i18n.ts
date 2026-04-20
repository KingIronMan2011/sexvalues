import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import de from './locales/de.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import it from './locales/it.json'

export const supportedLanguages = ['de', 'en', 'it', 'es', 'fr'] as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
      it: {
        translation: it,
      },
      es: {
        translation: es,
      },
      fr: {
        translation: fr,
      },
    },
    fallbackLng: 'en',
    supportedLngs: [...supportedLanguages],
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
