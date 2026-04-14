import { Logo } from '../components/ui/Logo'
import { Mail, Send, type LucideIcon } from 'lucide-react'
import { appEnv } from '../config/env'
import { useI18n } from '../i18n/useI18n'
import './Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { messages } = useI18n()
  const contacts = [
    appEnv.contactEmail
      ? { href: appEnv.contactEmail, ariaLabel: messages.footer.email, Icon: Mail }
      : null,
    appEnv.contactTelegram
      ? { href: appEnv.contactTelegram, ariaLabel: messages.footer.telegram, Icon: Send }
      : null,
  ].filter((contact): contact is { href: string; ariaLabel: string; Icon: LucideIcon } => Boolean(contact))

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <Logo />
            <span className="footer-logo-text">BetArena</span>
          </div>
          {contacts.length > 0 && (
            <div className="footer-links">
              {contacts.map(({ href, ariaLabel, Icon }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  className="footer-link"
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} BetArena. {messages.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
