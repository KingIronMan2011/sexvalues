import { FaGithub } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

import { supportedLanguages } from '../i18n'

type HeaderProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const { i18n, t } = useTranslation()

  const currentLanguage = i18n.resolvedLanguage?.split('-')[0] ?? 'en'

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
        <label className="header-control">
          {t('header.language')}
          <select
            className="selection m-0"
            value={currentLanguage}
            onChange={(event) => void i18n.changeLanguage(event.target.value)}
          >
            {supportedLanguages.map((language) => (
              <option key={language} value={language}>
                {t(`header.languages.${language}`)}
              </option>
            ))}
          </select>
        </label>
        <button className="small-button" onClick={onToggleTheme}>
          {theme === 'dark'
            ? t('header.switchToLight')
            : t('header.switchToDark')}
        </button>
      </div>
    </header>
  )
}
