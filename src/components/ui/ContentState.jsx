export default function ContentState({ action, message, title, type = 'empty' }) {
  return (
    <div className={`content-state content-state--${type}`} role={type === 'error' ? 'alert' : 'status'}>
      <span className="content-state__icon" aria-hidden="true">
        {type === 'error' ? '!' : type === 'loading' ? '…' : '♡'}
      </span>
      <h2>{title}</h2>
      <p>{message}</p>
      {action}
    </div>
  )
}
