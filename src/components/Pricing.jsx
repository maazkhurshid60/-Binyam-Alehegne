const PLANS = [
  {
    id: 'single',
    label: 'SINGLE SUBJECT',
    price: '24.99',
    period: '/ month',
    sub: 'One subject · Cancel anytime',
    features: [
      'Choose 1 subject: Maths, Physics, Bio or Chem',
      'Unlimited AI step-by-step solutions',
      'Every major UK exam board',
      'Practice variations & streak tracking',
      'Cancel anytime — no commitment',
    ],
    btn: 'Get Started',
    highlight: false,
  },
  {
    id: 'monthly',
    label: 'MONTHLY',
    price: '29.99',
    period: '/ month',
    sub: 'Billed monthly · Cancel anytime',
    features: [
      'Unlimited AI step-by-step solutions',
      'All 4 subjects (Maths, Physics, Bio, Chem)',
      'Every major UK exam board',
      'Practice variations & streak tracking',
      'Cancel anytime — no commitment',
    ],
    btn: 'Start Monthly',
    highlight: false,
  },
  {
    id: 'annual',
    label: 'ANNUAL',
    price: '299',
    period: '/ year',
    original: '£359.88',
    saving: 'Save £60.88',
    badge: 'BEST VALUE',
    features: [
      'Everything in Monthly, plus...',
      '2 months free (equivalent)',
      'Priority access to new subjects',
      'AI essay marker (A-Level beta)',
      'Printable revision packs',
    ],
    btn: 'Get Annual — Best deal',
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section className="pad pricing-section" id="pricing">
      <h2 className="pricing-heading">Pick a plan. Start acing exams.</h2>
      <p className="pricing-tagline">No hidden fees. Cancel anytime. Prices in GBP</p>

      <div className="p-grid">
        {PLANS.map(plan => (
          <div key={plan.id} className={`p-card-new${plan.highlight ? ' p-card-highlight' : ''}`}>
            {plan.badge && <div className="p-badge">{plan.badge}</div>}

            <div className="p-label-new">{plan.label}</div>

            <div className="p-price-row">
              <span className="p-pound">£</span>
              <span className="p-amount">{plan.price}</span>
              <span className="p-period-new">{plan.period}</span>
            </div>

            {plan.original && (
              <div className="p-savings-row">
                <span className="p-strike">{plan.original}</span>
                <span className="p-save-pill">{plan.saving}</span>
              </div>
            )}

            <p className="p-sub">{plan.sub}</p>

            <hr className="p-divider" />

            <ul className="p-features">
              {plan.features.map((f, i) => (
                <li key={i}>
                  <span className="p-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button className={`p-cta${plan.highlight ? ' p-cta-light' : ' p-cta-dark'}`}>
              {plan.btn}
            </button>
          </div>
        ))}
      </div>

      <p className="p-footnote">All prices in GBP · Includes VAT · Cancel anytime</p>
    </section>
  )
}
