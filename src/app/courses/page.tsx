import { courses } from '../../lib/courses'

export default function CoursesPage() {
  return (
    <main className="courses-shell">
      <header className="page-header">
        <div>
          <span className="eyebrow">Nos parcours</span>
          <h1>Formations professionnelles pour aller plus loin.</h1>
        </div>
        <a className="btn btn-primary" href="/login">Commencer un cours</a>
      </header>

      <section className="course-grid">
        {courses.map((course) => (
          <article key={course.slug} className="course-card">
            <div className="accent" style={{ background: course.accent }} />
            <div className="meta-row">
              <span className="tag">{course.category}</span>
              <span className="level">{course.level}</span>
            </div>

            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <div className="stats-row">
              <span>{course.duration}</span>
              <span>{course.students} apprenants</span>
              <span>★ {course.rating}</span>
            </div>

            <ul className="objectives">
              {course.objectives.slice(0, 3).map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>

            <a className="btn btn-secondary wide" href={`/courses/${course.slug}`}>
              Voir le cours
            </a>
          </article>
        ))}
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          background: linear-gradient(180deg, #f7f9ff 0%, #eef4ff 100%);
          color: #111827;
        }

        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .courses-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 30px;
        }
        .eyebrow {
          display: inline-block;
          background: rgba(79, 70, 229, 0.08);
          color: #4338ca;
          padding: 8px 12px;
          border-radius: 999px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.78rem;
        }
        h1 {
          margin: 12px 0 0;
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1.06;
          letter-spacing: -0.06em;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          padding: 12px 18px;
          font-weight: 700;
        }
        .btn-primary {
          background: linear-gradient(135deg, #4f46e5, #2563eb);
          color: white;
        }
        .btn-secondary {
          background: white;
          border: 1px solid #dfe5ef;
          color: #111827;
        }
        .wide { width: 100%; }
        .course-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .course-card {
          position: relative;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 22px;
          padding: 22px 20px 18px;
          box-shadow: 0 12px 20px rgba(15,23,42,0.04);
        }
        .accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 6px;
          border-radius: 22px 22px 0 0;
        }
        .meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
        }
        .tag, .level {
          display: inline-flex;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .tag {
          background: rgba(79, 70, 229, 0.08);
          color: #4338ca;
        }
        .level {
          background: rgba(15, 23, 42, 0.04);
          color: #334155;
        }
        h2 {
          margin: 18px 0 12px;
          font-size: 1.55rem;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }
        .course-card p {
          margin: 0;
          color: #475467;
          line-height: 1.7;
        }
        .stats-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px;
          margin-top: 18px;
          color: #344054;
          font-weight: 600;
          font-size: 0.92rem;
        }
        .objectives {
          margin: 18px 0 20px;
          padding-left: 18px;
          color: #475467;
          line-height: 1.9;
        }
        @media (max-width: 980px) {
          .course-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .page-header { display: grid; }
        }
        @media (max-width: 640px) {
          .course-grid { grid-template-columns: 1fr; }
          .courses-shell { padding-left: 14px; padding-right: 14px; }
        }
      `}</style>
    </main>
  )
}
