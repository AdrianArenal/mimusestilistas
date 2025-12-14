<script setup lang="ts">
useSeoMeta({
  title: 'Uñas',
  ogTitle: 'Uñas',
  description: 'Manicura y pedicura básica con esmaltado semipermanente en Pola de Siero. Pide cita.',
  ogDescription: 'Manicura y pedicura básica con esmaltado semipermanente en Pola de Siero. Pide cita.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Uñas"
      description="Manicura y pedicura básica para uñas cuidadas"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Estética', to: '/estetica-en-pola-de-siero' },
            { label: 'Uñas' }
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
      <div class="space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">
              Cuida tus manos y pies
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Ofrecemos servicios básicos de manicura y pedicura con productos de calidad. 
              Cuidados esenciales para que luzcas uñas limpias y saludables.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Manicura
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Manicura básica
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Limado, cuidado de cutículas, hidratación y esmaltado clásico. 
                  El cuidado esencial para uñas saludables.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Manicura con esmaltado semipermanente
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Manicura completa con esmaltado de larga duración.
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Pedicura
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Pedicura básica
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Baño, limado, tratamiento de cutículas, exfoliación, hidratación y esmaltado. 
                  Pies suaves y cuidados.
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Cuidados y recomendaciones
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Hidrata diariamente:</span> Usa crema específica para manos y cutículas
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Protege del agua:</span> Usa guantes para tareas domésticas
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Mantenimiento regular:</span> Retoca el semipermanente regularmente
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">No las muerdas:</span> Evita dañar la uña natural y el esmalte
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Retirada profesional:</span> No arranques el gel o semipermanente
                </div>
              </li>
            </ul>
          </UCard>
        </div>

      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">
          Otros servicios de estética
        </h2>
        <div class="flex gap-4">
          <UButton
            to="/maquillaje-pola-de-siero"
            color="neutral"
            variant="outline"
            size="lg"
          >
            Maquillaje
          </UButton>
          <UButton
            to="/estetica-en-pola-de-siero"
            color="neutral"
            variant="ghost"
            size="lg"
          >
            Ver todos los servicios
          </UButton>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>
