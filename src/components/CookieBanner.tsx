import { useTranslation } from 'react-i18next'

type CookieBannerProps = {
  onAccept: () => void
  onDecline: () => void
}

export default function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  const { t } = useTranslation()

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <p>{t('cookie.message')}</p>
      <div className="cookie-banner-actions">
        <button className="small-button" onClick={onAccept}>
          {t('cookie.accept')}
        </button>
        <button className="small-button" onClick={onDecline}>
          {t('cookie.decline')}
        </button>
      </div>
    </div>
  )
}
