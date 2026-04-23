import { ArrowRight } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { questionsLegacy } from '../data/questionsLegacy'

const values = [
  ['masculine', 'hypersexual', 'dominant', 'deviant', 'affection'],
  ['feminine', 'hyposexual', 'submissive', 'pure', 'hedonism'],
] as const

type AxisKey =
  | 'attraction'
  | 'sexDrive'
  | 'dominance'
  | 'deviance'
  | 'affection'

type BlurbEntry = {
  left: [string, string, string]
  axisKey: AxisKey
  right: [string, string, string]
}

const blurbs: BlurbEntry[] = [
  {
    left: ['home.blurb.masculine.title', '#0099E5', 'home.blurb.masculine.text'],
    axisKey: 'attraction',
    right: ['home.blurb.feminine.title', '#E50099', 'home.blurb.feminine.text'],
  },
  {
    left: ['home.blurb.hypersexual.title', '#CC0000', 'home.blurb.hypersexual.text'],
    axisKey: 'sexDrive',
    right: ['home.blurb.hyposexual.title', '#00CCCC', 'home.blurb.hyposexual.text'],
  },
  {
    left: ['home.blurb.dominant.title', '#CC7400', 'home.blurb.dominant.text'],
    axisKey: 'dominance',
    right: ['home.blurb.submissive.title', '#009957', 'home.blurb.submissive.text'],
  },
  {
    left: ['home.blurb.deviant.title', '#8300E5', 'home.blurb.deviant.text'],
    axisKey: 'deviance',
    right: ['home.blurb.pure.title', '#bdbdbd', 'home.blurb.pure.text'],
  },
  {
    left: ['home.blurb.affective.title', '#B20000', 'home.blurb.affective.text'],
    axisKey: 'affection',
    right: ['home.blurb.hedonist.title', '#00B2B2', 'home.blurb.hedonist.text'],
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const axisItems: AxisKey[] = [
    'attraction',
    'sexDrive',
    'dominance',
    'deviance',
    'affection',
  ]

  return (
    <PageShell title={t('app.name')}>
      {/* Disclaimer */}
      <div className="mx-auto max-w-3xl text-center">
        <h3
          style={{
            fontFamily: 'var(--font-roboto)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--rose)',
            margin: 0,
          }}
        >
          {t('home.disclaimerTitle')}
        </h3>
        <p className="mt-2">{t('home.disclaimerText')}</p>
      </div>

      <hr className="my-5" />

      {/* Icon grid */}
      <div className="center-panel">
        <div className="grid-axes">
          {axisItems.map((item) => (
            <div className="axis_name" key={item}>
              {t(`home.axes.${item}`)}
            </div>
          ))}
          {values[0].map((name) => (
            <a href="#anchor" key={name}>
              <img
                src={`/value_images/${name}.svg`}
                className="quadcolumn"
                alt={name}
              />
            </a>
          ))}
          {values[1].map((name) => (
            <a href="#anchor" key={name}>
              <img
                src={`/value_images/${name}.svg`}
                className="quadcolumn"
                alt={name}
              />
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.95rem 2.2rem',
            background: 'linear-gradient(135deg, var(--rose) 0%, #c7134a 100%)',
            border: 'none',
            borderRadius: 'var(--radius-btn)',
            color: '#fff',
            fontFamily: 'var(--font-roboto)',
            fontSize: '1.05rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 24px var(--rose-glow)',
            transition: 'transform 0.18s, box-shadow 0.18s',
          }}
          onMouseOver={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 10px 36px var(--rose-glow)'
          }}
          onMouseOut={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.transform = ''
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 4px 24px var(--rose-glow)'
          }}
          onClick={() => navigate('/instructions')}
        >
          {t('home.startTest')} <ArrowRight size={20} />
        </button>
      </div>

      <hr className="my-5" />

      {/* What is this */}
      <h2 className="heading">{t('home.whatIsTitle')}</h2>
      <p className="mt-3">
        {t('home.whatIsParagraph1')}{' '}
        <a href="https://8values.github.io/">8values</a>
        {t('home.whatIsParagraph2')} <b>{t('home.stronglyAgree')}</b>{' '}
        {t('home.whatIsParagraph3')} <b>{t('home.stronglyDisagree')}</b>,{' '}
        {t('home.whatIsParagraph4')}
        <br />
        <br />
        {t('home.questionCount', { count: questionsLegacy.length })}
      </p>

      {/* Values section */}
      <h2 className="heading mt-7" id="anchor">
        {t('home.valuesTitle')}
      </h2>
      <p className="mt-3">{t('home.valuesIntro')}</p>

      <div className="section-card mt-4">
        {blurbs.map((blurb) => (
          <div
            style={{
              margin: '0.75rem 0',
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: '1rem',
              borderRadius: '14px',
              border: '1px solid var(--line)',
              background: 'var(--panel-card)',
              padding: '1rem',
            }}
            key={blurb.axisKey}
            className="blurb-row"
          >
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: blurb.left[1], fontFamily: 'var(--font-montserrat)', fontStyle: 'italic' }}>
                {t(blurb.left[0])}
              </p>
              <p style={{ marginTop: '0.35rem' }}>{t(blurb.left[2])}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <p className="axis_name" style={{ margin: 0 }}>
                {t(`home.axes.${blurb.axisKey}`)}
              </p>
              <img
                style={{ width: '3rem', opacity: 0.7 }}
                src="/double_arrow.svg"
                alt="axis"
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: blurb.right[1], fontFamily: 'var(--font-montserrat)', fontStyle: 'italic' }}>
                {t(blurb.right[0])}
              </p>
              <p style={{ marginTop: '0.35rem' }}>{t(blurb.right[2])}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact & legal */}
      <h3
        style={{
          marginTop: '1.75rem',
          fontFamily: 'var(--font-montserrat)',
          fontSize: '1.1rem',
          fontWeight: 700,
          fontStyle: 'italic',
          color: 'var(--text-main)',
        }}
      >
        {t('home.contact')}
      </h3>
      <p className="mt-3" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
        <a
          href="mailto:support@kingironman.dev"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--line)',
            background: 'var(--control-bg)',
            padding: '0.4rem 0.95rem',
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          support@kingironman.dev
        </a>
        <a
          href="https://x.com/KingIronMan2011"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--line)',
            background: 'var(--control-bg)',
            padding: '0.4rem 0.95rem',
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          <FaXTwitter /> {t('home.twitter')}
        </a>
      </p>

      <h3
        style={{
          marginTop: '1.25rem',
          fontFamily: 'var(--font-montserrat)',
          fontSize: '1.1rem',
          fontWeight: 700,
          fontStyle: 'italic',
          color: 'var(--text-main)',
        }}
      >
        {t('home.privacy')}
      </h3>
      <p className="mt-2">{t('home.privacyText')}</p>

      <h3
        style={{
          marginTop: '1.25rem',
          fontFamily: 'var(--font-montserrat)',
          fontSize: '1.1rem',
          fontWeight: 700,
          fontStyle: 'italic',
          color: 'var(--text-main)',
        }}
      >
        {t('home.licensing')}
      </h3>
      <p className="mt-2">{t('home.licensingText')}</p>

      <style>{`
        @media (max-width: 600px) {
          .blurb-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PageShell>
  )
}
