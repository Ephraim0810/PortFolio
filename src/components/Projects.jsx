import Arrow from './Arrow.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>Past work · 2022 — 2024
            </div>
            <h2>Early projects across design, cybersec and accessibility.</h2>
          </div>
          <p>
            Five case studies from secondary school — three from the Design
            Elective Programme, two live tools from MINDEF&apos;s Sentinel
            cybersecurity programme. My AI projects are landing here soon. For
            now, these are the ones that taught me how to think about users,
            systems, and shipping something real.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project" key={p.id}>
              <a
                className="project-link"
                href={p.detailUrl}
                aria-label={`Open ${p.title} case study`}
              ></a>
              <div className="project-cover">
                <span className="cover-tag">{p.tag}</span>
                <span className="cover-yr">{p.year}</span>
                {p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" />
                ) : (
                  <div
                    className="cover-glyph"
                    style={
                      p.glyphSmall
                        ? {
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 42,
                            letterSpacing: 0,
                            fontWeight: 400,
                          }
                        : undefined
                    }
                  >
                    {p.glyph}
                  </div>
                )}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a className="p-open" href={p.detailUrl}>
                    Read case study
                    <Arrow />
                  </a>
                  {p.liveUrl && (
                    <a
                      className="p-repo"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try live
                      <Arrow />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
