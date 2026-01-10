<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <LandingQuickNav />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <div class="relative w-full aspect-9/16 rounded-lg overflow-hidden">
        <video
          class="w-full h-full object-contain"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          loading="lazy"
          aria-label="Video de presentación de Mimu's Estilistas"
        >
          <source 
            src="https://pub-820a050bd8b941bdb6f8494e6c3603c2.r2.dev/98a2-bbda-4b4d-aa7a-8eaede9f6ed8.webm" 
            type="video/webm"
          >
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </UPageSection>
    <LandingFAQ :page />
  </UPage>
</template>
