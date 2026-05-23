import Arrow from './Arrow.jsx'
import { contact } from '../data.js'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="foot-wrap">
        <h2 className="foot-cta">
          Have an idea, an opportunity,
          <br />
          or a coffee to share? <em>Lets Connect!</em>
        </h2>

        <div className="foot-grid">
          <div className="foot-col">
            <h6>Email</h6>
            <a href={`mailto:${contact.email}`}>
              {contact.email}
              <Arrow />
            </a>
          </div>
          <div className="foot-col">
            <h6>GitHub</h6>
            <a href={contact.github.url} target="_blank" rel="noopener noreferrer">
              {contact.github.handle}
              <Arrow />
            </a>
          </div>
          <div className="foot-col">
            <h6>Phone</h6>
            <a href={`tel:${contact.phone.tel}`}>
              {contact.phone.display}
              <Arrow />
            </a>
          </div>
          <div className="foot-col">
            <h6>Elsewhere</h6>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <Arrow />
            </a>
            <a href={contact.cvUrl} target="_blank" rel="noopener noreferrer">
              Read CV (PDF)
              <Arrow />
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="signature">
            <span className="dot"></span>Designed &amp; built by Ephraim Toji — 2026
          </div>
          <div>v1.0 · Singapore</div>
        </div>
      </div>
    </footer>
  )
}
