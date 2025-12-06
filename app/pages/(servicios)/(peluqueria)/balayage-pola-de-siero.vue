<script setup lang="ts">
useSeoMeta({
  title: 'Balayage con Highlights en Pola de Siero - Mimu\'s Estilistas',
  description: 'Balayage con highlights profesional. Técnica de barrido con iluminaciones estratégicas para un degradado natural en Pola de Siero, Asturias.'
})

const galleryImages = [
  { src: '/hero/random-1.avif', alt: 'Balayage con highlights 1' },
  { src: '/hero/random-2.avif', alt: 'Balayage con highlights 2' },
  { src: '/hero/random-3.avif', alt: 'Balayage con highlights 3' },
  { src: '/hero/random-4.avif', alt: 'Balayage con highlights 4' },
  { src: '/hero/random-5.avif', alt: 'Balayage con highlights 5' },
  { src: '/hero/random-6.avif', alt: 'Balayage con highlights 6' }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Balayage con Highlights"
      description="Técnica de barrido con iluminaciones estratégicas"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Balayage con Highlights' }
          ]"
        />
      </template>
      <template #links>
        <div class="flex flex-wrap gap-3">
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
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Texto introductorio -->
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="mb-12"
      >
        <div class="prose dark:prose-invert max-w-none">
          <div class="flex items-start gap-4">
            <div class="p-4 bg-primary/10 rounded-xl">
              <UIcon name="i-lucide-paintbrush" class="w-8 h-8 text-primary" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold mb-4 mt-0">
                Balayage con Highlights: lo mejor de dos técnicas
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Esta técnica combina lo mejor del balayage (barrido a mano alzada) con highlights estratégicos 
                para crear un efecto de iluminación multidimensional espectacular. El balayage aporta un degradado 
                natural y suave, mientras que los highlights añaden toques de luz más intensos en zonas clave.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                En Mimu's Estilistas personalizamos cada trabajo según tu tono base, la forma de tu rostro y el 
                efecto que deseas conseguir. El resultado es un cabello con mucho movimiento, dimensión y un acabado 
                profesional que se mantiene hermoso durante meses gracias a su crecimiento natural.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Degradado Natural
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                El balayage crea una transición suave de color desde las raíces hasta las puntas.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Iluminación Estratégica
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Los highlights añaden puntos de luz que enmarcan el rostro y aportan luminosidad extra.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Efecto Multidimensional
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                La combinación de ambas técnicas crea profundidad, textura y movimiento en el cabello.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Personalizado
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Adaptamos la técnica a tu color base, corte y estilo personal para un resultado único.
              </p>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Galería de imágenes -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <h2 class="text-2xl font-bold mb-6 text-center">
          Galería de trabajos
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            :delay="100 * index"
            class="relative aspect-square overflow-hidden rounded-xl group cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <NuxtImg
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              format="webp"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        </div>
      </div>

      <!-- CTA -->
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="bg-linear-to-br from-primary/10 via-primary/5 to-transparent ring-1 ring-primary/20"
      >
        <div class="text-center py-8">
          <h3 class="text-2xl font-bold mb-4">
            ¿Lista para un cambio espectacular?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            El balayage con highlights es perfecto para ti. Reserva tu cita y transforma tu look.
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
              Llamar ahora
            </UButton>
          </div>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>
