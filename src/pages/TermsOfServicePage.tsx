import PageShell from '../components/PageShell'

export default function TermsOfServicePage() {
  return (
    <PageShell title="Terms of Service">
      <div className="section-card">
        <p>
          SexValues is provided for informational and entertainment purposes
          only. Results are not medical, legal, or psychological advice.
        </p>
        <p className="mt-3">
          By using this website, you agree not to misuse the service, attempt to
          disrupt it, or submit unlawful content.
        </p>
        <p className="mt-3">
          The software is provided under the MIT License, without warranty of
          any kind.
        </p>
      </div>
    </PageShell>
  )
}
