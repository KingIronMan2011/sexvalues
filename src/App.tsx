import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import CookieBanner from './components/CookieBanner'
import { initAnalytics } from './lib/analytics'
import FeedbackPage from './pages/FeedbackPage'
import HomePage from './pages/HomePage'
import InstructionsPage from './pages/InstructionsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'
import TermsOfServicePage from './pages/TermsOfServicePage'

type ConsentState = 'accepted' | 'declined' | null

export default function App() {
  const [consent, setConsent] = useState<ConsentState>(() => {
    const stored = localStorage.getItem('analytics-consent')
    if (stored === 'accepted' || stored === 'declined') return stored
    return null
  })

  useEffect(() => {
    if (consent === 'accepted') {
      initAnalytics()
    }
  }, [consent])

  const acceptConsent = () => {
    localStorage.setItem('analytics-consent', 'accepted')
    setConsent('accepted')
  }

  const declineConsent = () => {
    localStorage.setItem('analytics-consent', 'declined')
    setConsent('declined')
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {consent === null && (
        <CookieBanner onAccept={acceptConsent} onDecline={declineConsent} />
      )}
    </>
  )
}
