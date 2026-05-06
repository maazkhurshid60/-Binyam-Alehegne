export default function Features() {
  return (
    <section className="pad" style={{ background: '#EFF6FF' }}>
      <h2 className="h2" style={{ maxWidth: '760px', marginBottom: 0 }}>
        Everything you need to solve, practise and master any exam question
      </h2>
      <div className="features-grid">

        <div className="fc">
          <div className="fc-illus blue">
            <div className="tb-illus">
              <div className="tb-col">
                <div className="tb-b" style={{ width: '48px', height: '72px', background: '#c8dff5' }} />
                <div className="tb-b" style={{ width: '48px', height: '26px', background: '#ddeaf9' }} />
              </div>
              <div className="tb-col">
                <div className="tb-b" style={{ width: '72px', height: '52px', background: '#4a90d9' }} />
                <div className="tb-b" style={{ width: '72px', height: '28px', background: '#78b5e8' }} />
                <div className="tb-b" style={{ width: '72px', height: '22px', background: '#a8cce8' }} />
              </div>
              <div className="tb-col">
                <div className="tb-b" style={{ width: '40px', height: '38px', background: '#c8dff5' }} />
                <div className="tb-b" style={{ width: '40px', height: '62px', background: '#daeaf9' }} />
              </div>
            </div>
          </div>
          <div className="fc-body">
            <h3>Instant step-by-step solutions</h3>
            <p>Paste any question and get a full worked solution instantly — broken down step by step so you actually understand it, not just copy it.</p>
          </div>
        </div>

        <div className="fc">
          <div className="fc-illus blue">
            <div style={{ width: '85%' }}>
              <div className="il-row">
                <div className="il-num">1</div>
                <div className="il-grp">
                  <div className="il w80" />
                  <div className="il w60" />
                </div>
              </div>
              <div style={{ paddingLeft: '32px', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '14px' }}>
                <div className="il lt w70" />
                <div className="il lt" style={{ width: '90%' }} />
                <div className="il lt w80" />
                <div className="il lt w60" />
              </div>
              <div className="il-row">
                <div className="il-num">2</div>
                <div className="il-grp">
                  <div className="il w80" />
                  <div className="il w60" />
                </div>
              </div>
              <div style={{ paddingLeft: '32px' }}>
                <div className="il-dots">
                  <div className="il-dot" /><div className="il-dot" /><div className="il-dot" />
                </div>
              </div>
            </div>
          </div>
          <div className="fc-body">
            <h3>Generate unlimited similar questions</h3>
            <p>Understood a concept? Generate unlimited variations at the same difficulty and mark scheme — infinite practice, zero repetition.</p>
          </div>
        </div>

        <div className="fc">
          <div className="fc-illus pink">
            <div className="mk-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '14px' }}>
                <div className="mkl w90" /><div className="mkl w60" />
              </div>
              <div className="mk-row">
                <div className="mk-icon ok">✓</div>
                <div className="mk-lines"><div className="mkl w90" /><div className="mkl w60" /></div>
              </div>
              <div className="mk-row">
                <div className="mk-icon no">✗</div>
                <div className="mk-lines"><div className="mkl w90" /><div className="mkl w75" /></div>
              </div>
              <div className="mk-row" style={{ marginBottom: 0 }}>
                <div className="mk-icon ok">✓</div>
                <div className="mk-lines"><div className="mkl w90" /></div>
              </div>
            </div>
          </div>
          <div className="fc-body">
            <h3>AI marking &amp; feedback</h3>
            <p>Get your answers marked against official exam board mark schemes. Know exactly which marks you'd earn and why — just like a real examiner.</p>
          </div>
        </div>

        <div className="fc">
          <div className="fc-illus lavender">
            <div className="essay-illus">
              <div className="essay-line accent" style={{ width: '90%', marginBottom: '10px', height: '10px' }} />
              <div className="essay-line" style={{ width: '95%' }} />
              <div className="essay-line" style={{ width: '88%' }} />
              <div className="essay-line" style={{ width: '92%' }} />
              <div className="essay-line" style={{ width: '80%' }} />
              <div style={{ margin: '12px 0 12px', height: '1px', background: '#c8c8e8' }} />
              <div className="essay-line accent" style={{ width: '85%' }} />
              <div className="essay-line" style={{ width: '90%' }} />
              <div className="essay-line" style={{ width: '70%' }} />
            </div>
          </div>
          <div className="fc-body">
            <h3>All subjects &amp; exam boards</h3>
            <p>Covers AQA, Edexcel, OCR and WJEC across Physics, Chemistry, Biology, Maths, English and more — all aligned to your specification.</p>
          </div>
        </div>

        <div className="fc">
          <div className="fc-illus cream">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>✏️</div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#4a90d9', fontFamily: 'cursive' }}>2x+3=10</div>
              <div style={{ marginTop: '10px', background: '#4a90d9', color: '#fff', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, display: 'inline-block' }}>
                ··· 2x+3=10
              </div>
            </div>
          </div>
          <div className="fc-body">
            <h3>Track your weak spots</h3>
            <p>BoostAI identifies exactly which topics need more work and adapts the questions it generates to target your weakest areas automatically.</p>
          </div>
        </div>

        <div className="fc">
          <div className="fc-illus green">
            <div className="mock-illus">
              <div className="timer">45:00</div>
              <div className="mock-header" />
              <div className="mock-lines">
                <div className="il lt" style={{ width: '90%', marginBottom: '5px' }} />
                <div className="il lt w80" style={{ marginBottom: '5px' }} />
                <div className="il lt w70" style={{ marginBottom: '14px' }} />
                <div className="il-row" style={{ marginBottom: '8px' }}>
                  <div className="il-num" style={{ color: '#3a8a50', fontSize: '14px' }}>1.</div>
                  <div className="il-grp"><div className="il lt w80" /></div>
                </div>
                <div className="il-row">
                  <div className="il-num" style={{ color: '#3a8a50', fontSize: '14px' }}>2.</div>
                  <div className="il-grp"><div className="il lt w70" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="fc-body">
            <h3>Realistic mock exams</h3>
            <p>Full papers under real exam conditions. AI sets grade boundaries and gives you a proper results day experience to build exam confidence.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
