<script setup lang="ts">
useSeoMeta({
  title: 'Matizados',
  ogTitle: 'Matizados',
  description: 'Servicio profesional de matizados para todo tipo de cabello. Consigue el tono perfecto y elimina reflejos no deseados en Pola de Siero, Asturias.',
  ogDescription: 'Servicio profesional de matizados para todo tipo de cabello. Consigue el tono perfecto y elimina reflejos no deseados en Pola de Siero, Asturias.'
})

const galleryImages = [
  { src: '/hero/random-1.avif', alt: 'Matizado 1' },
  { src: '/hero/random-2.avif', alt: 'Matizado 2' },
  { src: '/hero/random-3.avif', alt: 'Matizado 3' },
  { src: '/hero/random-4.avif', alt: 'Matizado 4' },
  { src: '/hero/random-5.avif', alt: 'Matizado 5' },
  { src: '/hero/random-6.avif', alt: 'Matizado 6' }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Matizados"
      description="Consigue el tono perfecto y elimina reflejos no deseados"
    >
      <template #headline>
        <ResponsiveBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Matizados' }
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
              <UIcon name="i-lucide-droplet" class="w-8 h-8 text-primary" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold mb-4 mt-0">
                Matizados profesionales para el tono perfecto
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Los matizados son tratamientos de color semipermanentes que permiten neutralizar reflejos no deseados 
                y conseguir el tono exacto que buscas. Son perfectos para cabellos decolorados, rubios, grises o con mechas 
                que necesitan ajustar sus matices.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                En Mimu's Estilistas trabajamos con matizadores profesionales de alta calidad que no solo corrigen el tono, 
                sino que también aportan brillo, suavidad y cuidado a tu cabello. Ya sea que busques eliminar tonos naranjas, 
                amarillos o potenciar los fríos, tenemos la solución perfecta para ti.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Matizado Violeta/Morado
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Neutraliza tonos amarillos en rubios platinos y grises. Consigue un rubio frío y luminoso.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Matizado Azul
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Elimina reflejos naranjas en bases medias. Perfecto para castaños y bases más oscuras.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Matizado Ceniza
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Para conseguir tonos ceniza y eliminar cálidos. Ideal para looks modernos y sofisticados.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary" />
                Matizado Beige/Dorado
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Aporta calidez y neutraliza tonos verdosos. Perfecto para rubios cálidos y naturales.
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
            ¿Quieres corregir tu tono?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Consúltanos y te asesoraremos sobre el matizado perfecto para tu cabello.
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
