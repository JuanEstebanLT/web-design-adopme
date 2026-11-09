import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PetCard from '../components/ui/PetCard.jsx'
import PetFilters from '../components/ui/PetFilters.jsx'
import { pets } from '../features/pets/data/pets.js'
import { defaultPetFilters, filtersToSearchParams } from '../features/pets/petFilters.js'

const steps = [
  { number: '01', icon: '⌕', title: 'Encuentra tu compañero ideal', text: 'Explora los perfiles demostrativos y filtra por especie, edad y tamaño según tu estilo de vida.' },
  { number: '02', icon: '♡', title: 'Conoce su historia', text: 'Consulta su perfil y, en una etapa futura, contacta al refugio responsable para resolver tus dudas.' },
  { number: '03', icon: '⌂', title: 'Adopción responsable', text: 'Prepárate para los requisitos, cuidados y acompañamiento que cada organización defina para adoptar.' },
]

export default function HomePage() {
  const [filters, setFilters] = useState(defaultPetFilters)
  const navigate = useNavigate()
  const search = (event) => { event.preventDefault(); navigate(`/mascotas?${filtersToSearchParams(filters)}`) }
  return <>
    <section className="hero section">
      <div className="hero__content"><p className="eyebrow eyebrow--peach">🐾 Una forma consciente de encontrar compañía</p><h1>Un hogar cambia sus vidas, su amor cambiará la tuya</h1><p className="hero__lead">AdopMe te ayuda a explorar perfiles demostrativos de perros y gatos y a conocer lo que implica una adopción responsable antes de dar el siguiente paso.</p><div className="hero__actions"><Link className="button" to="/mascotas">♡ Conoce a tu próximo compañero</Link><Link className="button button--light" to="/#proceso">▶ Cómo funciona el proceso</Link></div><div className="hero__facts" aria-label="Información verificada del prototipo"><div><strong>{pets.length}</strong><span>perfiles demostrativos</span></div><div><strong>3 pasos</strong><span>para comprender el proceso</span></div><div><strong>100%</strong><span>sin solicitudes reales aún</span></div></div></div>
      <div className="hero__visual" aria-label="Composición ilustrativa de mascotas"><div className="hero-photo hero-photo--dog"><img src={pets[0].imageUrl} alt="Fotografía demostrativa de una perra" /><span>● Luna · Perfil demo</span></div><div className="hero-photo hero-photo--cat"><img src={pets[1].imageUrl} alt="Fotografía demostrativa de un gato" /><span>♡ Milo · Perfil demo</span></div><div className="floating-note">Información clara<br /><strong>antes de decidir</strong></div></div>
      <div className="hero__filters"><PetFilters filters={filters} onChange={setFilters} onSubmit={search} compact /></div>
    </section>

    <section className="section featured" id="historias" aria-labelledby="featured-title"><div className="section-heading"><div><p className="eyebrow">Compañeros listos para conocerte</p><h2 id="featured-title">Esperando por una familia</h2><p>Cada perfil es demostrativo y muestra cómo se presentará información útil para decidir.</p></div><Link className="text-link" to="/mascotas">Explorar las {pets.length} mascotas →</Link></div><div className="pet-grid">{pets.slice(0, 3).map((pet) => <PetCard key={pet.id} pet={pet} />)}</div></section>

    <section className="section process" id="proceso" aria-labelledby="process-title"><div className="center-heading"><p className="eyebrow">Claridad y responsabilidad</p><h2 id="process-title">Adoptar con amor en 3 sencillos pasos</h2><p>Una guía del proceso previsto para tomar decisiones informadas y cuidar el bienestar de la mascota.</p></div><ol className="steps">{steps.map((step) => <li key={step.number}><span className="step-icon" aria-hidden="true">{step.icon}</span><p className="eyebrow">Paso {step.number}</p><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>

    <section className="section commitment" id="compromiso" aria-labelledby="commitment-title"><div className="commitment__main"><p className="eyebrow eyebrow--peach">Compromiso de por vida</p><h2 id="commitment-title">Adoptar es un acto de amor para toda la vida</h2><p>Una mascota no es un regalo temporal: necesita estabilidad, cuidado y una familia presente en cada etapa.</p><div className="commitment__cards"><article><span>⌂</span><h3>Responsabilidad</h3><p>Evalúa tu vivienda, presupuesto y red de apoyo antes de decidir.</p></article><article><span>◷</span><h3>Tiempo y cuidados</h3><p>Reserva tiempo diario para compañía, actividad y adaptación.</p></article><article><span>♡</span><h3>Salud y bienestar</h3><p>Planifica atención profesional, alimentación y prevención.</p></article></div></div><aside className="commitment__aside"><span className="quote-mark">“</span><h3>Una decisión informada protege dos vidas</h3><p>Este bloque reemplaza el testimonio de Stitch con orientación editorial del proyecto; no representa una adopción real ni una alianza certificada.</p><small>Contenido informativo demostrativo</small></aside></section>

    <section className="section final-cta"><div><p className="eyebrow">Da el primer paso hoy</p><h2>¿Listo para explorar una segunda oportunidad?</h2><p>Conoce los perfiles disponibles en esta demostración del catálogo.</p></div><Link className="button" to="/mascotas">Explorar mascotas</Link></section>
  </>
}
