import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import it from './it'

export const supportedLanguages = ['de', 'en', 'it', 'es', 'fr'] as const

export const languages = {
  en: { translation: en },
  de: { translation: de },
  it: { translation: it },
  es: { translation: es },
  fr: { translation: fr },
} as const
