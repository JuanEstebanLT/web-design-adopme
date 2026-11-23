import { Link } from 'react-router-dom'
import PetCard from '../components/ui/PetCard.jsx'
import { pets } from '../features/pets/data/pets.js'

const steps = [
  {
    number: '01',
    title: 'Explora con calma',
    text: 'Conoce perfiles claros, características y la organización responsable de cada mascota.',
  },
  {
    number: '02',
    title: 'Expresa tu interés',
    text: 'Revisa los requisitos y envía una solicitud cuando encuentres una conexión adecuada.',
  },
  {
    number: '03',
    title: 'Adopta responsablemente',
    text: 'El refugio acompaña la evaluación, el encuentro y la adaptación al nuevo hogar.',
  },
]

const frequentlyAskedQuestions = [
  {
    question: '¿Ver el catálogo requiere una cuenta?',
    answer: 'No. El catálogo y los perfiles de las mascotas seguirán siendo públicos. La cuenta se utilizará más adelante para gestionar solicitudes.',
  },
  {
    question: '¿La adopción se aprueba inmediatamente?',
    answer: 'No. Cada refugio revisará la solicitud, conversará con la persona interesada y confirmará que el hogar sea adecuado para la mascota.',
  },
  {
    question: '¿Los perfiles actuales corresponden a adopciones reales?',
    answer: 'Todavía no. Los datos actuales son demostrativos y sirven para construir y probar el frontend de Adopme.',
  },
  {
    question: '¿Qué debo preparar antes de adoptar?',
    answer: 'Tiempo, presupuesto para cuidados veterinarios y alimentación, un espacio seguro y el compromiso de acompañar toda la vida de la mascota.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="hero__content">
          <p className="eyebrow">Adopciones con propósito</p>
          <h1>Tu próxima gran historia puede comenzar con cuatro patas.</h1>
          <p className="hero__lead">
            Encuentra mascotas acompañadas por refugios responsables y conoce cada paso antes de
            tomar una decisión que cambia dos vidas.
          </p>
          <div className="hero__actions">
            <Link className="button" to="/mascotas">
              Conocer mascotas
            </Link>
            <a className="text-link" href="#proceso">
              Ver cómo funciona <span aria-hidden="true">↓</span>
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>3 pasos</dt>
              <dd>para iniciar el proceso</dd>
            </div>
            <div>
              <dt>Información clara</dt>
              <dd>antes de solicitar</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual" aria-label="Luna, mascota destacada">
          <img src={pets[0].imageUrl} alt="Luna, perra mestiza disponible para adopción" />
          <div className="hero__card">
            <span className="status-dot" aria-hidden="true" />
            Disponible en Medellín
            <strong>Luna · 2 años</strong>
          </div>
          <span className="hero__shape hero__shape--one" aria-hidden="true">♥</span>
          <span className="hero__shape hero__shape--two" aria-hidden="true">✦</span>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Esperan por ti</p>
            <h2 id="featured-title">Conoce algunas historias</h2>
          </div>
          <Link className="text-link" to="/mascotas">Ver catálogo completo →</Link>
        </div>
        <div className="pet-grid">
          {pets.slice(0, 3).map((pet) => <PetCard key={pet.id} pet={pet} />)}
        </div>
        <p className="section-note">Perfiles demostrativos para validar el diseño y la navegación del proyecto.</p>
      </section>

      <section className="section process" id="proceso" aria-labelledby="process-title">
        <div className="process__intro">
          <p className="eyebrow">Un proceso consciente</p>
          <h2 id="process-title">Adoptar es elegir con información y compromiso.</h2>
          <p>
            Adopme está pensado para conectar, no para reemplazar la evaluación responsable que
            realiza cada organización.
          </p>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section faq" aria-labelledby="faq-title">
        <div className="faq__intro">
          <p className="eyebrow">Antes de dar el paso</p>
          <h2 id="faq-title">Preguntas frecuentes sobre adopción</h2>
          <p>Respuestas sencillas para comprender el alcance actual de Adopme y tomar decisiones responsables.</p>
        </div>
        <div className="faq__list">
          {frequentlyAskedQuestions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div>
          <p className="eyebrow">¿Listo para explorar?</p>
          <h2>Hay una historia esperando encontrarse con la tuya.</h2>
        </div>
        <Link className="button button--light" to="/mascotas">Buscar mi compañero</Link>
      </section>
    </>
  )
}
