import { Link } from 'react-router-dom'

export default function PetCard({ pet }) {
  return <article className="pet-card">
    <div className="pet-card__image-wrap"><img className="pet-card__image" src={pet.imageUrl} alt={`${pet.name}, ${pet.breed}`} /><span className="pet-card__demo">Perfil demostrativo</span></div>
    <div className="pet-card__body">
      <div className="pet-card__heading"><h3>{pet.name}</h3><span className="pet-card__location">⌖ {pet.city}</span></div>
      <p className="pet-card__facts">{pet.sex} · {pet.ageLabel} · {pet.size}</p>
      <p className="pet-card__summary">{pet.summary}</p>
      <div className="tags" aria-label={`Características de ${pet.name}`}>{pet.qualities.slice(0, 3).map((quality) => <span key={quality}>{quality}</span>)}</div>
      <Link className="button button--card" to={`/mascotas/${pet.id}`}>Ver perfil de {pet.name} <span aria-hidden="true">→</span></Link>
    </div>
  </article>
}
