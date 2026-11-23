const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(value) {
  if (!value.trim()) return 'El correo electrónico es obligatorio.'
  if (!EMAIL_PATTERN.test(value.trim())) return 'Escribe un correo electrónico válido.'
  return ''
}

export function validateLogin(values) {
  return {
    email: validateEmail(values.email),
    password: values.password ? '' : 'La contraseña es obligatoria.',
  }
}

export function validateRegister(values) {
  return {
    fullName: values.fullName.trim() ? '' : 'El nombre completo es obligatorio.',
    email: validateEmail(values.email),
    password: !values.password
      ? 'La contraseña es obligatoria.'
      : values.password.length < 8
        ? 'La contraseña debe tener al menos 8 caracteres.'
        : '',
    confirmPassword: !values.confirmPassword
      ? 'Confirma tu contraseña.'
      : values.password !== values.confirmPassword
        ? 'Las contraseñas no coinciden.'
        : '',
  }
}

export function hasValidationErrors(errors) {
  return Object.values(errors).some(Boolean)
}
