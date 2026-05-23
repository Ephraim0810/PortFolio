import { extras } from '../data.js'

export default function Beyond() {
  return (
    <section id="beyond">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>Competitions, certifications &amp; community
            </div>
            <h2>Where I learn outside the classroom.</h2>
          </div>
          <p>
            Robotics seasons, self-taught certifications, and the hobbies that
            quietly shape how I think.
          </p>
        </div>

        <div className="extra-grid">
          {extras.map((e, i) => (
            <div className="extra" key={i}>
              <div className="extra-icon">{e.icon}</div>
              <h4>{e.title}</h4>
              <div className="role">{e.role}</div>
              <p>{e.body}</p>
              <div className="extra-foot">
                <span>{e.footLeft}</span>
                <span>{e.footRight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
