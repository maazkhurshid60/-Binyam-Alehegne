export default function AppPreview() {
  return (
    <div className="app-preview-wrap">
      <div className="preview-topbar">
        <div className="chip">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect width="16" height="16" rx="3" fill="#000" />
            <path d="M3 11V6l2.5 3.5L8 6v5M9.5 11V5.5l4 3-4 2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          A-Level Physics · AQA
        </div>
        <div className="chip">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="2" width="14" height="12" rx="2" stroke="#555" strokeWidth="1.5" />
            <path d="M4 6h8M4 9h5" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Solve Mode ▾
        </div>
      </div>
      <div className="preview-card">
        <div className="q-badge">
          <span>0</span>
          <span>3</span>
        </div>
        <p className="q-text">
          A spring with spring constant 40 N/m is extended by 0.3 m. Calculate the elastic potential energy stored in the spring. [2 marks]
        </p>
        <button className="mark-btn">Solve with AI</button>
        <div className="cf" />
      </div>
    </div>
  )
}
