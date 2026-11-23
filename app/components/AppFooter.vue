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
    label: 'Política de privacidad',
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
    class="z-10"
    :ui="{
      left: 'text-muted text-xs',
      container: 'py-8 lg:py-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-x-3',
      center: 'order-2 lg:order-2 flex items-center justify-center w-full lg:w-auto',
      right: 'order-3 lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5'
    }"
  >
    <template #left>
      <div class="flex flex-col gap-3 order-1 lg:flex-1">
        <NuxtLink
          to="/"
          aria-label="Ir a inicio - Mimus"
        >
          <img
            src="/isotipo-mimus.svg"
            alt="Logo Mimus"
            class="h-7 w-auto"
          >
        </NuxtLink>
        <div class="text-center lg:text-left text-muted">
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
        <div class="flex flex-col items-center lg:items-end gap-2">
          <div class="flex gap-2 shrink-0">
            <UButton
              v-for="(link, index) of footer?.links"
              :key="index"
              v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
            />
          </div>
          <UButton
            href="https://g.page/r/CUjz0HlYvopoEBM/review"
            target="_blank"
            size="xs"
            color="primary"
            variant="soft"
            class="whitespace-nowrap"
          >
            <template #leading>
              <UIcon
                name="i-lucide-star"
                class="size-4"
              />
            </template>
            Valorar
          </UButton>
        </div>
      </template>
    </template>
  </UFooter>
</template>
