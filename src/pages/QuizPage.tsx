import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { questionsLegacy } from '../data/questionsLegacy'
import { calculatePercentages, shuffleArray } from '../lib/quiz'
import type { LegacyQuestion, QuizAnswerValue, QuizAnswers } from '../types'

type ScoreButton = {
  label: string
  value: QuizAnswerValue
  className: string
}

const scoreButtons: ScoreButton[] = [
  { label: 'Strongly Agree', value: 1, className: 'stronglyAgree' },
  { label: 'Agree', value: 0.5, className: 'agree' },
  { label: 'Neutral', value: 0, className: 'neutral' },
  { label: 'Disagree', value: -0.5, className: 'disagree' },
  { label: 'Strongly Disagree', value: -1, className: 'stronglyDisagree' },
  { label: "Don't Know/Understand", value: null, className: '' },
]

export default function QuizPage() {
  const navigate = useNavigate()
  const questionsObject = useMemo<Record<string, LegacyQuestion>>(
    () =>
      questionsLegacy.reduce<Record<string, LegacyQuestion>>(
        (acc, question) => {
          acc[String(question.id)] = question
          return acc
        },
        {},
      ),
    [],
  )
  const [questionsOrder] = useState<string[]>(() =>
    shuffleArray(Object.keys(questionsObject)),
  )
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [questionIndex, setQuestionIndex] = useState(0)

  const currentQuestion = questionsObject[questionsOrder[questionIndex]]

  const goResults = (allAnswers: QuizAnswers) => {
    const percentages = calculatePercentages(allAnswers, questionsObject)
    sessionStorage.setItem('answers', JSON.stringify(allAnswers))
    sessionStorage.setItem('percentages', JSON.stringify(percentages))

    const params = new URLSearchParams(percentages).toString()
    const feedbackHosts = [
      'sexvalues.github.io',
      import.meta.env.VITE_FEEDBACK_HOST,
    ].filter(Boolean)
    const shouldUseFeedback =
      import.meta.env.VITE_ENABLE_FEEDBACK_ROUTE === 'true' ||
      feedbackHosts.includes(window.location.hostname)
    const route = shouldUseFeedback ? '/feedback' : '/results'
    navigate(`${route}?${params}`)
  }

  const nextQuestion = (value: QuizAnswerValue) => {
    const id = questionsOrder[questionIndex]
    const nextAnswers: QuizAnswers = { ...answers, [id]: value }
    setAnswers(nextAnswers)

    if (questionIndex + 1 < questionsOrder.length) {
      setQuestionIndex((prev) => prev + 1)
      return
    }

    goResults(nextAnswers)
  }

  const prevQuestion = () => {
    if (questionIndex === 0) return

    const prevIndex = questionIndex - 1
    const id = questionsOrder[prevIndex]
    const nextAnswers = { ...answers }
    delete nextAnswers[id]
    setAnswers(nextAnswers)
    setQuestionIndex(prevIndex)
  }

  return (
    <PageShell>
      <h2 className="heading text-center">
        Question {questionIndex + 1} of {questionsOrder.length}
      </h2>
      <p className="question-card">{currentQuestion?.question}</p>

      {scoreButtons.map((button) => (
        <button
          key={button.label}
          className={`main-button ${button.className}`}
          onClick={() => nextQuestion(button.value)}
        >
          {button.label}
        </button>
      ))}

      <button
        className={questionIndex === 0 ? 'small-button-off' : 'small-button'}
        onClick={prevQuestion}
        disabled={questionIndex === 0}
      >
        Back
      </button>
    </PageShell>
  )
}
