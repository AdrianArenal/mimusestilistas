<script setup lang="ts">
useSeoMeta({
  title: 'Estética en Pola de Siero - Uñas y Maquillaje | Mimu\'s Estilistas',
  description: 'Servicios de estética profesional en Pola de Siero: manicura, pedicura, uñas de gel y maquillaje. Reserva tu cita.'
})

const services = [
  {
    title: 'Uñas',
    description: 'Manicura, pedicura y uñas de gel con acabados perfectos',
    icon: 'i-lucide-sparkle',
    link: '/unas-pola-de-siero',
    features: [
      'Manicura y pedicura',
      'Uñas de gel',
      'Esmaltado semipermanente',
      'Nail art y decoración'
    ]
  },
  {
    title: 'Maquillaje',
    description: 'Maquillaje profesional para eventos y ocasiones especiales',
    icon: 'i-lucide-palette',
    link: '/maquillaje-pola-de-siero',
    features: [
      'Maquillaje de día',
      'Maquillaje de noche',
      'Novias e invitadas',
      'Maquillaje para eventos'
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
      title="Estética"
      description="Servicios de estética profesional en Pola de Siero"
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
              de estética profesional para que luzcas impecable de pies a cabeza. Desde uñas 
              perfectas hasta maquillaje para eventos especiales, nuestro equipo está preparado 
              para realzar tu belleza natural.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Trabajamos con productos de alta calidad y técnicas actualizadas para garantizar 
              resultados duraderos y acabados profesionales. Cada servicio es personalizado 
              según tus preferencias y necesidades.
            </p>
          </div>
        </UCard>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">
          Nuestros servicios de estética
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="service in services"
            :key="service.title"
            :to="service.link"
            class="block"
          >
            <UCard
              class="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div class="flex flex-col h-full">
                <div class="flex items-start gap-4 mb-4">
                  <div class="p-3 bg-primary/10 rounded-lg">
                    <UIcon
                      :name="service.icon"
                      class="w-8 h-8 text-primary"
                    />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold mb-1">
                      {{ service.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                      {{ service.description }}
                    </p>
                  </div>
                </div>

                <div class="space-y-2 mb-4 flex-1">
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Incluye:
                  </p>
                  <ul class="space-y-1.5">
                    <li
                      v-for="feature in service.features"
                      :key="feature"
                      class="flex items-start gap-2 text-sm"
                    >
                      <UIcon
                        name="i-lucide-check"
                        class="size-4 text-primary mt-0.5 shrink-0"
                      />
                      <span class="text-gray-600 dark:text-gray-400">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-primary">
                      Ver detalles
                    </span>
                    <UIcon
                      name="i-lucide-arrow-right"
                      class="size-5 text-primary"
                    />
                  </div>
                </div>
              </div>
            </UCard>
          </NuxtLink>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <UCard>
          <h3 class="text-xl font-semibold mb-4">
            ¿Por qué elegirnos?
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-badge-check"
                class="size-5 text-primary mt-0.5 shrink-0"
              />
              <div>
                <span class="font-medium">Profesionales cualificadas:</span> Equipo con formación continua
              </div>
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-badge-check"
                class="size-5 text-primary mt-0.5 shrink-0"
              />
              <div>
                <span class="font-medium">Productos de calidad:</span> Trabajamos con las mejores marcas
              </div>
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-badge-check"
                class="size-5 text-primary mt-0.5 shrink-0"
              />
              <div>
                <span class="font-medium">Higiene y seguridad:</span> Protocolos estrictos de limpieza
              </div>
            </li>
            <li class="flex items-start gap-2">
              <UIcon
                name="i-lucide-badge-check"
                class="size-5 text-primary mt-0.5 shrink-0"
              />
              <div>
                <span class="font-medium">Atención personalizada:</span> Cada cliente es único
              </div>
            </li>
          </ul>
        </UCard>

        <UCard>
          <h3 class="text-xl font-semibold mb-4">
            Horarios y reservas
          </h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Estamos disponibles de lunes a sábado. Te recomendamos reservar con antelación, 
                especialmente para eventos y fechas especiales.
              </p>
            </div>
            <div class="space-y-3">
              <UButton
                to="/contacto"
                block
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
                block
                size="lg"
                color="neutral"
                variant="outline"
              >
                <template #leading>
                  <UIcon name="i-lucide-phone" />
                </template>
                984 39 02 59
              </UButton>
              <UButton
                href="https://wa.me/34984390259"
                target="_blank"
                block
                size="lg"
                color="neutral"
                variant="ghost"
              >
                <template #leading>
                  <UIcon name="i-lucide-message-circle" />
                </template>
                WhatsApp
              </UButton>
            </div>
          </div>
        </UCard>
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
