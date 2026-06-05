import React from 'react'

export function Newsletter({ heading }: { heading?: string | null }) {
  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-box">
        <h2>{heading || 'Sign up for our newsletter'}</h2>
      </div>
    </section>
  )
}
