type Props = {
  title: string
  category: string
  duration: string
  students: number
  rating: number
  accent: string
}

export default function CourseCard({ title, category, duration, students, rating, accent }: Props) {
  return (
    <article className="course-card">
      <div className="course-accent" style={{ background: accent }} />
      <span className="course-tag">{category}</span>
      <h3>{title}</h3>
      <p className="course-meta">{duration}</p>
      <div className="course-footer">
        <span>{students} apprenants</span>
        <span>★ {rating}</span>
      </div>
      <button type="button">Voir le cours</button>

      <style jsx>{`
        .course-card {
          position: relative;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);
          padding: 22px 20px 18px;
          overflow: hidden;
        }

        .course-accent {
          position: absolute;
          inset: 0 0 auto 0;
          height: 6px;
        }

        .course-tag {
          display: inline-block;
          margin-top: 18px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(79, 70, 229, 0.08);
          color: #4338ca;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .course-card h3 {
          margin: 18px 0 8px;
          font-size: 1.45rem;
          line-height: 1.3;
          letter-spacing: -0.03em;
        }

        .course-meta {
          margin: 0;
          color: #475467;
          font-weight: 600;
        }

        .course-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 22px;
          padding-top: 16px;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          color: #344054;
          font-weight: 600;
        }

        .course-card button {
          width: 100%;
          margin-top: 18px;
          border: none;
          border-radius: 12px;
          padding: 12px 14px;
          background: #111827;
          color: white;
          font-weight: 700;
        }
      `}</style>
    </article>
  )
}

