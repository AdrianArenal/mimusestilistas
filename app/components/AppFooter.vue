<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { footer } = useAppConfig()

const menuItems: NavigationMenuItem[] = [
  {
    label: 'Aviso Legal',
    to: '/aviso-legal'
  },
  {
    label: 'Política de Cookies',
    to: '/politica-cookies'
  },
  {
    label: 'Mapa del Sitio',
    to: '/mapa-sitio'
  },
  {
    label: 'Política de Privacidad',
    to: '/politica-privacidad'
  },
  {
    label: 'Accesibilidad',
    to: '/politica-accesibilidad'
  }
]
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-muted text-xs' }"
  >
    <template #left>
      {{ footer.credits }}
    </template>

    <UNavigationMenu
      :items="menuItems"
      variant="link"
      color="neutral"
      class="text-xs"
      :ui="{
      link: 'text-xs text-muted hover:text-highlighted'
      }"
    />

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
