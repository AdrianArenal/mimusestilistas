<script setup lang="ts">
useSeoMeta({
  title: 'Estética en Pola de Siero',
  ogTitle: 'Estética en Pola de Siero',
  description: 'Servicios de estética en Pola de Siero: manicura, pedicura y maquillaje. Reserva tu cita.',
  ogDescription: 'Servicios de estética en Pola de Siero: manicura, pedicura y maquillaje. Reserva tu cita.'
})

const services = [
  {
    title: 'Uñas',
    description: 'Manicura y pedicura básica con esmaltado semipermanente',
    icon: 'i-lucide-sparkle',
    url: '/unas-pola-de-siero',
    thumbnail: '/images/7.webp'
  },
  {
    title: 'Maquillaje',
    description: 'Maquillaje para eventos y ocasiones especiales',
    icon: 'i-lucide-palette',
    url: '/maquillaje-pola-de-siero',
    thumbnail: '/images/8.webp'
  }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Estética"
      description="Servicios de estética en Pola de Siero"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Estética' }
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
      <div class="mb-12">
        <UCard>
          <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold mb-4">
              Completa tu belleza con nuestros servicios de estética
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              En Mimu's Estilistas no solo cuidamos tu cabello, también ofrecemos servicios 
              de estética para que luzcas impecable. Desde uñas cuidadas hasta maquillaje para 
              eventos especiales, estamos aquí para realzar tu belleza natural.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Trabajamos con productos de calidad para ofrecerte servicios esenciales adaptados 
              a tus necesidades.
            </p>
          </div>
        </UCard>
      </div>

      <!-- Servicios Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <NuxtLink
          v-for="(service, index) in services"
          :key="service.title"
          :to="service.url"
          class="flex"
        >
          <UCard
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 600, 
                delay: 150 + (index * 50) 
              } 
            }"
            class="hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer w-full"
            :ui="{ body: 'p-4 sm:p-6 h-full flex flex-col' }"
          >
            <div class="flex flex-col h-full">
              <!-- Imagen thumbnail -->
              <div class="relative h-120 sm:h-80 md:h-96 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
                <NuxtImg
                  :src="service.thumbnail"
                  :alt="service.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  format="webp"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div class="absolute bottom-3 left-3">
                  <div class="p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm">
                    <UIcon
                      :name="service.icon"
                      class="w-5 h-5 text-primary"
                    />
                  </div>
                </div>
              </div>

              <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {{ service.description }}
              </p>
              <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-neutral group-hover:text-primary transition-colors">
                <span class="font-medium text-sm">Ver más</span>
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>

      <UCard class="bg-primary/5">
        <div class="text-center">
          <h3 class="text-xl font-bold mb-3">
            ¿Buscas un cambio completo?
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Combina nuestros servicios de peluquería y estética para una experiencia de belleza integral
          </p>
          <UButton
            to="/servicios"
            size="lg"
            color="primary"
          >
            Ver todos los servicios
          </UButton>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>
