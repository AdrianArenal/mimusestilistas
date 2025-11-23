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
    :ui="{ 
      left: 'text-muted text-xs',
      container: 'py-8 lg:py-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-x-3',
      center: 'order-2 lg:order-2 flex items-center justify-center w-full lg:w-auto',
      right: 'order-3 lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5'
    }"
  >
    <template #left>
      <div class="text-center lg:text-left order-1 lg:flex-1">
        {{ footer.credits }}
      </div>
    </template>

    <UNavigationMenu
      :items="menuItems"
      variant="link"
      color="neutral"
      class="text-xs"
      :ui="{
        link: 'text-xs text-muted hover:text-highlighted px-2',
        list: 'flex flex-wrap justify-center gap-x-2 gap-y-2'
      }"
    />

    <template #right>
      <template v-if="footer?.links">
        <div class="flex gap-2 shrink-0">
          <UButton
            v-for="(link, index) of footer?.links"
            :key="index"
            v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
          />
        </div>
      </template>
    </template>
  </UFooter>
</template>
