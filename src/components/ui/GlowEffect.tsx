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
  className = ''
}: GlowEffectProps) {
  const style: React.CSSProperties = {
    position: 'absolute',
    width: `${width}px`,
    height: `${height}px`,
    left: typeof left === 'number' ? `${left}px` : left,
    top: typeof top === 'number' ? `${top}px` : top,
    background: 'linear-gradient(45deg, #0017E4 0%, #3793FF 100%)',
    opacity,
    filter: `blur(${blur}px)`,
    WebkitFilter: `blur(${blur}px)`,
    transform: `rotate(${rotation}deg)`,
    zIndex,
    pointerEvents: 'none'
  }

  return <div className={`glow-effect ${className}`} style={style} />
}

