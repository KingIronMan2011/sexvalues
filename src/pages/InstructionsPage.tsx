import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'

export default function InstructionsPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <PageShell>
      <h2 className="heading text-center">{t('instructions.title')}</h2>
      <p className="question-card">{t('instructions.text')}</p>
      <div className="button-stack">
        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0.9rem 1.5rem',
            background: 'linear-gradient(135deg, var(--rose) 0%, #c7134a 100%)',
            border: 'none',
            borderRadius: 'var(--radius-btn)',
            color: '#fff',
            fontFamily: 'var(--font-roboto)',
            fontSize: '0.97rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px var(--rose-glow)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseOver={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px var(--rose-glow)'
          }}
          onMouseOut={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.transform = ''
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px var(--rose-glow)'
          }}
          onClick={() => navigate('/quiz')}
        >
          {t('instructions.gotIt')}
        </button>
        <button className="main-button" onClick={() => navigate('/')}>
          {t('instructions.neverMind')}
        </button>
      </div>
    </PageShell>
  )
}
