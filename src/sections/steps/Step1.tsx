import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import './Step1.css'

interface Step1Props {
  isActive: boolean
  onNavigate: () => void
}

export function Step1({ isActive, onNavigate }: Step1Props) {
  const [buttonClicked, setButtonClicked] = useState(false)
  const { messages } = useI18n()
  const step = messages.steps.step1

  const handleClick = () => {
    setButtonClicked(true)
    onNavigate()
  }

  return (
    <div
      className={`detailed-step step-slide ${isActive ? 'active' : ''}`}
      data-section-id="step-1"
      data-step="1"
    >
      <div className="step-visual">
        <div className="app-card tournament-card">
          <div className="tournament-card-header">
            <div className="tournament-logo">
            <div className="logo-placeholder">🏆</div>
          </div>
          <div className="tournament-info">
              <h3 className="tournament-name">{step.card.title}</h3>
              <p className="tournament-subtitle">{step.card.subtitle}</p>
              <div className="level-badges">
                <span className="badge badge-bronze">{step.card.levels[0]}</span>
                <span className="badge badge-silver">{step.card.levels[1]}</span>
                <span className="badge badge-gold">{step.card.levels[2]}</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="tournament-stats">
            <div className="stat-box">
              <p className="stat-value">8,500$</p>
              <p className="stat-label">{step.card.prizePoolLabel}</p>
            </div>
            <div className="stat-box">
              <p className="stat-value">1,401</p>
              <p className="stat-label">{step.card.participantsLabel}</p>
            </div>
            <div className="stat-box">
              <p className="stat-value">2h 15min</p>
              <p className="stat-label">{step.card.durationLabel}</p>
            </div>
          </div>
          <button
            className={`btn-primary btn-tournament ${buttonClicked ? 'no-pulse' : ''}`}
            onClick={handleClick}
          >
            <svg className="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66667 0.666667L3.33333 9.33333H8L7.33333 15.3333L12.6667 6.66667H8L8.66667 0.666667Z" fill="currentColor"/>
            </svg>
            {step.card.join}
          </button>
          <p className="tournament-end-date">{step.card.ends}</p>
        </div>
      </div>
      <div className="step-content">
        <div className="step-content-inner">
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
    </div>
  )
}
