import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Products',
  icon: 'i-lucide-folder',
  to: '/products'
}, {
  label: 'About',
  icon: 'i-lucide-user',
  to: '/about'
}]
