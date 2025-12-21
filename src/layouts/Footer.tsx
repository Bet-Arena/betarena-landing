import { Logo } from '../components/ui/Logo'
import { Mail, Send, MessageCircle } from 'lucide-react'
import './Footer.css'

interface FooterProps {
  onNavigate?: (sectionId: string) => void
}

export function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <Logo />
            <span className="footer-logo-text">BetArena</span>
          </div>
          <div className="footer-links">
            <a href="mailto:support@betarena.com" className="footer-link" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#" className="footer-link" aria-label="Telegram">
              <Send size={20} />
            </a>
            <a href="#" className="footer-link" aria-label="Discord">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} BetArena. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

