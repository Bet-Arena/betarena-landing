import { type RefObject } from 'react'

export function useScrollToSection(sectionsRef: RefObject<Record<string, HTMLDivElement | null>>) {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      let element: HTMLElement | null = document.querySelector(
        `[data-scroll-anchor-for="${sectionId}"]`
      ) as HTMLElement

      if (!element) {
        element = document.querySelector(`[data-section-id="${sectionId}"]`) as HTMLElement
      }

      if (!element) {
        element = sectionsRef.current?.[sectionId] as HTMLElement
      }

      if (!element) {
        element = document.getElementById(sectionId)
      }

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  return { scrollToSection }
}
