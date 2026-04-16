import { useState, useEffect, useRef } from 'react'
import { useStepNavigation } from '../hooks/useStepNavigation'
import { GlowEffect } from '../components/ui/GlowEffect'
import { StepOverlay } from '../components/ui/StepOverlay'
import { useI18n } from '../i18n/useI18n'
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
    navigateToStep
  } = useStepNavigation()
  const { messages } = useI18n()

  const [showMobileOverlay, setShowMobileOverlay] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const lastOnboardingRef = useRef(false)

  // Показываем онбординг когда shouldShowOnboarding = true
  useEffect(() => {
    if (shouldShowOnboarding && !lastOnboardingRef.current) {
      lastOnboardingRef.current = true
      const resetTimer = window.setTimeout(() => {
        setResetKey((prev) => prev + 1)
        navigateToStep(1)
      }, 0)

      // Показываем оверлей после скролла
      const overlayTimer = window.setTimeout(() => {
        if (window.innerWidth <= 768) {
          setShowMobileOverlay(true)
        }
      }, 900)

      return () => {
        window.clearTimeout(resetTimer)
        window.clearTimeout(overlayTimer)
      }
    }

    if (!shouldShowOnboarding) {
      lastOnboardingRef.current = false
    }
  }, [shouldShowOnboarding, navigateToStep])

  const handleBetConfirm = () => {
    setShowMobileOverlay(false)
    navigateToStep(3)

    if (window.innerWidth <= 768) {
      setTimeout(() => setShowMobileOverlay(true), 800)
    }
  }

  const handleStepClick = (step: number) => {
    navigateToStep(step)
    // При клике на навигацию шагов скрываем overlay
    setShowMobileOverlay(false)
  }

  const handleNavigateToStep2 = () => {
    setShowMobileOverlay(false)
    navigateToStep(2)

    if (window.innerWidth <= 768) {
      setTimeout(() => setShowMobileOverlay(true), 800)
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
          className={`section-header section-scroll-anchor ${isVisible['how-it-works-header'] ? 'fade-in-up' : ''}`}
          data-section-id="how-it-works-header"
          data-scroll-anchor-for="how-it-works"
        >
          <h2 className="section-title">{messages.howItWorks.title}</h2>
          <p className="section-subtitle">{messages.howItWorks.subtitle}</p>
        </div>

        {/* Step Navigation */}
        <div className="step-navigation">
          <button
            className={`step-nav-btn ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}
            onClick={() => handleStepClick(1)}
            disabled={isTransitioning}
          >
            <span className="step-nav-number">1</span>
            <span className="step-nav-label">{messages.howItWorks.navigation[0]}</span>
          </button>
          <div className="step-nav-line"></div>
          <button
            className={`step-nav-btn ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}
            onClick={() => handleStepClick(2)}
            disabled={isTransitioning}
          >
            <span className="step-nav-number">2</span>
            <span className="step-nav-label">{messages.howItWorks.navigation[1]}</span>
          </button>
          <div className="step-nav-line"></div>
          <button
            className={`step-nav-btn ${currentStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepClick(3)}
            disabled={isTransitioning}
          >
            <span className="step-nav-number">3</span>
            <span className="step-nav-label">{messages.howItWorks.navigation[2]}</span>
          </button>
        </div>

        {/* Steps Container with Wind Effect */}
        <div
          className={`steps-container ${isTransitioning ? 'transitioning' : ''}`}
          data-direction={currentStep > prevStep ? 'forward' : 'back'}
        >
          <Step1
            key={`step1-${resetKey}-${currentStep}`}
            isActive={currentStep === 1}
            onNavigate={handleNavigateToStep2}
          />
          <Step2
            key={`step2-${resetKey}-${currentStep}`}
            isActive={currentStep === 2}
            onBetConfirm={handleBetConfirm}
          />
          <Step3
            key={`step3-${resetKey}-${currentStep}`}
            isActive={currentStep === 3}
            onNavigate={onNavigate}
          />
        </div>

        {/* Mobile Overlay */}
        {showMobileOverlay && (
          <StepOverlay
            currentStep={currentStep}
            onClose={() => {
              setShowMobileOverlay(false)
              if (onOnboardingShown) {
                onOnboardingShown()
              }
            }}
            onOnboardingShown={onOnboardingShown}
          />
        )}

      </div>
    </section>
  )
}
