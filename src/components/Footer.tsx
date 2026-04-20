import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {t('app.name')}
      </p>
      <div className="site-footer-links">
        <Link to="/privacy">{t('footer.privacy')}</Link>
        <Link to="/terms">{t('footer.terms')}</Link>
      </div>
    </footer>
  )
}
