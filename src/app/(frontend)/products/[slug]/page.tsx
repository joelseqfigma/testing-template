import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Media } from '@/payload-types'

type Args = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'products', limit: 100 })
  return docs.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const product = docs[0]
  return {
    title: product ? `${product.name} | Design is Dead` : 'Product Not Found',
  }
}

export default async function ProductPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const product = docs[0]
  if (!product) notFound()

  const image = product.images?.find(
    (img): img is Media => typeof img === 'object' && img !== null,
  )

  return (
    <div className="product-detail">
      <Link href="/" className="back-link">
        &larr; Back to shop
      </Link>
      <div className="product-layout">
        {image?.url && (
          <div className="product-image">
            <img src={image.url} alt={image.alt} />
          </div>
        )}
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-price">${(product.price / 100).toFixed(2)}</p>
          {product.description && <p className="product-description">{product.description}</p>}
        </div>
      </div>
    </div>
  )
}
