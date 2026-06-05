'use client'

import Link from 'next/link'
import React from 'react'

const categories = [
  { label: 'All', value: '' },
  { label: 'Apparel', value: 'apparel' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Drinkware', value: 'drinkware' },
  { label: 'Stationery', value: 'stationery' },
]

export function CategoryFilter({ active }: { active?: string }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <Link
          key={cat.value}
          href={cat.value ? `/?category=${cat.value}` : '/'}
          className={`filter-tab ${(active || '') === cat.value ? 'active' : ''}`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  )
}
