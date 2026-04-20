import { useNavigate } from 'react-router-dom'

import PageShell from '../components/PageShell'

export default function InstructionsPage() {
  const navigate = useNavigate()

  return (
    <PageShell>
      <h2 className="heading text-center">Instructions</h2>
      <p className="question-card text-3xl">
        You will be presented with a series of statements. For each one, click
        the button with your opinion on it.
      </p>
      <button className="main-button" onClick={() => navigate('/quiz')}>
        Got it!
      </button>
      <button
        className="main-button !bg-[#f44336] hover:!bg-[#d6271a]"
        onClick={() => navigate('/')}
      >
        Wait, nevermind!
      </button>
    </PageShell>
  )
}
