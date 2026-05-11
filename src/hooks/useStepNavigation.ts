import { useState } from 'react'

export function useStepNavigation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [prevStep, setPrevStep] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const navigateToStep = (step: number) => {
    if (isTransitioning || step === currentStep || step < 1 || step > 3) return

    setIsTransitioning(true)
    setPrevStep(currentStep)

    setTimeout(() => {
      setCurrentStep(step)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 650)
    }, 50)
  }

  return {
    currentStep,
    prevStep,
    isTransitioning,
    navigateToStep
  }
}
