<script setup lang="ts">
useSeoMeta({
  title: 'Diseño de Color',
  ogTitle: 'Diseño de Color',
  description: 'Servicio profesional de diseño de color: decoloración, color completo, baño de color y color de raíces. Personaliza tu look en Pola de Siero, Asturias.',
  ogDescription: 'Servicio profesional de diseño de color: decoloración, color completo, baño de color y color de raíces. Personaliza tu look en Pola de Siero, Asturias.'
})

const galleryImages = [
  { src: '/hero/random-1.avif', alt: 'Diseño de color 1' },
  { src: '/hero/random-2.avif', alt: 'Diseño de color 2' },
  { src: '/hero/random-3.avif', alt: 'Diseño de color 3' },
  { src: '/hero/random-4.avif', alt: 'Diseño de color 4' },
  { src: '/hero/random-5.avif', alt: 'Diseño de color 5' },
  { src: '/hero/random-6.avif', alt: 'Diseño de color 6' }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Diseño de Color"
      description="Coloración personalizada con técnicas profesionales adaptadas a tu estilo"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Diseño de Color' }
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
                Coloración personalizada y profesional
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
                En Mimu's Estilistas somos expertas en diseño de color. Ya sea que quieras un cambio radical 
                o simplemente refrescar tu tono natural, nuestro equipo te asesorará para conseguir el resultado 
                perfecto adaptado a tu estilo y personalidad.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Trabajamos con productos profesionales de alta calidad que cuidan tu cabello mientras logran 
                colores vibrantes y duraderos. Desde decoloraciones para cambios de look completos hasta baños 
                de color para matizar y dar brillo, pasando por color de raíces para mantener tu tono impecable.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Decoloración
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Base perfecta para cambios de color. Técnica profesional para aclarar tu cabello de forma segura.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Color Completo
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Cambio total de look o cobertura completa. Coloración uniforme de raíz a puntas.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Baño de Color
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Refuerzo de color y brillo. Ideal para mantener tu tono radiante entre coloraciones.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Color de Raíces
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Retoque perfecto. Mantén tu color impecable sin necesidad de teñir todo el cabello.
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
            ¿Lista para tu nuevo color?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Contacta con nosotras y te asesoraremos para encontrar el color perfecto para ti.
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
