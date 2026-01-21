import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '4mkag7kh',      // your real project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})