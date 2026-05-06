import { useState } from 'react'

const FAQS = [
  {
    q: 'How does the AI question generation work?',
    a: 'You paste in any question — from a past paper, textbook, or teacher\'s worksheet. BoostAI analyses the question type, topic and mark scheme style, then generates unlimited variations that test the same concept in different ways, perfectly aligned to your exam board.',
  },
  {
    q: 'Are the step-by-step solutions accurate?',
    a: 'BoostAI is trained specifically on GCSE and A-Level content and aligned to official mark schemes. Our accuracy rate is significantly higher than general AI models because we specialise. We always recommend cross-referencing with your teacher for complex or ambiguous questions.',
  },
  {
    q: 'Which exam boards does BoostAI support?',
    a: 'We currently support AQA, Edexcel (Pearson), OCR, and WJEC across all major GCSE and A-Level subjects. IB support is in beta. When you sign up, you select your exam board so all content is perfectly tailored to your specification.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: "Once logged in, click on your profile avatar on the bottom left of the screen and click 'Manage my subscription'. From there you can cancel at any time, for any reason, with no hassle.",
  },
  {
    q: 'Is this cheating?',
    a: "No. BoostAI is a revision and practice tool — it helps you understand how to solve problems, not do your coursework. Using it is equivalent to using a mark scheme or a worked example from a textbook. It's a completely legitimate study aid.",
  },
  {
    q: "Can I get a bursary if I can't afford a subscription?",
    a: 'At present, Medly is available for individual student subscriptions only. For schools interested in bulk licensing or institutional packages, please contact us at hello@boostai.co.uk.',
  },
  {
    q: 'How do I cancel?',
    a: "Go to account settings, click 'Manage subscription', and cancel at any time with no questions asked. You'll keep access until the end of your billing period.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="pad faq-section">
      <h2 className="h2 white">FAQs</h2>
      {FAQS.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`} onClick={() => toggle(i)}>
          <div className="faq-q">
            {item.q}
            <div className="faq-chevron">∨</div>
          </div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </section>
  )
}
