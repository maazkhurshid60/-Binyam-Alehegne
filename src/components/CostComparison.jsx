export default function CostComparison() {
  return (
    <section className="pad cost-section">
      <h2>Private tutoring quality at a fraction of the cost</h2>
      <p className="cost-sub">From £9.99/month — 90% cheaper than a single tutoring session<sup>†</sup>.</p>
      <div className="cost-cards">
        <div className="cost-card">
          <div className="cost-label">Private tutoring</div>
          <div className="cost-price">~£96</div>
          <div className="cost-price-sub">per month<sup>†</sup></div>
        </div>
        <div className="cost-card medly">
          <div className="cost-label" style={{ opacity: '.5' }}>BoostAI</div>
          <div className="cost-price">£9.99</div>
          <div className="cost-price-sub" style={{ opacity: '.5' }}>per month</div>
        </div>
      </div>
      <p className="cost-note">
        † Based on Sutton Trust (2019) data showing the average cost of private tutoring in England and Wales is approximately £24/hour. A student receiving one private tutoring session per week pays approximately £96/month, compared to BoostAI at £9.99/month — a saving of approximately 90%.{' '}
        <a href="#" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'underline' }}>See our full cost comparison and citation.</a>
      </p>
    </section>
  )
}
