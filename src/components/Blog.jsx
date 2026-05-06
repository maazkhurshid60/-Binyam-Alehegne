export default function Blog() {
  return (
    <section className="pad blog-section">
      <div className="blog-header">
        <h2 className="h2">Stay up to date</h2>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="blog-grid">
        <div className="blog-card">
          <div className="blog-thumb" style={{ background: '#292524', color: '#fff' }}>
            <span style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1.2 }}>GCSE<br />RESULTS<br />DAY<br />2025</span>
          </div>
          <div className="blog-body">
            <div className="blog-tag">Results</div>
            <div className="blog-title">74% of surveyed students improved their grades while using BoostAI.</div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-thumb" style={{ background: '#EFF5FA', color: '#1c1c1e' }}>
            <span style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.2 }}>
              New Feature<br />
              <span style={{ fontSize: '32px' }}>Handwrite<br />your equations</span>
            </span>
          </div>
          <div className="blog-body">
            <div className="blog-tag">New Feature</div>
            <div className="blog-title">No More Forgetting Your Answers</div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-thumb" style={{ background: '#d5f0e4', color: '#1c1c1e' }}>
            <span style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.2 }}>
              Update<br />
              <span style={{ fontSize: '26px' }}>Cross-subject<br />Learning</span>
            </span>
          </div>
          <div className="blog-body">
            <div className="blog-tag">Update</div>
            <div className="blog-title">Connect concepts across disciplines</div>
          </div>
        </div>
      </div>
    </section>
  )
}
