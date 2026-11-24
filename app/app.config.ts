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
    credits: `Mimus • © ${new Date().getFullYear()} • Pola de Siero, Asturias`,
    colorMode: false,
    links: [{
      'icon': 'i-lucide-instagram',
      'to': 'https://www.instagram.com/mimus.beauty/',
      'target': '_blank',
      'aria-label': 'Mimus en Instagram'
    }, {
      'icon': 'i-lucide-phone',
      'to': 'tel:604812695',
      'aria-label': 'Llamar a Mimus'
    }]
  }
})
