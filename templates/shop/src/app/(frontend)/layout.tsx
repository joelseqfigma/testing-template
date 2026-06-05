import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './styles.css'

export const metadata = {
  title: 'Design is Dead',
  description: 'A rebellion against the ordinary.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config: configPromise })

  let storeName = 'Design is Dead'
  let footerTagline = 'Rebellion against the ordinary.'
  let instagramHandle = '@designisdead'

  try {
    const settings = await payload.findGlobal({ slug: 'store-settings' })
    storeName = settings.storeName || storeName
    footerTagline = settings.footerTagline || footerTagline
    instagramHandle = settings.instagramHandle || instagramHandle
  } catch {
    // Settings not yet initialized, use defaults
  }

  return (
    <html lang="en">
      <body>
        <Header storeName={storeName} />
        <main>{children}</main>
        <Footer tagline={footerTagline} instagramHandle={instagramHandle} />
      </body>
    </html>
  )
}
