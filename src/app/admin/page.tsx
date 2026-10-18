const stats = [
  { value: '1,284', label: 'apprenants' },
  { value: '42', label: 'cours actifs' },
  { value: '88%', label: 'taux d’achèvement' },
  { value: '$12.4k', label: 'revenus' },
]

const learners = [
  { name: 'Marie K.', course: 'Marketing Digital', progress: '92%', status: 'En cours' },
  { name: 'Joel B.', course: 'Développement Web', progress: '78%', status: 'Progression' },
  { name: 'Grace T.', course: 'Finance Personnelle', progress: '100%', status: 'Validé' },
  { name: 'Aubin M.', course: 'Marketing Digital', progress: '63%', status: 'À reprendre' },
]

const courseRows = [
  { title: 'Marketing Digital', students: 540, completion: '81%', revenue: '$4.2k' },
  { title: 'Développement Web', students: 820, completion: '76%', revenue: '$5.9k' },
  { title: 'Gestion Financière', students: 430, completion: '68%', revenue: '$2.3k' },
]

const actions = ['Créer un cours', 'Gérer les abonnements', 'Publier une certification', 'Envoyer un message']

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">N</div>
          <span>ntumba éduc</span>
        </div>

        <nav className="menu">
          <a className="active" href="/admin">Vue d’ensemble</a>
          <a href="/admin">Apprenants</a>
          <a href="/admin">Cours</a>
          <a href="/admin">Certifications</a>
          <a href="/admin">Finances</a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Administration</p>
            <h1>Tableau de bord admin</h1>
          </div>
          <a className="cta" href="/dashboard">Retour au dashboard</a>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <div className="panel-grid">
          <div className="panel large-panel">
            <div className="panel-head">
              <h2>Progression des apprenants</h2>
              <button>Exporter</button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Apprenant</th>
                    <th>Cours</th>
                    <th>Progression</th>
                    <th>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {learners.map((learner) => (
                    <tr key={learner.name}>
                      <td>{learner.name}</td>
                      <td>{learner.course}</td>
                      <td>{learner.progress}</td>
                      <td>
                        <span className={`status ${learner.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {learner.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel">
            <div className="panel-head">
              <h2>Actions rapides</h2>
            </div>
            <div className="action-list">
              {actions.map((action) => (
                <button key={action} className="action-btn" type="button">{action}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h2>Performance des cours</h2>
          </div>

          <div className="course-list">
            {courseRows.map((course) => (
              <div key={course.title} className="course-row">
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.students} apprenants</p>
                </div>
                <div className="row-metrics">
                  <span>Complétion: {course.completion}</span>
                  <span>Revenus: {course.revenue}</span>
                </div>
              </div>
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

        .admin-shell {
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
          padding: 34px 30px 58px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
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
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 22px;
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

        .panel-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(260px, 0.8fr);
          gap: 20px;
          margin-bottom: 22px;
        }

        .panel {
          background: rgba(255,255,255,0.84);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 22px;
          padding: 22px;
        }

        .large-panel {
          padding-bottom: 10px;
        }

        .panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
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

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          text-align: left;
          padding: 12px 10px;
          border-bottom: 1px solid #e2e8f0;
        }

        th {
          color: #475467;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        td {
          color: #111827;
          font-weight: 600;
        }

        .status {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .en-cours {
          background: rgba(59,130,246,0.12);
          color: #1d4ed8;
        }

        .progression {
          background: rgba(245,158,11,0.12);
          color: #b45309;
        }

        .validé {
          background: rgba(16,185,129,0.12);
          color: #047857;
        }

        .à-reprendre {
          background: rgba(239,68,68,0.1);
          color: #b91c1c;
        }

        .action-list {
          display: grid;
          gap: 12px;
        }

        .action-btn {
          text-align: left;
          width: 100%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 14px;
          font-weight: 700;
          color: #111827;
        }

        .course-list {
          display: grid;
          gap: 14px;
        }

        .course-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px 18px;
        }

        .course-row h3 {
          margin: 0 0 6px;
          font-size: 1.08rem;
        }

        .course-row p {
          margin: 0;
          color: #475467;
        }

        .row-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          color: #344054;
          font-weight: 700;
        }

        @media (max-width: 980px) {
          .admin-shell { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .panel-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .content { padding: 24px 16px 40px; }
          .stats-grid, .course-row, .topbar, .panel-head {
            grid-template-columns: 1fr;
            display: grid;
          }
          .course-row {
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  )
}
