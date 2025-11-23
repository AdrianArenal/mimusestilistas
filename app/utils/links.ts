import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Inicio',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Productos',
  icon: 'i-lucide-folder',
  to: '/productos'
}, {
  label: 'Sobre Mí',
  icon: 'i-lucide-user',
  to: '/sobre-mi'
}]
