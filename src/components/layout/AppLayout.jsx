import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Adopme, ir al inicio">
          <img src="/images/adopme-mark.svg" alt="" width="42" height="42" />
          <span>Adopme</span>
        </NavLink>

        <nav className="main-nav" aria-label="Navegación principal">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/mascotas">Mascotas</NavLink>
          <a href="/#proceso">Cómo adoptar</a>
        </nav>

        <NavLink className="button button--small" to="/mascotas">
          Quiero adoptar
        </NavLink>
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
          <a href="/#proceso">Proceso de adopción</a>
        </div>
        <div>
          <p className="footer-heading">Estado del proyecto</p>
          <p>Base académica inicial · Octubre de 2026</p>
        </div>
      </footer>
    </div>
  )
}
