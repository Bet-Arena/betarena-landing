import { GlowEffect } from '../components/ui/GlowEffect'
import { CheckIcon } from '../components/ui/CheckIcon'
import { CrossIcon } from '../components/ui/CrossIcon'
import { appEnv } from '../config/env'
import { useI18n } from '../i18n/useI18n'
import './WhyUs.css'

interface WhyUsProps {
  sectionRef?: (el: HTMLDivElement | null) => void
  isVisible?: Record<string, boolean>
}

export function WhyUs({ sectionRef, isVisible = {} }: WhyUsProps) {
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
        zIndex={0}
      />
      <div className="container">
        <div className={`section-header ${isVisible['why-us'] ? 'fade-in-up' : ''}`}>
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
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>{messages.whyUs.traditional.items[0]}</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>{messages.whyUs.traditional.items[1]}</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>{messages.whyUs.traditional.items[2]}</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>{messages.whyUs.traditional.items[3]}</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>{messages.whyUs.traditional.items[4]}</span>
                  </div>
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
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>{messages.whyUs.betarena.items[0]}</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>{messages.whyUs.betarena.items[1]}</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>{messages.whyUs.betarena.items[2]}</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>{messages.whyUs.betarena.items[3]}</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>{messages.whyUs.betarena.items[4]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`why-us-cta ${isVisible['why-us'] ? 'fade-in-up delay-400' : ''}`}>
          <a
            className={`btn-primary btn-large ${!appEnv.registerUrl ? 'is-disabled' : ''}`}
            href={appEnv.registerUrl ?? undefined}
            aria-disabled={!appEnv.registerUrl}
            onClick={(event) => {
              if (!appEnv.registerUrl) {
                event.preventDefault()
              }
            }}
          >
            {messages.whyUs.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
