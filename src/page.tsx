import CourseCard from './Composent/courseCard'

const courses = [
  {
    title: 'Marketing Digital & E-commerce',
    category: 'Business',
    duration: '6 semaines',
    students: 540,
    rating: 4.9,
    accent: '#4f46e5',
  },
  {
    title: 'Développement Web',
    category: 'IT & Code',
    duration: '8 semaines',
    students: 820,
    rating: 4.8,
    accent: '#0ea5e9',
  },
  {
    title: 'Gestion Financière',
    category: 'Finance',
    duration: '5 semaines',
    students: 430,
    rating: 4.7,
    accent: '#10b981',
  },
]

const stats = [
  { value: '10k+', label: 'apprenants' },
  { value: '30+', label: 'formations' },
  { value: '4.9/5', label: 'note moyenne' },
  { value: '24/7', label: 'accès en ligne' },
]

const pillars = [
  {
    title: 'Cours pratiques',
    text: 'Des modules concrets orientés vers les compétences recherchées sur le marché.',
  },
  {
    title: 'Mentorat',
    text: 'Des coachs et experts accompagnent chaque apprenant dans son progression.',
  },
  {
    title: 'Certifications',
    text: 'Validez vos compétences grâce à des certifications et des évaluations.',
  },
]

const testimonials = [
  {
    name: 'Marie K.',
    role: 'Chef de projet',
    quote:
      'J’ai appris les bases du marketing digital et j’ai pu lancer ma petite activité en quelques mois.',
  },
  {
    name: 'Joel B.',
    role: 'Développeur junior',
    quote:
      'Le programme est bien structuré, accessible et très utile pour le monde professionnel.',
  },
]

const pricing = [
  {
    name: 'Découverte',
    price: 'Gratuit',
    description: 'Accès aux cours d’initiation',
    features: ['1 cours de démonstration', 'Accès communautaire'],
  },
  {
    name: 'Pro',
    price: '15$/mois',
    description: 'Le meilleur pour apprendre vite',
    features: ['Accès illimité', 'Quiz et certifications', 'Support mentor'],
    highlight: true,
  },
  {
    name: 'Business',
    price: '39$/mois',
    description: 'Pour les professionnels et équipes',
    features: ['Tout du Pro', 'Sessions coaching', 'Suivi personnalisé'],
  },
]

export default function HomePage() {
  return (
    <>
      <main className="page-shell">
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand-mark">N</div>
            <div>
              <span className="brand-name">ntumba éduc</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#programmes">Programmes</a>
            <a href="#avantages">Avantages</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#temoignages">Témoignages</a>
          </nav>

          <div className="header-actions">
            <a className="link-btn" href="/login">
              Connexion
            </a>
            <a className="btn btn-primary" href="/dashboard">
              Commencer
            </a>
          </div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Apprendre, grandir, construire l’avenir</span>
            <h1>La plateforme qui transforme le talent en compétences.</h1>
            <p>
              ntumba éduc accompagne les apprenants en RDC et à travers l’Afrique dans
              l’acquisition de compétences concrètes, modernes et utiles pour le marché.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary large" href="/login">
                S’inscrire
              </a>
              <a className="btn btn-secondary large" href="#programmes">
                Découvrir les cours
              </a>
            </div>

            <div className="mini-trust">
              <span>+12 000 apprenants</span>
              <span>88% satisfaction</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-card">
              <div className="card-header">
                <span className="dot green" />
                <span className="dot yellow" />
                <span className="dot red" />
              </div>

              <div className="lesson-box">
                <div className="lesson-top">
                  <span className="pill">En cours</span>
                  <span className="progress">72%</span>
                </div>

                <h3>Développement Web</h3>
                <div className="progress-track">
                  <div className="progress-fill" />
                </div>
                <ul>
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="programmes" className="section-block">
          <div className="section-heading">
            <span className="eyebrow dark">Nos programmes</span>
            <h2>Des parcours pensés pour réussir.</h2>
          </div>

          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </section>

        <section id="avantages" className="section-block alt">
          <div className="section-heading">
            <span className="eyebrow dark">Pourquoi choisir ntumba éduc ?</span>
            <h2>Une expérience d’apprentissage moderne et orientée résultats.</h2>
          </div>

          <div className="feature-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="temoignages" className="section-block">
          <div className="section-heading">
            <span className="eyebrow dark">Témoignages</span>
            <h2>Des apprenants qui ont déjà progressé.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((person) => (
              <blockquote key={person.name} className="testimonial-card">
                <p>“{person.quote}”</p>
                <footer>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="tarifs" className="section-block alt">
          <div className="section-heading">
            <span className="eyebrow dark">Tarifs</span>
            <h2>Des offres adaptées à chaque besoin.</h2>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`} href="/login">
                  Choisir
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          background: linear-gradient(180deg, #f7f9ff 0%, #eef4ff 100%);
          color: #101828;
        }

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          cursor: pointer;
          border: none;
          font: inherit;
        }

        .page-shell {
          max-width: 1220px;
          margin: 0 auto;
          padding: 24px 20px 64px;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 24px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 18px;
          position: sticky;
          top: 12px;
          backdrop-filter: blur(12px);
          z-index: 10;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          display: grid;
          place-items: center;
          color: white;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .brand-name {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: lowercase;
        }

        .nav {
          display: flex;
          gap: 24px;
          color: #475467;
          font-weight: 600;
          flex-wrap: wrap;
        }

        .nav a:hover {
          color: #111827;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .link-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 14px;
          font-weight: 700;
          color: #111827;
          border: 1px solid #dfe5ef;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.6);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          padding: 12px 18px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #4f46e5, #2563eb);
          color: white;
          box-shadow: 0 12px 28px rgba(79, 70, 229, 0.25);
        }

        .btn-secondary {
          background: white;
          color: #111827;
          border: 1px solid #dbe3f0;
        }

        .large {
          padding: 14px 24px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 32px;
          padding: 56px 0 40px;
        }

        .hero-copy h1 {
          font-size: clamp(2.6rem, 5vw, 5rem);
          line-height: 1.04;
          margin: 12px 0 18px;
          letter-spacing: -0.05em;
        }

        .hero-copy p {
          max-width: 640px;
          font-size: 1.08rem;
          line-height: 1.7;
          color: #475467;
        }

        .eyebrow {
          display: inline-block;
          background: rgba(79, 70, 229, 0.08);
          color: #4338ca;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 12px;
        }

        .eyebrow.dark {
          color: #0f172a;
          background: rgba(15, 23, 42, 0.05);
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 28px;
        }

        .mini-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 26px;
          color: #344054;
          font-weight: 600;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .dashboard-card {
          width: min(100%, 500px);
          background: linear-gradient(180deg, #101827, #0f172a);
          border-radius: 28px;
          padding: 18px;
          box-shadow: 0 32px 80px rgba(15, 23, 42, 0.18);
        }

        .card-header {
          display: flex;
          gap: 8px;
          padding-bottom: 18px;
        }

        .dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot.green { background: #34d399; }
        .dot.yellow { background: #fbbf24; }
        .dot.red { background: #f87171; }

        .lesson-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          color: white;
        }

        .lesson-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pill {
          display: inline-flex;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(45, 212, 191, 0.15);
          color: #99f6e4;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .progress {
          color: #cbd5e1;
          font-weight: 700;
        }

        .lesson-box h3 {
          margin: 18px 0 18px;
          font-size: 1.7rem;
        }

        .progress-track {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: 18px;
        }

        .progress-fill {
          width: 72%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #22c55e, #2dd4bf);
        }

        .lesson-box ul {
          margin: 0;
          padding-left: 18px;
          color: #e2e8f0;
          line-height: 1.9;
        }

        .stats-grid,
        .courses-grid,
        .feature-grid,
        .testimonial-grid,
        .pricing-grid {
          display: grid;
          gap: 22px;
        }

        .stats-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 10px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 20px;
          padding: 24px 18px;
          text-align: center;
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.04);
        }

        .stat-card strong {
          display: block;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          color: #111827;
        }

        .stat-card span {
          color: #475467;
          font-weight: 600;
        }

        .section-block {
          padding-top: 88px;
        }

        .section-block.alt {
          padding-top: 96px;
        }

        .section-heading {
          margin-bottom: 26px;
        }

        .section-heading h2 {
          margin: 12px 0 0;
          font-size: clamp(1.9rem, 4vw, 3rem);
          line-height: 1.15;
          letter-spacing: -0.05em;
        }

        .courses-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .feature-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .feature-card,
        .testimonial-card,
        .pricing-card {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 22px;
          padding: 26px 22px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #eef2ff, #dbeafe);
          color: #4338ca;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .feature-card h3 {
          margin: 0 0 12px;
          font-size: 1.2rem;
        }

        .feature-card p,
        .testimonial-card p,
        .pricing-card p {
          margin: 0;
          color: #475467;
          line-height: 1.7;
        }

        .testimonial-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .testimonial-card {
          padding: 28px 24px;
        }

        .testimonial-card footer {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .testimonial-card strong {
          font-size: 1rem;
        }

        .testimonial-card span {
          color: #64748b;
          font-size: 0.9rem;
        }

        .pricing-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .pricing-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pricing-card.highlight {
          background: linear-gradient(180deg, #eef2ff, #ffffff);
          border-color: rgba(79, 70, 229, 0.25);
          transform: scale(1.02);
        }

        .pricing-card h3 {
          margin: 0;
          font-size: 1.3rem;
        }

        .pricing-card .price {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .pricing-card ul {
          margin: 0;
          padding-left: 18px;
          color: #475467;
          line-height: 2;
        }

        @media (max-width: 980px) {
          .hero,
          .courses-grid,
          .feature-grid,
          .testimonial-grid,
          .pricing-grid,
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .topbar {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .nav {
            justify-content: center;
          }

          .stats-grid,
          .courses-grid,
          .feature-grid,
          .testimonial-grid,
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .page-shell {
            padding-left: 14px;
            padding-right: 14px;
          }

          .hero-copy h1 {
            font-size: 2.5rem;
          }

          .topbar {
            padding: 14px 16px;
          }
        }
      `}</style>
    </>
  )
}

