import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Adopme, ir al inicio">
          <img src="/images/adopme-mark.svg" alt="" width="42" height="42" />
          <span>Adopme</span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label="Navegación principal"
        >
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/mascotas" onClick={() => setMenuOpen(false)}>
            Mascotas
          </NavLink>
          <Link to="/#proceso" onClick={() => setMenuOpen(false)}>
            Cómo adoptar
          </Link>
        </nav>


        <div className="header-actions">
          <NavLink className="header-login" to="/login">
            Iniciar sesión
          </NavLink>
          <NavLink
            className="button button--small button--light"
            to="/registro"
          >
            Registrarse
          </NavLink>

          <NavLink
            className="button button--small"
            to="/mascotas"
          >
            Quiero adoptar
          </NavLink>
        </div>

      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand brand--footer">Adopme</p>
          <p>Conexiones responsables para hogares que transforman vidas.</p>
        </div>
        <div>
          <p className="footer-heading">Explora</p>
          <NavLink to="/mascotas">Mascotas disponibles</NavLink>
          <Link to="/#proceso">Proceso de adopción</Link>
          <NavLink to="/login">Iniciar sesión</NavLink>
        </div>
        <div>
          <p className="footer-heading">Estado del proyecto</p>
          <p>Base académica inicial · Octubre de 2026</p>
        </div>
      </footer>
    </div>
  )
}
