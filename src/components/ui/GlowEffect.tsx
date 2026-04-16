import { useState, useEffect } from 'react'
import './GlowEffect.css'

interface GlowEffectProps {
  left?: number | string
  top?: number | string
  width?: number
  height?: number
  rotation?: number
  opacity?: number
  blur?: number
  zIndex?: number
  className?: string
  mobileLeft?: number | string
  mobileTop?: number | string
  mobileScale?: number
  mobileOpacity?: number
  mobileBlur?: number
}

export function GlowEffect({
  left = 409,
  top = -179.01,
  width = 481.78,
  height = 627.96,
  rotation = 150.53,
  opacity = 0.45,
  blur = 80,
  zIndex = 0,
  className = '',
  mobileLeft,
  mobileTop,
  mobileScale = 0.42,
  mobileOpacity,
  mobileBlur
}: GlowEffectProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scale = isMobile ? mobileScale : 1
  const scaledWidth = width * scale
  const scaledHeight = height * scale
  const scaledBlur = isMobile ? (mobileBlur ?? blur * scale) : blur
  const resolvedLeft = isMobile && mobileLeft !== undefined ? mobileLeft : left
  const resolvedTop = isMobile && mobileTop !== undefined ? mobileTop : top
  const resolvedOpacity = isMobile ? (mobileOpacity ?? opacity * 0.7) : opacity

  const style: React.CSSProperties = {
    position: 'absolute',
    width: `${scaledWidth}px`,
    height: `${scaledHeight}px`,
    left: typeof resolvedLeft === 'number' ? `${resolvedLeft}px` : resolvedLeft,
    top: typeof resolvedTop === 'number' ? `${resolvedTop}px` : resolvedTop,
    background: 'linear-gradient(45deg, #0017E4 0%, #3793FF 100%)',
    opacity: resolvedOpacity,
    filter: `blur(${scaledBlur}px)`,
    WebkitFilter: `blur(${scaledBlur}px)`,
    transform: `rotate(${rotation}deg)`,
    zIndex,
    pointerEvents: 'none'
  }

  return <div className={`glow-effect ${className}`} style={style} />
}
