import React from 'react'

export function HeroSection({
  settings,
}: {
  settings: { heroTitle?: string | null; heroSubtitle?: string | null }
}) {
  return (
    <section className="hero-section">
      <div className="info-grid">
        <div className="info-cell">
          <p className="info-label">What:</p>
          <p className="info-value">Merch<br />Drop</p>
        </div>
        <div className="info-cell">
          <p className="info-label">About:</p>
          <p className="info-value">
            {settings.heroSubtitle || 'Wearable statements that say what everyone is thinking.'}
          </p>
        </div>
        <div className="info-cell">
          <p className="info-label">Shop:</p>
          <p className="info-value">Browse the<br />full collection below</p>
        </div>
      </div>
    </section>
  )
}
