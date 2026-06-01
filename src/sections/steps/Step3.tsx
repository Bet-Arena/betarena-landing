import { useState, useEffect } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { appEnv } from '../../config/env'
import './Step3.css'

interface Step3Props {
  isActive: boolean
}

const getInitials = (name: string): string => {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

const formatPoints = (points: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(points)
}

const getMedalIcon = (rank: number) => {
  if (rank > 3) return null

  const medalColor = rank === 1 ? '#fbbf24' : rank === 2 ? '#e5e7eb' : '#cd7f32'

  return (
    <div className="medal-icon">
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: medalColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 700,
          color: rank === 2 ? '#1f2937' : '#fff',
          boxShadow: `0 0 12px ${medalColor}66`,
        }}
      >
        {rank}
      </div>
    </div>
  )
}

export function Step3({ isActive }: Step3Props) {
  const [localShowNewUser, setLocalShowNewUser] = useState(false)
  const { messages } = useI18n()

  useEffect(() => {
    if (isActive) {
      const timer = window.setTimeout(() => {
        setLocalShowNewUser(true)
      }, 800)

      return () => window.clearTimeout(timer)
    }
  }, [isActive])

  const leaderboardEntries = [
    { rank: 1, name: messages.steps.step3.players[0], score: 1250.00, correct: 45, total: 50 },
    { rank: 2, name: messages.steps.step3.players[1], score: 1180.00, correct: 42, total: 50 },
    { rank: 3, name: messages.steps.step3.players[2], score: 1120.00, correct: 40, total: 50 },
    { rank: 42, name: messages.steps.step3.you, score: 850.00, correct: 30, total: 50 },
  ]

  return (
    <div
      className={`detailed-step step-slide ${isActive ? 'active' : ''}`}
      data-section-id="step-3"
      data-step="3"
    >
      <div className="step-visual">
        <div className="app-card leaderboard-card">
          <div className="leaderboard-header">
            <h3 className="leaderboard-title">{messages.steps.leaderboardTitle}</h3>
          </div>
          <div className="leaderboard-stats">
            {messages.steps.totalParticipants}
          </div>
          <div className="leaderboard-list">
            {leaderboardEntries.slice(0, 3).map((entry) => (
              <div key={entry.rank} className="leaderboard-item top">
                <div className="avatar">
                  <div className="avatar-fallback">{getInitials(entry.name)}</div>
                </div>
                <div className="user-info">
                  <p className="user-name">{entry.name}</p>
                  <p className="user-score">
                    {formatPoints(entry.score)} {messages.steps.pointsLabel}
                    <span className="user-score-meta"> • {entry.correct} / {entry.total} {messages.steps.correctLabel}</span>
                  </p>
                </div>
                {getMedalIcon(entry.rank)}
              </div>
            ))}
            <div className={`leaderboard-item new-user ${localShowNewUser ? 'visible' : ''}`}>
              <div className="avatar">
                <div className="avatar-fallback">{getInitials(leaderboardEntries[3].name)}</div>
              </div>
              <div className="user-info">
                <p className="user-name">{leaderboardEntries[3].name}</p>
                <p className="user-score">
                  {formatPoints(leaderboardEntries[3].score)} {messages.steps.pointsLabel}
                  <span className="user-score-meta"> • {leaderboardEntries[3].correct} / {leaderboardEntries[3].total} {messages.steps.correctLabel}</span>
                </p>
              </div>
              <div className="new-user-badge">{messages.steps.newParticipant}</div>
            </div>
          </div>
        </div>
        <a
          className="btn-primary step3-mobile-btn"
          href={appEnv.registerUrl ?? undefined}
          onClick={(event) => {
            if (!appEnv.registerUrl) {
              event.preventDefault()
            }
          }}
        >
          {messages.steps.whyBetarena}
        </a>
      </div>
      <div className="step-content">
        <div className="step-badge">{messages.steps.step3.badge}</div>
        <h2 className="step-heading">{messages.steps.step3.heading}</h2>
        <p className="step-text">{messages.steps.step3.text}</p>
        <ul className="features-list">
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>{messages.steps.step3.features[0]}</span>
          </li>
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>{messages.steps.step3.features[1]}</span>
          </li>
          <li className="feature-item">
            <span className="feature-icon">✓</span>
            <span>{messages.steps.step3.features[2]}</span>
          </li>
        </ul>
        <a
          className="btn-primary step3-desktop-btn"
          href={appEnv.registerUrl ?? undefined}
          onClick={(event) => {
            if (!appEnv.registerUrl) {
              event.preventDefault()
            }
          }}
        >
          {messages.steps.whyBetarena}
        </a>
      </div>
    </div>
  )
}
