import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PetCard from '../components/ui/PetCard.jsx'
import PetFilters from '../components/ui/PetFilters.jsx'
import { pets } from '../features/pets/data/pets.js'
import { defaultPetFilters, filterPets, filtersFromSearchParams, filtersToSearchParams } from '../features/pets/petFilters.js'

export default function PetCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = filtersFromSearchParams(searchParams)
  const results = useMemo(() => filterPets(pets, filters), [filters])
  const updateFilters = (next) => setSearchParams(filtersToSearchParams(next), { replace: true })
  return <section className="section catalog"><header className="catalog__header"><p className="eyebrow">Compañeros listos para ti</p><h1>Esperando por una familia</h1><p>Explora perfiles demostrativos. No son publicaciones activas ni solicitudes conectadas a refugios reales.</p></header><PetFilters filters={filters} onChange={updateFilters} onSubmit={(event) => event.preventDefault()} />
    <div className="results-meta" aria-live="polite"><strong>{results.length} {results.length === 1 ? 'mascota encontrada' : 'mascotas encontradas'}</strong><span>Datos demostrativos</span></div>
    {results.length ? <div className="pet-grid pet-grid--catalog">{results.map((pet) => <PetCard key={pet.id} pet={pet} />)}</div> : <div className="empty-state"><span aria-hidden="true">🐾</span><h2>No encontramos coincidencias</h2><p>Prueba otra búsqueda o restablece los filtros.</p><button className="button" type="button" onClick={() => updateFilters(defaultPetFilters)}>Limpiar filtros</button></div>}
  </section>
}
