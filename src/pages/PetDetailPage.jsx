import { Link, useParams } from 'react-router-dom'
import { getPetById } from '../features/pets/data/pets.js'

export default function PetDetailPage() {
  const { petId } = useParams()
  const pet = getPetById(petId)

  if (!pet) {
    return (
      <section className="section empty-state">
        <span aria-hidden="true">🐾</span>
        <h1>Esta mascota no está en el catálogo</h1>
        <Link className="button" to="/mascotas">Volver al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="section detail">
      <Link className="back-link" to="/mascotas">← Volver a mascotas</Link>

      <div className="detail__grid">
        <div className="detail__media">
          <img src={pet.imageUrl} alt={`${pet.name}, ${pet.breed}`} />
          <span className="detail__badge">Lista para conocerte</span>
        </div>

        <article className="detail__content">
          <p className="eyebrow">{pet.speciesLabel} en adopción</p>
          <h1>{pet.name}</h1>
          <p className="detail__lead">{pet.summary}</p>

          <dl className="pet-facts">
            <div><dt>Edad</dt><dd>{pet.ageLabel}</dd></div>
            <div><dt>Tamaño</dt><dd>{pet.size}</dd></div>
            <div><dt>Sexo</dt><dd>{pet.sex}</dd></div>
            <div><dt>Ciudad</dt><dd>{pet.city}</dd></div>
          </dl>

          <div className="tags" aria-label="Características">
            {pet.qualities.map((quality) => <span key={quality}>{quality}</span>)}
          </div>

          <div className="detail__story">
            <h2>La historia de {pet.name}</h2>
            <p>{pet.story}</p>
          </div>

          <aside className="shelter-card">
            <div>
              <p className="eyebrow">Refugio responsable</p>
              <h2>{pet.shelter}</h2>
              <p>{pet.city}, Antioquia</p>
            </div>
            <div className="shelter-card__action">
              <button className="button" type="button" disabled title="Disponible en una entrega futura">
                Solicitar adopción
              </button>
              <small>El formulario de solicitud está planificado para una entrega posterior.</small>
            </div>
          </aside>
        </article>
      </div>
    </section>
  )
}
