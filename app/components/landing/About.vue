<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :description="page.about.description"
    :ui="{
      container: '!p-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <div class="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg">
      <NuxtImg
        src="/hero/random-3.avif"
        alt="Mimus Estilistas"
        class="w-full h-full object-cover"
        loading="lazy"
        format="webp"
        quality="90"
      />
    </div>
  </UPageSection>
</template>
