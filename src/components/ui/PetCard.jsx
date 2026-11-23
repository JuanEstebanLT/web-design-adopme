import { Link } from 'react-router-dom'

export default function PetCard({ pet }) {
  return (
    <article className="pet-card">
      <Link className="pet-card__image-wrap" to={`/mascotas/${pet.id}`} aria-label={`Ver perfil de ${pet.name}`}>
        <img className="pet-card__image" src={pet.imageUrl} alt={`${pet.name}, ${pet.breed}`} />
        <span className="pet-card__status">Disponible</span>
      </Link>
      <div className="pet-card__body">
        <div className="pet-card__heading">
          <div>
            <p className="eyebrow">{pet.speciesLabel}</p>
            <h3>{pet.name}</h3>
          </div>
          <span className="pet-card__age">{pet.ageLabel}</span>
        </div>
        <p>{pet.breed} · {pet.size} · {pet.sex}</p>
        <p className="pet-card__location">{pet.city} · {pet.shelter}</p>
        <Link className="text-link" to={`/mascotas/${pet.id}`}>
          Conocer a {pet.name} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
