import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('boostai_cookies')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('boostai_cookies', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('boostai_cookies', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-top">
        <div className="cookie-icon">🍪</div>
        <div className="cookie-text">
          <h4>We use cookies</h4>
          <p>
            We use cookies to enhance your experience and analyse site usage. See our{' '}
            <a href="#">Privacy Policy</a> for details.
          </p>
        </div>
      </div>
      <div className="cookie-actions">
        <button className="cookie-btn decline" onClick={decline}>Decline</button>
        <button className="cookie-btn accept" onClick={accept}>Accept all cookies</button>
      </div>
    </div>
  )
}
