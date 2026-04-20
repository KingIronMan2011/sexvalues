import { ArrowRight } from 'lucide-react'
import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6'
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
      'Those with higher Pure scores tend to look for vanilla experience.',
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
      'Those with higher Hedonist scores tend to be more open about their sexuality.',
    ],
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <PageShell title="SexValues Legacy">
      <a
        href="https://github.com/sexvalues/sexvalues.github.io"
        className="absolute right-3 top-3 rounded-full bg-[#151513] p-3 text-white"
        aria-label="View source on Github"
      >
        <FaGithub size={28} />
      </a>

      <h3 className="text-center text-red-600">DISCLAIMER</h3>
      <p className="text-center text-[#444444]">
        This test is still a mess, hence why it&apos;s called legacy. It will be
        replaced. For now I just added demographic questionnaire, reworded some
        questions and kicked it off my server. If you have any more questions,
        my contacts are below.
      </p>
      <hr className="my-3 border-[#222222]" />

      <div className="center-panel">
        {['ATTRACTION', 'SEX DRIVE', 'DOMINANCE', 'DEVIANCE', 'AFFECTION'].map(
          (item) => (
            <div className="axis_name quadcolumn" key={item}>
              {item}
            </div>
          ),
        )}
        {values.flat().map((name) => (
          <a href="#anchor" key={name}>
            <img
              src={`/value_images/${name}.svg`}
              className="quadcolumn"
              alt={name}
            />
          </a>
        ))}
      </div>

      <button
        className="main-button mt-6 text-[36pt]"
        onClick={() => navigate('/instructions')}
      >
        <span className="inline-flex items-center gap-2">
          Click here to start <ArrowRight size={34} />
        </span>
      </button>
      <hr className="my-3 border-[#222222]" />

      <h2 className="heading">What is SexValues?</h2>
      <p>
        SexValues is a quiz, running on a modded base of{' '}
        <a href="https://8values.github.io/">8values</a>, that attempts to map
        your sexuality. You will be presented by a statement, and then you will
        answer with your opinion on the statement, from <b>Strongly Agree</b> to{' '}
        <b>Strongly Disagree</b>, with each answer slightly affecting your
        scores. At the end of the quiz, your answers will be compared to the
        maximum possible for each value, thus giving you a percentage. Answer
        honestly!
        <br />
        <br />
        There are <b>{questionsLegacy.length}</b> questions in the test.
      </p>

      <h2 className="heading mt-6" id="anchor">
        What are the eight values?
      </h2>
      <p>
        There are five axes - and each has two opposing values assigned to them.
      </p>

      <div className="mt-4 rounded-[25px] bg-[#eeeeee] p-3">
        {blurbs.map((blurb) => (
          <div className="my-2 flex items-start gap-2" key={blurb.axis}>
            <div className="w-[37%] text-center">
              <p
                className="m-0 text-[24pt] font-bold"
                style={{ color: blurb.left[1] }}
              >
                {blurb.left[0]}
              </p>
              <p>{blurb.left[2]}</p>
            </div>
            <div className="w-[21%] text-center">
              <p className="axis_name m-0">{blurb.axis}</p>
              <img
                className="mx-auto w-[60%]"
                src="/double_arrow.svg"
                alt="axis"
              />
            </div>
            <div className="w-[37%] text-center">
              <p
                className="m-0 text-[24pt] font-bold"
                style={{ color: blurb.right[1] }}
              >
                {blurb.right[0]}
              </p>
              <p>{blurb.right[2]}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-5 font-montserrat text-[18pt]">Contact</h3>
      <p className="flex flex-wrap items-center gap-4">
        <a
          href="mailto:censusbot3@gmail.com"
          className="inline-flex items-center gap-2"
        >
          censusbot3@gmail.com
        </a>
        <a
          href="https://discord.gg/vwqk2UZ"
          className="inline-flex items-center gap-2"
        >
          <FaDiscord /> Discord
        </a>
        <a
          href="https://twitter.com/sunkdatadiver"
          className="inline-flex items-center gap-2"
        >
          <FaXTwitter /> Twitter
        </a>
      </p>
      <h3 className="mt-4 font-montserrat text-[18pt]">Privacy</h3>
      <p>
        This site uses Google Analytics. As well at the end of the test, you
        will be given the option to fill out general demographic information
        about yourself.
      </p>
      <h3 className="mt-4 font-montserrat text-[18pt]">Licencing</h3>
      <p>
        SexValues is licensed under the MIT License, which permits without
        restriction the rights to use, copy, modify, merge, publish, distribute,
        sublicense, and/or sell copies of the software.
      </p>
    </PageShell>
  )
}
