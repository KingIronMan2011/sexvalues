type CookieBannerProps = {
  onAccept: () => void
  onDecline: () => void
}

export default function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <div className="cookie-banner">
      <p style={{ fontSize: '0.9rem' }}>
        We use analytics to improve this site. Do you consent to anonymous usage data being collected?
      </p>
      <div className="cookie-banner-actions">
        <button
          onClick={onDecline}
          style={{
            background: 'transparent',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-pill)',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-roboto)',
            fontSize: '0.87rem',
            fontWeight: 500,
            padding: '0.45rem 1rem',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          style={{
            background: 'linear-gradient(135deg, var(--rose) 0%, #c7134a 100%)',
            border: 'none',
            borderRadius: 'var(--radius-pill)',
            color: '#fff',
            fontFamily: 'var(--font-roboto)',
            fontSize: '0.87rem',
            fontWeight: 600,
            padding: '0.45rem 1rem',
            cursor: 'pointer',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
