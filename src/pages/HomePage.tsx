import { ArrowRight } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { questionsLegacy } from '../data/questionsLegacy'

const values = [
  ['masculine', 'hypersexual', 'dominant', 'deviant', 'affection'],
  ['feminine', 'hyposexual', 'submissive', 'pure', 'hedonism'],
] as const

type BlurbEntry = {
  left: [string, string, string]
  axis: string
  right: [string, string, string]
}

const blurbs: BlurbEntry[] = [
  {
    left: [
      'MASCULINE',
      '#0099E5',
      'Those with higher Masculine scores have attraction towards masculinity or males.',
    ],
    axis: 'ATTRACTION',
    right: [
      'FEMININE',
      '#E50099',
      'Those with higher Feminine scores have attraction towards femininity or women.',
    ],
  },
  {
    left: [
      'HYPERSEXUAL',
      '#CC0000',
      'Those with higher Hypersexual scores tend to have extremely frequent or suddenly increased libido.',
    ],
    axis: 'SEX DRIVE',
    right: [
      'HYPOSEXUAL',
      '#00CCCC',
      'Those with higher Hyposexual scores are characterized by a lack or absence of sexual fantasies and desire for sexual activity.',
    ],
  },
  {
    left: [
      'DOMINANT',
      '#CC7400',
      'Those with higher Dominant scores tend to like having power and influence over others.',
    ],
    axis: 'DOMINANCE',
    right: [
      'SUBMISSIVE',
      '#009957',
      'Those with higher Submissive scores tend to like being dominated and ordered around.',
    ],
  },
  {
    left: [
      'DEVIANT',
      '#8300E5',
      'Those with higher Deviant scores tend to have many (extremer) fetishes and kinks.',
    ],
    axis: 'DEVIANCE',
    right: [
      'PURE',
      '#bdbdbd',
      'Those with higher Pure scores tend to prefer vanilla experiences.',
    ],
  },
  {
    left: [
      'AFFECTIVE',
      '#B20000',
      'Those with higher Affective scores tend to only be sexual around people they have romantic feelings for.',
    ],
    axis: 'AFFECTION',
    right: [
      'HEDONIST',
      '#00B2B2',
      'Those with higher Hedonist scores tend to be more open with their sexuality.',
    ],
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <PageShell title="SexValues">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="font-montserrat text-sm tracking-[0.18em] text-red-300">
          DISCLAIMER
        </h3>
        <p className="mt-2">
          This test is still a legacy version and will be improved over time.
          For now, it includes a demographic questionnaire and reworded
          questions. If you have any questions, contact details are below.
        </p>
      </div>
      <hr className="my-5 border-white/10" />

      <div className="center-panel">
        <div className="grid-axes">
          {['ATTRACTION', 'SEX DRIVE', 'DOMINANCE', 'DEVIANCE', 'AFFECTION'].map(
            (item) => (
              <div className="axis_name" key={item}>
                {item}
              </div>
            ),
          )}
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

      <button className="main-button mt-4" onClick={() => navigate('/instructions')}>
        <span className="inline-flex items-center gap-2">
          Start the test <ArrowRight size={22} />
        </span>
      </button>
      <hr className="my-5 border-white/10" />

      <h2 className="heading">What is SexValues?</h2>
      <p className="mt-3">
        SexValues is a quiz, running on a modded base of{' '}
        <a href="https://8values.github.io/">8values</a>, that attempts to map
        your sexuality. You will be presented with a statement, and then you
        will
        answer with your opinion on the statement, from <b>Strongly Agree</b> to{' '}
        <b>Strongly Disagree</b>, with each answer slightly affecting your
        scores. At the end of the quiz, your answers will be compared to the
        maximum possible for each value, thus giving you a percentage. Answer
        honestly!
        <br />
        <br />
        There are <b>{questionsLegacy.length}</b> questions in the test.
      </p>

      <h2 className="heading mt-7" id="anchor">
        What are the eight values?
      </h2>
      <p className="mt-3">
        There are five axes, and each has two opposing values assigned to it.
      </p>

      <div className="section-card mt-4">
        {blurbs.map((blurb) => (
          <div className="my-3 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:grid-cols-[1fr_auto_1fr]" key={blurb.axis}>
            <div className="text-center">
              <p
                className="m-0 text-[1.25rem] font-bold"
                style={{ color: blurb.left[1] }}
              >
                {blurb.left[0]}
              </p>
              <p>{blurb.left[2]}</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <p className="axis_name m-0">{blurb.axis}</p>
              <img className="w-14" src="/double_arrow.svg" alt="axis" />
            </div>
            <div className="text-center">
              <p
                className="m-0 text-[1.25rem] font-bold"
                style={{ color: blurb.right[1] }}
              >
                {blurb.right[0]}
              </p>
              <p>{blurb.right[2]}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-6 font-montserrat text-[1.05rem] tracking-wide">Contact</h3>
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
          <FaXTwitter /> Twitter
        </a>
      </p>
      <h3 className="mt-5 font-montserrat text-[1.05rem] tracking-wide">Privacy</h3>
      <p className="mt-2">
        This site can use Google Analytics if you accept analytics cookies. At
        the end of the test, you can also choose to fill out general
        demographic information.
      </p>
      <h3 className="mt-5 font-montserrat text-[1.05rem] tracking-wide">
        Licensing
      </h3>
      <p className="mt-2">
        SexValues is licensed under the MIT License, which permits use, copy,
        modification, merging, publishing, distribution, sublicensing, and/or
        selling copies of the software.
      </p>
    </PageShell>
  )
}
