export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <h2 className="footer-heading">Built to boost every student</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
          <span style={{ fontSize: '22px', fontWeight: 600, color: 'rgba(255,255,255,.7)', letterSpacing: '-0.02em' }}>
            Boost<span style={{ color: '#5B8FF9' }}>AI</span>
          </span>
        </div>
        <div className="footer-links">
          <a href="#">Cookies</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Safety</a>
          <a href="#">Bursary</a>
          <a href="#">Contact</a>
        </div>
        <p className="footer-disclaimer">
          AQA, Edexcel (Pearson), OCR and WJEC were not involved in the production of, and do not endorse, the resources or AI tutoring provided on the BoostAI platform. BoostAI is an independent revision tool.
        </p>
      </div>
    </footer>
  )
}
