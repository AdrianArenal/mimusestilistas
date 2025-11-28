<script setup lang="ts">
useSeoMeta({
  title: 'Recogidos de Novia - Mimu\'s Estilistas',
  description: 'Peinados de novia personalizados para tu día más especial en Pola de Siero'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Recogidos de Novia"
      description="Peinados de novia personalizados para tu día más especial en Pola de Siero"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Recogidos de Novia' }
          ]"
        />
      </template>
      <template #links>
        <div class="flex flex-wrap gap-3">
          <UButton to="/contacto" size="lg" color="primary">
            <template #leading>
              <UIcon name="i-lucide-calendar" />
            </template>
            Reservar cita
          </UButton>
          <UButton href="tel:984390259" size="lg" color="neutral" variant="outline">
            <template #leading>
              <UIcon name="i-lucide-phone" />
            </template>
            984 39 02 59
          </UButton>
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
      >
        <div class="lg:col-span-2 space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">El peinado perfecto para tu gran día</h2>
            <p class="text-gray-600 dark:text-gray-300">
              En Mimu's Estilistas entendemos que tu boda es uno de los días más importantes de tu vida. 
              Por eso, creamos recogidos de novia únicos y personalizados que te harán sentir radiante y especial.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">¿Qué incluye?</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Prueba previa personalizada:</span> Incluida en el precio
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Asesoramiento profesional:</span> Te ayudamos a elegir el estilo perfecto
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Productos de fijación profesional:</span> Para que dure todo el día
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Retoque antes de la ceremonia:</span> Si lo necesitas
                </div>
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Estilos de recogidos</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 class="font-semibold mb-2">Recogido clásico</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Elegante y atemporal, perfecto para cualquier estilo</p>
              </div>
              <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 class="font-semibold mb-2">Recogido romántico</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Con ondas suaves y mechones sueltos</p>
              </div>
              <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 class="font-semibold mb-2">Trenza elaborada</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Moderna y sofisticada, ideal para bodas al aire libre</p>
              </div>
              <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 class="font-semibold mb-2">Semi-recogido</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Versátil y favorecedor</p>
              </div>
              <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 class="font-semibold mb-2">Recogido bajo</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Clásico y elegante, perfecto para velos largos</p>
              </div>
              <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 class="font-semibold mb-2">Moño alto</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Sofisticado y moderno</p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Prueba de peinado</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              La prueba previa está incluida en el precio y es fundamental para:
            </p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                Probar diferentes estilos y encontrar el perfecto para ti
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                Asegurarnos de que el peinado combine con tu vestido y complementos
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                Calcular los tiempos exactos para el día de la boda
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                Resolver cualquier duda que tengas
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Precios</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Recogido de novia completo</p>
                <p class="text-primary font-bold">80€ - 100€</p>
                <p class="text-xs text-gray-500 mt-1">Incluye prueba previa</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Peinado madrina/invitada</p>
                <p class="text-primary font-bold">50€ - 60€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Pack novia + 2 madrinas</p>
                <p class="text-primary font-bold">180€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Desplazamiento</p>
                <p class="text-primary font-bold">Consultar</p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Consejos para el día de tu boda</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Lava tu cabello el día anterior, no el mismo día
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Ven con el pelo seco
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Trae fotografías de referencia que te gusten
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                No hagas cambios drásticos de corte o color cerca de la fecha
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Comunícanos si tienes alergias o sensibilidad en el cuero cabelludo
              </li>
            </ul>
          </UCard>

          <UCard class="bg-primary/5 border-primary/20">
            <div class="flex items-start gap-4">
              <UIcon name="i-lucide-calendar-heart" class="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 class="text-lg font-semibold mb-2">Reserva tu cita</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Te recomendamos reservar tu prueba con al menos 1-2 meses de antelación. 
                  Para el día de la boda, podemos desplazarnos a tu domicilio o lugar de preparación.
                </p>
                <UButton to="/contacto" color="primary">
                  Reservar ahora
                </UButton>
              </div>
            </div>
          </UCard>
        </div>

        <div class="space-y-6">
          <UCard>
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon name="i-lucide-heart" class="w-8 h-8 text-primary" />
              </div>
              
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Precio</h3>
                <p class="text-2xl font-bold text-primary">Desde 80€</p>
              </div>

              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Duración</h3>
                <p class="text-lg font-semibold">90-120 min</p>
              </div>

              <hr class="border-gray-200 dark:border-gray-700" />

              <div class="space-y-3">
                <UButton to="/contacto" block size="lg" color="primary">
                  <template #leading>
                    <UIcon name="i-lucide-calendar" />
                  </template>
                  Reservar cita
                </UButton>
                <UButton href="tel:984390259" block size="lg" color="neutral" variant="outline">
                  <template #leading>
                    <UIcon name="i-lucide-phone" />
                  </template>
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
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p class="font-medium">Productos profesionales</p>
                    <p class="text-gray-600 dark:text-gray-400">Marcas de alta calidad</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
      >
        <h2 class="text-2xl font-bold mb-6">Otros servicios</h2>
        <div class="flex gap-4 justify-center">
          <UButton to="/servicios" size="lg" color="neutral" variant="outline">
            <template #leading>
              <UIcon name="i-lucide-arrow-left" />
            </template>
            Ver todos los servicios
          </UButton>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>
