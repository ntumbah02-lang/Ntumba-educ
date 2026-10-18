const courses = [
  {
    slug: 'marketing-digital',
    title: 'Marketing Digital & E-commerce',
    level: 'Intermédiaire',
    duration: '6 semaines',
    students: 540,
    rating: 4.9,
    category: 'Business',
    accent: '#4f46e5',
    description:
      'Apprenez à concevoir une stratégie digitale, gérer des campagnes, analyser les performances et vendre en ligne avec des outils concrets.',
    objectives: [
      'Créer une stratégie marketing digitale claire',
      'Gérer les réseaux sociaux et la publicité en ligne',
      'Analyser les performances avec des métriques simples',
      'Mettre en place une vente en ligne efficace',
    ],
    modules: [
      { title: 'Fondements du marketing digital', lessons: ['Le parcours client', 'Les canaux de diffusion', 'Les KPI essentiels'] },
      { title: 'Réseaux sociaux et contenu', lessons: ['Stratégie de contenu', 'Planning éditorial', 'Engagement et conversion'] },
      { title: 'E-commerce et conversion', lessons: ['Créer une boutique digitale', 'Funnels de vente', 'Optimisation du panier'] },
    ],
  },
  {
    slug: 'developpement-web',
    title: 'Développement Web',
    level: 'Débutant à intermédiaire',
    duration: '8 semaines',
    students: 820,
    rating: 4.8,
    category: 'IT & Code',
    accent: '#0ea5e9',
    description:
      'Maîtrisez les bases du web moderne : HTML, CSS, JavaScript, React, et la logique de création d’interfaces utiles et responsives.',
    objectives: [
      'Créer des interfaces web propres et efficaces',
      'Comprendre le navigateur et le DOM',
      'Utiliser JavaScript pour gérer l’interactivité',
      'Construire des composants React réutilisables',
    ],
    modules: [
      { title: 'HTML & CSS', lessons: ['Structure de page', 'Flexbox et grille', 'Responsive design'] },
      { title: 'JavaScript', lessons: ['Variables', 'Fonctions', 'Événements'] },
      { title: 'React', lessons: ['Composants', 'Props et state', 'Router et navigation'] },
    ],
  },
  {
    slug: 'gestion-financiere',
    title: 'Gestion Financière',
    level: 'Débutant',
    duration: '5 semaines',
    students: 430,
    rating: 4.7,
    category: 'Finance',
    accent: '#10b981',
    description:
      'Apprenez à gérer vos finances, lire les tableaux de bord, piloter un budget et prendre des décisions financières plus sûres.',
    objectives: [
      'Construire un budget simple et réaliste',
      'Suivre les revenus et dépenses',
      'Comprendre les ratios financiers de base',
      'Prendre des décisions financières éclairées',
    ],
    modules: [
      { title: 'Budget personnel', lessons: ['Les revenus', 'Les dépenses', 'Les priorités'] },
      { title: 'Analyse financière', lessons: ['Profitabilité', 'Cout et marge', 'Tableaux de bord'] },
      { title: 'Planification de trésorerie', lessons: ['Prévision', 'Épargne', 'Décisions d’investissement'] },
    ],
  },
]

export default function CourseDetailPage() {
  const course = courses[0]

  return (
    <main className="detail-shell">
      <div className="hero-block" style={{ background: `linear-gradient(135deg, ${course.accent}22, #ffffff)` }}>
        <div className="hero-copy">
          <span className="eyebrow">{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="meta-row">
            <span>{course.level}</span>
            <span>{course.duration}</span>
            <span>{course.students} apprenants</span>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="/dashboard">Suivre ce cours</a>
            <a className="btn btn-secondary" href="/courses">Retour aux cours</a>
          </div>
        </div>
      </div>

      <section className="content-grid">
        <div className="main-panel">
          <h2>Objectifs du cours</h2>
          <ul className="objective-list">
            {course.objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Plan du cours</h2>
          <div className="modules">
            {course.modules.map((module, index) => (
              <article key={module.title} className="module-card">
                <div className="module-index">Module {index + 1}</div>
                <h3>{module.title}</h3>
                <ul>
                  {module.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <aside className="side-panel">
          <div className="info-card">
            <h3>Résumé</h3>
            <div className="summary-row"><span>Note</span><strong>★ {course.rating}</strong></div>
            <div className="summary-row"><span>Durée</span><strong>{course.duration}</strong></div>
            <div className="summary-row"><span>Niveau</span><strong>{course.level}</strong></div>
            <div className="summary-row"><span>Accès</span><strong>Live + contenu</strong></div>
          </div>

          <div className="info-card">
            <h3>À venir</h3>
            <ul className="mini-list">
              <li>Atelier pratique guidé</li>
              <li>Quiz de validation</li>
              <li>Certificat final</li>
            </ul>
          </div>
        </aside>
      </section>

      <style jsx>{`
        :global(body) { margin: 0; font-family: 'Segoe UI', Tahoma, sans-serif; background: #f7f9ff; color: #111827; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .detail-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 36px 20px 80px;
        }
        .hero-block {
          border-radius: 26px;
          border: 1px solid rgba(148,163,184,0.2);
          padding: 38px 32px;
          box-shadow: 0 16px 30px rgba(15,23,42,0.04);
        }
        .eyebrow {
          display: inline-block;
          background: rgba(79, 70, 229, 0.08);
          color: #4338ca;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        h1 {
          margin: 16px 0 12px;
          font-size: clamp(2.4rem, 5vw, 4rem);
          letter-spacing: -0.06em;
          line-height: 1.04;
        }
        .hero-copy p {
          margin: 0;
          max-width: 760px;
          color: #475467;
          line-height: 1.8;
          font-size: 1.04rem;
        }
        .meta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
          color: #344054;
          font-weight: 700;
        }
        .meta-row span {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 999px;
          padding: 8px 12px;
        }
        .cta-row { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          padding: 12px 18px;
          font-weight: 700;
        }
        .btn-primary { background: linear-gradient(135deg,#4f46e5,#2563eb); color: white; }
        .btn-secondary { background: white; border: 1px solid #dfe5ef; color: #111827; }

        .content-grid {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(260px, 0.9fr);
          gap: 24px;
          margin-top: 28px;
        }
        .main-panel, .info-card {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 12px 26px rgba(15,23,42,0.04);
        }
        .main-panel h2 {
          margin-top: 0;
          font-size: 1.6rem;
          letter-spacing: -0.04em;
        }
        .objective-list, .mini-list, .module-card ul {
          margin: 0;
          padding-left: 18px;
          color: #475467;
          line-height: 1.9;
        }
        .modules {
          display: grid;
          gap: 16px;
          margin-top: 12px;
        }
        .module-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 18px;
        }
        .module-index {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 999px;
          color: #4338ca;
          background: rgba(79,70,229,0.08);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .module-card h3 { margin: 0 0 10px; }
        .side-panel { display: grid; gap: 18px; }
        .info-card h3 { margin-top: 0; }
        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
          color: #475467;
        }
        .summary-row:last-child { border-bottom: none; }
        .summary-row strong { color: #111827; }
        @media (max-width: 860px) {
          .content-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}

