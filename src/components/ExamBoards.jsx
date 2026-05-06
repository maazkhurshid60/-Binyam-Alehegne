import { useState } from 'react'

const LEVELS = {
  gcse: { boards: ['AQA', 'Edexcel', 'OCR', 'WJEC'], boardsLabel: 'AQA · Edexcel · OCR · WJEC' },
  igcse: { boards: ['Cambridge IGCSE', 'Edexcel IGCSE'], boardsLabel: 'Cambridge · Edexcel' },
  alevel: { boards: ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Cambridge'], boardsLabel: 'AQA · Edexcel · OCR · WJEC' },
  ib: { boards: ['IB Diploma', 'IB MYP'], boardsLabel: 'IB Diploma · IB MYP' },
}

const SUBJECTS = {
  gcse: ['Mathematics', 'Physics', 'Chemistry'],
  igcse: ['Mathematics', 'Physics', 'Chemistry'],
  alevel: ['Mathematics', 'Physics', 'Chemistry'],
  ib: ['Mathematics', 'Physics', 'Chemistry'],
}

export default function ExamBoards() {
  const [level, setLevel] = useState('gcse')
  const [activeBoards, setActiveBoards] = useState(['AQA'])

  function switchLevel(key) {
    setLevel(key)
    setActiveBoards([LEVELS[key].boards[0]])
  }

  function toggleBoard(board) {
    setActiveBoards(prev =>
      prev.includes(board) ? prev.filter(b => b !== board) : [...prev, board]
    )
  }

  const currentLevel = LEVELS[level]

  return (
    <section className="pad exam-boards">
      <h2 className="h2" style={{ textAlign: 'center', maxWidth: 'none', marginBottom: '40px' }}>
        Matched to your exam board
      </h2>

      <div className="level-tabs">
        {[['gcse','GCSE'],['igcse','IGCSE'],['alevel','A-Level'],['ib','IB']].map(([key, label]) => (
          <button
            key={key}
            className={`level-tab${level === key ? ' active' : ''}`}
            onClick={() => switchLevel(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="board-tags">
        {currentLevel.boards.map(board => (
          <button
            key={board}
            className={`board-tag${activeBoards.includes(board) ? ' active' : ''}`}
            onClick={() => toggleBoard(board)}
          >
            {board}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '36px', maxWidth: '680px' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#6b7280', marginBottom: '14px' }}>
          Available subjects
        </p>
        <div style={{ borderTop: '1px solid #BFDBFE' }}>
          {SUBJECTS[level].map(subject => (
            <div key={subject} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #BFDBFE' }}>
              <span style={{ fontSize: '20px', fontWeight: 500, color: '#0b1120', letterSpacing: '-0.01em' }}>{subject}</span>
              <span style={{ fontSize: '13px', color: '#5B8FF9', fontWeight: 600 }}>{currentLevel.boardsLabel}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="req-link" style={{ marginTop: '24px' }}>
        Don't see your subject? <a href="#">Request it here.</a>
      </p>
    </section>
  )
}
