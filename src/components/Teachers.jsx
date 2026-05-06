import { useState } from 'react'

const STEM = [
  { subject: 'Biology', subjectClass: 'bio', emoji: '👩‍🏫', bg: '#d5b8c8', name: 'Ms. Leslie', meta: ['20+ years teaching experience', '15 years as a senior examiner', 'MSc Education Policy & International'] },
  { subject: 'Physics', subjectClass: 'phy', emoji: '👨‍🔬', bg: '#b8c8d5', name: 'Mr. Thornton', meta: ['18 years teaching A-Level Physics', 'Senior examiner for AQA', 'PhD Theoretical Physics'] },
  { subject: 'Chemistry', subjectClass: 'che', emoji: '🧪', bg: '#b8d5c0', name: 'Dr. Patel', meta: ['22 years in education', 'Chief examiner experience', 'BSc & PhD Chemistry, Oxford'] },
  { subject: 'Maths', subjectClass: 'mat', emoji: '📐', bg: '#d5b8b8', name: 'Ms. Bhandari', meta: ['16 years teaching A-Level Maths', 'Edexcel examiner', 'MSc Mathematics, Imperial'] },
]

const HUM = [
  { subject: 'English', subjectClass: 'eng', emoji: '📚', bg: '#d5d0b8', name: 'Ms. Hargreaves', meta: ['14 years teaching experience', 'AQA examiner for 8 years', 'MA English, Cambridge'] },
  { subject: 'History', subjectClass: 'his', emoji: '🏛️', bg: '#c8b8d5', name: 'Mr. Davies', meta: ['19 years teaching GCSE History', 'Edexcel examiner', 'MA History, UCL'] },
  { subject: 'Geography', subjectClass: 'geo', emoji: '🌍', bg: '#b8d5d0', name: 'Ms. Okonkwo', meta: ['12 years teaching experience', 'OCR senior examiner', 'BSc Geography, Durham'] },
]

function TeacherCard({ subject, subjectClass, emoji, bg, name, meta }) {
  return (
    <div className="t-card">
      <div className={`t-top ${subjectClass}`}>{subject}</div>
      <div className="t-img" style={{ background: bg }}>{emoji}</div>
      <div className="t-body">
        <div className="t-name">{name}</div>
        <ul className="t-meta">
          {meta.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default function Teachers() {
  const [tab, setTab] = useState('stem')

  return (
    <section className="pad teachers-section">
      <h2>Reviewed by experienced teachers</h2>
      <p className="teachers-sub">Experts who have taught and even examined for your subject</p>
      <div className="t-tabs">
        <button className={`t-tab${tab === 'stem' ? ' active' : ''}`} onClick={() => setTab('stem')}>STEM</button>
        <button className={`t-tab${tab === 'hum' ? ' active' : ''}`} onClick={() => setTab('hum')}>Humanities</button>
      </div>
      {tab === 'stem' && (
        <div className="t-scroll">
          {STEM.map(t => <TeacherCard key={t.name} {...t} />)}
        </div>
      )}
      {tab === 'hum' && (
        <div className="t-scroll">
          {HUM.map(t => <TeacherCard key={t.name} {...t} />)}
        </div>
      )}
    </section>
  )
}
