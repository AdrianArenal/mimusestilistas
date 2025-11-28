<script setup lang="ts">
useSeoMeta({
  title: 'Peinados - Mimu\'s Estilistas',
  description: 'Peinados profesionales para eventos especiales en Pola de Siero'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Peinados"
      description="Peinados profesionales para eventos especiales en Pola de Siero"
    >
      <template #headline>
        <UBreadcrumb :items="[{ label: 'Inicio', to: '/' }, { label: 'Servicios', to: '/servicios' }, { label: 'Peinados' }]" />
      </template>
      <template #links>
        <div class="flex flex-wrap gap-3">
          <UButton to="/contacto" size="lg" color="primary">
            <template #leading><UIcon name="i-lucide-calendar" /></template>
            Reservar cita
          </UButton>
          <UButton href="tel:984390259" size="lg" color="neutral" variant="outline">
            <template #leading><UIcon name="i-lucide-phone" /></template>
            984 39 02 59
          </UButton>
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div class="lg:col-span-2 space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">Tu mejor versión para cualquier ocasión</h2>
            <p class="text-gray-600 dark:text-gray-300">
              Creamos peinados profesionales perfectos para bodas, comuniones, bautizos, graduaciones, fiestas y cualquier evento especial donde quieras lucir espectacular.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Tipos de peinados</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                <div><span class="font-medium">Ondas glamurosas:</span> Suaves y naturales o marcadas</div>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                <div><span class="font-medium">Recogidos elegantes:</span> Perfectos para invitadas</div>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                <div><span class="font-medium">Semi-recogidos:</span> Versátiles y favorecedores</div>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                <div><span class="font-medium">Trenzas decorativas:</span> Modernas y sofisticadas</div>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                <div><span class="font-medium">Peinados de fiesta:</span> Atrevidos y actuales</div>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                <div><span class="font-medium">Peinados de comunión:</span> Dulces para niñas</div>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Para cada ocasión</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">Invitadas de boda</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Recogidos elegantes, semi-recogidos románticos u ondas sofisticadas que aguantarán toda la celebración.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Comuniones y bautizos</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Peinados dulces y apropiados que harán que las pequeñas se sientan princesas en su día especial.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Graduaciones y fiestas</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Peinados modernos y actuales que te harán destacar en cualquier evento.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Cenas y eventos formales</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Looks sofisticados y elegantes adaptados al código de vestimenta del evento.</p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Precios</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Recogido sencillo</p>
                <p class="text-primary font-bold">25€ - 30€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Recogido elaborado</p>
                <p class="text-primary font-bold">35€ - 45€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Semi-recogido</p>
                <p class="text-primary font-bold">30€ - 40€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Ondas/Brushing</p>
                <p class="text-primary font-bold">20€ - 30€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Peinado comunión</p>
                <p class="text-primary font-bold">30€ - 35€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Trenzas elaboradas</p>
                <p class="text-primary font-bold">35€ - 50€</p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Consejos útiles</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Reserva con 2-3 semanas de anticipación
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Trae fotografías de referencia
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Ven con el cabello lavado el día anterior
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Llega con tiempo para evitar prisas
              </li>
            </ul>
          </UCard>
        </div>

        <div class="space-y-6">
          <UCard>
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon name="i-lucide-sparkle" class="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Precio</h3>
                <p class="text-2xl font-bold text-primary">Desde 25€</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Duración</h3>
                <p class="text-lg font-semibold">45-75 min</p>
              </div>
              <hr class="border-gray-200 dark:border-gray-700" />
              <div class="space-y-3">
                <UButton to="/contacto" block size="lg" color="primary">
                  <template #leading><UIcon name="i-lucide-calendar" /></template>
                  Reservar cita
                </UButton>
                <UButton href="tel:984390259" block size="lg" color="neutral" variant="outline">
                  <template #leading><UIcon name="i-lucide-phone" /></template>
                  Llamar ahora
                </UButton>
              </div>
            </div>
          </UCard>

          <UCard>
            <div class="space-y-4">
              <h3 class="font-semibold text-lg">Información adicional</h3>
              <div class="space-y-3 text-sm">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p class="font-medium">Ubicación</p>
                    <p class="text-gray-600 dark:text-gray-400">Pola de Siero, Asturias</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-clock" class="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p class="font-medium">Horario</p>
                    <p class="text-gray-600 dark:text-gray-400">Lunes a Sábado<br>9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
        <h2 class="text-2xl font-bold mb-6">Otros servicios</h2>
        <div class="flex gap-4 justify-center">
          <UButton to="/servicios" size="lg" color="neutral" variant="outline">
            <template #leading><UIcon name="i-lucide-arrow-left" /></template>
            Ver todos los servicios
          </UButton>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>
