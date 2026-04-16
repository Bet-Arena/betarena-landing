import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../../i18n/useI18n'
import './StepOverlay.css'

interface StepOverlayProps {
  currentStep: number
  onClose: () => void
  onOnboardingShown?: () => void
}

export function StepOverlay({ currentStep, onClose, onOnboardingShown }: StepOverlayProps) {
  const { messages } = useI18n()
  const contentByStep = {
    1: messages.steps.step1,
    2: messages.steps.step2,
    3: messages.steps.step3,
  }
  const content = contentByStep[currentStep as keyof typeof contentByStep]

  // Блокируем скролл body когда overlay открыт
  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    const originalHeight = document.body.style.height

    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
    document.body.classList.add('step-overlay-open')

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.height = originalHeight
      document.body.classList.remove('step-overlay-open')
    }
  }, [])

  if (!content) return null

  const handleClose = () => {
    onClose()
    if (currentStep === 1 && onOnboardingShown) {
      onOnboardingShown()
    }
  }

  return createPortal(
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
    </div>,
    document.body
  )
}
