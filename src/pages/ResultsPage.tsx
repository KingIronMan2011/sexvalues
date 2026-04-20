import { useEffect, useMemo, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import {
  axisArrays,
  axisNames,
  labels,
  valueColors,
  values,
} from '../data/resultsData'
import type { AxisLabel, Scores, ValueName } from '../types'

const getLabel = (val: number, ary: string[]): string =>
  ary[Math.min(Math.floor((val / 100) * ary.length), ary.length - 1)]

export default function ResultsPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

      ctx.fillStyle = '#EEEEEE'
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

      ctx.fillStyle = '#222222'
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

      ctx.fillStyle = '#222222'
      ctx.font = '700 80px Montserrat'
      ctx.textAlign = 'left'
      ctx.fillText('SexValues', 20, 90)
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
      ctx.fillText('sexvalues.github.io', 780, 60)
      ctx.fillText('v0.3 (broken, still)', 780, 90)
      ctx.textAlign = 'center'

      y = 163
      values.left.forEach((name, idx) => {
        const labelKey = labels[idx] as AxisLabel
        ctx.font = '300 30px Montserrat'
        ctx.fillText(
          `${axisNames[labelKey]}: ${getLabel(scores[name], axisArrays[labelKey])}`,
          400,
          y,
        )
        y += 120
      })
    })
  }, [scores])

  return (
    <PageShell>
      <p className="text-center text-xl text-[#444444]">
        🥺 pls fund my{' '}
        <a href="https://ko-fi.com/sunkdatadiver" className="underline">
          caffeine habit
        </a>
      </p>
      <p className="text-center text-xl text-[#444444]">👉👈</p>
      <h1 className="title">Results</h1>
      <canvas
        ref={canvasRef}
        id="banner"
        width="800"
        height="750"
        style={{ fontFamily: 'Montserrat' }}
      />
      <button className="main-button" onClick={() => navigate('/')}>
        Back
      </button>
    </PageShell>
  )
}
