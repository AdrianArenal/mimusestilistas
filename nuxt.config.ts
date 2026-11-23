// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    'nuxt-ai-ready'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Mimu\'s estilistas' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  site: {
    url: 'https://mimusestilistas.com',
    name: 'Mimu\'s Estilistas',
    defaultLocale: 'es'
  },

  ui: {
    theme: {
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  vite: {
    plugins: [
      require('vite-svg-loader').default()
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
