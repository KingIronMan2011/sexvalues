import { useEffect, useRef, useState } from 'react'
import { FaChevronDown, FaGithub } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

import { supportedLanguages } from '../locales/Languages'

type HeaderProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const isSupportedLanguage = (
  language: string,
): language is (typeof supportedLanguages)[number] =>
  supportedLanguages.some((supportedLanguage) => supportedLanguage === language)

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const { i18n, t } = useTranslation()
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement | null>(null)

  const resolvedLanguage = i18n.resolvedLanguage?.split('-')[0] ?? 'en'
  const currentLanguage = isSupportedLanguage(resolvedLanguage)
    ? resolvedLanguage
    : 'en'

  useEffect(() => {
    const closeMenuOnOutsideClick = (event: MouseEvent) => {
      if (!languageMenuRef.current) return
      if (languageMenuRef.current.contains(event.target as Node)) return
      setLanguageMenuOpen(false)
    }

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLanguageMenuOpen(false)
    }

    document.addEventListener('mousedown', closeMenuOnOutsideClick)
    document.addEventListener('keydown', closeMenuOnEscape)

    return () => {
      document.removeEventListener('mousedown', closeMenuOnOutsideClick)
      document.removeEventListener('keydown', closeMenuOnEscape)
    }
  }, [])

  const changeLanguage = (language: (typeof supportedLanguages)[number]) => {
    setLanguageMenuOpen(false)
    void i18n.changeLanguage(language)
  }

  return (
    <header className="site-header">
      <a
        href="https://github.com/KingIronMan2011/sexvalues"
        target="_blank"
        rel="noreferrer"
        className="header-icon-button"
        aria-label={t('header.viewSource')}
      >
        <FaGithub size={20} />
      </a>

      <div className="site-header-controls">
        <div className="header-control-group">
          <span className="header-control-label">{t('header.language')}</span>
          <div className="language-dropdown" ref={languageMenuRef}>
            <button
              className="header-control-button"
              onClick={() => setLanguageMenuOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={languageMenuOpen}
            >
              <span>{t(`header.languages.${currentLanguage}`)}</span>
              <FaChevronDown
                size={14}
                className={
                  languageMenuOpen
                    ? 'language-chevron open'
                    : 'language-chevron'
                }
              />
            </button>

            {languageMenuOpen && (
              <ul className="language-dropdown-menu" role="listbox">
                {supportedLanguages.map((language) => (
                  <li key={language}>
                    <button
                      className={
                        language === currentLanguage
                          ? 'language-option active'
                          : 'language-option'
                      }
                      onClick={() => changeLanguage(language)}
                      role="option"
                      aria-selected={language === currentLanguage}
                    >
                      {t(`header.languages.${language}`)}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button className="header-control-button" onClick={onToggleTheme}>
          {theme === 'dark'
            ? t('header.switchToLight')
            : t('header.switchToDark')}
        </button>
      </div>
    </header>
  )
}
