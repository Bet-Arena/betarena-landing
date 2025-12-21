import { useEffect } from 'react'
import './StepOverlay.css'

interface StepOverlayProps {
  currentStep: number
  onClose: () => void
  onOnboardingShown?: () => void
}

const stepContent = {
  1: {
    badge: 'Шаг 1',
    heading: 'Войдите в турнир',
    text: 'Выберите интересующий вас турнир из списка доступных. Каждый турнир имеет свой призовой фонд, количество участников и длительность. Выберите уровень участия, который вам подходит — от начального до премиум. Вступительный взнос списывается с вашего баланса один раз при вступлении.',
    features: [
      'Разные уровни участия на любой бюджет',
      'Прозрачные правила и условия',
      'Мгновенный доступ после вступления',
    ],
  },
  2: {
    badge: 'Шаг 2',
    heading: 'Делайте ставки',
    text: 'После вступления в турнир вы получаете доступ ко всем матчам. Выберите матч, изучите доступные рынки (исход, счет, тотал голов и другие) и выберите исход, в который вы верите. Добавьте его в купон. Вы можете делать одиночные ставки или собирать экспрессы из нескольких исходов.',
    features: [
      'Множество рынков на каждый матч',
      'Одиночные ставки и экспрессы',
      'Простое добавление в купон одним кликом',
    ],
  },
  3: {
    badge: 'Шаг 3',
    heading: 'Следите за лидербордом',
    text: 'За каждый правильный прогноз вы получаете очки. Чем точнее ваш прогноз, тем больше очков вы зарабатываете. Лидерборд обновляется в реальном времени после каждого завершенного матча. Топ игроки получают призы из призового фонда турнира. Следите за своей позицией и стремитесь к вершине!',
    features: [
      'Очки за каждый правильный прогноз',
      'Обновление рейтинга в реальном времени',
      'Призы для топ игроков',
    ],
  },
}

export function StepOverlay({ currentStep, onClose, onOnboardingShown }: StepOverlayProps) {
  const content = stepContent[currentStep as keyof typeof stepContent]

  // Блокируем скролл body когда overlay открыт
  useEffect(() => {
    // Просто блокируем overflow, без position: fixed
    const originalOverflow = document.body.style.overflow
    const originalHeight = document.body.style.height

    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'

    return () => {
      // Просто восстанавливаем overflow
      document.body.style.overflow = originalOverflow
      document.body.style.height = originalHeight
    }
  }, [])

  if (!content) return null

  const handleClose = () => {
    onClose()
    if (currentStep === 1 && onOnboardingShown) {
      onOnboardingShown()
    }
  }

  return (
    <div className="step-overlay-mobile" onClick={handleClose}>
      <div className="step-overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="step-overlay-close" onClick={handleClose}>×</button>
        <div className="step-overlay-body">
          <div className="step-badge">{content.badge}</div>
          <div className="step-heading">{content.heading}</div>
          <div className="step-text">{content.text}</div>
          <ul className="features-list">
            {content.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

