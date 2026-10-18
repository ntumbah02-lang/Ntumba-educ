export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="brand-row">
          <div className="brand-mark">N</div>
          <span>ntumba éduc</span>
        </div>

        <h1>Connexion</h1>
        <p>Accédez à votre espace d’apprentissage.</p>

        <form className="form-grid">
          <label>
            Email
            <input type="email" placeholder="vous@example.com" />
          </label>

          <label>
            Mot de passe
            <input type="password" placeholder="••••••••" />
          </label>

          <button type="button" className="submit-btn">Se connecter</button>
        </form>

        <div className="footer-row">
          <span>Pas encore inscrit ?</span>
          <a href="/">Créer un compte</a>
        </div>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          background: linear-gradient(135deg, #eef4ff, #f8fafc 60%, #ecfeff);
          color: #111827;
        }

        * { box-sizing: border-box; }

        a { text-decoration: none; }

        .auth-shell {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .auth-card {
          width: min(100%, 460px);
          background: rgba(255,255,255,0.84);
          border: 1px solid rgba(148,163,184,0.2);
          border-radius: 28px;
          box-shadow: 0 30px 70px rgba(15,23,42,0.08);
          padding: 30px 26px;
        }

        .brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: lowercase;
          margin-bottom: 18px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          color: white;
          display: grid;
          place-items: center;
          font-weight: 800;
        }

        h1 {
          margin: 0;
          font-size: 2.2rem;
          letter-spacing: -0.05em;
        }

        p {
          margin: 10px 0 24px;
          color: #475467;
        }

        .form-grid {
          display: grid;
          gap: 18px;
        }

        label {
          display: grid;
          gap: 8px;
          color: #344054;
          font-weight: 600;
        }

        input {
          border: 1px solid #dbe3f0;
          border-radius: 12px;
          padding: 14px 14px;
          font-size: 1rem;
          outline: none;
        }

        input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79,70,229,0.12);
        }

        .submit-btn {
          border: none;
          border-radius: 12px;
          padding: 14px 16px;
          background: linear-gradient(135deg, #4f46e5, #2563eb);
          color: white;
          font-weight: 800;
          margin-top: 8px;
        }

        .footer-row {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          gap: 8px;
          color: #475467;
          font-size: 0.95rem;
        }

        .footer-row a {
          color: #3749d1;
          font-weight: 700;
        }
      `}</style>
    </main>
  )
}

