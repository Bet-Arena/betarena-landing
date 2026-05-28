import { useState } from 'react'
import { GlowEffect } from '../components/ui/GlowEffect'
import { useI18n } from '../i18n/useI18n'
import { appEnv } from '../config/env'
import './Hero.css'

interface HeroProps {
  onNavigate: (sectionId: string, showOnboarding?: boolean) => void
}

const LEFT_BRACKET_FLAGS = [
  ['/flags/fr.png', '/flags/hr.png'],
  ['/flags/gb.png', '/flags/de.png'],
  ['/flags/br.png', '/flags/mx.png'],
  ['/flags/pt.png', '/flags/au.png'],
  ['/flags/be.png', '/flags/it.png'],
  ['/flags/es.png', '/flags/ca.png'],
  ['/flags/nl.png', '/flags/ma.png'],
  ['/flags/us.png', '/flags/jp.png'],
]

const RIGHT_BRACKET_FLAGS = [
  ['/flags/ar.png', '/flags/nl.png'],
  ['/flags/us.png', '/flags/ca.png'],
  ['/flags/ma.png', '/flags/es.png'],
  ['/flags/jp.png', '/flags/kr.png'],
  ['/flags/de.png', '/flags/it.png'],
  ['/flags/br.png', '/flags/pt.png'],
  ['/flags/fr.png', '/flags/be.png'],
  ['/flags/mx.png', '/flags/au.png'],
]

const MOBILE_HERO_FLAGS = [
  '/flags/us.png',
  '/flags/ca.png',
  '/flags/mx.png',
  '/flags/br.png',
  '/flags/ar.png',
  '/flags/de.png',
  '/flags/fr.png',
  '/flags/es.png',
  '/flags/it.png',
  '/flags/nl.png',
  '/flags/pt.png',
  '/flags/gb.png',
  '/flags/be.png',
  '/flags/hr.png',
  '/flags/ma.png',
  '/flags/jp.png',
  '/flags/kr.png',
  '/flags/au.png',
]

const BRACKET_VIEWBOX_WIDTH = 1120
const BRACKET_VIEWBOX_HEIGHT = 820
const BRACKET_ROWS = [64, 163, 262, 361, 460, 559, 658, 757]
const BRACKET_LEFT_COLUMNS = [190, 315, 420, 505, 560]
const BRACKET_FLAG_SIZE = 38
const BRACKET_FLAG_GAP = 9
const BRACKET_FLAG_OFFSET = (BRACKET_FLAG_SIZE + BRACKET_FLAG_GAP) / 2
const BRACKET_SIDE_CONFIG = {
  left: {
    flagX: 62,
    columns: BRACKET_LEFT_COLUMNS,
    flagPairs: LEFT_BRACKET_FLAGS,
  },
  right: {
    flagX: BRACKET_VIEWBOX_WIDTH - 62,
    columns: BRACKET_LEFT_COLUMNS.map((column) => BRACKET_VIEWBOX_WIDTH - column),
    flagPairs: RIGHT_BRACKET_FLAGS,
  },
}

function pairCenters(values: number[]) {
  const centers: number[] = []
  for (let i = 0; i < values.length; i += 2) {
    centers.push((values[i] + values[i + 1]) / 2)
  }
  return centers
}

function TournamentBracketSvg() {
  const round16 = pairCenters(BRACKET_ROWS)
  const quarterFinal = pairCenters(round16)
  const semiFinal = pairCenters(quarterFinal)
  const rounds = [BRACKET_ROWS, round16, quarterFinal, semiFinal]

  return (
    <svg
      className="hero-bracket-svg"
      viewBox={`0 0 ${BRACKET_VIEWBOX_WIDTH} ${BRACKET_VIEWBOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        {(['left', 'right'] as const).flatMap((side) =>
          BRACKET_SIDE_CONFIG[side].flagPairs.flatMap((pair, matchIndex) => {
            const centerY = BRACKET_ROWS[matchIndex]
            const flagCenters = [centerY - BRACKET_FLAG_OFFSET, centerY + BRACKET_FLAG_OFFSET]

            return pair.map((_, flagIndex) => (
              <clipPath key={`${side}-${matchIndex}-${flagIndex}`} id={`hero-flag-clip-${side}-${matchIndex}-${flagIndex}`}>
                <circle
                  cx={BRACKET_SIDE_CONFIG[side].flagX}
                  cy={flagCenters[flagIndex]}
                  r={BRACKET_FLAG_SIZE / 2}
                />
              </clipPath>
            ))
          })
        )}
      </defs>
      {renderBracketSide('left', rounds)}
      {renderBracketSide('right', rounds)}
      <line
        className="hero-bracket-line final"
        x1={BRACKET_LEFT_COLUMNS[3]}
        y1={semiFinal[0]}
        x2={BRACKET_VIEWBOX_WIDTH - BRACKET_LEFT_COLUMNS[3]}
        y2={semiFinal[0]}
      />
    </svg>
  )
}

function renderBracketSide(side: 'left' | 'right', rounds: number[][]) {
  const { columns, flagPairs, flagX } = BRACKET_SIDE_CONFIG[side]
  const isLeft = side === 'left'
  const flagEdgeX = flagX + (isLeft ? BRACKET_FLAG_SIZE / 2 : -BRACKET_FLAG_SIZE / 2)
  const firstColumnX = columns[0]

  return (
    <g key={side}>
      {flagPairs.map((pair, matchIndex) => {
        const centerY = BRACKET_ROWS[matchIndex]
        const flagCenters = [centerY - BRACKET_FLAG_OFFSET, centerY + BRACKET_FLAG_OFFSET]

        return (
          <g key={`${side}-match-${matchIndex}`}>
            {flagCenters.map((flagY, flagIndex) => (
              <g key={`${side}-flag-${matchIndex}-${flagIndex}`}>
                <line className="hero-bracket-line" x1={flagEdgeX} y1={flagY} x2={firstColumnX} y2={flagY} />
                <image
                  href={pair[flagIndex]}
                  x={flagX - BRACKET_FLAG_SIZE / 2}
                  y={flagY - BRACKET_FLAG_SIZE / 2}
                  width={BRACKET_FLAG_SIZE}
                  height={BRACKET_FLAG_SIZE}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#hero-flag-clip-${side}-${matchIndex}-${flagIndex})`}
                />
                <circle className="hero-bracket-flag-ring" cx={flagX} cy={flagY} r={BRACKET_FLAG_SIZE / 2} />
              </g>
            ))}
            <line
              className="hero-bracket-line hero-bracket-line--knockout"
              x1={firstColumnX}
              y1={flagCenters[0]}
              x2={firstColumnX}
              y2={flagCenters[1]}
            />
          </g>
        )
      })}
      {rounds.slice(0, -1).map((round, roundIndex) =>
        round.map((startY, index) => {
          const sourceX = columns[roundIndex]
          const targetX = columns[roundIndex + 1]

          return (
            <g key={`${side}-round-${roundIndex}-${index}`}>
              <line className="hero-bracket-line hero-bracket-line--knockout" x1={sourceX} y1={startY} x2={targetX} y2={startY} />
              {index % 2 === 0 && (
                <>
                  <line className="hero-bracket-line hero-bracket-line--knockout" x1={targetX} y1={startY} x2={targetX} y2={round[index + 1]} />
                </>
              )}
            </g>
          )
        })
      )}
    </g>
  )
}

export function Hero({ onNavigate }: HeroProps) {
  const [buttonClicked, setButtonClicked] = useState(false)
  const { messages } = useI18n()
  const heroTitleMatch = messages.hero.title.match(/^(.*?)(\s+[—-])$/)
  const heroTitleText = heroTitleMatch?.[1] ?? messages.hero.title
  const heroTitleDash = heroTitleMatch?.[2] ?? ''

  const handleLearnMore = () => {
    setButtonClicked(true)
    onNavigate('why-us')
  }

  return (
    <section className="hero">
      <GlowEffect
        left="calc(50% + 200px)"
        top={100}
        width={500}
        height={600}
        rotation={30}
        opacity={0.4}
        blur={100}
        mobileLeft="calc(50% + 20px)"
        mobileTop={40}
        mobileScale={0.72}
        mobileOpacity={0.34}
        mobileBlur={76}
        zIndex={999}
      />
      <img
        className="hero-trophy"
        src="/pngtree-the-fifa-world-cup-trophy-png-image_19941957-removebg-preview-Photoroom.png"
        alt="FIFA World Cup 2026"
        draggable={false}
      />
      <div className="hero-tournament-bracket" aria-hidden="true">
        <TournamentBracketSvg />
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {heroTitleText}
            {heroTitleDash && <span className="hero-title-mobile-dash">{heroTitleDash}</span>}
            <br />
            <span className="gradient-text">{messages.hero.highlightedTitle}</span>
          </h1>
          <p className="hero-description">
            {messages.hero.description}
          </p>

          <div className="hero-mobile-flags-container" aria-hidden="true">
            <div className="hero-mobile-flags">
              {MOBILE_HERO_FLAGS.map((flagSrc, index) => (
                <img key={`a-${flagSrc}-${index}`} className="hero-mobile-flag" src={flagSrc} alt="" draggable={false} />
              ))}
              {MOBILE_HERO_FLAGS.map((flagSrc, index) => (
                <img key={`b-${flagSrc}-${index}`} className="hero-mobile-flag" src={flagSrc} alt="" draggable={false} />
              ))}
            </div>
          </div>

          <div className="hero-cta">
            <a
              className={`btn-primary btn-large ${buttonClicked ? 'no-pulse' : ''}`}
              href={appEnv.registerUrl ?? undefined}
              aria-disabled={!appEnv.registerUrl}
              onClick={(event) => {
                if (!appEnv.registerUrl) {
                  event.preventDefault()
                }
              }}
            >
              {messages.hero.ctaPrimary}
            </a>
            <button
              className={`btn-secondary btn-large ${buttonClicked ? 'no-pulse' : ''}`}
              onClick={handleLearnMore}
            >
              {messages.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
