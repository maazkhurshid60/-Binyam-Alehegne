import { useState } from 'react'

const ITEMS = [
  {
    q: 'Made for learning',
    a: 'BoostAI is designed to make you a better student — not to do your homework for you. We show you how to solve a question step by step, not just the answer. The goal is that after using BoostAI, you could walk into any exam and solve any variation of that question yourself. That\'s real learning.',
  },
  {
    q: 'Made with sustainability in mind',
    a: 'We\'re committed to sustainable AI practices and minimising our environmental impact. All our data centres use renewable energy. We invest in Gold Standard accredited carbon removal projects to offset our emissions. Starting March 2026, we will send out newsletters to all our paid members about our offsetting initiatives and our users can help us choose projects to support.',
  },
  {
    q: 'Made for privacy',
    a: 'Your data is yours. We prioritise privacy and security in everything we build. We do not currently use your data for fine tuning or training our AI models, if this changes in the future we will let you know in advance and give you the choice to opt out.',
  },
]

export default function Philosophy() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="pad philosophy">
      <p className="philosophy-intro">Our philosophy on AI is a little different</p>
      <div className="philosophy-items">
        {ITEMS.map((item, i) => (
          <div key={i} className={`phi-item${openIndex === i ? ' open' : ''}`} onClick={() => toggle(i)}>
            <div className="phi-q">
              {item.q}
              <div className="phi-chevron">{openIndex === i ? '∧' : '∨'}</div>
            </div>
            <div className="phi-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
