import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Beyond from './components/Beyond.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Highlight the active section in the nav as the user scrolls.
  useEffect(() => {
    const ids = ['projects', 'experience', 'beyond']
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const links = document.querySelectorAll('.nav-links a')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const i = ids.indexOf(entry.target.id)
          links.forEach((a) => a.classList.remove('active'))
          if (i >= 0 && links[i]) links[i].classList.add('active')
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Scroll reveal — fade up as elements enter viewport.
  useEffect(() => {
    const selectors = [
      '.hero .hero-tag',
      '.hero .hero-lead',
      '.hero .hero-actions',
      '.hero .hero-card',
      '.section-head',
      '.projects-grid > .project',
      '.timeline > .tl-row',
      '.extra-grid > .extra',
      '.marquee',
    ]
    const els = document.querySelectorAll(selectors.join(','))
    els.forEach((el) => el.classList.add('reveal'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Hero headline + footer CTA — slide in from right on enter, slide out to right on exit.
  useEffect(() => {
    const els = document.querySelectorAll(
      '.hero h1, footer .foot-cta'
    )
    els.forEach((el) => el.classList.add('slide-x'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle('in', e.isIntersecting)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Beyond />
      </main>
      <Footer />
    </>
  )
}
