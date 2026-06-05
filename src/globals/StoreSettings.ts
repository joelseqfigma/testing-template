import type { GlobalConfig } from 'payload'

export const StoreSettings: GlobalConfig = {
  slug: 'store-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'storeName',
      type: 'text',
      defaultValue: 'Design is Dead',
    },
    {
      name: 'heroTitle',
      type: 'text',
      defaultValue: 'Design is Dead',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'aboutText',
      type: 'richText',
    },
    {
      name: 'newsletterHeading',
      type: 'text',
      defaultValue: 'Sign up for our newsletter',
    },
    {
      name: 'instagramHandle',
      type: 'text',
      defaultValue: '@designisdead',
    },
    {
      name: 'footerTagline',
      type: 'text',
      defaultValue: 'Rebellion against the ordinary.',
    },
  ],
}
