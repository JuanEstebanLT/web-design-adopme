import { useSearchParams } from 'react-router-dom'
import ContentState from '../components/ui/ContentState.jsx'
import PetCard from '../components/ui/PetCard.jsx'
import { pets } from '../features/pets/data/pets.js'
import {
  ageOptions,
  filterPets,
  sizeOptions,
  speciesOptions,
} from '../features/pets/utils/petFilters.js'

const validFilters = {
  species: new Set(speciesOptions.map((option) => option.value)),
  age: new Set(ageOptions.map((option) => option.value)),
  size: new Set(sizeOptions.map((option) => option.value)),
}

function readFilter(searchParams, name) {
  const value = searchParams.get(name) || 'all'
  return validFilters[name].has(value) ? value : 'all'
}

export default function PetCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = {
    query: searchParams.get('q') || '',
    species: readFilter(searchParams, 'species'),
    age: readFilter(searchParams, 'age'),
    size: readFilter(searchParams, 'size'),
  }

  const filteredPets = filterPets(pets, filters)

  function updateFilter(name, value) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      const defaultValue = name === 'q' ? '' : 'all'

      if (value === defaultValue) next.delete(name)
      else next.set(name, value)

      return next
    }, { replace: true })
  }

  function clearFilters() {
    setSearchParams({}, { replace: true })
  }

  const hasActiveFilters = filters.query || filters.species !== 'all' || filters.age !== 'all' || filters.size !== 'all'

  return (
    <section className="section catalog">
      <div className="catalog__header">
        <p className="eyebrow">Catálogo de mascotas</p>
        <h1>Encuentra una conexión que se sienta como hogar.</h1>
        <p>
          Estos perfiles son demostrativos. En la siguiente etapa se conectarán a refugios
          verificados mediante Supabase, sin cerrar el acceso público al catálogo.
        </p>
      </div>

      <div className="demo-notice" role="note">
        <strong>Contenido demostrativo</strong>
        <span>Las mascotas y refugios de esta versión se utilizan para probar la experiencia.</span>
      </div>

      <div className="catalog__layout">
        <aside className="filters" aria-label="Filtros de mascotas">
          <div className="filters__heading">
            <h2>Filtrar mascotas</h2>
            {hasActiveFilters && <span>Filtros activos</span>}
          </div>

          <div className="field">
            <label htmlFor="pet-search">Buscar</label>
            <input
              id="pet-search"
              type="search"
              placeholder="Nombre, raza, refugio o ciudad"
              value={filters.query}
              onChange={(event) => updateFilter('q', event.target.value)}
            />
          </div>

          <fieldset>
            <legend>Especie</legend>
            {speciesOptions.map((option) => (
              <label className="radio" key={option.value}>
                <input
                  type="radio"
                  name="species"
                  value={option.value}
                  checked={filters.species === option.value}
                  onChange={(event) => updateFilter('species', event.target.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </fieldset>

          <div className="field">
            <label htmlFor="pet-age">Edad</label>
            <select id="pet-age" value={filters.age} onChange={(event) => updateFilter('age', event.target.value)}>
              {ageOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="pet-size">Tamaño</label>
            <select id="pet-size" value={filters.size} onChange={(event) => updateFilter('size', event.target.value)}>
              {sizeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </div>

          <button className="button button--ghost" type="button" onClick={clearFilters} disabled={!hasActiveFilters}>
            Limpiar filtros
          </button>
        </aside>

        <div className="catalog__results">
          <div className="results-meta" aria-live="polite" aria-atomic="true">
            <strong>{filteredPets.length} {filteredPets.length === 1 ? 'mascota' : 'mascotas'}</strong>
            <span>Datos demostrativos</span>
          </div>

          {filteredPets.length > 0 ? (
            <div className="pet-grid pet-grid--catalog">
              {filteredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
            </div>
          ) : (
            <ContentState
              title="No encontramos coincidencias"
              message="Prueba otra búsqueda o restablece los filtros para ver todas las mascotas."
              action={<button className="button button--ghost" type="button" onClick={clearFilters}>Ver todas las mascotas</button>}
            />
          )}
        </div>
      </div>
    </section>
  )
}
