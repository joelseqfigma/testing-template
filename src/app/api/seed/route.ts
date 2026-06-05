import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { seed } from '@/seed'

export const POST = async () => {
  const payload = await getPayload({ config: configPromise })
  const result = await seed(payload)

  return Response.json(result, { status: result.success ? 200 : 409 })
}
