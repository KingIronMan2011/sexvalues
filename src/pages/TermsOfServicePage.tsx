import { useTranslation } from 'react-i18next'

import PageShell from '../components/PageShell'

export default function TermsOfServicePage() {
  const { t } = useTranslation()

  return (
    <PageShell title={t('termsPage.title')}>
      <div className="section-card">
        <p>{t('termsPage.p1')}</p>
        <p className="mt-3">{t('termsPage.p2')}</p>
        <p className="mt-3">{t('termsPage.p3')}</p>
      </div>
    </PageShell>
  )
}
