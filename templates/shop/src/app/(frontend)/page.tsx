import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React from 'react'

import { HeroSection } from './components/HeroSection'
import { ProductGrid } from './components/ProductGrid'
import { CategoryFilter } from './components/CategoryFilter'
import { AboutSection } from './components/AboutSection'
import { Newsletter } from './components/Newsletter'
import { FrontendSeedButton } from './components/SeedButton'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const payload = await getPayload({ config: configPromise })
  const { category } = await searchParams

  const { docs: products } = await payload.find({
    collection: 'products',
    where: category ? { category: { equals: category } } : {},
    limit: 100,
    depth: 1,
  })

  const settings = await payload.findGlobal({ slug: 'store-settings', depth: 1 })

  if (products.length === 0 && !category) {
    return <FrontendSeedButton />
  }

  return (
    <>
      <HeroSection settings={settings} />
      <div className="product-grid-section">
        <CategoryFilter active={category} />
        <ProductGrid products={products} />
      </div>
      <AboutSection />
      <Newsletter heading={settings.newsletterHeading} />
    </>
  )
}
