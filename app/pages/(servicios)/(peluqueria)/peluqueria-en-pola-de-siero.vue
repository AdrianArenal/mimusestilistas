<script setup lang="ts">
useSeoMeta({
  title: 'Peluquería',
  ogTitle: 'Peluquería',
  description: 'Servicios completos de peluquería: peinados, color, mechas, corte y tratamientos capilares. Más de 3 años cuidando tu cabello en Pola de Siero, Asturias.',
  ogDescription: 'Servicios completos de peluquería: peinados, color, mechas, corte y tratamientos capilares. Más de 3 años cuidando tu cabello en Pola de Siero, Asturias.'
})

const services = [
  {
    title: 'Diseño de Color',
    description: 'Coloración personalizada con técnicas profesionales: decoloración, color completo, baño de color y color de raíces',
    icon: 'i-lucide-palette',
    url: '/color-pola-de-siero'
  },
  {
    title: 'Matizados',
    description: 'Todo tipo de matizados para conseguir el tono perfecto y eliminar reflejos no deseados',
    icon: 'i-lucide-droplet',
    url: '/matizado-pola-de-siero'
  },
  {
    title: 'Babylights',
    description: 'Iluminación sutil y natural con mechas finas para un efecto luminoso',
    icon: 'i-lucide-sun',
    url: '/babylights-pola-de-siero'
  },
  {
    title: 'Balayage con Highlights',
    description: 'Técnica de barrido con iluminaciones estratégicas para un degradado natural',
    icon: 'i-lucide-paintbrush',
    url: '/balayage-pola-de-siero'
  },
  {
    title: 'Peinados',
    description: 'Todo tipo de peinados para cualquier ocasión: desde looks casuales hasta alta ceremonia',
    icon: 'i-lucide-sparkles',
    url: '/peinado-pola-de-siero'
  },
  {
    title: 'Cortes',
    description: 'Cortes personalizados para mujer con asesoramiento profesional',
    icon: 'i-lucide-scissors',
    url: '/corte-pelo-pola-de-siero'
  },
  {
    title: 'Tratamientos',
    description: 'Fibre Clinix y Authentic Beauty Concept para reparar y nutrir tu cabello',
    icon: 'i-lucide-heart',
    url: '/tratamientos-pola-de-siero'
  }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Peluquería"
      description="Servicios completos de peluquería profesional. Más de 3 años cuidando tu cabello con pasión y experiencia."
    >
      <template #headline>
        <ResponsiveBreadcrumb
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
            href="tel:604812695"
            size="lg"
            color="neutral"
            variant="outline"
          >
            <template #leading>
              <UIcon name="i-lucide-phone" />
            </template>
            604 81 26 95
          </UButton>
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Servicios Grid sin fotos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-8">
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
                delay: 100 + (index * 50)
              }
            }"
            class="hover:shadow-xl transition-all duration-300 group cursor-pointer w-full"
            :ui="{ body: 'p-6 h-full flex flex-col' }"
          >
            <div class="flex flex-col h-full">
              <div class="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <UIcon
                  :name="service.icon"
                  class="w-6 h-6 text-primary"
                />
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-sm text-gray-600 mb-4 grow">
                {{ service.description }}
              </p>
              <div class="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between text-neutral group-hover:text-primary transition-colors">
                <span class="font-medium text-sm">Ver más</span>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </UCard>
        </NuxtLink>
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
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Reserva tu cita y descubre por qué somos el salón de confianza de Pola de Siero.
            Más de 3 años cuidando tu imagen con profesionalidad y cariño.
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
              href="tel:604812695"
              size="lg"
              color="neutral"
              variant="outline"
            >
              <template #leading>
                <UIcon name="i-lucide-phone" />
              </template>
              Llamar: 604 81 26 95
            </UButton>
          </div>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>
