import { useState } from 'react'

const PLANS = {
  '26': [
    { type: 'Monthly', desc: 'Monthly billing, full access, cancel anytime.', price: '9.99', suffix: '/month' },
    { type: 'One Time', desc: 'Get unlimited access until 31st July 2026.', price: '29.99', suffix: '' },
  ],
  '27': [
    { type: 'Monthly', desc: 'Monthly billing, full access, cancel anytime.', price: '9.99', suffix: '/month' },
    { type: 'One Time', desc: 'Get unlimited access until 31st July 2027.', price: '59.99', suffix: '' },
  ],
}

export default function Pricing() {
  const [year, setYear] = useState('26')

  return (
    <section className="pad pricing-section" id="pricing">
      <h2 className="h2">Let's start boosting</h2>
      <p className="pricing-sub">
        Unlimited AI question solving &amp; generation for one low price. <strong>Always free to start.</strong>
      </p>
      <div className="p-tabs">
        <button className={`p-tab${year === '26' ? ' active' : ''}`} onClick={() => setYear('26')}>2026 Exams</button>
        <button className={`p-tab${year === '27' ? ' active' : ''}`} onClick={() => setYear('27')}>2027 Exams</button>
      </div>
      <div className="p-plans">
        {PLANS[year].map(plan => (
          <div className="p-card" key={plan.type}>
            <div className="p-type">{plan.type}</div>
            <div className="p-desc">{plan.desc}</div>
            <div className="p-price">
              <sup>£</sup>{plan.price}
              {plan.suffix && <span>{plan.suffix}</span>}
            </div>
            <button className="btn-plan">Start for Free</button>
            <div className="p-note">Always free to start. No credit card required.</div>
          </div>
        ))}
      </div>
      <p className="p-school">
        Interested for your school or classroom?<br />
        Contact us at <a href="mailto:hello@boostai.co.uk">hello@boostai.co.uk</a>
      </p>
    </section>
  )
}
