import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { labels, valueColors, values } from '../data/resultsData'
import type { AxisLabel, Scores, ValueName } from '../types'

const getLabel = (val: number, ary: string[]): string =>
  ary[Math.min(Math.floor((val / 100) * ary.length), ary.length - 1)]

export default function ResultsPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
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
      attract: t('results.axisArrays.attract', {
        returnObjects: true,
      }) as unknown as string[],
      drive: t('results.axisArrays.drive', {
        returnObjects: true,
      }) as unknown as string[],
      dominant: t('results.axisArrays.dominant', {
        returnObjects: true,
      }) as unknown as string[],
      deviance: t('results.axisArrays.deviance', {
        returnObjects: true,
      }) as unknown as string[],
      affect: t('results.axisArrays.affect', {
        returnObjects: true,
      }) as unknown as string[],
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const loadImage = (name: string): Promise<[string, HTMLImageElement]> =>
      new Promise((resolve) => {
        const img = new Image()
        img.src = `/value_images/${name}.svg`
        img.onload = () => resolve([name, img])
      })

    const mapName: Partial<Record<ValueName, string>> = {
      affective: 'affection',
      hedonist: 'hedonism',
    }

    void Promise.all(
      [...values.left, ...values.right].map((name) =>
        loadImage(mapName[name] ?? name),
      ),
    ).then((entries) => {
      const imageMap = Object.fromEntries(entries) as Record<
        string,
        HTMLImageElement
      >

      ctx.fillStyle = '#0f1631'
      ctx.fillRect(0, 0, 800, 750)

      let y = 160
      values.left.forEach((name) => {
        const key = mapName[name] ?? name
        ctx.drawImage(imageMap[key], 20, y, 100, 100)
        y += 120
      })

      y = 160
      values.right.forEach((name) => {
        const key = mapName[name] ?? name
        ctx.drawImage(imageMap[key], 680, y, 100, 100)
        y += 120
      })

      ctx.fillStyle = '#1e274b'
      y = 170
      values.left.forEach(() => {
        ctx.fillRect(120, y, 560, 80)
        y += 120
      })

      y = 174
      values.left.forEach((name) => {
        ctx.fillStyle = valueColors[name]
        ctx.fillRect(120, y, 5.6 * scores[name] - 2, 72)
        y += 120
      })

      y = 174
      values.right.forEach((name) => {
        ctx.fillStyle = valueColors[name]
        ctx.fillRect(682 - 5.6 * scores[name], y, 5.6 * scores[name] - 2, 72)
        y += 120
      })

      ctx.fillStyle = '#f3f6ff'
      ctx.font = '700 80px Montserrat'
      ctx.textAlign = 'left'
      ctx.fillText(t('app.name'), 20, 90)
      ctx.font = '400 50px Montserrat'

      y = 227.5
      ctx.textAlign = 'left'
      values.left.forEach((name) => {
        if (scores[name] > 27) ctx.fillText(`${scores[name]}%`, 130, y)
        y += 120
      })

      y = 227.5
      ctx.textAlign = 'right'
      values.right.forEach((name) => {
        if (scores[name] > 27) ctx.fillText(`${scores[name]}%`, 670, y)
        y += 120
      })

      ctx.font = '300 30px Montserrat'
      ctx.fillStyle = '#c7d5ff'
      ctx.fillText('kingironman.dev', 780, 60)
      ctx.fillText(t('app.legacy'), 780, 90)
      ctx.textAlign = 'center'

      y = 163
      values.left.forEach((name, idx) => {
        const labelKey = labels[idx] as AxisLabel
        ctx.fillStyle = '#e4ebff'
        ctx.font = '300 30px Montserrat'
        ctx.fillText(
          `${axisNames[labelKey]}: ${getLabel(scores[name], axisArrays[labelKey])}`,
          400,
          y,
        )
        y += 120
      })
    })
  }, [axisArrays, axisNames, scores, t])

  return (
    <PageShell>
      <p className="text-center text-base">
        {t('results.supportText')}{' '}
        <a
          href="https://github.com/KingIronMan2011/sexvalues"
          className="underline"
        >
          GitHub
        </a>
      </p>
      <h2 className="heading mt-2 text-center">{t('results.title')}</h2>
      <canvas
        ref={canvasRef}
        id="banner"
        width="800"
        height="750"
        style={{ fontFamily: 'Montserrat' }}
      />
      <button className="main-button mt-4" onClick={() => navigate('/')}>
        {t('results.back')}
      </button>
    </PageShell>
  )
}
