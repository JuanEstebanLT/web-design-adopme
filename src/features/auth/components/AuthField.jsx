export default function AuthField({ error, hint, id, label, onToggleVisibility, ...inputProps }) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={`auth-field${error ? ' auth-field--error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="auth-field__control">
        <input
          id={id}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          {...inputProps}
        />
        {onToggleVisibility && (
          <button
            className="auth-field__toggle"
            type="button"
            aria-label={inputProps.type === 'password' ? `Mostrar ${label.toLowerCase()}` : `Ocultar ${label.toLowerCase()}`}
            aria-pressed={inputProps.type !== 'password'}
            onClick={onToggleVisibility}
          >
            {inputProps.type === 'password' ? 'Mostrar' : 'Ocultar'}
          </button>
        )}
      </div>
      {hint && <small id={hintId}>{hint}</small>}
      {error && <small className="auth-field__error" id={errorId}>{error}</small>}
    </div>
  )
}
