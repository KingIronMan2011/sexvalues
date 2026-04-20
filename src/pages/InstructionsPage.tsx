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
        <button className="main-button" onClick={() => navigate('/quiz')}>
          {t('instructions.gotIt')}
        </button>
        <button className="main-button disagree" onClick={() => navigate('/')}>
          {t('instructions.neverMind')}
        </button>
      </div>
    </PageShell>
  )
}
