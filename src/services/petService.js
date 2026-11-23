import { pets as demoPets, getPetById as getDemoPetById } from '../features/pets/data/pets.js'
import { supabase } from '../lib/supabase.js'
import { mapPetFromDatabase } from '../features/pets/utils/mapPetFromDatabase.js'

export async function listAvailablePets() {
  if (!supabase) return { data: demoPets, source: 'demo', error: null }

  const { data, error } = await supabase
    .from('pets')
    .select('*, shelter:shelters(id, name, city)')
    .eq('status', 'AVAILABLE')
    .order('published_at', { ascending: false })

  return { data: data?.map(mapPetFromDatabase) ?? [], source: 'supabase', error }
}

export async function getPet(petId) {
  if (!supabase) return { data: getDemoPetById(petId), source: 'demo', error: null }

  const { data, error } = await supabase
    .from('pets')
    .select('*, shelter:shelters(id, name, city, email, phone)')
    .eq('id', petId)
    .single()

  return { data: data ? mapPetFromDatabase(data) : null, source: 'supabase', error }
}
