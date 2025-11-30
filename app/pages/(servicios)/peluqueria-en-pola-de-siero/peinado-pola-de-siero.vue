<script setup lang="ts">
useSeoMeta({
  title: 'Peinados en Pola de Siero - Mimu\'s Estilistas',
  description: 'Peinados profesionales para eventos especiales en Pola de Siero. Recogidos, ondas, semi-recogidos y más. Reserva tu cita.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Peinados Profesionales"
      description="Peinados perfectos para bodas, eventos y ocasiones especiales en Pola de Siero"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Peinados' }
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <UCard
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          >
            <h2 class="text-2xl font-bold mb-4">
              Tu mejor versión para cualquier ocasión
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Creamos peinados profesionales perfectos para bodas, comuniones, bautizos, 
              graduaciones, fiestas y cualquier evento especial donde quieras lucir espectacular.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Nuestro equipo estudia tu tipo de cabello, la forma de tu rostro y el estilo del evento 
              para crear el peinado perfecto que te haga sentir segura y radiante.
            </p>
          </UCard>

          <UCard
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          >
            <h3 class="text-xl font-semibold mb-4">
              Tipos de peinados
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 class="font-medium mb-1">
                    Ondas glamurosas
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Suaves y naturales o marcadas y definidas
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 class="font-medium mb-1">
                    Recogidos elegantes
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Perfectos para invitadas de boda
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 class="font-medium mb-1">
                    Semi-recogidos
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Versátiles y favorecedores para todo tipo de eventos
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 class="font-medium mb-1">
                    Trenzas decorativas
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Modernas y sofisticadas
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 class="font-medium mb-1">
                    Peinados de fiesta
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Atrevidos y actuales para destacar
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 class="font-medium mb-1">
                    Peinados de comunión
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Dulces y especiales para niñas
                  </p>
                </div>
              </div>
            </div>
          </UCard>

          <UCard
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          >
            <h3 class="text-xl font-semibold mb-4">
              Para cada ocasión
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Invitadas de boda
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Recogidos elegantes, semi-recogidos románticos u ondas sofisticadas que aguantarán 
                  toda la celebración. Te asesoramos según tu vestido y el código de etiqueta.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Comuniones y bautizos
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Peinados dulces y apropiados que harán que las pequeñas se sientan princesas 
                  en su día especial. Diseños que combinan con tocados y diademas.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Graduaciones y fiestas
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Peinados modernos y actuales que te harán destacar en cualquier evento. 
                  Looks trendy que se adaptan a tu personalidad.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Cenas y eventos formales
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Looks sofisticados y elegantes adaptados al código de vestimenta del evento. 
                  Peinados que complementan tu outfit perfectamente.
                </p>
              </div>
            </div>
          </UCard>

          <UCard
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          >
            <h3 class="text-xl font-semibold mb-4">
              Precios
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p class="font-medium mb-1">
                  Recogido sencillo
                </p>
                <p class="text-2xl font-bold text-primary">
                  25€
                </p>
              </div>
              <div class="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p class="font-medium mb-1">
                  Recogido elaborado
                </p>
                <p class="text-2xl font-bold text-primary">
                  35€ - 45€
                </p>
              </div>
              <div class="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p class="font-medium mb-1">
                  Ondas / Planchado
                </p>
                <p class="text-2xl font-bold text-primary">
                  20€ - 30€
                </p>
              </div>
              <div class="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p class="font-medium mb-1">
                  Peinado niña (comunión)
                </p>
                <p class="text-2xl font-bold text-primary">
                  15€ - 25€
                </p>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-500">
              *Los precios pueden variar según la complejidad y longitud del cabello
            </p>
          </UCard>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <UCard
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 100 } }"
            class="sticky top-24"
          >
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon
                  name="i-lucide-sparkle"
                  class="w-8 h-8 text-primary"
                />
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Precio desde
                </h3>
                <p class="text-3xl font-bold text-primary">
                  15€
                </p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Duración
                </h3>
                <p class="text-lg font-semibold">
                  45-75 min
                </p>
              </div>
              <hr class="border-gray-200 dark:border-gray-800" />
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
                  Llamar ahora
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Related Services -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
        class="mt-16"
      >
        <h2 class="text-2xl font-bold mb-6">
          Otros servicios de peluquería
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <UButton
            to="/peluqueria-en-pola-de-siero/color-pelo-pola-de-siero"
            color="neutral"
            variant="outline"
            size="lg"
            block
          >
            <template #leading>
              <UIcon name="i-lucide-palette" />
            </template>
            Color
          </UButton>
          <UButton
            to="/peluqueria-en-pola-de-siero/mechas-pola-de-siero"
            color="neutral"
            variant="outline"
            size="lg"
            block
          >
            <template #leading>
              <UIcon name="i-lucide-sun" />
            </template>
            Mechas
          </UButton>
          <UButton
            to="/peluqueria-en-pola-de-siero/corte-pelo-pola-de-siero"
            color="neutral"
            variant="outline"
            size="lg"
            block
          >
            <template #leading>
              <UIcon name="i-lucide-scissors" />
            </template>
            Corte
          </UButton>
          <UButton
            to="/peluqueria-en-pola-de-siero/tratamientos-capilares-pola-de-siero"
            color="neutral"
            variant="outline"
            size="lg"
            block
          >
            <template #leading>
              <UIcon name="i-lucide-sparkles" />
            </template>
            Tratamientos
          </UButton>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>
