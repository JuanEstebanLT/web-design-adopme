const speciesLabels = {
  DOG: { neutral: 'Perro' },
  CAT: { neutral: 'Gato' },
  OTHER: { neutral: 'Mascota' },
}

function formatAge(ageMonths) {
  if (ageMonths == null) return 'Edad por confirmar'
  if (ageMonths < 12) return `${ageMonths} ${ageMonths === 1 ? 'mes' : 'meses'}`

  const years = Math.floor(ageMonths / 12)
  return `${years} ${years === 1 ? 'año' : 'años'}`
}

export function mapPetFromDatabase(pet) {
  return {
    id: pet.id,
    name: pet.name,
    species: pet.species?.toLowerCase(),
    speciesLabel: speciesLabels[pet.species]?.neutral ?? 'Mascota',
    breed: pet.breed || 'Raza no especificada',
    ageMonths: pet.age_months ?? pet.ageMonths ?? null,
    ageLabel: formatAge(pet.age_months ?? pet.ageMonths),
    size: pet.size || 'Por confirmar',
    sex: pet.sex || 'Por confirmar',
    city: pet.shelter?.city || 'Ciudad por confirmar',
    shelter: pet.shelter?.name || 'Refugio por confirmar',
    imageUrl: pet.image_url ?? pet.imageUrl ?? '/images/adopme-mark.svg',
    summary: pet.description,
    story: pet.description,
    qualities: [],
  }
}
