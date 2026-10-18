import { courses } from '../../lib/courses'

export default function QuizPage() {
  const path = '/courses/marketing-digital'
  const course = courses[0]

  const questions = [
    {
      question: 'Quel est l’objectif principal d’une stratégie marketing digitale ?',
      options: [
        'Augmenter la visibilité et convertir les prospects',
        'Supprimer les réseaux sociaux',
        'Réduire la qualité du produit',
        'Éviter toute mesure de performance',
      ],
      answer: 'Augmenter la visibilité et convertir les prospects',
    },
    {
      question: 'Quel élément est essentiel pour mesurer le succès d’une campagne ?',
      options: ['Le nombre de clics et le taux de conversion', 'Le nom de l’agence', 'La taille de la police', 'Le nombre de pages du site'],
      answer: 'Le nombre de clics et le taux de conversion',
    },
    {
      question: 'Pourquoi le contenu de qualité est-il important ?',
      options: [
        'Parce qu’il aide à engager et à convertir',
        'Parce qu’il remplace la stratégie commerciale',
        'Parce qu’il est toujours gratuit',
        'Parce qu’il réduit le besoin de publicité',
      ],
      answer: 'Parce qu’il aide à engager et à convertir',
    },
  ]

  return (
    <main className="quiz-shell">
      <div className="hero-box">
        <span className="eyebrow">Validation</span>
        <h1>Quiz : {course.title}</h1>
        <p>Vérifiez votre compréhension avant de poursuivre le parcours.</p>
        <a className="btn btn-secondary" href={path}>Retour au cours</a>
      </div>

      <section className="quiz-card">
        {questions.map((q, index) => (
          <article key={q.question} className="question-block">
            <div className="question-head">Question {index + 1}</div>
            <h3>{q.question}</h3>
            <div className="option-list">
              {q.options.map((option) => (
                <label key={option} className="option-item">
                  <input type="radio" name={`question-${index}`} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </article>
        ))}

        <button className="submit-btn" type="button">Soumettre le quiz</button>
      </section>

      <style jsx>{`
        :global(body) { margin: 0; font-family: 'Segoe UI', Arial, sans-serif; background: #f7f9ff; color: #111827; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        button { font: inherit; }
        .quiz-shell { max-width: 980px; margin: 0 auto; padding: 40px 20px 80px; }
        .hero-box {
          background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(14,165,233,0.08));
          border: 1px solid rgba(148,163,184,0.22);
          border-radius: 24px;
          padding: 28px 24px;
          margin-bottom: 22px;
        }
        .eyebrow {
          display: inline-block;
          background: rgba(79,70,229,0.08);
          color: #4338ca;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        h1 { margin: 12px 0 8px; font-size: clamp(2.2rem, 5vw, 3.2rem); letter-spacing: -0.06em; }
        .hero-box p { margin: 0; color: #475467; line-height: 1.7; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 12px; padding: 12px 18px; font-weight: 700; margin-top: 18px;
        }
        .btn-secondary {
          background: white; border: 1px solid #dfe5ef; color: #111827;
        }
        .quiz-card {
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(148,163,184,0.18);
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 12px 26px rgba(15,23,42,0.04);
        }
        .question-block { padding: 18px 0; border-bottom: 1px solid #e2e8f0; }
        .question-block:last-of-type { border-bottom: none; }
        .question-head {
          display: inline-block; padding: 6px 10px; border-radius: 999px;
          background: rgba(16,185,129,0.08); color: #047857; font-size: 0.72rem; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        h3 { margin: 14px 0 12px; font-size: 1.18rem; line-height: 1.5; }
        .option-list { display: grid; gap: 12px; }
        .option-item {
          display: flex; align-items: center; gap: 12px;
          border: 1px solid #dfe5ef; border-radius: 12px; padding: 12px 14px; background: #f8fafc;
          cursor: pointer;
        }
        input[type='radio'] { accent-color: #4f46e5; width: 18px; height: 18px; }
        .submit-btn {
          margin-top: 20px; width: 100%; background: linear-gradient(135deg,#4f46e5,#2563eb); color: white; border: none;
          border-radius: 12px; padding: 14px 16px; font-weight: 800;
        }
      `}</style>
    </main>
  )
}
