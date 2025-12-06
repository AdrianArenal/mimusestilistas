<script setup lang="ts">
useSeoMeta({
  title: 'Corte de Pelo en Pola de Siero - Mimu\'s Estilistas',
  description: 'Cortes de pelo profesionales para mujer, hombre y niños en Pola de Siero. Asesoramiento personalizado. Reserva tu cita.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Corte de Pelo"
      description="Cortes personalizados adaptados a tu estilo y tipo de cabello"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Corte' }
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
              El corte perfecto para ti
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Un buen corte es la base de cualquier peinado. Nuestro equipo estudia tu tipo de cabello, 
              la forma de tu rostro y tu estilo de vida para crear el corte perfecto que te favorezca 
              y sea fácil de mantener.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Servicios de corte
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Corte mujer
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Corte personalizado con asesoramiento profesional. Incluye lavado y acabado.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Corte hombre
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Corte clásico o moderno adaptado a tu estilo. Incluye lavado.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Corte niño/niña
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Cortes para los más pequeños en un ambiente agradable y divertido.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Flequillo
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Retoque de flequillo entre cortes.
                </p>
              </div>
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Repaso puntas
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Sanea las puntas sin perder largo. Mantén tu cabello sano.
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Asesoramiento personalizado
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Antes de cada corte, analizamos:
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Forma del rostro:</span> Para encontrar el corte que más te favorece
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Tipo de cabello:</span> Liso, ondulado, rizado, fino o grueso
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Estilo de vida:</span> Mantenimiento fácil o looks elaborados
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Tendencias:</span> Los cortes más actuales adaptados a ti
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
                  name="i-lucide-scissors"
                  class="w-8 h-8 text-primary"
                />
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
            to="/color-pelo-pola-de-siero"
            color="neutral"
            variant="outline"
            block
          >
            Color
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
            to="/tratamientos-pola-de-siero"
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
