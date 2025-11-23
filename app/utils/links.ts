import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Inicio',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Servicios',
  icon: 'i-lucide-scissors',
  to: '/servicios'
}, {
  label: 'Productos',
  icon: 'i-lucide-shopping-bag',
  to: '/productos'
}, {
  label: 'Equipo',
  icon: 'i-lucide-users',
  to: '/equipo'
}, {
  label: 'Contacto',
  icon: 'i-lucide-mail',
  to: '/contacto'
}]
