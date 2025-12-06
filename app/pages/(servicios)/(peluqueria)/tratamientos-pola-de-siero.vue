<script setup lang="ts">
useSeoMeta({
  title: 'Tratamientos Capilares',
  ogTitle: 'Tratamientos Capilares',
  description: 'Tratamientos profesionales Fibre Clinix y Authentic Beauty Concept. Repara y nutre tu cabello en Pola de Siero, Asturias.',
  ogDescription: 'Tratamientos profesionales Fibre Clinix y Authentic Beauty Concept. Repara y nutre tu cabello en Pola de Siero, Asturias.'
})

const galleryImages = [
  { src: '/hero/random-1.avif', alt: 'Tratamiento capilar 1' },
  { src: '/hero/random-2.avif', alt: 'Tratamiento capilar 2' },
  { src: '/hero/random-3.avif', alt: 'Tratamiento capilar 3' },
  { src: '/hero/random-4.avif', alt: 'Tratamiento capilar 4' },
  { src: '/hero/random-5.avif', alt: 'Tratamiento capilar 5' },
  { src: '/hero/random-6.avif', alt: 'Tratamiento capilar 6' }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Tratamientos Capilares"
      description="Repara, hidrata y fortalece tu cabello con tratamientos profesionales"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Tratamientos' }
          ]"
        />
      </template>
      <template #links>
        <div class="flex flex-wrap gap-3">
          <UButton
            to="/contacto"
            size="lg"
            color="primary"
          >
            <template #leading>
              <UIcon name="i-lucide-calendar" />
            </template>
            Reservar cita
          </UButton>
          <UButton
            href="tel:984390259"
            size="lg"
            color="neutral"
            variant="outline"
          >
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
              <UIcon name="i-lucide-heart" class="w-8 h-8 text-primary" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold mb-4 mt-0">
                Tratamientos capilares profesionales
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
                En Mimu's Estilistas trabajamos con las mejores marcas del mercado para ofrecer tratamientos 
                capilares de alta gama que reparan, nutren y transforman tu cabello. Utilizamos <strong>Fibre Clinix</strong> de Schwarzkopf 
                y <strong>Authentic Beauty Concept</strong> para garantizar resultados profesionales y duraderos.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Cada tratamiento está personalizado según las necesidades específicas de tu cabello, ya sea que 
                necesites hidratación profunda, reparación intensiva, control del frizz o revitalización del color.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary" />
                Fibre Clinix
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Sistema de tratamiento profesional de Schwarzkopf con Triple Bonding & C21 Technology. 
                Reconstruye los puentes internos del cabello para una reparación profunda y duradera.
              </p>
              <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Fortify (Cabello fino y débil)</li>
                <li>• Hydrate (Cabello seco y deshidratado)</li>
                <li>• Tame (Cabello rebelde y con frizz)</li>
                <li>• Vibrancy (Cabello teñido)</li>
              </ul>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-leaf" class="w-5 h-5 text-primary" />
                Authentic Beauty Concept
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Línea profesional con ingredientes naturales y fórmulas veganas. Tratamientos conscientes 
                que cuidan tu cabello y el medio ambiente sin comprometer la eficacia.
              </p>
              <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Replenish (Nutrición profunda)</li>
                <li>• Hydrate (Hidratación intensa)</li>
                <li>• Amplify (Volumen y cuerpo)</li>
                <li>• Glow (Brillo y suavidad)</li>
              </ul>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-shield-check" class="w-5 h-5 text-primary" />
                Botox Capilar
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Tratamiento intensivo que rellena las fibras capilares, elimina el frizz y aporta brillo extremo con resultados duraderos.
              </p>
            </div>

            <div class="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-shield-check" class="w-5 h-5 text-primary" />
                Keratina
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Alisado progresivo con keratina que elimina el encrespamiento y facilita el peinado para un cabello sedoso y manejable.
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
        class="mt-12"
      >
        <h2 class="text-2xl font-bold mb-6 text-center">
          Galería de resultados
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
            ¿Tu cabello necesita un tratamiento?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Visítanos y te asesoraremos sobre el mejor tratamiento para tu tipo de cabello.
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
