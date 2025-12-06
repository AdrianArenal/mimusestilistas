<script setup lang="ts">
useSeoMeta({
  title: 'Babylights en Pola de Siero - Mimu\'s Estilistas',
  description: 'Babylights profesionales para una iluminación natural y sutil. Mechas finas que aportan luminosidad a tu cabello en Pola de Siero, Asturias.'
})

const galleryImages = [
  { src: '/hero/random-1.avif', alt: 'Babylights 1' },
  { src: '/hero/random-2.avif', alt: 'Babylights 2' },
  { src: '/hero/random-3.avif', alt: 'Babylights 3' },
  { src: '/hero/random-4.avif', alt: 'Babylights 4' },
  { src: '/hero/random-5.avif', alt: 'Babylights 5' },
  { src: '/hero/random-6.avif', alt: 'Babylights 6' }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Babylights"
      description="Iluminación sutil y natural con mechas finas"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Babylights' }
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
              <UIcon name="i-lucide-sun" class="w-8 h-8 text-primary" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold mb-4 mt-0">
                Babylights: iluminación sutil como la de un niño
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Los babylights son mechas ultrafinas que imitan el efecto natural del sol en el cabello infantil. 
                Esta técnica consiste en aplicar finísimas mechas distribuidas estratégicamente por todo el cabello 
                para crear una iluminación delicada, natural y muy favorecedora.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Es perfecta si buscas aclarar tu cabello de forma gradual y natural, sin grandes contrastes. 
                Los babylights aportan luminosidad, dimensión y movimiento al cabello, consiguiendo un efecto 
                "beso de sol" muy sofisticado y elegante. Son ideales para cualquier base de color y requieren 
                poco mantenimiento.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Resultado Natural
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Mechas tan finas que se integran perfectamente con tu color base, creando un efecto muy natural.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Bajo Mantenimiento
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Al ser tan finas y naturales, el crecimiento se disimula mucho mejor que con mechas tradicionales.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Luminosidad y Dimensión
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Aportan luz y profundidad al cabello sin necesidad de un cambio drástico de color.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Para Todos los Tonos
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Adaptable a cualquier color de base, desde rubios hasta castaños oscuros.
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
            ¿Quieres una iluminación natural?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Los babylights son perfectos para ti. Reserva tu cita y descubre este efecto tan natural.
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
