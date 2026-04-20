import { FaGithub } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

type HeaderProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.resolvedLanguage?.split('-')[0] ?? 'en'

  return (
    <header className="site-header">
      <a
        href="https://github.com/KingIronMan2011/sexvalues"
        target="_blank"
        rel="noreferrer"
        className="header-icon-button"
        aria-label="View source on GitHub"
      >
        <FaGithub size={20} />
      </a>

      <div className="site-header-controls">
        <label className="header-control">
          Language
          <select
            className="selection m-0"
            value={currentLanguage}
            onChange={(event) => void i18n.changeLanguage(event.target.value)}
          >
            <option value="en">English</option>
          </select>
        </label>
        <button className="small-button" onClick={onToggleTheme}>
          {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        </button>
      </div>
    </header>
  )
}
