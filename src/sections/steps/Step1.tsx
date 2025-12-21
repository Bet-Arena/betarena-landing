import { useState, useEffect } from 'react'
import './Step1.css'

interface Step1Props {
  isActive: boolean
  onNavigate: () => void
}

export function Step1({ isActive, onNavigate }: Step1Props) {
  const [buttonClicked, setButtonClicked] = useState(false)

  // Сбрасываем состояние при переходе на этот шаг
  useEffect(() => {
    if (isActive) {
      setButtonClicked(false)
    }
  }, [isActive])

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
              <h3 className="tournament-name">Champions League Final</h3>
              <p className="tournament-subtitle">Predict the winner & score</p>
              <div className="level-badges">
                <span className="badge badge-bronze">Bronze</span>
                <span className="badge badge-silver">Silver</span>
                <span className="badge badge-gold">Gold</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="tournament-stats">
            <div className="stat-box">
              <p className="stat-value">8,500$</p>
              <p className="stat-label">prize pool</p>
            </div>
            <div className="stat-box">
              <p className="stat-value">1,401</p>
              <p className="stat-label">participants</p>
            </div>
            <div className="stat-box">
              <p className="stat-value">2h 15min</p>
              <p className="stat-label">duration</p>
            </div>
          </div>
          <button
            className={`btn-primary btn-tournament ${buttonClicked ? 'no-pulse' : ''}`}
            onClick={handleClick}
          >
            <svg className="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66667 0.666667L3.33333 9.33333H8L7.33333 15.3333L12.6667 6.66667H8L8.66667 0.666667Z" fill="currentColor"/>
            </svg>
            Join Tournament
          </button>
          <p className="tournament-end-date">Ends: Jun 18, 2026</p>
        </div>
      </div>
      <div className="step-content">
        <div className="step-content-inner">
          <div className="step-badge">Шаг 1</div>
          <h2 className="step-heading">Войдите в турнир</h2>
          <p className="step-text">
            Выберите интересующий вас турнир из списка доступных. Каждый турнир имеет свой призовой фонд,
            количество участников и длительность. Выберите уровень участия, который вам подходит — от начального
            до премиум. Вступительный взнос списывается с вашего баланса один раз при вступлении.
          </p>
          <ul className="features-list">
            <li className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Разные уровни участия на любой бюджет</span>
            </li>
            <li className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Прозрачные правила и условия</span>
            </li>
            <li className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Мгновенный доступ после вступления</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

