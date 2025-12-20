export default defineAppConfig({
  global: {
    picture: {
      dark: '/hero/random-1.avif',
      light: '/hero/random-1.avif',
      alt: 'Logo Mimu\'s Estilistas'
    },
    meetingLink: '/contacto'
  },
  ui: {
    colors: {
      primary: 'yellow',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Mimu's Estilistas • © ${new Date().getFullYear()} • Pola de Siero, Asturias`,
    colorMode: false,
    links: [{
      'icon': 'i-lucide-facebook',
      'to': 'https://www.facebook.com/p/mimus-estilistas-61553670413042/?locale=es_ES',
      'target': '_blank',
      'aria-label': 'Mimu\'s Estilistas en Facebook'
    }, {
      'icon': 'i-lucide-instagram',
      'to': 'https://www.instagram.com/mimus_estilistas/',
      'target': '_blank',
      'aria-label': 'Mimu\'s Estilistas en Instagram'
    }, {
      'icon': 'i-lucide-phone',
      'to': 'tel:984390259',
      'aria-label': 'Llamar a Mimu\'s Estilistas'
    }]
  }
})
