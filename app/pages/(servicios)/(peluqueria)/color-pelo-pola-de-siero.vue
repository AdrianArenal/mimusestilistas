<script setup lang="ts">
useSeoMeta({
  title: 'Color de Pelo en Pola de Siero - Mimu\'s Estilistas',
  description: 'Tintes profesionales y coloración personalizada en Pola de Siero. Marcas de calidad. Desde 25€. Pide tu cita.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Color de Pelo"
      description="Dale vida y personalidad a tu cabello con color profesional"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Color' }
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
        <div class="lg:col-span-2 space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">
              Color profesional con productos de calidad
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Trabajamos con tintes profesionales de alta calidad que respetan tu cabello mientras 
              consiguen el color deseado. Desde tonos naturales hasta cambios más atrevidos, 
              te asesoramos para encontrar el color perfecto para ti.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Servicios de coloración
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Color raíces
                  </h4>
                  <span class="text-primary font-bold">25€ - 35€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Retoque de raíces para mantener tu color perfecto. Incluye lavado y secado.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Color completo
                  </h4>
                  <span class="text-primary font-bold">40€ - 60€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Coloración de todo el cabello. Cambio de look o mantenimiento total.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Baño de color
                  </h4>
                  <span class="text-primary font-bold">30€ - 40€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Tonifica y aporta brillo sin modificar drásticamente tu color base.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Decoloración
                  </h4>
                  <span class="text-primary font-bold">Desde 50€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Para cambios radicales o base para colores fantasía. Requiere valoración previa.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Decapado
                  </h4>
                  <span class="text-primary font-bold">Desde 45€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Eliminación de color artificial para corregir tonos o preparar nuevo color.
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Técnicas de coloración
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Color natural
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Cobertura perfecta de canas manteniendo un aspecto natural y luminoso.
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Reflejos
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Matices sutiles que aportan profundidad y movimiento a tu cabello.
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Tonos fantasía
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Colores vibrantes y creativos para quienes buscan algo único.
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Corrección de color
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Solución profesional para colores no deseados o mal aplicados.
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Cuidados y mantenimiento
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Productos específicos:</span> Recomendamos champús y mascarillas para color
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Retoques periódicos:</span> Cada 4-6 semanas para mantener raíces
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Tratamientos:</span> Hidratación extra para cabello teñido
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Protección:</span> Evita el sol y el cloro en exceso
                </div>
              </li>
            </ul>
          </UCard>
        </div>

        <div class="space-y-6">
          <UCard class="sticky top-24">
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon
                  name="i-lucide-palette"
                  class="w-8 h-8 text-primary"
                />
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Precio desde
                </h3>
                <p class="text-3xl font-bold text-primary">
                  25€
                </p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Duración
                </h3>
                <p class="text-lg font-semibold">
                  1h 30min - 3h
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Según técnica
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

      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">
          Otros servicios de peluquería
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <UButton
            to="/peinado-pola-de-siero"
            color="neutral"
            variant="outline"
            block
          >
            Peinados
          </UButton>
          <UButton
            to="/corte-pelo-pola-de-siero"
            color="neutral"
            variant="outline"
            block
          >
            Corte
          </UButton>
          <UButton
            to="/mechas-pola-de-siero"
            color="neutral"
            variant="outline"
            block
          >
            Mechas
          </UButton>
          <UButton
            to="/tratamientos-capilares-pola-de-siero"
            color="neutral"
            variant="outline"
            block
          >
            Tratamientos
          </UButton>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>
