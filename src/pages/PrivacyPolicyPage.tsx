import PageShell from '../components/PageShell'

export default function PrivacyPolicyPage() {
  return (
    <PageShell title="Privacy Policy">
      <div className="section-card">
        <p>
          We only collect the minimum data needed to run and improve SexValues.
          If you accept analytics cookies, Google Analytics may collect
          anonymized usage data. If you decline, analytics tracking is disabled.
        </p>
        <p className="mt-3">
          Optional questionnaire answers submitted after the quiz are used to
          improve the test. Please avoid sharing sensitive personal information
          in free-text fields.
        </p>
        <p className="mt-3">
          For privacy-related requests, contact{' '}
          <a href="mailto:support@kingironman.dev">support@kingironman.dev</a>.
        </p>
      </div>
    </PageShell>
  )
}
