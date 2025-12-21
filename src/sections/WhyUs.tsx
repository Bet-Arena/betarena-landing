import { GlowEffect } from '../components/ui/GlowEffect'
import { CheckIcon } from '../components/ui/CheckIcon'
import { CrossIcon } from '../components/ui/CrossIcon'
import './WhyUs.css'

interface WhyUsProps {
  sectionRef?: (el: HTMLDivElement | null) => void
  isVisible?: Record<string, boolean>
}

export function WhyUs({ sectionRef, isVisible = {} }: WhyUsProps) {
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
          <h2 className="section-title">Почему BETARENA?</h2>
          <p className="section-subtitle">
            Мы отличаемся от традиционных букмекеров
          </p>
        </div>

        <div className={`comparison-showcase ${isVisible['why-us'] ? 'fade-in-up delay-200' : ''}`}>
          <div className="comparison-card-wrapper">
            <div className="comparison-card-old">
              <div className="comparison-card-inner">
                <div className="comparison-card-header-old">
                  <h3 className="comparison-title">Традиционные букмекеры</h3>
                  <span className="comparison-subtitle">Winline и другие</span>
                </div>
                <div className="comparison-features-list">
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>Риск потерять большие деньги на каждом матче</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>Высокие минимальные ставки</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>Нет соревновательного элемента</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>Сложно начать новичкам</span>
                  </div>
                  <div className="comparison-feature-item old">
                    <div className="feature-marker old">
                      <CrossIcon size={20} />
                    </div>
                    <span>Нет контроля над расходами</span>
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
                  <h3 className="comparison-title">BetArena</h3>
                  <span className="comparison-subtitle new">Наш подход</span>
                </div>
                <div className="comparison-features-list">
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>Защита от больших потерь — фиксированный вступительный взнос</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>Низкий порог входа — от $10</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>Соревнование в лидерборде с другими участниками</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>Простой и понятный интерфейс для всех</span>
                  </div>
                  <div className="comparison-feature-item new">
                    <div className="feature-marker new">
                      <CheckIcon size={20} />
                    </div>
                    <span>Полный контроль над расходами</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`why-us-cta ${isVisible['why-us'] ? 'fade-in-up delay-400' : ''}`}>
          <button
            className="btn-primary btn-large"
            onClick={() => window.open('https://betarena.cc/auth/sign-up', '_blank')}
          >
            Регистрация
          </button>
        </div>
      </div>
    </section>
  )
}

