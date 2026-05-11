import { useState } from 'react'

export function useIntersectionObserver() {
  const [isVisible] = useState<Record<string, boolean>>({
    'how-it-works-header': true,
    'why-us': true,
  })

  return { isVisible }
}
