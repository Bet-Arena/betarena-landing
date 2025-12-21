import { useState, useEffect, useRef } from 'react'
import { useStepNavigation } from '../hooks/useStepNavigation'
import { GlowEffect } from '../components/ui/GlowEffect'
import { StepOverlay } from '../components/ui/StepOverlay'
import './HowItWorks.css'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'

interface HowItWorksProps {
  sectionRef?: (el: HTMLDivElement | null) => void
  onNavigate: (sectionId: string, showOnboarding?: boolean) => void
  isVisible?: Record<string, boolean>
  shouldShowOnboarding?: boolean
  onOnboardingShown?: () => void
}

export function HowItWorks({ sectionRef, onNavigate, isVisible = {}, shouldShowOnboarding = false, onOnboardingShown }: HowItWorksProps) {
  const {
    currentStep,
    prevStep,
    isTransitioning,
    showNewUser,
    navigateToStep
  } = useStepNavigation()

  const [showMobileOverlay, setShowMobileOverlay] = useState(false) // Controls mobile overlay visibility
  const onboardingTriggeredRef = useRef(false) // To prevent re-triggering onboarding for step 1


  // Показываем онбординг когда shouldShowOnboarding = true (после нажатия кнопки "Узнать больше" в Hero)
  useEffect(() => {
    // Этот эффект срабатывает ТОЛЬКО для первого шага при нажатии "Узнать больше"
    if (!shouldShowOnboarding || onboardingTriggeredRef.current) {
      return
    }

    // Всегда переходим на шаг 1 при показе онбординга (сбрасываем состояния)
    if (currentStep !== 1) {
      navigateToStep(1)
    }

    // Показываем онбординг после задержки (чтобы дать время для скролла и перехода на шаг 1)
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth <= 768
      if (isMobile && shouldShowOnboarding && !onboardingTriggeredRef.current) {
        // На мобилке показываем overlay для первого шага
        setShowMobileOverlay(true)
        onboardingTriggeredRef.current = true
      }
    }, 1800) // Задержка для завершения скролла и перехода на шаг 1

    return () => clearTimeout(timer)
  }, [shouldShowOnboarding, currentStep, navigateToStep])

  const handleBetConfirm = () => {
    // Сначала скрываем текущий overlay
    setShowMobileOverlay(false)
    navigateToStep(3)
    // После подтверждения ставки показываем overlay для шага 3 на мобилке
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      setTimeout(() => {
        setShowMobileOverlay(true)
      }, 1500) // Задержка для завершения перехода на шаг 3
    }
  }

  const handleStepClick = (step: number) => {
    navigateToStep(step)
    // При клике на навигацию шагов скрываем overlay
    setShowMobileOverlay(false)
  }

  // Обработчик перехода на шаг 2 из шага 1 (Join Tournament)
  const handleNavigateToStep2 = () => {
    // Сначала скрываем текущий overlay
    setShowMobileOverlay(false)
    navigateToStep(2)
    // После перехода на шаг 2 показываем overlay для шага 2 на мобилке
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      setTimeout(() => {
        setShowMobileOverlay(true)
      }, 1500) // Задержка для завершения перехода на шаг 2
    }
  }

  return (
    <section
      className="detailed-steps"
      id="how-it-works"
      ref={sectionRef}
      data-section-id="how-it-works"
    >
      <GlowEffect
        left="calc(50% - 500px)"
        top="40%"
        width={700}
        height={350}
        rotation={-15}
        opacity={0.35}
        blur={90}
        zIndex={0}
      />
      <div className="container">
        <div
          className={`section-header ${isVisible['how-it-works-header'] ? 'fade-in-up' : ''}`}
          data-section-id="how-it-works-header"
        >
          <h2 className="section-title">Как это работает</h2>
          <p className="section-subtitle">
            Три простых шага от регистрации до победы в турнире
          </p>
        </div>

        {/* Step Navigation */}
        <div className="step-navigation">
          <button
            className={`step-nav-btn ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}
            onClick={() => handleStepClick(1)}
            disabled={isTransitioning}
          >
            <span className="step-nav-number">1</span>
            <span className="step-nav-label">Войти в турнир</span>
          </button>
          <div className="step-nav-line"></div>
          <button
            className={`step-nav-btn ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}
            onClick={() => handleStepClick(2)}
            disabled={isTransitioning}
          >
            <span className="step-nav-number">2</span>
            <span className="step-nav-label">Делать ставки</span>
          </button>
          <div className="step-nav-line"></div>
          <button
            className={`step-nav-btn ${currentStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepClick(3)}
            disabled={isTransitioning}
          >
            <span className="step-nav-number">3</span>
            <span className="step-nav-label">Лидерборд</span>
          </button>
        </div>

        {/* Steps Container with Wind Effect */}
        <div
          className={`steps-container ${isTransitioning ? 'transitioning' : ''}`}
          data-direction={currentStep > prevStep ? 'forward' : 'back'}
        >
          <Step1
            isActive={currentStep === 1}
            onNavigate={handleNavigateToStep2}
          />
          <Step2
            isActive={currentStep === 2}
            onBetConfirm={handleBetConfirm}
          />
          <Step3
            isActive={currentStep === 3}
            showNewUser={showNewUser}
            onNavigate={onNavigate}
          />
        </div>

        {/* Mobile Overlay */}
        {showMobileOverlay && (
          <StepOverlay
            currentStep={currentStep}
            onClose={() => {
              setShowMobileOverlay(false)
              if (currentStep === 1) {
                onboardingTriggeredRef.current = false
              }
            }}
            onOnboardingShown={onOnboardingShown}
          />
        )}

      </div>
    </section>
  )
}

