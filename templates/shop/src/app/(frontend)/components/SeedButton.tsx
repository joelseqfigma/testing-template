'use client'

import React, { useState } from 'react'

export function FrontendSeedButton() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleSeed = async () => {
    setStatus('loading')
    const res = await fetch('/api/seed', { method: 'POST' })
    if (res.ok) {
      setStatus('done')
      window.location.reload()
    }
  }

  return (
    <div className="seed-card">
      <h2>Welcome to your store</h2>
      <p>
        Get started by seeding your store with &quot;Design is Dead&quot; demo products.
      </p>
      <button onClick={handleSeed} disabled={status !== 'idle'}>
        {status === 'loading' ? 'Seeding...' : status === 'done' ? 'Done!' : 'Seed Demo Content'}
      </button>
    </div>
  )
}
