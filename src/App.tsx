import { useRef, useState } from 'react'
import './App.css'
import { Header } from './layouts/Header'
import { Footer } from './layouts/Footer'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { WhyUs } from './sections/WhyUs'
import { useScrollToSection } from './hooks/useScrollToSection'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

function App() {
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({})
  const { scrollToSection } = useScrollToSection(sectionsRef)
  const { isVisible } = useIntersectionObserver()
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(false)

  const handleNavigate = (sectionId: string, showOnboarding?: boolean) => {
    if (showOnboarding === true) {
      setShouldShowOnboarding(true)
    }
    scrollToSection(sectionId)
  }

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} />

      <Hero onNavigate={handleNavigate} />

      <HowItWorks
        sectionRef={(el) => {
          if (el) sectionsRef.current['how-it-works'] = el as HTMLDivElement
        }}
        onNavigate={handleNavigate}
        isVisible={isVisible}
        shouldShowOnboarding={shouldShowOnboarding}
        onOnboardingShown={() => setShouldShowOnboarding(false)}
      />

      <WhyUs
        sectionRef={(el) => {
          if (el) sectionsRef.current['why-us'] = el as HTMLDivElement
        }}
        isVisible={isVisible}
      />

      <Footer onNavigate={handleNavigate} />
      </div>
  )
}

export default App
