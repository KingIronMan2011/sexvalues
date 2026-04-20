import { Navigate, Route, Routes } from 'react-router-dom'

import FeedbackPage from './pages/FeedbackPage'
import HomePage from './pages/HomePage'
import InstructionsPage from './pages/InstructionsPage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
