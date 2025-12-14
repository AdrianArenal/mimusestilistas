<script setup lang="ts">
useSeoMeta({
  title: 'Maquillaje',
  ogTitle: 'Maquillaje',
  description: 'Maquillaje para eventos y ocasiones especiales en Pola de Siero.',
  ogDescription: 'Maquillaje para eventos y ocasiones especiales en Pola de Siero.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Maquillaje"
      description="Maquillaje para realzar tu belleza natural"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Estética', to: '/estetica-en-pola-de-siero' },
            { label: 'Maquillaje' }
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
              Luce radiante en cada ocasión
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Nuestro servicio de maquillaje está diseñado para realzar tu belleza natural 
              y adaptarse a cada ocasión. Utilizamos productos de calidad para que te sientas segura y hermosa durante todo el evento.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Servicios de maquillaje
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Maquillaje de día
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Maquillaje natural y ligero que realza tus rasgos. 
                  Perfecto para eventos diurnos.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Maquillaje de noche
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Maquillaje más intenso y duradero para eventos nocturnos.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Maquillaje para eventos
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Comuniones, bautizos, fiestas o graduaciones. 
                  Maquillaje adaptado a la ocasión.
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Estilos de maquillaje
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Natural
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Realza tu belleza sin efectos excesivos. Piel luminosa, cejas definidas, labios nude.
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Clásico elegante
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Sofisticado y atemporal. Smokey eyes suave, labios rojos o nude, piel perfecta.
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Glamuroso
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Impactante para eventos nocturnos. Ojos ahumados, pestañas postizas, labios intensos.
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2">
                  Romántico
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Suave y delicado. Tonos rosados, melocotón e iluminación sutil.
                </p>
              </div>
            </div>
          </UCard>


        </div>

      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">
          Otros servicios de estética
        </h2>
        <div class="flex gap-4">
          <UButton
            to="/unas-pola-de-siero"
            color="neutral"
            variant="outline"
            size="lg"
          >
            Uñas
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
