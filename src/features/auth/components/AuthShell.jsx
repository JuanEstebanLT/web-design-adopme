import { Link } from 'react-router-dom'

export default function AuthShell({
  children,
  eyebrow,
  title,
  description,
  alternateText,
  alternateLink,
  alternateLinkText,
}) {
  return (
    <section className="auth-page" aria-labelledby="auth-title">
      <div className="auth-page__intro">
        <Link className="auth-page__brand" to="/" aria-label="Volver al inicio de Adopme">
          <img src="/images/adopme-mark.svg" alt="" width="48" height="48" />
          <span>Adopme</span>
        </Link>

        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="auth-title">{title}</h1>
          <p className="auth-page__description">{description}</p>
        </div>

        <div className="auth-page__promise" aria-label="Compromiso de Adopme">
          <span aria-hidden="true">♡</span>
          <p>
            <strong>Adopciones con propósito</strong>
            Tu cuenta permitirá acompañar las solicitudes sin limitar el acceso al catálogo.
          </p>
        </div>
      </div>

      <div className="auth-card">
        {children}

        <p className="auth-card__alternate">
          {alternateText}{' '}
          <Link to={alternateLink}>{alternateLinkText}</Link>
        </p>
      </div>
    </section>
  )
}
