
import { useState } from 'react'
import AuthField from '../features/auth/components/AuthField.jsx'
import AuthShell from '../features/auth/components/AuthShell.jsx'
import { hasValidationErrors, validateLogin } from '../features/auth/utils/validation.js'

const initialValues = { email: '', password: '' }

export default function LoginPage() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setFormMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateLogin(values)
    setErrors(nextErrors)

    if (hasValidationErrors(nextErrors)) {
      setFormMessage('Revisa los campos marcados antes de continuar.')
      return
    }

    setFormMessage('Formulario válido. El inicio de sesión estará disponible cuando conectemos Supabase.')
  }

  return (
    <AuthShell
      eyebrow="Tu espacio en Adopme"
      title="¡Qué alegría verte de nuevo!"
      description="En el futuro podrás consultar y acompañar tus solicitudes de adopción desde aquí."
      alternateText="¿Todavía no tienes cuenta?"
      alternateLink="/registro"
      alternateLinkText="Regístrate"
    >
      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        <div className="auth-form__heading">
          <h2>Iniciar sesión</h2>
          <p>Ingresa los datos que usarás cuando habilitemos las cuentas.</p>
        </div>

        <AuthField
          id="login-email"
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
          id="login-password"
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Tu contraseña"
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange}
          onToggleVisibility={() => setShowPassword((visible) => !visible)}
          error={errors.password}
          required
        />

        <div className="auth-form__help">
          <span>¿Olvidaste tu contraseña?</span>
          <small>La recuperación estará disponible más adelante.</small>
        </div>

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
