'use client'

import React, { useState, useEffect } from 'react'

const SeedButton: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'hidden'>('loading')

  useEffect(() => {
    fetch('/api/products?limit=1')
      .then((r) => r.json())
      .then((data) => setStatus(data.totalDocs > 0 ? 'hidden' : 'idle'))
      .catch(() => setStatus('idle'))
  }, [])

  if (status === 'hidden' || status === 'loading') return null

  const handleSeed = async () => {
    setStatus('loading')
    const res = await fetch('/api/seed', { method: 'POST' })
    if (res.ok) {
      setStatus('success')
      window.location.reload()
    }
  }

  return (
    <div style={{
      padding: '2rem',
      background: '#111',
      borderRadius: '8px',
      margin: '1rem 0',
    }}>
      <h3 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '1.125rem' }}>
        Seed Demo Content
      </h3>
      <p style={{ color: '#888', margin: '0 0 1rem', fontSize: '0.875rem' }}>
        Populate the store with &quot;Design is Dead&quot; products and settings.
      </p>
      <button
        onClick={handleSeed}
        disabled={status === 'success'}
        style={{
          background: '#fff',
          color: '#000',
          border: 'none',
          padding: '0.5rem 1.5rem',
          borderRadius: '4px',
          cursor: status === 'success' ? 'default' : 'pointer',
          fontWeight: 600,
          fontSize: '0.875rem',
        }}
      >
        {status === 'success' ? 'Seeded!' : 'Seed Demo Content'}
      </button>
    </div>
  )
}

export default SeedButton
