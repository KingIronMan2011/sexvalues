type CookieBannerProps = {
  onAccept: () => void
  onDecline: () => void
}

export default function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <p>
        We use Google Analytics to improve the site. You can accept or decline
        analytics cookies.
      </p>
      <div className="cookie-banner-actions">
        <button className="small-button" onClick={onAccept}>
          Accept
        </button>
        <button className="small-button" onClick={onDecline}>
          Decline
        </button>
      </div>
    </div>
  )
}
