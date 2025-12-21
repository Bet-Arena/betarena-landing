import { useEffect, useState } from 'react'

export function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-section-id')
          if (id) {
            setIsVisible((prev) => ({ ...prev, [id]: true }))
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    const observeElements = () => {
      const elements = document.querySelectorAll('[data-section-id]')
      elements.forEach((element) => {
        observer.observe(element)
      })
    }

    const timeoutId1 = setTimeout(observeElements, 50)
    const timeoutId2 = setTimeout(observeElements, 300)

    return () => {
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
      observer.disconnect()
    }
  }, [])

  return { isVisible }
}

