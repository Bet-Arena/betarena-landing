import { type RefObject } from 'react'

export function useScrollToSection(sectionsRef: RefObject<Record<string, HTMLDivElement | null>>) {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      let element: HTMLElement | null = document.querySelector(`[data-section-id="${sectionId}"]`) as HTMLElement

      if (!element) {
        element = sectionsRef.current?.[sectionId] as HTMLElement
      }

      if (!element) {
        element = document.getElementById(sectionId)
      }

      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return { scrollToSection }
}

