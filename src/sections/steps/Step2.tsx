import { useState, useEffect } from 'react'
import './Step2.css'

interface Step2Props {
  isActive: boolean
  onBetConfirm: () => void
}

export function Step2({ isActive, onBetConfirm }: Step2Props) {
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null)
  const [selectedCoefficient, setSelectedCoefficient] = useState<string | null>(null)
  const [confirmClicked, setConfirmClicked] = useState(false)

  // Сбрасываем состояние при переходе на другой шаг
  useEffect(() => {
    if (!isActive) {
      setSelectedOutcome(null)
      setSelectedCoefficient(null)
      setConfirmClicked(false)
    }
  }, [isActive])

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
          <div className="match-league">Premier League</div>
          <div className="match-live-badge">
            <span className="live-dot"></span>
            <span>Live</span>
          </div>
          <div className="match-time-info">
            <div className="match-date">Today</div>
            <div className="match-time">17:30</div>
          </div>
          <div className="match-teams">
            <div className="team">
              <div className="team-logo">⚽</div>
              <div className="team-name">Man. City</div>
            </div>
            <div className="team">
              <div className="team-logo">⚽</div>
              <div className="team-name">FC Chelsea</div>
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
                Сделать ставку ({selectedCoefficient})
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="step-content">
        <div className="step-badge">Шаг 2</div>
        <h2 className="step-heading">Делайте ставки</h2>
        <p className="step-text">
          После вступления в турнир вы получаете доступ ко всем матчам. Выберите матч, изучите доступные рынки
          (исход, счет, тотал голов и другие) и выберите исход, в который вы верите. Добавьте его в купон.
          Вы можете делать одиночные ставки или собирать экспрессы из нескольких исходов.
        </p>
        <ul className="features-list">
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Множество рынков на каждый матч</span>
          </li>
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Одиночные ставки и экспрессы</span>
          </li>
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Простое добавление в купон одним кликом</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

