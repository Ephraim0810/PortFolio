import Arrow from './Arrow.jsx'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">E</span>
          Ephraim<small>/ AI</small>
        </a>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#beyond">Beyond</a>
        </nav>
        <a href="#contact" className="nav-cta">
          Get in touch
          <Arrow />
        </a>
      </div>
    </header>
  )
}
