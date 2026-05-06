import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  function openMenu() {
    setMobileOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={closeMenu}>&#10005;</button>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#" onClick={closeMenu}>Maths</a>
        <a href="#" onClick={closeMenu}>Physics</a>
        <a href="#" onClick={closeMenu}>Chemistry</a>
        <a href="#" onClick={closeMenu}>Login</a>
        <a href="#" className="signup-link" onClick={closeMenu}>Sign Up</a>
      </div>

      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <span className="logo-text">Boost<span style={{ color: '#5B8FF9' }}>AI</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="#">Maths</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Chemistry</a></li>
          </ul>
          <div className="nav-right">
            <a href="#" className="nav-login">Login</a>
            <a href="#" className="btn-signup">Sign up for Free</a>
            <button className="hamburger" onClick={openMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="5" x2="21" y2="5" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="19" x2="21" y2="19" />
              </svg>
            </button>
            <button className="settings-icon" aria-label="Settings" title="Settings">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
