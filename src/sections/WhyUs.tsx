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

export function WhyUs({ sectionRef, isVisible = {}, onNavigate }: WhyUsProps) {
  const { messages } = useI18n()

  return (
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

        {/* Tournament Schedule */}
        <div className={`tournament-schedule ${isVisible['why-us'] ? 'fade-in-up delay-300' : ''}`}>
          <div className="schedule-header">
            <h3 className="schedule-title">{messages.whyUs.scheduleTitle}</h3>
            <p className="schedule-subtitle">{messages.whyUs.scheduleSubtitle}</p>
          </div>
          <div className="schedule-cards">
            {messages.whyUs.scheduleRows.map((row) => (
              <div key={row.num} className={`schedule-card ${row.isFinal ? 'final' : ''}`}>
                <div className="schedule-card-top">
                  <span className="schedule-card-num">{row.num}</span>
                  <div className="schedule-card-title-block">
                    <span className="schedule-card-name">{row.name}</span>
                    {row.isFinal && <span className="final-badge">{messages.whyUs.scheduleFinalBadge}</span>}
                  </div>
                </div>
                <div className="schedule-card-dates">📅 {row.dates}</div>
                <div className="schedule-card-footer">
                  <div className="schedule-card-fee">
                    <span className="fee-label">Взнос</span>
                    <span className={`fee-value ${row.fee === 'Бесплатно' || row.fee === 'Free' ? 'free' : 'paid'}`}>{row.fee}</span>
                  </div>
                  <div className="schedule-card-prize">
                    <span className="prize-label">Приз</span>
                    <span className="prize-value">{row.prize}</span>
                    <span className="guaranteed-stamp">✓ Гарантировано</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="schedule-prizes-note">{messages.whyUs.schedulePrizesNote}</p>
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
  )
}
