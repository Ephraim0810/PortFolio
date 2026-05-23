import Arrow from './Arrow.jsx'
import { techMarquee } from '../data.js'

export default function Hero() {
  // Double the list so the CSS marquee loops seamlessly.
  const marquee = [...techMarquee, ...techMarquee]

  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow hero-tag">
              <span className="dot"></span>
              Available for Summer &apos;26 internships
            </div>

            <h1>
              Designing <em>intelligence</em>
              <span className="nl">that feels human.</span>
            </h1>

            <p className="hero-lead">
              I&apos;m <b>Ephraim Toji</b> — a student specialising in{' '}
              <b>Artificial Intelligence</b>. I build models, agents, and
              tools that turn complex systems into something you can actually
              use. Beyond this, I am a cinephile, and an experienced designer, passions that connect my personal self with what I do professionally .
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View selected work
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 6h6M6 3l3 3-3 3" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Read about me
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Quick facts">
            <div className="hero-card-row">
              <span className="k">Status</span>
              <span className="v">
                <span className="pulse"></span>Building &amp; learning
              </span>
            </div>
            <div className="hero-card-row">
              <span className="k">Focus</span>
              <span className="v">LLM agents · CV · NLP</span>
            </div>
            <div className="hero-card-row">
              <span className="k">Based</span>
              <span className="v">Singapore</span>
            </div>
            <div className="hero-bento">
              <div className="bento-cell">
                <div className="n">3×</div>
                <div className="l">FLL seasons</div>
              </div>
              <div className="bento-cell">
                <div className="n">2yr</div>
                <div className="l">Student Council</div>
              </div>
              <div className="bento-cell">
                <div className="n">3</div>
                <div className="l">Cisco certs</div>
              </div>
              <div className="bento-cell">
                <div className="n">3</div>
                <div className="l">Design projects</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {marquee.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
