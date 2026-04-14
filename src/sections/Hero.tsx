import { useState } from 'react'
import { GlowEffect } from '../components/ui/GlowEffect'
import { useI18n } from '../i18n/useI18n'
import './Hero.css'

interface HeroProps {
  onNavigate: (sectionId: string, showOnboarding?: boolean) => void
}

export function Hero({ onNavigate }: HeroProps) {
  const [buttonClicked, setButtonClicked] = useState(false)
  const { messages } = useI18n()

  const handleClick = () => {
    setButtonClicked(true)
    onNavigate('how-it-works', true)
  }

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
          <div className="hero-cta">
            <button
              className={`btn-primary btn-large ${buttonClicked ? 'no-pulse' : ''}`}
              onClick={handleClick}
            >
              {messages.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
