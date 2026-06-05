import Link from 'next/link'
import React from 'react'
import type { Media, Product } from '@/payload-types'

export function ProductCard({ product }: { product: Product }) {
  const image = product.images?.find(
    (img): img is Media => typeof img === 'object' && img !== null,
  )
  const price = (product.price / 100).toFixed(2)

  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <div className="image-container">
        {image?.url && <img src={image.url} alt={image.alt} />}
      </div>
      <div className="product-card-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  )
}
