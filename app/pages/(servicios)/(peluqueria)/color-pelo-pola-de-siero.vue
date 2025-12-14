<script setup lang="ts">
useSeoMeta({
  title: 'Color de Pelo',
  ogTitle: 'Color de Pelo',
  description: 'Tintes profesionales y coloración personalizada en Pola de Siero. Marcas de calidad. Pide tu cita.',
  ogDescription: 'Tintes profesionales y coloración personalizada en Pola de Siero. Marcas de calidad. Pide tu cita.'
})

const galleryImages = [
  { src: '/hero/random-1.avif', alt: 'Color de pelo 1' },
  { src: '/hero/random-2.avif', alt: 'Color de pelo 2' },
  { src: '/hero/random-3.avif', alt: 'Color de pelo 3' },
  { src: '/hero/random-4.avif', alt: 'Color de pelo 4' },
  { src: '/hero/random-5.avif', alt: 'Color de pelo 5' },
  { src: '/hero/random-6.avif', alt: 'Color de pelo 6' }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Color de Pelo"
      description="Dale vida y personalidad a tu cabello con color profesional"
    >
      <template #headline>
        <ResponsiveBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Color' }
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
              <UIcon name="i-lucide-palette" class="w-8 h-8 text-primary" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold mb-4 mt-0">
                Color profesional para transformar tu look
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Trabajamos con tintes profesionales de alta calidad que respetan tu cabello mientras 
                consiguen el color deseado. Desde tonos naturales hasta cambios más atrevidos, 
                te asesoramos para encontrar el color perfecto para ti.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Ofrecemos servicios de color de raíces, color completo, baño de color, decoloración 
                y corrección de color. Cada servicio incluye un análisis personalizado y 
                recomendaciones de mantenimiento para que tu color dure más tiempo con brillo y vitalidad.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Productos de Calidad
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Utilizamos marcas profesionales que cuidan y protegen tu cabello durante el proceso.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Asesoramiento Personalizado
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Te ayudamos a elegir el tono ideal según tu piel, ojos y estilo personal.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Cobertura Perfecta
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Cobertura total de canas con resultados naturales y uniformes.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Color Duradero
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Fórmulas de larga duración que mantienen el brillo y la intensidad del color.
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
            ¿Lista para un cambio de color?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Reserva tu cita y déjanos asesorarte para encontrar el color perfecto para ti.
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
