
import { useState } from 'react'
import AuthField from '../features/auth/components/AuthField.jsx'
import AuthShell from '../features/auth/components/AuthShell.jsx'
import { hasValidationErrors, validateRegister } from '../features/auth/utils/validation.js'

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function RegisterPage() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [visiblePasswords, setVisiblePasswords] = useState({ password: false, confirmPassword: false })
  const [formMessage, setFormMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setFormMessage('')
  }

  function togglePassword(field) {
    setVisiblePasswords((current) => ({ ...current, [field]: !current[field] }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateRegister(values)
    setErrors(nextErrors)

    if (hasValidationErrors(nextErrors)) {
      setFormMessage('Revisa los campos marcados antes de continuar.')
      return
    }

    setFormMessage('Formulario válido. El registro estará disponible cuando conectemos Supabase.')
  }

  return (
    <AuthShell
      eyebrow="Una nueva historia comienza"
      title="Únete a Adopme"
      description="Prepara tu perfil para dar el primer paso hacia una adopción informada y responsable."
      alternateText="¿Ya tienes una cuenta?"
      alternateLink="/login"
      alternateLinkText="Inicia sesión"
    >
      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        <div className="auth-form__heading">
          <h2>Crear una cuenta</h2>
          <p>Completa tus datos personales. No serán enviados mientras el registro esté deshabilitado.</p>
        </div>

        <AuthField
          id="full-name"
          label="Nombre completo"
          type="text"
          name="fullName"
          placeholder="Tu nombre completo"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
        />

        <AuthField
          id="register-email"
          label="Correo electrónico"
          type="email"
          name="email"
          placeholder="ejemplo@correo.com"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <AuthField
          id="register-password"
          label="Contraseña"
          hint="Usa al menos 8 caracteres."
          type={visiblePasswords.password ? 'text' : 'password'}
          name="password"
          placeholder="Crea una contraseña"
          autoComplete="new-password"
          minLength={8}
          value={values.password}
          onChange={handleChange}
          onToggleVisibility={() => togglePassword('password')}
          error={errors.password}
          required
        />

        <AuthField
          id="confirm-password"
          label="Confirmar contraseña"
          type={visiblePasswords.confirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Repite tu contraseña"
          autoComplete="new-password"
          minLength={8}
          value={values.confirmPassword}
          onChange={handleChange}
          onToggleVisibility={() => togglePassword('confirmPassword')}
          error={errors.confirmPassword}
          required
        />

        <button className="button auth-form__submit" type="submit">
          Validar formulario
        </button>

        <p className={`auth-form__notice${formMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
          <span aria-hidden="true">i</span>
          {formMessage || 'Puedes revisar el formulario localmente. No se enviará ningún dato.'}
        </p>
      </form>
    </AuthShell>
  )
}
