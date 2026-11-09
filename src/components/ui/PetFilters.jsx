const categories = [['all', 'Todos los amigos'], ['dog', 'Perros'], ['cat', 'Gatos'], ['senior', 'Mascotas senior'], ['special', 'Casos especiales']]

export default function PetFilters({ filters, onChange, onSubmit, compact = false }) {
  const selectedCategory = filters.species !== 'all' ? filters.species : filters.category
  const selectCategory = (value) => onChange(value === 'dog' || value === 'cat' ? { ...filters, species: value, category: 'all' } : { ...filters, species: 'all', category: value })
  return <form className={`pet-filters${compact ? ' pet-filters--compact' : ''}`} onSubmit={onSubmit}>
    <div className="filter-tabs" aria-label="Categorías de mascotas">{categories.map(([value, label]) => <button className={selectedCategory === value ? 'is-active' : ''} type="button" key={value} aria-pressed={selectedCategory === value} onClick={() => selectCategory(value)}>{label}</button>)}</div>
    <div className="filter-fields">
      {!compact && <label className="filter-field filter-field--search"><span>Buscar</span><input type="search" placeholder="Nombre, raza, ciudad o característica" value={filters.query} onChange={(event) => onChange({ ...filters, query: event.target.value })} /></label>}
      <label className="filter-field"><span>Especie</span><select value={filters.species} onChange={(event) => onChange({ ...filters, species: event.target.value, category: 'all' })}><option value="all">Todas las especies</option><option value="dog">Perros</option><option value="cat">Gatos</option></select></label>
      <label className="filter-field"><span>Edad</span><select value={filters.age} onChange={(event) => onChange({ ...filters, age: event.target.value })}><option value="all">Cualquier edad</option><option value="young">Joven</option><option value="adult">Adulto</option><option value="senior">Senior</option></select></label>
      <label className="filter-field"><span>Tamaño</span><select value={filters.size} onChange={(event) => onChange({ ...filters, size: event.target.value })}><option value="all">Todos los tamaños</option><option value="small">Pequeño</option><option value="medium">Mediano</option><option value="large">Grande</option></select></label>
      <button className="button filter-submit" type="submit">Buscar compañeros</button>
    </div>
  </form>
}
