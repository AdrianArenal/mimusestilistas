<script setup lang="ts">
useSeoMeta({
  title: 'Peluquería en Pola de Siero - Mimu\'s Estilistas',
  description: 'Servicios completos de peluquería: peinados, color, mechas, corte y tratamientos capilares. Más de 20 años cuidando tu cabello en Pola de Siero, Asturias.'
})
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
        <!-- Peinados -->
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
          class="hover:shadow-lg transition-shadow"
        >
          <NuxtLink
            to="/peinado-pola-de-siero"
            class="block"
          >
            <div class="flex items-start gap-3 mb-4">
              <div class="p-3 bg-primary/10 rounded-lg">
                <UIcon
                  name="i-lucide-sparkle"
                  class="w-6 h-6 text-primary"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-1">
                  Peinados
                </h3>
                <p class="text-sm text-primary font-semibold">
                  Desde 15€
                </p>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Para bodas, eventos y ocasiones especiales. Recogidos, ondas y más.
            </p>
            <UButton
              color="neutral"
              variant="ghost"
              size="sm"
            >
              Ver más
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
          </NuxtLink>
        </UCard>

        <!-- Color -->
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="hover:shadow-lg transition-shadow"
        >
          <NuxtLink
            to="/color-pelo-pola-de-siero"
            class="block"
          >
            <div class="flex items-start gap-3 mb-4">
              <div class="p-3 bg-primary/10 rounded-lg">
                <UIcon
                  name="i-lucide-palette"
                  class="w-6 h-6 text-primary"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-1">
                  Color
                </h3>
                <p class="text-sm text-primary font-semibold">
                  Desde 25€
                </p>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Tintes profesionales, baños de color y decoloración con productos de alta calidad.
            </p>
            <UButton
              color="neutral"
              variant="ghost"
              size="sm"
            >
              Ver más
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
          </NuxtLink>
        </UCard>

        <!-- Mechas -->
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 250 } }"
          class="hover:shadow-lg transition-shadow"
        >
          <NuxtLink
            to="/mechas-pola-de-siero"
            class="block"
          >
            <div class="flex items-start gap-3 mb-4">
              <div class="p-3 bg-primary/10 rounded-lg">
                <UIcon
                  name="i-lucide-sun"
                  class="w-6 h-6 text-primary"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-1">
                  Mechas
                </h3>
                <p class="text-sm text-primary font-semibold">
                  Desde 45€
                </p>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Balayage, californianas, babylights. Iluminación profesional para tu cabello.
            </p>
            <UButton
              color="neutral"
              variant="ghost"
              size="sm"
            >
              Ver más
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
          </NuxtLink>
        </UCard>

        <!-- Corte -->
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="hover:shadow-lg transition-shadow"
        >
          <NuxtLink
            to="/corte-pelo-pola-de-siero"
            class="block"
          >
            <div class="flex items-start gap-3 mb-4">
              <div class="p-3 bg-primary/10 rounded-lg">
                <UIcon
                  name="i-lucide-scissors"
                  class="w-6 h-6 text-primary"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-1">
                  Corte de Pelo
                </h3>
                <p class="text-sm text-primary font-semibold">
                  Desde 12€
                </p>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Cortes personalizados para hombre, mujer y niños. Asesoramiento incluido.
            </p>
            <UButton
              color="neutral"
              variant="ghost"
              size="sm"
            >
              Ver más
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
          </NuxtLink>
        </UCard>

        <!-- Tratamientos -->
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 350 } }"
          class="hover:shadow-lg transition-shadow"
        >
          <NuxtLink
            to="/tratamientos-capilares-pola-de-siero"
            class="block"
          >
            <div class="flex items-start gap-3 mb-4">
              <div class="p-3 bg-primary/10 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="w-6 h-6 text-primary"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-1">
                  Tratamientos
                </h3>
                <p class="text-sm text-primary font-semibold">
                  Desde 15€
                </p>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Hidratación, nutrición, botox capilar y keratina para recuperar tu cabello.
            </p>
            <UButton
              color="neutral"
              variant="ghost"
              size="sm"
            >
              Ver más
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
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
