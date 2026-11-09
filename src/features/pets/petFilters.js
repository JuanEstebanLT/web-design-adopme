export const defaultPetFilters = { query: '', species: 'all', age: 'all', size: 'all', category: 'all' }

export function filterPets(pets, filters) {
  const query = filters.query.trim().toLocaleLowerCase('es')
  return pets.filter((pet) => {
    const searchable = [pet.name, pet.breed, pet.city, pet.summary, ...pet.qualities].join(' ').toLocaleLowerCase('es')
    const categoryMatches = filters.category === 'all'
      || (filters.category === 'senior' && pet.ageGroup === 'senior')
      || (filters.category === 'special' && pet.specialCase)
    return (!query || searchable.includes(query))
      && (filters.species === 'all' || pet.species === filters.species)
      && (filters.age === 'all' || pet.ageGroup === filters.age)
      && (filters.size === 'all' || pet.sizeKey === filters.size)
      && categoryMatches
  })
}

export function filtersFromSearchParams(searchParams) {
  return { query: searchParams.get('q') ?? '', species: searchParams.get('especie') ?? 'all', age: searchParams.get('edad') ?? 'all', size: searchParams.get('tamano') ?? 'all', category: searchParams.get('categoria') ?? 'all' }
}

export function filtersToSearchParams(filters) {
  const params = new URLSearchParams()
  const names = { query: 'q', species: 'especie', age: 'edad', size: 'tamano', category: 'categoria' }
  Object.entries(filters).forEach(([key, value]) => { if (value && value !== 'all') params.set(names[key], value) })
  return params
}
