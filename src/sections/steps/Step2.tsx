import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import './Step2.css'

interface Step2Props {
  isActive: boolean
  onBetConfirm: () => void
}

export function Step2({ isActive, onBetConfirm }: Step2Props) {
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null)
  const [selectedCoefficient, setSelectedCoefficient] = useState<string | null>(null)
  const [confirmClicked, setConfirmClicked] = useState(false)
  const { messages } = useI18n()
  const step = messages.steps.step2

  const handleOutcomeClick = (outcome: string, coefficient: string) => {
    if (selectedOutcome === outcome) {
      // Если кликнули на уже выбранную кнопку, убираем выбор
      setSelectedOutcome(null)
      setSelectedCoefficient(null)
    } else {
      // Выбираем новую ставку
      setSelectedOutcome(outcome)
      setSelectedCoefficient(coefficient)
    }
  }

  const handleConfirmClick = () => {
    setConfirmClicked(true)
    onBetConfirm()
  }

  return (
    <div
        className={`detailed-step step-slide reverse ${isActive ? 'active' : ''}`}
      data-section-id="step-2"
      data-step="2"
    >
      <div className="step-visual">
        <div className="app-card match-card">
          <div className="match-league">{step.card.league}</div>
          <div className="match-live-badge">
            <span className="live-dot"></span>
            <span>{step.card.live}</span>
          </div>
          <div className="match-time-info">
            <div className="match-date">{step.card.date}</div>
            <div className="match-time">17:30</div>
          </div>
          <div className="match-teams">
            <div className="team">
              <div className="team-logo">⚽</div>
              <div className="team-name">{step.card.teams[0]}</div>
            </div>
            <div className="team">
              <div className="team-logo">⚽</div>
              <div className="team-name">{step.card.teams[1]}</div>
            </div>
          </div>
          <div className="match-outcomes">
            <button
              className={`outcome-btn ${selectedOutcome === 'win1' ? 'active' : ''} ${selectedOutcome && selectedOutcome !== 'win1' ? 'no-pulse' : ''}`}
              onClick={() => handleOutcomeClick('win1', '2.05')}
            >
              2.05
            </button>
            <button
              className={`outcome-btn ${selectedOutcome === 'draw' ? 'active' : ''} ${selectedOutcome && selectedOutcome !== 'draw' ? 'no-pulse' : ''}`}
              onClick={() => handleOutcomeClick('draw', '4.30')}
            >
              4.30
            </button>
            <button
              className={`outcome-btn ${selectedOutcome === 'win2' ? 'active' : ''} ${selectedOutcome && selectedOutcome !== 'win2' ? 'no-pulse' : ''}`}
              onClick={() => handleOutcomeClick('win2', '3.15')}
            >
              3.15
            </button>
          </div>
          {selectedOutcome && selectedCoefficient && (
            <div className="bet-confirm-container">
              <button
                className={`btn-primary btn-confirm-bet ${confirmClicked ? 'no-pulse' : ''}`}
                onClick={handleConfirmClick}
              >
                {step.card.confirm} ({selectedCoefficient})
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="step-content">
        <div className="step-badge">{step.badge}</div>
        <h2 className="step-heading">{step.heading}</h2>
        <p className="step-text">{step.text}</p>
        <ul className="features-list">
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>{step.features[0]}</span>
          </li>
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>{step.features[1]}</span>
          </li>
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>{step.features[2]}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
