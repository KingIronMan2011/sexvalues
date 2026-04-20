import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { questionsFeedback } from '../data/questionsFeedback'
import type {
  FeedbackAnswerValue,
  FeedbackAnswers,
  FeedbackQuestion,
  Percentages,
  QuizAnswers,
  SmallSelectionAnswer,
} from '../types'

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

const setTakenCookie = () => {
  const date = new Date(Date.now() + 10 * 60 * 1000).toUTCString()
  document.cookie = `taken=true; expires=${date}; path=/; SameSite=Strict`
}

const parseStoredJson = <T,>(key: string, fallback: T): T => {
  try {
    const value = sessionStorage.getItem(key)
    if (!value) return fallback
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export default function FeedbackPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState<FeedbackAnswers>({})
  const [questionIndex, setQuestionIndex] = useState(0)
  const [textValue, setTextValue] = useState('')
  const [numberValue, setNumberValue] = useState('')
  const [selectValue, setSelectValue] = useState('')

  const testAnswers = useMemo(
    () => parseStoredJson<QuizAnswers>('answers', {}),
    [],
  )

  const testPercentages = useMemo(
    () => parseStoredJson<Percentages>('percentages', {}),
    [],
  )

  const taken = getCookie('taken') === 'true'
  const hasQuizAnswers = Object.keys(testAnswers).length > 0
  const current: FeedbackQuestion | undefined = questionsFeedback[questionIndex]

  const goToResults = () => {
    setTakenCookie()
    navigate(`/results${location.search}`)
  }

  const sendDataAndRefer = async (extra: FeedbackAnswers) => {
    try {
      await fetch('https://api.censusbot.app/v1/tests/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          test: 758913,
          version: '0.3',
          data: {
            answers: testAnswers,
            percents: testPercentages,
            extras: extra,
          },
        }),
      })
    } finally {
      goToResults()
    }
  }

  const pass = (serious: boolean) => {
    if (serious && hasQuizAnswers && !taken) {
      void sendDataAndRefer(answers)
      return
    }
    goToResults()
  }

  const nextQuestion = (answer: FeedbackAnswerValue) => {
    if (!current) return
    const nextAnswers: FeedbackAnswers = { ...answers, [current.id]: answer }
    setAnswers(nextAnswers)

    if (questionIndex + 1 < questionsFeedback.length) {
      setQuestionIndex((prev) => prev + 1)
      setTextValue('')
      setNumberValue('')
      setSelectValue('')
      return
    }

    if (hasQuizAnswers && !taken) {
      void sendDataAndRefer(nextAnswers)
    } else {
      goToResults()
    }
  }

  const prevQuestion = () => {
    if (questionIndex === 0 || !current) return
    const prevIndex = questionIndex - 1
    const nextAnswers = { ...answers }
    delete nextAnswers[current.id]
    setAnswers(nextAnswers)
    setQuestionIndex(prevIndex)
    setTextValue('')
    setNumberValue('')
    setSelectValue('')
  }

  const renderQuestionInput = () => {
    if (!current) return null

    if (current.questionType === 'smallSelection') {
      return current.answers.map((button: SmallSelectionAnswer) => (
        <button
          key={button.label}
          className="main-button"
          style={{ backgroundColor: button.color }}
          onClick={() => nextQuestion(button.effect)}
        >
          {button.label}
        </button>
      ))
    }

    if (current.questionType === 'bigSelection') {
      return (
        <>
          <select
            className="selection"
            value={selectValue}
            onChange={(event) => setSelectValue(event.target.value)}
          >
            <option value="" disabled>
              Click to choose
            </option>
            {Object.entries(current.answers).map(([value, name]) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
          <button
            className="main-button agree"
            onClick={() => nextQuestion(selectValue)}
            disabled={!selectValue}
          >
            Go!
          </button>
          <button className="main-button" onClick={() => nextQuestion(null)}>
            Refuse to Answer
          </button>
        </>
      )
    }

    if (current.questionType === 'customNumber') {
      const [min, max] = current.range
      const value = Number(numberValue)
      const valid = numberValue !== '' && value >= min && value <= max

      return (
        <>
          <input
            className="num_input"
            type="number"
            min={min}
            max={max}
            value={numberValue}
            onChange={(event) => setNumberValue(event.target.value)}
          />
          <button
            className="main-button agree"
            onClick={() => nextQuestion(numberValue)}
            disabled={!valid}
          >
            Next!
          </button>
          <button className="main-button" onClick={() => nextQuestion(null)}>
            Refuse to Answer
          </button>
        </>
      )
    }

    return (
      <>
        <input
          className="text_input"
          type="text"
          value={textValue}
          onChange={(event) => setTextValue(event.target.value)}
        />
        <button
          className="main-button agree"
          onClick={() => nextQuestion(textValue)}
          disabled={!textValue.length}
        >
          Next!
        </button>
        <button className="main-button" onClick={() => nextQuestion(null)}>
          Refuse / Don&apos;t know
        </button>
      </>
    )
  }

  if (!started) {
    return (
      <PageShell>
        <h2 className="heading text-center">All done!</h2>
        <p className="question-card">
          Did you complete this test in a serious (or at least unironic) manner?
        </p>
        <div className="button-stack">
          {hasQuizAnswers && (
            <button
              className="main-button stronglyAgree"
              onClick={() => setStarted(true)}
            >
              Yes, and I&apos;d like to help improve it (with 18 questions)
            </button>
          )}
          {hasQuizAnswers && (
            <button className="main-button agree" onClick={() => pass(true)}>
              Yes, but just get me to the results
            </button>
          )}
          <button className="main-button" onClick={() => pass(false)}>
            Nah, just get me to the results
          </button>
          {!hasQuizAnswers && (
            <button className="main-button agree" onClick={() => navigate('/quiz')}>
              Do the quiz!
            </button>
          )}
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <h2 className="heading text-center">
        Question {questionIndex + 1} of {questionsFeedback.length}
      </h2>
      <p className="question-card">{current?.question}</p>
      <div className="button-stack">{renderQuestionInput()}</div>
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
