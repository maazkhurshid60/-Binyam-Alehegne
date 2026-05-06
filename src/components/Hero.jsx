export default function Hero({ isUS }) {
  return (
    <section className="hero">
      <h1>
        {isUS ? (
          <>Boost<span style={{ color: '#5B8FF9' }}>AI</span> generates and solves any high school exam question — instantly</>
        ) : (
          <>Boost<span style={{ color: '#5B8FF9' }}>AI</span> generates and solves any GCSE or A-Level question instantly</>
        )}
      </h1>
      <p className="hero-sub">
        Paste any question. BoostAI solves it step-by-step — then generates unlimited similar variations so you truly master every topic.
      </p>
      <a href="#" className="btn-dark">Sign up for Free</a>
      <div className="hero-update">New: BoostAI Generate – Unlimited Similar Questions From Any Question</div>
    </section>
  )
}
