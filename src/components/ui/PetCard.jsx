import { Link } from 'react-router-dom'

export default function PetCard({ pet }) {
  return (
    <article className="pet-card">
      <div className="pet-card__image-wrap">
        <img className="pet-card__image" src={pet.imageUrl} alt={`${pet.name}, ${pet.breed}`} />
        <span className="pet-card__status">Disponible</span>
      </div>
      <div className="pet-card__body">
        <div className="pet-card__heading">
          <div>
            <p className="eyebrow">{pet.speciesLabel}</p>
            <h3>{pet.name}</h3>
          </div>
          <span className="pet-card__age">{pet.ageLabel}</span>
        </div>
        <p>{pet.breed} · {pet.size}</p>
        <p className="pet-card__location">{pet.city} · {pet.shelter}</p>
        <Link className="text-link" to={`/mascotas/${pet.id}`}>
          Conocer a {pet.name} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
