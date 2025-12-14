<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import LogoSvg from '~/assets/svg/logo.svg?component'
import ImagetypeSvg from '~/assets/svg/imagotype.svg?component'

defineProps<{
  links: NavigationMenuItem[]
}>()

const isOpen = ref(false)
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10 w-[calc(100%-1rem)] sm:w-auto">
    <!-- Mobile Menu (Drawer) -->
    <div class="lg:hidden bg-muted/80 backdrop-blur-sm rounded-full px-4 py-2 border border-muted/50 shadow-lg shadow-neutral-950/5 flex items-center justify-between">
      <NuxtLink to="/" aria-label="Ir a inicio - Mimu's Estilistas">
        <LogoSvg class="h-7 w-auto text-foreground" />
      </NuxtLink>
      <div class="flex items-center gap-2">
        <ColorModeButton />
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          size="sm"
          @click="isOpen = true"
        />
      </div>
    </div>

    <UDrawer
      v-model:open="isOpen"
      direction="right"
      title="Menú"
      description="Navegación principal del sitio"
      :ui="{ 
        content: 'w-72',
        body: 'p-0'
      }"
    >
      <template #body>
        <div class="flex justify-center py-6 border-b border-muted/20">
          <NuxtLink to="/" aria-label="Ir a inicio - Mimu's Estilistas" @click="isOpen = false">
            <ImagetypeSvg class="h-9 w-auto text-foreground" />
          </NuxtLink>
        </div>
        <nav class="flex flex-col">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="flex items-center gap-3 px-6 py-4 text-base hover:bg-muted/50 transition-colors border-b border-muted/20"
            active-class="bg-primary/10 text-primary font-semibold"
            @click="isOpen = false"
          >
            <UIcon v-if="link.icon" :name="link.icon" class="size-5" />
            {{ link.label }}
          </NuxtLink>
        </nav>
      </template>
    </UDrawer>

    <!-- Desktop Menu -->
    <div class="hidden lg:flex items-center gap-4 bg-muted/80 backdrop-blur-sm rounded-full px-4 border border-muted/50 shadow-lg shadow-neutral-950/5">
      <NuxtLink to="/" aria-label="Ir a inicio - Mimu's Estilistas">
        <LogoSvg class="h-8 w-auto text-foreground" />
      </NuxtLink>
      <UNavigationMenu
        :items="links"
        variant="link"
        color="neutral"
        class="flex-1"
        :ui="{
          link: 'px-2 py-1',
          linkLeadingIcon: 'hidden'
        }"
      >
        <template #list-trailing>
          <ColorModeButton />
        </template>
      </UNavigationMenu>
    </div>
  </div>
</template>
