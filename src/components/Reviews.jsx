import { useEffect, useRef } from 'react'

const ROW1 = [
  { type: 'GCSE Student', name: 'Aaron', title: 'BoostAI is great', bg: '#DBEAFE', text: 'It is really great that you can receive instant feedback for exam questions which are tailored to your exam board, and there are hundreds of questions for each topic.' },
  { type: 'Physics Student', name: 'Leo', title: 'Boosted my confidence', bg: '#EAF5EF', text: 'It has helped me to greater understand the content for my physics exam. The tutor feature is really helpful for boosting confidence going into this exam.' },
  { type: 'GCSE Student', name: 'Zane', title: 'Amazing app', bg: '#FFF5EA', text: 'The AI chatbot is extremely helpful and the walkthrough feature is great for learning new content - with the information being given bit by bit it really helps build knowledge.' },
  { type: 'Parent of Year 11', name: 'A Smith', title: 'Really helpful', bg: '#F5EAFF', text: 'My daughter has found BoostAI really helpful and easy to use. It helps with a number of subjects so feels very worthwhile signing up for.' },
  { type: 'GCSE Student', name: 'Molly', title: 'Best study app!', bg: '#FFEAEA', text: 'I love the way that it marks the questions for you and gives you help on the side if you need it.' },
]

const ROW2 = [
  { type: 'A-Level Student', name: 'Emma', title: 'Game changer', bg: '#FFF0EA', text: 'The instant marking means I know exactly where I\'m going wrong without waiting for a teacher to check my work.' },
  { type: 'IB Student', name: 'James', title: 'Incredible questions', bg: '#DBEAFE', text: 'The exam-style questions are incredible. They feel exactly like what I\'d see in the actual exam and the feedback is genuinely useful.' },
  { type: 'GCSE Student', name: 'Priya', title: 'Grade went up!', bg: '#EAFAF5', text: 'I went from a Grade 5 to a Grade 8 in just 6 weeks. The personalised feedback on my essays was game-changing.' },
  { type: 'A-Level Student', name: 'Marcus', title: 'Worth every penny', bg: '#EAF0FF', text: 'The amount of content available and the quality of the AI tutoring makes this worth every single penny.' },
  { type: 'Parent', name: 'Sarah T.', title: 'Highly recommend', bg: '#FFF0F5', text: "My son's confidence in Biology has skyrocketed since using Medly. The tutor explains things so clearly." },
]

const ROW3 = [
  { type: 'GCSE Student', name: 'Aisha', title: 'So useful!', bg: '#EAFFF5', text: 'BoostAI has everything I need — past papers, tutor explanations, and the marking is so accurate.' },
  { type: 'A-Level Student', name: 'Tom', title: 'Best revision tool', bg: '#FFF8EA', text: "I've tried loads of revision apps and BoostAI is by far the best. The AI genuinely understands my syllabus and the questions it generates are spot on." },
  { type: 'IB Student', name: 'Yui', title: 'Exactly what I needed', bg: '#DBEAFE', text: "The textbook section is brilliant — it's like having a private tutor available 24/7 for a fraction of the price." },
  { type: 'GCSE Student', name: 'Oliver', title: 'My secret weapon', bg: '#EAEAFF', text: 'I use Medly every single day during revision season. The adaptive practice finds exactly where I need to improve.' },
  { type: 'A-Level Student', name: 'Grace', title: 'Fantastic platform', bg: '#FFEAEF', text: 'The essay feedback is so detailed and helpful. It feels like a real examiner is looking at my work.' },
]

function ReviewCard({ type, name, title, bg, text }) {
  return (
    <div className="r-card">
      <div className="r-inner" style={{ background: bg }}>
        <div>
          <p className="r-type">{type}</p>
          <p className="r-name">{name}</p>
        </div>
        <div>
          <div className="r-title">{title}</div>
          <div className="r-stars">★★★★★</div>
          <p className="r-text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const dragRef = useRef(null)
  const rr1 = useRef(null)
  const rr2 = useRef(null)
  const rr3 = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const curX = useRef(0)
  const ao = useRef(0)
  const dir = useRef(1)
  const MAX = 220

  useEffect(() => {
    const rows = [rr1.current, rr2.current, rr3.current]
    rows.forEach(r => { r.style.transition = 'transform .1s ease-out' })

    function apply(x) {
      rows[0].style.transform = `translateX(${x}px)`
      rows[1].style.transform = `translateX(${-x * 0.75}px)`
      rows[2].style.transform = `translateX(${x * 0.9}px)`
    }

    function onMouseDown(e) {
      isDown.current = true
      startX.current = e.clientX - curX.current
      dragRef.current.style.cursor = 'grabbing'
      e.preventDefault()
    }

    function onMouseMove(e) {
      if (!isDown.current) return
      curX.current = Math.max(-MAX, Math.min(MAX, e.clientX - startX.current))
      apply(curX.current)
    }

    function onMouseUp() {
      if (!isDown.current) return
      isDown.current = false
      dragRef.current.style.cursor = 'grab'
      rows.forEach(r => { r.style.transition = 'transform .4s ease-out' })
      apply(0)
      curX.current = 0
      setTimeout(() => rows.forEach(r => { r.style.transition = 'transform .1s ease-out' }), 400)
    }

    function onTouchStart(e) {
      isDown.current = true
      startX.current = e.touches[0].clientX - curX.current
    }

    function onTouchMove(e) {
      if (!isDown.current) return
      curX.current = Math.max(-MAX, Math.min(MAX, e.touches[0].clientX - startX.current))
      apply(curX.current)
    }

    function onTouchEnd() {
      isDown.current = false
      rows.forEach(r => { r.style.transition = 'transform .4s ease-out' })
      apply(0)
      curX.current = 0
      setTimeout(() => rows.forEach(r => { r.style.transition = 'transform .1s ease-out' }), 400)
    }

    const el = dragRef.current
    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('touchend', onTouchEnd)

    let animId
    function drift() {
      if (!isDown.current) {
        ao.current += 0.25 * dir.current
        if (ao.current > 50) dir.current = -1
        if (ao.current < -50) dir.current = 1
        apply(ao.current)
      }
      animId = requestAnimationFrame(drift)
    }
    animId = requestAnimationFrame(drift)

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>Loved by 10,000+ students</h2>
        <p>Here's what our students have to say.</p>
      </div>
      <div className="reviews-drag" ref={dragRef}>
        <div className="reviews-rows">
          <div className="r-row" ref={rr1}>
            {ROW1.map(r => <ReviewCard key={r.name} {...r} />)}
          </div>
          <div className="r-row" ref={rr2}>
            {ROW2.map(r => <ReviewCard key={r.name} {...r} />)}
          </div>
          <div className="r-row" ref={rr3}>
            {ROW3.map(r => <ReviewCard key={r.name} {...r} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
