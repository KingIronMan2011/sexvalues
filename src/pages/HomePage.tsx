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

type BlurbEntry = {
  left: [string, string, string]
  axisKey: 'attraction' | 'sexDrive' | 'dominance' | 'deviance' | 'affection'
  right: [string, string, string]
}

const blurbs: BlurbEntry[] = [
  {
    left: ['home.blurb.masculine.title', '#0099E5', 'home.blurb.masculine.text'],
    axisKey: 'attraction',
    right: ['home.blurb.feminine.title', '#E50099', 'home.blurb.feminine.text'],
  },
  {
    left: [
      'home.blurb.hypersexual.title',
      '#CC0000',
      'home.blurb.hypersexual.text',
    ],
    axisKey: 'sexDrive',
    right: [
      'home.blurb.hyposexual.title',
      '#00CCCC',
      'home.blurb.hyposexual.text',
    ],
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

  const axisItems: Array<'attraction' | 'sexDrive' | 'dominance' | 'deviance' | 'affection'> = [
    'attraction',
    'sexDrive',
    'dominance',
    'deviance',
    'affection',
  ]

  return (
    <PageShell title={t('app.name')}>
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="font-montserrat text-sm tracking-[0.18em] text-red-300">
          {t('home.disclaimerTitle')}
        </h3>
        <p className="mt-2">{t('home.disclaimerText')}</p>
      </div>
      <hr className="my-5 border-white/10" />

      <div className="center-panel">
        <div className="grid-axes">
          {axisItems.map((item) => (
            <div className="axis_name" key={item}>
              {t(`home.axes.${item}`)}
            </div>
          ))}
          {values[0].map((name) => (
            <a href="#anchor" key={name}>
              <img src={`/value_images/${name}.svg`} className="quadcolumn" alt={name} />
            </a>
          ))}
          {values[1].map((name) => (
            <a href="#anchor" key={name}>
              <img src={`/value_images/${name}.svg`} className="quadcolumn" alt={name} />
            </a>
          ))}
        </div>
      </div>

      <button className="main-button mt-4" onClick={() => navigate('/instructions')}>
        <span className="inline-flex items-center gap-2">
          {t('home.startTest')} <ArrowRight size={22} />
        </span>
      </button>
      <hr className="my-5 border-white/10" />

      <h2 className="heading">{t('home.whatIsTitle')}</h2>
      <p className="mt-3">
        {t('home.whatIsParagraph1')}{' '}
        <a href="https://8values.github.io/">8values</a>
        {t('home.whatIsParagraph2')} <b>{t('home.stronglyAgree')}</b> {t('home.whatIsParagraph3')}{' '}
        <b>{t('home.stronglyDisagree')}</b>, {t('home.whatIsParagraph4')}
        <br />
        <br />
        {t('home.questionCount', { count: questionsLegacy.length })}
      </p>

      <h2 className="heading mt-7" id="anchor">
        {t('home.valuesTitle')}
      </h2>
      <p className="mt-3">{t('home.valuesIntro')}</p>

      <div className="section-card mt-4">
        {blurbs.map((blurb) => (
          <div
            className="my-3 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:grid-cols-[1fr_auto_1fr]"
            key={blurb.axisKey}
          >
            <div className="text-center">
              <p className="m-0 text-[1.25rem] font-bold" style={{ color: blurb.left[1] }}>
                {t(blurb.left[0])}
              </p>
              <p>{t(blurb.left[2])}</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <p className="axis_name m-0">{t(`home.axes.${blurb.axisKey}`)}</p>
              <img className="w-14" src="/double_arrow.svg" alt="axis" />
            </div>
            <div className="text-center">
              <p className="m-0 text-[1.25rem] font-bold" style={{ color: blurb.right[1] }}>
                {t(blurb.right[0])}
              </p>
              <p>{t(blurb.right[2])}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-6 font-montserrat text-[1.05rem] tracking-wide">{t('home.contact')}</h3>
      <p className="mt-3 flex flex-wrap items-center gap-4">
        <a
          href="mailto:support@kingironman.dev"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 no-underline"
        >
          support@kingironman.dev
        </a>
        <a
          href="https://x.com/KingIronMan2011"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 no-underline"
        >
          <FaXTwitter /> {t('home.twitter')}
        </a>
      </p>
      <h3 className="mt-5 font-montserrat text-[1.05rem] tracking-wide">{t('home.privacy')}</h3>
      <p className="mt-2">{t('home.privacyText')}</p>
      <h3 className="mt-5 font-montserrat text-[1.05rem] tracking-wide">{t('home.licensing')}</h3>
      <p className="mt-2">{t('home.licensingText')}</p>
    </PageShell>
  )
}
