import { courses } from '../../lib/courses'

export default function CertificationPage() {
  const course = courses[0]

  return (
    <main className="cert-shell">
      <div className="cert-card">
        <span className="eyebrow">Certification</span>
        <h1>{course.title}</h1>
        <p>Vous avez terminé le parcours. Voici votre certificat de progression.</p>

        <div className="badge-wrap">
          <div className="badge">✓</div>
          <div>
            <strong>Certification délivrée</strong>
            <span>Progression validée à 92%</span>
          </div>
        </div>

        <div className="stats-grid">
          <div><span>Module</span><strong>3/3</strong></div>
          <div><span>Score</span><strong>92%</strong></div>
          <div><span>Statut</span><strong>Validé</strong></div>
        </div>

        <a className="btn btn-primary" href="/dashboard">Retour au tableau de bord</a>
      </div>

      <style jsx>{`
        :global(body) { margin: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(180deg, #f7f9ff 0%, #eef4ff 100%); color: #111827; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .cert-shell { min-height: 100vh; display: grid; place-items: center; padding: 30px 20px; }
        .cert-card {
          width: min(100%, 720px);
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 28px;
          padding: 30px 26px;
          box-shadow: 0 24px 50px rgba(15,23,42,0.06);
        }
        .eyebrow {
          display: inline-block; background: rgba(16,185,129,0.08); color: #047857; padding: 8px 12px; border-radius: 999px; font-size: 0.75rem;
          font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;
        }
        h1 { margin: 14px 0 10px; font-size: clamp(2.2rem, 5vw, 3rem); letter-spacing: -0.06em; }
        p { margin: 0; color: #475467; line-height: 1.7; }
        .badge-wrap {
          display: flex; align-items: center; gap: 18px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 18px; padding: 18px; margin-top: 22px;
        }
        .badge {
          width: 60px; height: 60px; border-radius: 18px; display: grid; place-items: center; font-size: 2rem; font-weight: 800; background: linear-gradient(135deg,#4f46e5,#10b981); color: white;
        }
        .badge-wrap strong { display: block; font-size: 1.1rem; }
        .badge-wrap span { color: #475467; }
        .stats-grid {
          margin-top: 22px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px;
        }
        .stats-grid div {
          background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 18px 14px;
        }
        .stats-grid span { display: block; color: #475467; margin-bottom: 8px; }
        .stats-grid strong { font-size: 1.6rem; letter-spacing: -0.05em; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center; width: 100%; margin-top: 22px; border-radius: 12px; padding: 14px 16px; font-weight: 800; 
        }
        .btn-primary { background: linear-gradient(135deg,#4f46e5,#2563eb); color: white; }
      `}</style>
    </main>
  )
}
