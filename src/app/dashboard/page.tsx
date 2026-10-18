const courses = [
  { title: 'Marketing Digital', progress: '76%', duration: '3/4 modules', status: 'En cours' },
  { title: 'Design Thinking', progress: '42%', duration: '2/5 modules', status: 'À reprendre' },
  { title: 'Finance Personnelle', progress: '91%', duration: '4/4 modules', status: 'Terminé' },
]

const stats = [
  { value: '14', label: 'cours suivis' },
  { value: '78%', label: 'progression' },
  { value: '5', label: 'certifications' },
]

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">N</div>
          <span>ntumba éduc</span>
        </div>

        <nav className="menu">
          <a className="active" href="/dashboard">Accueil</a>
          <a href="/dashboard">Mes cours</a>
          <a href="/dashboard">Progression</a>
          <a href="/dashboard">Certifications</a>
          <a href="/dashboard">Paramètres</a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Bonjour, Ntumba</p>
            <h1>Tableau de bord</h1>
          </div>
          <a className="cta" href="/">Retour à l’accueil</a>
        </header>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>Mes cours</h2>
            <button>Voir tout</button>
          </div>

          <div className="course-list">
            {courses.map((course) => (
              <article key={course.title} className="course-item">
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.duration}</p>
                </div>

                <div className="course-actions">
                  <span className="status">{course.status}</span>
                  <div className="mini-progress">
                    <span style={{ width: course.progress }} />
                  </div>
                  <strong>{course.progress}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          background: #f5f7ff;
          color: #111827;
        }

        * { box-sizing: border-box; }

        a { text-decoration: none; }

        button {
          border: none;
          cursor: pointer;
          font: inherit;
        }

        .dashboard-shell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 260px 1fr;
          background: linear-gradient(180deg, #f7f9ff 0%, #eef4ff 100%);
        }

        .sidebar {
          background: #0f172a;
          color: white;
          padding: 24px 20px;
        }

        .brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: lowercase;
          margin-bottom: 28px;
        }

        .brand-mark {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          display: grid;
          place-items: center;
          font-weight: 800;
        }

        .menu {
          display: grid;
          gap: 8px;
        }

        .menu a {
          padding: 12px 14px;
          border-radius: 12px;
          color: #dfeafc;
          font-weight: 600;
        }

        .menu a.active,
        .menu a:hover {
          background: rgba(255,255,255,0.08);
          color: white;
        }

        .content {
          padding: 34px 30px 50px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          margin-bottom: 20px;
        }

        .eyebrow {
          margin: 0 0 6px;
          color: #475467;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 2.8rem);
          letter-spacing: -0.05em;
        }

        .cta {
          padding: 12px 16px;
          background: white;
          border: 1px solid #dfe5ef;
          border-radius: 12px;
          color: #111827;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 20px;
          padding: 22px 18px;
          display: grid;
          gap: 8px;
        }

        .stat-card strong {
          font-size: 2rem;
          letter-spacing: -0.05em;
        }

        .stat-card span {
          color: #475467;
          font-weight: 600;
        }

        .panel {
          background: rgba(255,255,255,0.84);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 22px;
          padding: 24px;
        }

        .panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .panel-head h2 {
          margin: 0;
          font-size: 1.5rem;
        }

        .panel-head button {
          background: #eef2ff;
          color: #4338ca;
          border-radius: 10px;
          padding: 10px 12px;
          font-weight: 700;
        }

        .course-list {
          display: grid;
          gap: 16px;
        }

        .course-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 18px;
        }

        .course-item h3 {
          margin: 0 0 6px;
          font-size: 1.1rem;
        }

        .course-item p {
          margin: 0;
          color: #475467;
        }

        .course-actions {
          display: grid;
          gap: 8px;
          min-width: 180px;
          justify-items: end;
        }

        .status {
          background: rgba(34,197,94,0.12);
          color: #15803d;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 6px 8px;
          border-radius: 999px;
        }

        .mini-progress {
          width: 150px;
          height: 8px;
          background: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
        }

        .mini-progress span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #22c55e);
          border-radius: inherit;
        }

        @media (max-width: 900px) {
          .dashboard-shell {
            grid-template-columns: 1fr;
          }

          .sidebar {
            padding-bottom: 12px;
          }

          .menu {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .course-item,
          .topbar,
          .panel-head {
            grid-template-columns: 1fr;
            display: grid;
          }

          .course-actions {
            justify-items: start;
          }
        }
      `}</style>
    </main>
  )
}
