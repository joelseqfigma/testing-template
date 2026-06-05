import React from 'react'
import { ProductCard } from './ProductCard'
import type { Product } from '@/payload-types'

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
