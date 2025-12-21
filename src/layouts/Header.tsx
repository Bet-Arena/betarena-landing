import { Logo } from '../components/ui/Logo'
import './Header.css'

interface HeaderProps {
  onNavigate: (sectionId: string) => void
}

export function Header({}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo-section">
            <Logo />
            <div className="logo-text">
              <span className="logo-text-desktop">BetArena</span>
              <span className="logo-text-mobile">BetArena</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="header-btn-primary">Войти</button>
          </div>
        </div>
      </div>
    </header>
  )
}

