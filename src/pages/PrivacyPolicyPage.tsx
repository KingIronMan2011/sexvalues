import { useTranslation } from 'react-i18next'

import PageShell from '../components/PageShell'

export default function PrivacyPolicyPage() {
  const { t } = useTranslation()

  return (
    <PageShell title={t('privacyPage.title')}>
      <div className="section-card">
        <p>
          {t('privacyPage.p1')}
        </p>
        <p className="mt-3">
          {t('privacyPage.p2')}
        </p>
        <p className="mt-3">
          {t('privacyPage.p3')}{' '}
          <a href="mailto:support@kingironman.dev">support@kingironman.dev</a>.
        </p>
      </div>
    </PageShell>
  )
}
