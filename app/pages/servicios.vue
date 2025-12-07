<script setup lang="ts">
const { data: page } = await useAsyncData('servicios', () => queryCollection('pages').path('/servicios').first())

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Página no encontrada' })
}

const services = [
  {
    title: 'Peluquería',
    description: 'Servicios completos: peinados, color, mechas, corte y tratamientos capilares',
    icon: 'i-lucide-scissors',
    image: '/images/2.webp',
    featured: true,
    url: '/peluqueria-en-pola-de-siero'
  },
  {
    title: 'Estética',
    description: 'Manicura, pedicura, uñas de gel y maquillaje profesional',
    icon: 'i-lucide-sparkles',
    image: '/images/7.webp',
    featured: true,
    url: '/estetica-en-pola-de-siero'
  },
  {
    title: 'Bodas y Eventos',
    description: 'Peinados para novias, peinados y maquillaje para invitadas',
    icon: 'i-lucide-heart',
    image: '/images/25.webp',
    featured: true,
    url: '/novia-en-pola-de-siero'
  }
]

useSeoMeta({
  title: page.value.seo?.title,
  ogTitle: page.value.seo?.title,
  description: page.value.seo?.description,
  ogDescription: page.value.seo?.description
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      :title="page?.title" :description="page?.description">
      <template #links>
        <div class="flex flex-wrap gap-3">
          <UButton v-if="page?.cta?.primary" v-bind="page.cta.primary" size="lg" />
          <UButton v-if="page?.cta?.secondary" v-bind="page.cta.secondary" color="neutral" variant="outline"
            size="lg" />
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <div class="flex flex-col gap-8 mt-12">
        <NuxtLink :to="service.url" v-for="(service, index) in services" :key="index" class="block">
          <UCard v-motion :initial="{ opacity: 0, y: 30 }" :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: index * 100
            }
          }"
            class="overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div class="flex flex-col lg:flex-row h-full" :class="{ 'lg:flex-row-reverse': index === 1 }">
              <div v-if="service.image" class="relative w-full lg:w-96 h-80 md:h-80 lg:h-96 overflow-hidden shrink-0">
                <NuxtImg :src="service.image" :alt="service.title" class="w-full h-full object-cover" />
                <div class="absolute top-4 right-4 p-3 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg">
                  <UIcon :name="service.icon" class="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div class="p-6 flex flex-col grow">
                <h3 class="text-lg font-semibold mb-3">
                  {{ service.title }}
                </h3>

                <p class="text-gray-600 dark:text-gray-300 mb-4 grow">
                  {{ service.description }}
                </p>

                <div class="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-primary">
                  <span class="font-medium">Ver más</span>
                  <UIcon name="i-lucide-arrow-right" class="w-5 h-5" />
                </div>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>

      <!-- Call to Action Section -->
      <div v-motion :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }" class="mt-16 text-center">
        <UCard
          class="p-8 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 ring-1 ring-primary/20 rounded-2xl">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Reserva tu cita ahora y deja que nuestro equipo de profesionales cuide de ti.
            Más de 20 años de experiencia respaldan nuestro trabajo.
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <UButton to="/contacto" size="lg" color="primary">
              <template #leading>
                <UIcon name="i-lucide-calendar" />
              </template>
              Reservar cita
            </UButton>
            <UButton href="tel:984390259" size="lg" color="neutral" variant="outline">
              <template #leading>
                <UIcon name="i-lucide-phone" />
              </template>
              984 39 02 59
            </UButton>
          </div>
        </UCard>
      </div>
    </UPageBody>
  </UContainer>
</template>
