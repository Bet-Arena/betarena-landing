import { useState } from 'react'
import { GlowEffect } from '../components/ui/GlowEffect'
import { useI18n } from '../i18n/useI18n'
import { appEnv } from '../config/env'
import './Hero.css'

interface HeroProps {
  onNavigate: (sectionId: string, showOnboarding?: boolean) => void
}

const FLAGS = ['🇺🇸', '🇨🇦', '🇲🇽', '🇧🇷', '🇦🇷', '🇩🇪', '🇫🇷', '🇪🇸', '🇮🇹', '🇳🇱', '🇵🇹', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🇧🇪', '🇭🇷', '🇲🇦', '🇯🇵', '🇰🇷', '🇦🇺']

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function Hero({ onNavigate }: HeroProps) {
  const [buttonClicked, setButtonClicked] = useState(false)
  const { messages } = useI18n()

  const handleLearnMore = () => {
    setButtonClicked(true)
    onNavigate('why-us')
  }

  const shuffledFlags = shuffleArray(FLAGS)

  return (
    <section className="hero">
      <GlowEffect
        left="calc(50% + 200px)"
        top={100}
        width={500}
        height={600}
        rotation={30}
        opacity={0.4}
        blur={100}
        mobileLeft="calc(50% + 20px)"
        mobileTop={40}
        mobileScale={0.72}
        mobileOpacity={0.34}
        mobileBlur={76}
        zIndex={999}
      />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">{messages.hero.badge}</span>
          </div>
          <h1 className="hero-title">
            {messages.hero.title}
            <br />
            <span className="gradient-text">{messages.hero.highlightedTitle}</span>
          </h1>
          <p className="hero-description">
            {messages.hero.description}
          </p>

          <div className="hero-visuals">
            <div className="hero-trophy">🏆</div>
            <div className="hero-flags">
              {shuffledFlags.map((flag, i) => (
                <span key={`${flag}-${i}`} className="hero-flag">{flag}</span>
              ))}
            </div>
            <div className="hero-bracket">
              <div className="bracket-stage">
                <span className="bracket-label">Группы</span>
                <span className="bracket-arrow">→</span>
              </div>
              <div className="bracket-stage">
                <span className="bracket-label">1/8</span>
                <span className="bracket-arrow">→</span>
              </div>
              <div className="bracket-stage">
                <span className="bracket-label">1/4</span>
                <span className="bracket-arrow">→</span>
              </div>
              <div className="bracket-stage">
                <span className="bracket-label">1/2</span>
                <span className="bracket-arrow">→</span>
              </div>
              <div className="bracket-stage final">
                <span className="bracket-label">🏆 Финал</span>
              </div>
            </div>
          </div>

          <div className="hero-cta">
            <a
              className={`btn-primary btn-large ${buttonClicked ? 'no-pulse' : ''}`}
              href={appEnv.registerUrl ?? undefined}
              aria-disabled={!appEnv.registerUrl}
              onClick={(event) => {
                if (!appEnv.registerUrl) {
                  event.preventDefault()
                }
              }}
            >
              {messages.hero.ctaPrimary}
            </a>
            <button
              className={`btn-secondary btn-large ${buttonClicked ? 'no-pulse' : ''}`}
              onClick={handleLearnMore}
            >
              {messages.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
