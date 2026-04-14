import { useEffect, useState } from 'react'

export function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Сразу делаем все элементы видимыми без анимаций
    const elements = document.querySelectorAll('[data-section-id]')
    const visibleState: Record<string, boolean> = {}

    elements.forEach((element) => {
      const id = element.getAttribute('data-section-id')
      if (id) {
        visibleState[id] = true
      }
    })

    setIsVisible(visibleState)
  }, [])

  return { isVisible }
}

