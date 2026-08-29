import type { CollectionConfig } from 'payload'
import path from 'path'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes('placeholder'))
  ? process.env.NEXT_PUBLIC_SITE_URL
  : 'https://instantlyfeed.com'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(process.cwd(), 'public/media'),
    mimeTypes: ['image/*', 'video/*'],
    adminThumbnail: ({ doc }: any) => {
      if (doc?.sizes?.thumbnail?.filename) return `/media/${doc.sizes.thumbnail.filename}`
      if (doc?.sizes?.thumbnail?.url) return doc.sizes.thumbnail.url
      if (doc?.filename) return `/media/${doc.filename}`
      if (doc?.externalUrl) return doc.externalUrl
      if (doc?.url) return doc.url
      return null
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 267,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
  },
  admin: {
    useAsTitle: 'filename',
    description: 'Images and media assets.',
    defaultColumns: ['filename', 'alt', 'mimeType', 'filesize', 'createdAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => (req.user as any)?.role === 'admin' || (req.user as any)?.role === 'editor',
    delete: ({ req }) => (req.user as any)?.role === 'admin',
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        // If it's an external source, use the externalUrl
        if (data.source === 'external' && data.externalUrl) {
          data.url = data.externalUrl
        } else if (data.filename) {
          // Store relative /media URL so it works seamlessly across localhost and production
          data.url = `/media/${data.filename}`
        }
        return data
      },
    ],
    afterRead: [
      ({ doc }) => {
        if (doc.source === 'external' && doc.externalUrl) {
          doc.url = doc.externalUrl
        } else if (doc.url && (doc.url.startsWith('http://') || doc.url.startsWith('https://'))) {
          // Keep external URLs as-is
        } else if (doc.filename) {
          doc.url = `/media/${doc.filename}`
        } else if (doc.url && doc.url.startsWith('/api/media/file/')) {
          doc.url = `/media/${doc.url.replace('/api/media/file/', '')}`
        }

        // Also ensure all image size URLs use the direct /media/ path
        if (doc.sizes && typeof doc.sizes === 'object') {
          for (const sizeKey of Object.keys(doc.sizes)) {
            if (doc.sizes[sizeKey]?.filename) {
              doc.sizes[sizeKey].url = `/media/${doc.sizes[sizeKey].filename}`
            }
          }
        }
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
      defaultValue: 'InstantlyFeed',
      admin: {
        description: 'Alt text for accessibility and SEO',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption displayed below image',
      },
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'local',
      options: [
        { label: 'Local Upload', value: 'local' },
        { label: 'External URL', value: 'external' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        condition: (data) => data?.source === 'external',
        description: 'Direct link to an external image (e.g., Unsplash, Cloudinary)',
      },
    },
  ],
}
