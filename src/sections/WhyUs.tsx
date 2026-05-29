import { Gauge, ListChecks, SlidersHorizontal } from 'lucide-react'
import { GlowEffect } from '../components/ui/GlowEffect'
import { CheckIcon } from '../components/ui/CheckIcon'
import { CrossIcon } from '../components/ui/CrossIcon'
import { useI18n } from '../i18n/useI18n'
import './WhyUs.css'

interface WhyUsProps {
  sectionRef?: (el: HTMLDivElement | null) => void
  isVisible?: Record<string, boolean>
  onNavigate?: (sectionId: string) => void
}

const SCHEDULE_RULE_ICONS = [ListChecks, Gauge, SlidersHorizontal]

function stripLeadingMarker(value: string) {
  return value.replace(/^[^\p{L}\p{N}$]+/u, '').trim()
}

export function WhyUs({ sectionRef, isVisible = {}, onNavigate }: WhyUsProps) {
  const { messages } = useI18n()

  return (
    <>
      <section
        className="why-us"
        id="why-us"
        ref={sectionRef}
        data-section-id="why-us"
      >
        <GlowEffect
          left="calc(50% + 250px)"
          top="60%"
          width={550}
          height={400}
          rotation={45}
          opacity={0.4}
          blur={85}
          mobileLeft="calc(50% - 10px)"
          mobileTop="72%"
          mobileScale={0.7}
          mobileOpacity={0.3}
          mobileBlur={60}
          zIndex={0}
        />
        <div className="container">
          <div
            className={`section-header section-scroll-anchor ${isVisible['why-us'] ? 'fade-in-up' : ''}`}
            data-scroll-anchor-for="why-us"
          >
            <h2 className="section-title">{messages.whyUs.title}</h2>
            <p className="section-subtitle">{messages.whyUs.subtitle}</p>
          </div>

          <div className={`comparison-showcase ${isVisible['why-us'] ? 'fade-in-up delay-200' : ''}`}>
            <div className="comparison-card-wrapper">
              <div className="comparison-card-old">
                <div className="comparison-card-inner">
                  <div className="comparison-card-header-old">
                    <h3 className="comparison-title">{messages.whyUs.traditional.title}</h3>
                    <span className="comparison-subtitle">{messages.whyUs.traditional.subtitle}</span>
                  </div>
                  <div className="comparison-features-list">
                    {messages.whyUs.traditional.items.map((item, i) => (
                      <div key={i} className="comparison-feature-item old">
                        <div className="feature-marker old">
                          <CrossIcon size={20} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="comparison-divider">
                <div className="divider-line"></div>
                <div className="divider-vs">VS</div>
                <div className="divider-line"></div>
              </div>

              <div className="comparison-card-new">
                <div className="comparison-card-glow"></div>
                <div className="comparison-card-inner">
                  <div className="comparison-card-header-new">
                    <h3 className="comparison-title">{messages.whyUs.betarena.title}</h3>
                    <span className="comparison-subtitle new">{messages.whyUs.betarena.subtitle}</span>
                  </div>
                  <div className="comparison-features-list">
                    {messages.whyUs.betarena.items.map((item, i) => (
                      <div key={i} className="comparison-feature-item new">
                        <div className="feature-marker new">
                          <CheckIcon size={20} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tournament-schedule-section" aria-labelledby="tournament-schedule-title">
        <div className="container">
          <div className={`tournament-schedule ${isVisible['why-us'] ? 'fade-in-up delay-300' : ''}`}>
            <div className="section-header schedule-header">
              <h2 className="section-title schedule-title" id="tournament-schedule-title">{messages.whyUs.scheduleTitle}</h2>
            </div>
            <div className="schedule-rules">
              <div className="schedule-rules-header">
                <div className="schedule-rules-title">{messages.whyUs.scheduleRulesTitle}</div>
              </div>
              <div className="schedule-rules-list">
                {messages.whyUs.scheduleRules.map((rule, index) => (
                  <div key={rule} className="schedule-rule">
                    <div className="schedule-rule-icon">
                      {(() => {
                        const Icon = SCHEDULE_RULE_ICONS[index] ?? SlidersHorizontal
                        return <Icon size={17} strokeWidth={2} />
                      })()}
                    </div>
                    <div className="schedule-rule-copy">
                      <span className="schedule-rule-index">0{index + 1}</span>
                      <span>{rule}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="schedule-cards">
              {messages.whyUs.scheduleRows.map((row) => (
                <div key={row.num} className={`schedule-card ${row.isFinal ? 'final' : ''}`}>
                  {row.isFinal && <span className="final-badge">{stripLeadingMarker(messages.whyUs.scheduleFinalBadge)}</span>}
                  <div className="schedule-card-top">
                    <span className="schedule-card-num">{row.num}</span>
                    <div className="schedule-card-title-block">
                      <span className="schedule-card-name">{row.name}</span>
                    </div>
                  </div>
                  <div className="schedule-card-dates">{row.dates}</div>
                  <div className="schedule-card-footer">
                    <div className="schedule-card-fee">
                      <span className="fee-label">{messages.whyUs.scheduleHeader[2]}</span>
                      <span className={`fee-value ${row.fee === 'Бесплатно' || row.fee === 'Free' ? 'free' : 'paid'}`}>{row.fee}</span>
                    </div>
                    <div className="schedule-card-prize">
                      <span className="prize-label">{messages.whyUs.scheduleHeader[3]}</span>
                      <span className="prize-value">{row.prize}</span>
                      <span className="guaranteed-stamp">{stripLeadingMarker(messages.whyUs.scheduleGuaranteeStamp)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="schedule-prizes-note">{stripLeadingMarker(messages.whyUs.schedulePrizesNote)}</p>
          </div>

          <div className={`why-us-cta ${isVisible['why-us'] ? 'fade-in-up delay-400' : ''}`}>
            <button
              className="btn-primary btn-large"
              onClick={() => onNavigate?.('how-it-works')}
            >
              {messages.whyUs.cta}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
