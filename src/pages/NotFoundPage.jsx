import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section empty-state">
      <span aria-hidden="true">404</span>
      <h1>No encontramos esta página</h1>
      <p>La ruta puede haber cambiado o todavía no forma parte del alcance.</p>
      <Link className="button" to="/">Regresar al inicio</Link>
    </section>
  )
}
