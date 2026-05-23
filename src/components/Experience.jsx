import { useState } from 'react'
import { experience } from '../data.js'

// Render a simple **bold** substring in the org string.
function renderOrg(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <b key={i}>{part.slice(2, -2)}</b>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export default function Experience() {
  const [filter, setFilter] = useState('all')

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'work', label: 'Work' },
    { key: 'edu', label: 'Education' },
  ]

  const rows =
    filter === 'all' ? experience : experience.filter((r) => r.kind === filter)

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>Education &amp; work
            </div>
            <h2>The path so far, briefly.</h2>
          </div>
          <p>
            Where I&apos;ve studied, where I&apos;ve worked, and the kind of
            problems each one taught me to take seriously.
          </p>
        </div>

        <div className="timeline-tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={filter === t.key ? 'on' : ''}
              onClick={() => setFilter(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {rows.length === 0 ? (
          <div
            style={{
              padding: '48px 0',
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '14.5px',
            }}
          >
            No entries here yet — check back soon.
          </div>
        ) : (
          <div className="timeline">
            {rows.map((r, i) => (
              <div className="tl-row" key={i}>
                <div className="tl-when">{r.when}</div>
                <div className="tl-main">
                  <h4>{r.title}</h4>
                  <div className="org">{renderOrg(r.org)}</div>
                  <p>{r.body}</p>
                  {r.leaders && r.leaders.length > 0 && (
                    <div className="tl-leaders">
                      {r.leaders.map((l, j) => (
                        <div className="tl-leader" key={j}>
                          <div className="role-tag">Leadership</div>
                          <h5>{l.title}</h5>
                          <div className="when-sub">{l.when}</div>
                          <p>{l.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <span className="tl-chip">{r.chip}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
