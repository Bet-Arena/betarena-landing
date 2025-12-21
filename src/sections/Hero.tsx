import { useState } from 'react'
import { GlowEffect } from '../components/ui/GlowEffect'
import './Hero.css'

interface HeroProps {
  onNavigate: (sectionId: string, showOnboarding?: boolean) => void
}

export function Hero({ onNavigate }: HeroProps) {
  const [buttonClicked, setButtonClicked] = useState(false)

      const handleClick = () => {
        setButtonClicked(true)
        onNavigate('how-it-works', true) // Передаем true для показа онбординга
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
            <span className="badge-text">Новый подход к спортивным ставкам</span>
          </div>
          <h1 className="hero-title">
            Соревнуйтесь в турнирах,
            <br />
            <span className="gradient-text">не рискуя большими деньгами</span>
          </h1>
          <p className="hero-description">
            Соревнуйтесь с другими участниками в турнирах.
          </p>
          <div className="hero-cta">
            <button
              className={`btn-primary btn-large ${buttonClicked ? 'no-pulse' : ''}`}
              onClick={handleClick}
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

