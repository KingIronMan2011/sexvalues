export const shuffleArray = (array) => {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export const calculatePercentages = (answers, questionsObject) => {
  const max = {}
  const score = {}
  const pct = {}

  for (const id of Object.keys(answers)) {
    for (const effectName of Object.keys(questionsObject[id].effect)) {
      max[effectName] = 0
      score[effectName] = 0
    }
  }

  for (const id of Object.keys(answers)) {
    if (answers[id] !== null) {
      for (const effectName of Object.keys(questionsObject[id].effect)) {
        max[effectName] += Math.abs(questionsObject[id].effect[effectName])
        score[effectName] +=
          answers[id] * questionsObject[id].effect[effectName]
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
