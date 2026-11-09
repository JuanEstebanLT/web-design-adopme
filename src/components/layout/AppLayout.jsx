import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Inicio', to: '/', end: true }, { label: 'Adoptar', to: '/mascotas' },
  { label: 'Cómo funciona', to: '/#proceso' }, { label: 'Historias felices', to: '/#historias' },
  { label: 'Sobre nosotros', to: '/#nosotros' },
]

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView())
    else window.scrollTo({ top: 0 })
  }, [location])
  return <div className="app-shell">
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Adopme, ir al inicio"><img src="/images/adopme-mark.svg" alt="" width="38" height="38" /><span>AdopMe</span></Link>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Navegación principal">
        {navItems.map((item) => item.to.includes('#') ? <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link> : <NavLink key={item.label} to={item.to} end={item.end} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}
      </nav>
      <div className="header-actions"><button className="login-link" type="button" disabled title="Autenticación planificada para una entrega futura">Iniciar sesión <span className="sr-only">(función futura)</span></button><NavLink className="button button--small" to="/mascotas">Quiero adoptar</NavLink></div>
    </header>
    <main><Outlet /></main>
    <footer className="site-footer" id="nosotros">
      <div className="footer-brand"><Link className="brand brand--footer" to="/">AdopMe</Link><p>Una experiencia académica para explorar la adopción responsable con información clara.</p></div>
      <div><p className="footer-heading">Navegación</p><Link to="/mascotas">Mascotas demostrativas</Link><Link to="/#proceso">Cómo funciona</Link><Link to="/#compromiso">Compromiso</Link></div>
      <div><p className="footer-heading">Estado del proyecto</p><p>Interfaz demostrativa en desarrollo.</p><p>Sin solicitudes, autenticación ni publicaciones reales.</p></div>
      <p className="footer-note">AdopMe · Proyecto académico · Contenido demostrativo</p>
    </footer>
  </div>
}
