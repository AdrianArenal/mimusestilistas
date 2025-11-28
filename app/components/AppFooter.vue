<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import ImagetypeSvg from '~/assets/svg/imagotype.svg?component'

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
      <div class="flex flex-col lg:grid lg:grid-cols-2 items-center lg:items-start gap-3 lg:gap-x-8 lg:gap-y-2 order-1 lg:flex-1">
        <NuxtLink to="/" aria-label="Ir a inicio - Mimu's Estilistas" class="lg:col-span-2">
          <ImagetypeSvg class="h-7 w-auto text-foreground" />
        </NuxtLink>
        <div class="text-center lg:text-left text-muted lg:col-span-2">
          {{ footer.credits }}
        </div>
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
