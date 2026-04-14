import { appEnv } from '../config/env'
import { Logo } from '../components/ui/Logo'
import { useI18n } from '../i18n/useI18n'
import './Header.css'

export function Header() {
  const { locale, setLocale, messages } = useI18n()

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo-section">
            <Logo />
            <div className="logo-text">
              <span className="logo-text-desktop">{messages.header.brand}</span>
              <span className="logo-text-mobile">{messages.header.brand}</span>
            </div>
          </div>
          <div className="header-actions">
            <div className="header-language-switch" role="group" aria-label={messages.header.languageLabel}>
              {(['ru', 'en'] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`header-language-btn ${locale === value ? 'active' : ''}`}
                  onClick={() => setLocale(value)}
                >
                  {value.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              className={`header-btn-primary ${!appEnv.loginUrl ? 'is-disabled' : ''}`}
              href={appEnv.loginUrl ?? undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!appEnv.loginUrl}
              onClick={(event) => {
                if (!appEnv.loginUrl) {
                  event.preventDefault()
                }
              }}
            >
              {messages.header.login}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
