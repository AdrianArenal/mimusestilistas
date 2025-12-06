<script setup lang="ts">
useSeoMeta({
  title: 'Nuestro Equipo - Mimu\'s Estilistas en Pola de Siero',
  description: 'Conoce a nuestro equipo de profesionales en Mimu\'s Estilistas. Más de 20 años de experiencia en peluquería y estética en Pola de Siero.'
})

const team = [
  {
    name: 'Yolanda Fernández Díaz',
    image: '/images/yoli.webp',
    experience: '30 años de experiencia',
    specialties: [
      { name: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
      { name: 'Bodas y Eventos', to: '/novia-en-pola-de-siero' },
      { name: 'Color', to: '/color-pelo-pola-de-siero' }
    ]
  },
  {
    name: 'Carolina San José Suárez',
    image: '/images/carolina.webp',
    experience: '29 años de experiencia',
    specialties: [
      { name: 'Color', to: '/color-pelo-pola-de-siero' },
      { name: 'Mechas', to: '/mechas-pola-de-siero' },
      { name: 'Matices', to: '/color-pelo-pola-de-siero' }
    ]
  },
  {
    name: 'Raquel González Cueto',
    image: '/hero/random-3.avif',
    experience: '27 años de experiencia',
    specialties: [
      { name: 'Mechas', to: '/mechas-pola-de-siero' },
      { name: 'Balayage', to: '/mechas-pola-de-siero' },
      { name: 'Babylights', to: '/mechas-pola-de-siero' }
    ]
  }
]
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Nuestro Equipo"
      description="Conoce a las profesionales que harán realidad tu cambio de imagen"
    />

    <UPageBody>
      <!-- Header Image -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="mb-12 lg:mb-16"
      >
        <div class="relative aspect-video lg:aspect-21/9 bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden">
          <NuxtImg
            src="/images/17.webp"
            alt="Equipo Mimu's Estilistas"
            class="w-full h-full object-cover"
            loading="eager"
            quality="95"
            format="webp"
          />
        </div>
      </div>

      <!-- Team members -->
      <div class="space-y-16 lg:space-y-24">
        <div
          v-for="(member, index) in team"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 600, 
              delay: index * 150 + 400 
            } 
          }"
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          :class="{ 'lg:grid-flow-dense': index % 2 === 1 }"
        >
          <!-- Member image - Imagen grande y prominente -->
          <div :class="{ 'lg:col-start-2': index % 2 === 1 }">
            <UCard class="overflow-hidden rounded-2xl">
              <div class="relative aspect-3/4 bg-gray-100 dark:bg-gray-900">
                <NuxtImg
                  :src="member.image"
                  :alt="member.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  quality="95"
                  format="webp"
                  sizes="sm:100vw md:50vw lg:600px"
                />
              </div>
            </UCard>
          </div>

          <!-- Member info -->
          <div :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }" class="space-y-6">
            <!-- Nombre -->
            <div>
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {{ member.name }}
              </h3>
            </div>

            <!-- Años de experiencia -->
            <div class="flex items-center gap-3 text-lg">
              <UIcon name="i-lucide-award" class="size-6 text-primary" />
              <span class="text-gray-700 dark:text-gray-300 font-medium">
                {{ member.experience }}
              </span>
            </div>

            <!-- Especialidades -->
            <div>
              <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-star" class="size-4 text-primary" />
                Especialidades
              </p>
              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="(specialty, idx) in member.specialties"
                  :key="idx"
                  :to="specialty.to"
                  color="primary"
                  variant="soft"
                  size="md"
                  class="transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  {{ specialty.name }}
                </UButton>
              </div>
            </div>

            <!-- Botón de reserva -->
            <UButton
              to="/contacto"
              color="primary"
              size="xl"
              class="shadow-md hover:shadow-lg transition-all duration-300"
            >
              <template #leading>
                <UIcon name="i-lucide-calendar" />
              </template>
              Reservar con {{ member.name.split(' ')[0] }}
            </UButton>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 800 } }"
        class="mt-16"
      >
        <UCard
          class="p-8 md:p-12 bg-linear-to-br from-primary/10 via-primary/5 to-transparent ring-1 ring-primary/20 rounded-2xl"
        >
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4">
              Confía en profesionales con experiencia
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Nuestro equipo está formado continuamente para ofrecerte los mejores servicios 
              y las técnicas más actuales. Más de 20 años cuidando de la imagen de nuestros clientes.
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
                Reserva tu cita
              </UButton>
              <UButton
                to="/servicios"
                size="lg"
                color="neutral"
                variant="outline"
              >
                Ver servicios
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UPageBody>
  </UContainer>
</template>
