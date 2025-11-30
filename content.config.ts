import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createBaseSchema = () => z.object({
  title: z.string(),
  description: z.string()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

const createAuthorSchema = () => z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  to: z.string().optional(),
  avatar: createImageSchema().optional()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema())
        }),
        about: createBaseSchema(),
        faq: createBaseSchema().extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  content: z.string().nonempty()
                })
              )
            }))
        })
      })
    }),
    productos: defineCollection({
      type: 'data',
      source: 'productos/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        category: z.string().nonempty(),
        price: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: 'media' }),
        featured: z.boolean().optional(),
        brand: z.string().optional()
      })
    }),
    servicios: defineCollection({
      type: 'data',
      source: 'servicios/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        icon: z.string().editor({ input: 'icon' }),
        price: z.string().nonempty(),
        duration: z.string().nonempty(),
        featured: z.boolean().optional()
      })
    }),
    equipo: defineCollection({
      type: 'data',
      source: 'equipo/*.yml',
      schema: z.object({
        name: z.string().nonempty(),
        role: z.string().nonempty(),
        specialties: z.array(z.string()),
        experience: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: 'media' }),
        featured: z.boolean().optional()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'productos.yml' },
        { include: 'servicios.yml' },
        { include: 'equipo.yml' }
      ],
      schema: z.object({
        links: z.array(createButtonSchema()).optional(),
        cta: z.object({
          primary: createButtonSchema(),
          secondary: createButtonSchema().optional()
        }).optional(),
        images: z.array(createImageSchema()).optional()
      })
    }),
    policies: defineCollection({
      type: 'page',
      source: '*.md'
    })
  }
})
