import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import it from './it'

export const supportedLanguages = ['en', 'de', 'es', 'fr', 'it'] as const

export const languages = {
  en: { translation: en },
  de: { translation: de },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
} as const
