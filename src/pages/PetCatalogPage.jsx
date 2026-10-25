import { useMemo, useState } from 'react'
import PetCard from '../components/ui/PetCard.jsx'
import { pets } from '../features/pets/data/pets.js'

export default function PetCatalogPage() {
  const [query, setQuery] = useState('')
  const [species, setSpecies] = useState('all')

  const filteredPets = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es')
    return pets.filter((pet) => {
      const matchesSpecies = species === 'all' || pet.species === species
      const searchable = `${pet.name} ${pet.breed} ${pet.city}`.toLocaleLowerCase('es')
      return matchesSpecies && searchable.includes(normalizedQuery)
    })
  }, [query, species])

  return (
    <section className="section catalog">
      <div className="catalog__header">
        <p className="eyebrow">Catálogo de mascotas</p>
        <h1>Encuentra una conexión que se sienta como hogar.</h1>
        <p>
          Los perfiles actuales son datos demostrativos de la base inicial; la publicación real se
          conectará a Supabase cuando existan credenciales y políticas RLS verificadas.
        </p>
      </div>

      <div className="catalog__layout">
        <aside className="filters" aria-label="Filtros de mascotas">
          <div className="field">
            <label htmlFor="pet-search">Buscar</label>
            <input
              id="pet-search"
              type="search"
              placeholder="Nombre, raza o ciudad"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <fieldset>
            <legend>Especie</legend>
            {[
              ['all', 'Todas'],
              ['dog', 'Perros'],
              ['cat', 'Gatos'],
            ].map(([value, label]) => (
              <label className="radio" key={value}>
                <input
                  type="radio"
                  name="species"
                  value={value}
                  checked={species === value}
                  onChange={(event) => setSpecies(event.target.value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>

          <button
            className="button button--ghost"
            type="button"
            onClick={() => {
              setQuery('')
              setSpecies('all')
            }}
          >
            Limpiar filtros
          </button>
        </aside>

        <div className="catalog__results">
          <div className="results-meta" aria-live="polite">
            <strong>{filteredPets.length} mascotas</strong>
            <span>Datos demostrativos</span>
          </div>
          {filteredPets.length > 0 ? (
            <div className="pet-grid pet-grid--catalog">
              {filteredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
            </div>
          ) : (
            <div className="empty-state">
              <span aria-hidden="true">🐾</span>
              <h2>No encontramos coincidencias</h2>
              <p>Prueba otra búsqueda o restablece los filtros.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
