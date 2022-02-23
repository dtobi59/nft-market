import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'hzs9y4ph',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skNEeRRCQUWJlQawLGkAvh241eHcIcPhXGUgMFvs5FHlMYbFUy0m7C94VpAIHJKqfWZGnydECF1e0BgSfDsrkiM3TUX3WdF7zOrboeDE9jZraDwvAtRZbku1vCyXqhqGyURWFrhzhtrknnBBB4mjNoZsdgIChj7xkJyR7njyj5lHdDoj6SgZ',
  useCdn: false,
})