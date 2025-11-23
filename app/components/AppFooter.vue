<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { footer } = useAppConfig()

const menuItems: NavigationMenuItem[] = [
  {
    label: 'Legal Notice',
    to: '/legal-notice'
  },
  {
    label: 'Cookie Policy',
    to: '/cookie-policy'
  },
  {
    label: 'Sitemap',
    to: '/sitemap'
  },
  {
    label: 'Privacy Policy',
    to: '/privacy-policy'
  },
  {
    label: 'Accessibility',
    to: '/accessibility-policy'
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
