<script setup lang="ts">
useSeoMeta({
  title: 'Peluquería en Pola de Siero',
  ogTitle: 'Peluquería en Pola de Siero',
  description: 'Servicios completos de peluquería: peinados, color, mechas, corte y tratamientos capilares. Más de 20 años cuidando tu cabello en Pola de Siero, Asturias.',
  ogDescription: 'Servicios completos de peluquería: peinados, color, mechas, corte y tratamientos capilares. Más de 20 años cuidando tu cabello en Pola de Siero, Asturias.'
})

const services = [
  {
    title: 'Diseño de Color',
    description: 'Coloración personalizada con técnicas profesionales: decoloración, color completo, baño de color y color de raíces',
    icon: 'i-lucide-palette',
    url: '/color-pola-de-siero',
    thumbnail: '/hero/random-1.avif'
  },
  {
    title: 'Matizados',
    description: 'Todo tipo de matizados para conseguir el tono perfecto y eliminar reflejos no deseados',
    icon: 'i-lucide-droplet',
    url: '/matizado-pola-de-siero',
    thumbnail: '/hero/random-2.avif'
  },
  {
    title: 'Babylights',
    description: 'Iluminación sutil y natural con mechas finas para un efecto luminoso',
    icon: 'i-lucide-sun',
    url: '/babylights-pola-de-siero',
    thumbnail: '/hero/random-3.avif'
  },
  {
    title: 'Balayage con Highlights',
    description: 'Técnica de barrido con iluminaciones estratégicas para un degradado natural',
    icon: 'i-lucide-paintbrush',
    url: '/balayage-pola-de-siero',
    thumbnail: '/hero/random-4.avif'
  },
  {
    title: 'Peinados',
    description: 'Todo tipo de peinados para cualquier ocasión: desde looks casuales hasta alta ceremonia',
    icon: 'i-lucide-sparkles',
    url: '/peinado-pola-de-siero',
    thumbnail: '/hero/random-5.avif'
  },
  {
    title: 'Cortes',
    description: 'Cortes personalizados para mujer, hombre y niños con asesoramiento profesional',
    icon: 'i-lucide-scissors',
    url: '/corte-pelo-pola-de-siero',
    thumbnail: '/hero/random-6.avif'
  },
  {
    title: 'Tratamientos Capilares',
    description: 'Fibre Clinix y Authentic Beauty Concept para reparar y nutrir tu cabello',
    icon: 'i-lucide-heart',
    url: '/tratamientos-pola-de-siero',
    thumbnail: '/hero/random-7.avif'
  }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Peluquería en Pola de Siero"
      description="Servicios completos de peluquería profesional. Más de 20 años cuidando tu cabello con pasión y experiencia."
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería' }
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
      <!-- Introducción -->
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="mb-12"
      >
        <div class="text-center max-w-3xl mx-auto">
          <UIcon
            name="i-lucide-scissors"
            class="w-12 h-12 text-primary mx-auto mb-4"
          />
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Tu salón de confianza en Pola de Siero
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">
            En Mimu's Estilistas te ofrecemos una experiencia completa de peluquería con servicios 
            profesionales adaptados a tus necesidades. Nuestro equipo de expertas te asesorará 
            para que luzcas siempre radiante.
          </p>
        </div>
      </UCard>

      <!-- Servicios Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <UCard
          v-for="(service, index) in services"
          :key="service.title"
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
          class="hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <NuxtLink
            :to="service.url"
            class="block"
          >
            <!-- Imagen thumbnail -->
            <div class="relative h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
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

            <div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {{ service.description }}
              </p>
              <UButton
                color="neutral"
                variant="ghost"
                size="sm"
                class="group-hover:text-primary"
              >
                Ver más
                <template #trailing>
                  <UIcon name="i-lucide-arrow-right" class="transition-transform group-hover:translate-x-1" />
                </template>
              </UButton>
            </div>
          </NuxtLink>
        </UCard>
      </div>

      <!-- CTA Final -->
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="bg-linear-to-br from-primary/10 via-primary/5 to-transparent ring-1 ring-primary/20"
      >
        <div class="text-center py-8">
          <UIcon
            name="i-lucide-heart"
            class="w-12 h-12 text-primary mx-auto mb-4"
          />
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            ¿Lista para lucir radiante?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Reserva tu cita y descubre por qué somos el salón de confianza de Pola de Siero. 
            Más de 20 años cuidando tu imagen con profesionalidad y cariño.
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <UButton
              to="/contacto"
              size="lg"
              color="primary"
            >
              <template #leading>
                <UIcon name="i-lucide-calendar" />
              </template>
              Reservar cita ahora
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
              Llamar: 984 39 02 59
            </UButton>
          </div>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>
