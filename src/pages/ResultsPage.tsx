import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { labels, valueColors, values } from '../data/resultsData'
import type { AxisLabel, Scores, ValueName } from '../types'

const getLabel = (val: number, ary: string[]): string =>
  ary[Math.min(Math.floor((val / 100) * ary.length), ary.length - 1)]

const mapImageName: Partial<Record<ValueName, string>> = {
  affective: 'affection',
  hedonist: 'hedonism',
}

export default function ResultsPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const axisNames = useMemo<Record<AxisLabel, string>>(
    () => ({
      attract: t('results.axisNames.attract'),
      drive: t('results.axisNames.drive'),
      dominant: t('results.axisNames.dominant'),
      deviance: t('results.axisNames.deviance'),
      affect: t('results.axisNames.affect'),
    }),
    [t],
  )

  const axisArrays = useMemo<Record<AxisLabel, string[]>>(
    () => ({
      attract: t('results.axisArrays.attract', { returnObjects: true }) as unknown as string[],
      drive: t('results.axisArrays.drive', { returnObjects: true }) as unknown as string[],
      dominant: t('results.axisArrays.dominant', { returnObjects: true }) as unknown as string[],
      deviance: t('results.axisArrays.deviance', { returnObjects: true }) as unknown as string[],
      affect: t('results.axisArrays.affect', { returnObjects: true }) as unknown as string[],
    }),
    [t],
  )

  const scores = useMemo<Scores>(() => {
    const params = new URLSearchParams(location.search)
    const attract = Number(params.get('attract') ?? 50)
    const drive = Number(params.get('drive') ?? 50)
    const dominant = Number(params.get('dominant') ?? 50)
    const deviance = Number(params.get('deviance') ?? 50)
    const affect = Number(params.get('affect') ?? 50)

    return {
      masculine: attract,
      feminine: Number((100 - attract).toFixed(1)),
      hypersexual: drive,
      hyposexual: Number((100 - drive).toFixed(1)),
      dominant,
      submissive: Number((100 - dominant).toFixed(1)),
      deviant: deviance,
      pure: Number((100 - deviance).toFixed(1)),
      affective: affect,
      hedonist: Number((100 - affect).toFixed(1)),
    }
  }, [location.search])

  const axisCards = useMemo(
    () =>
      labels.map((axis, index) => {
        const leftValue = values.left[index]
        const rightValue = values.right[index]
        const leftScore = scores[leftValue]
        const rightScore = scores[rightValue]

        return {
          axis,
          title: axisNames[axis],
          label: getLabel(leftScore, axisArrays[axis]),
          leftValue,
          rightValue,
          leftScore,
          rightScore,
          leftImage: mapImageName[leftValue] ?? leftValue,
          rightImage: mapImageName[rightValue] ?? rightValue,
        }
      }),
    [axisArrays, axisNames, scores],
  )

  return (
    <PageShell>
      <h2 className="heading mt-2 text-center">{t('results.title')}</h2>

      <div className="results-grid mt-5">
        {axisCards.map((card) => (
          <article key={card.axis} className="results-card">
            <div className="results-card-head">
              <img
                src={`/value_images/${card.leftImage}.svg`}
                className="results-value-icon"
                alt={card.leftValue}
              />
              <div className="results-card-title-wrap">
                <p className="results-axis-title">{card.title}</p>
                <p className="results-axis-label">{card.label}</p>
              </div>
              <img
                src={`/value_images/${card.rightImage}.svg`}
                className="results-value-icon"
                alt={card.rightValue}
              />
            </div>

            <div className="results-pair">
              <div className="results-score-row">
                <div className="results-score-text">
                  <span>{axisArrays[card.axis][axisArrays[card.axis].length - 1]}</span>
                  <strong>{card.leftScore}%</strong>
                </div>
                <div className="results-track">
                  <div
                    className="results-fill"
                    style={{ width: `${card.leftScore}%`, backgroundColor: valueColors[card.leftValue] }}
                  />
                </div>
              </div>

              <div className="results-score-row">
                <div className="results-score-text">
                  <span>{axisArrays[card.axis][0]}</span>
                  <strong>{card.rightScore}%</strong>
                </div>
                <div className="results-track">
                  <div
                    className="results-fill"
                    style={{ width: `${card.rightScore}%`, backgroundColor: valueColors[card.rightValue] }}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button className="main-button mt-5" onClick={() => navigate('/')}>
        {t('results.back')}
      </button>
    </PageShell>
  )
}
