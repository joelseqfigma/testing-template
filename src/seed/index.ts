import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import type { Payload } from 'payload'
import { products, storeSettings } from './data'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const assetsDir = path.resolve(dirname, 'assets')

export async function seed(payload: Payload): Promise<{ success: boolean; message: string }> {
  const { totalDocs } = await payload.count({ collection: 'products' })

  if (totalDocs > 0) {
    return { success: false, message: 'Products already seeded' }
  }

  for (const product of products) {
    const imagePath = path.resolve(assetsDir, product.image)
    const imageData = fs.readFileSync(imagePath)

    const media = await payload.create({
      collection: 'media',
      data: { alt: product.name },
      file: {
        data: imageData,
        name: product.image,
        mimetype: 'image/png',
        size: imageData.byteLength,
      },
    })

    await payload.create({
      collection: 'products',
      data: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        category: product.category,
        featured: product.featured,
        images: [media.id],
      },
    })
  }

  await payload.updateGlobal({
    slug: 'store-settings',
    data: storeSettings,
  })

  return { success: true, message: `Seeded ${products.length} products` }
}
