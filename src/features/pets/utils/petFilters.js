export const speciesOptions = [
  { value: 'all', label: 'Todas' },
  { value: 'dog', label: 'Perros' },
  { value: 'cat', label: 'Gatos' },
]

export const ageOptions = [
  { value: 'all', label: 'Todas las edades' },
  { value: 'young', label: 'Hasta 2 años' },
  { value: 'adult', label: 'De 3 a 6 años' },
  { value: 'senior', label: '7 años o más' },
]

export const sizeOptions = [
  { value: 'all', label: 'Todos los tamaños' },
  { value: 'small', label: 'Pequeño' },
  { value: 'medium', label: 'Mediano' },
  { value: 'large', label: 'Grande' },
]

const sizeMap = {
  small: ['Pequeño', 'Pequeña'],
  medium: ['Mediano', 'Mediana'],
  large: ['Grande'],
}

function matchesAge(ageMonths, age) {
  if (age === 'all') return true
  if (age === 'young') return ageMonths <= 24
  if (age === 'adult') return ageMonths >= 36 && ageMonths < 84
  return ageMonths >= 84
}

export function filterPets(pets, filters) {
  const normalizedQuery = filters.query.trim().toLocaleLowerCase('es')

  return pets.filter((pet) => {
    const searchable = `${pet.name} ${pet.breed} ${pet.city} ${pet.shelter}`.toLocaleLowerCase('es')
    const matchesSpecies = filters.species === 'all' || pet.species === filters.species
    const matchesSize = filters.size === 'all' || sizeMap[filters.size]?.includes(pet.size)

    return matchesSpecies
      && matchesAge(pet.ageMonths, filters.age)
      && matchesSize
      && searchable.includes(normalizedQuery)
  })
}
