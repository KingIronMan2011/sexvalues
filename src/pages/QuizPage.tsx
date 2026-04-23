import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { getQuizLocalization } from '../data/questionsLocalized'
import { questionsLegacy } from '../data/questionsLegacy'
import { calculatePercentages, shuffleArray } from '../lib/quiz'
import type { LegacyQuestion, QuizAnswerValue, QuizAnswers } from '../types'

type ScoreButton = {
  label: string
  value: QuizAnswerValue
  className: string
}

export default function QuizPage() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

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
  const [activeGlossaryKey, setActiveGlossaryKey] = useState<string | null>(null)

  const localization = useMemo(
    () => getQuizLocalization(i18n.resolvedLanguage),
    [i18n.resolvedLanguage],
  )

  const scoreButtons = useMemo<ScoreButton[]>(
    () => [
      { label: t('quiz.answers.stronglyAgree'), value: 1, className: 'stronglyAgree' },
      { label: t('quiz.answers.agree'), value: 0.5, className: 'agree' },
      { label: t('quiz.answers.neutral'), value: 0, className: 'neutral' },
      { label: t('quiz.answers.disagree'), value: -0.5, className: 'disagree' },
      { label: t('quiz.answers.stronglyDisagree'), value: -1, className: 'stronglyDisagree' },
      { label: t('quiz.answers.unknown'), value: null, className: '' },
    ],
    [t],
  )

  const currentQuestion = questionsObject[questionsOrder[questionIndex]]
  const currentQuestionId = currentQuestion ? String(currentQuestion.id) : ''
  const questionTemplate =
    localization.questions[currentQuestionId] ?? currentQuestion?.question ?? ''
  const activeGlossary = activeGlossaryKey
    ? localization.glossary[activeGlossaryKey]
    : undefined

  const progressPct = Math.round((questionIndex / questionsOrder.length) * 100)

  const goResults = (allAnswers: QuizAnswers) => {
    const percentages = calculatePercentages(allAnswers, questionsObject)
    sessionStorage.setItem('answers', JSON.stringify(allAnswers))
    sessionStorage.setItem('percentages', JSON.stringify(percentages))
    const params = new URLSearchParams(percentages).toString()
    const shouldUseFeedback = import.meta.env.VITE_ENABLE_FEEDBACK_ROUTE !== 'false'
    const route = shouldUseFeedback ? '/feedback' : '/results'
    navigate(`${route}?${params}`)
  }

  const nextQuestion = (value: QuizAnswerValue) => {
    setActiveGlossaryKey(null)
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
    setActiveGlossaryKey(null)
    const prevIndex = questionIndex - 1
    const id = questionsOrder[prevIndex]
    const nextAnswers = { ...answers }
    delete nextAnswers[id]
    setAnswers(nextAnswers)
    setQuestionIndex(prevIndex)
  }

  const renderQuestionWithGlossary = (question: string) => {
    const parts = question.split(/(\{\{[^}]+\}\})/g)
    return parts.map((part, index) => {
      const match = part.match(/^\{\{([^}]+)\}\}$/)
      if (!match) return <span key={`text-${currentQuestionId}-${index}`}>{part}</span>
      const glossaryKey = match[1]
      const glossaryEntry = localization.glossary[glossaryKey]
      if (!glossaryEntry) {
        if (import.meta.env.DEV) console.warn(`Missing glossary entry: ${glossaryKey}`)
        return <span key={`unknown-${currentQuestionId}-${index}`}>{glossaryKey}</span>
      }
      return (
        <button
          key={`term-${glossaryKey}-${index}`}
          className="question-term"
          onClick={() =>
            setActiveGlossaryKey((prev) => (prev === glossaryKey ? null : glossaryKey))
          }
          type="button"
          aria-pressed={activeGlossaryKey === glossaryKey}
        >
          {glossaryEntry.label}
        </button>
      )
    })
  }

  if (!currentQuestion) {
    return (
      <PageShell>
        <p className="question-card">{t('quiz.unavailable', 'Question unavailable.')}</p>
      </PageShell>
    )
  }

  return (
    <PageShell>
      {/* Progress */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '0.45rem',
          }}
        >
          <h2 className="heading" style={{ fontSize: '1.1rem' }}>
            {t('quiz.progress', {
              current: questionIndex + 1,
              total: questionsOrder.length,
            })}
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-roboto)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--rose)',
              letterSpacing: '0.04em',
            }}
          >
            {progressPct}%
          </span>
        </div>
        <div
          style={{
            width: '100%',
            height: '5px',
            borderRadius: '999px',
            background: 'var(--results-track)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progressPct}%`,
              height: '100%',
              borderRadius: '999px',
              background: 'linear-gradient(90deg, var(--rose), var(--violet))',
              transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>
      </div>

      {/* Question */}
      <p className="question-card">{renderQuestionWithGlossary(questionTemplate)}</p>

      {activeGlossary ? (
        <div className="glossary-popup" role="note" aria-live="polite">
          <strong>{activeGlossary.label}</strong>
          <p>{activeGlossary.description}</p>
        </div>
      ) : null}

      {/* Answer buttons */}
      <div className="button-stack">
        {scoreButtons.map((button) => (
          <button
            key={button.label}
            className={`main-button ${button.className}`}
            onClick={() => nextQuestion(button.value)}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Back */}
      <div style={{ marginTop: '0.85rem', display: 'flex', justifyContent: 'center' }}>
        <button
          className={questionIndex === 0 ? 'small-button-off' : 'small-button'}
          onClick={prevQuestion}
          disabled={questionIndex === 0}
        >
          {t('quiz.back')}
        </button>
      </div>
    </PageShell>
  )
}
