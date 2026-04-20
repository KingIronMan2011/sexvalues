import type { LegacyQuestion, Percentages, QuizAnswers } from '../types'

export const shuffleArray = <T>(array: T[]): T[] => {
  const copy = [...array]

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

export const calculatePercentages = (
  answers: QuizAnswers,
  questionsObject: Record<string, LegacyQuestion>,
): Percentages => {
  const max: Record<string, number> = {}
  const score: Record<string, number> = {}
  const pct: Percentages = {}

  for (const id of Object.keys(answers)) {
    const effects = questionsObject[id]?.effect ?? {}
    for (const effectName of Object.keys(effects)) {
      max[effectName] = 0
      score[effectName] = 0
    }
  }

  for (const id of Object.keys(answers)) {
    const answer = answers[id]
    const effects = questionsObject[id]?.effect ?? {}
    if (answer !== null) {
      for (const effectName of Object.keys(effects)) {
        const effectValue = effects[effectName as keyof typeof effects]
        if (typeof effectValue !== 'number') continue
        max[effectName] += Math.abs(effectValue)
        score[effectName] += answer * effectValue
      }
    }
  }

  for (const effectName of Object.keys(max)) {
    if (max[effectName] > 0) {
      pct[effectName] = (
        (100 * (max[effectName] + score[effectName])) /
        (2 * max[effectName])
      ).toFixed(1)
    } else {
      pct[effectName] = '50'
    }
  }

  return pct
}
