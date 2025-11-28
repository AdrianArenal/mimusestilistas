<script setup lang="ts">
useSeoMeta({
  title: 'Mechas - Mimu\'s Estilistas',
  description: 'Mechas, balayage y técnicas de iluminación capilar en Pola de Siero'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" title="Mechas" description="Mechas, balayage y técnicas de iluminación capilar">
      <template #headline>
        <UBreadcrumb :items="[{ label: 'Inicio', to: '/' }, { label: 'Servicios', to: '/servicios' }, { label: 'Mechas' }]" />
      </template>
      <template #links>
        <div class="flex flex-wrap gap-3">
          <UButton to="/contacto" size="lg" color="primary"><template #leading><UIcon name="i-lucide-calendar" /></template>Reservar cita</UButton>
          <UButton href="tel:984390259" size="lg" color="neutral" variant="outline"><template #leading><UIcon name="i-lucide-phone" /></template>984 39 02 59</UButton>
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div class="lg:col-span-2 space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">Ilumina tu cabello con técnicas profesionales</h2>
            <p class="text-gray-600 dark:text-gray-300">Las mechas son perfectas para aportar luminosidad, dimensión y movimiento a tu cabello. Dominamos todas las técnicas de iluminación capilar.</p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Técnicas de mechas</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-1">Balayage</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Técnica de pincelado a mano que crea un efecto degradado natural y sofisticado. Perfecto para un look sun-kissed con bajo mantenimiento.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Mechas californianas</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Reflejos dorados y naturales que imitan el efecto del sol en el cabello. Ideal para cabellos castaños y rubios.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Babylights</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Mechas muy finas y sutiles que imitan los reflejos naturales del cabello infantil. Resultado delicado y luminoso.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Mechas clásicas</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Técnica tradicional con gorro o papel para conseguir reflejos uniformes y definidos.</p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Ventajas de las mechas</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2"><UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" /><div><span class="font-medium">Efecto natural:</span> Aportan luz y movimiento</div></li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" /><div><span class="font-medium">Bajo mantenimiento:</span> Las raíces no quedan marcadas</div></li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" /><div><span class="font-medium">Versátiles:</span> Se adaptan a cualquier tono</div></li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" /><div><span class="font-medium">Rejuvenecedoras:</span> Iluminan el rostro</div></li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Precios</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"><p class="font-medium mb-1">Mechas medias (gorro)</p><p class="text-primary font-bold">45€ - 55€</p></div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"><p class="font-medium mb-1">Balayage corto/medio</p><p class="text-primary font-bold">55€ - 70€</p></div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"><p class="font-medium mb-1">Balayage largo</p><p class="text-primary font-bold">70€ - 90€</p></div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"><p class="font-medium mb-1">Babylights</p><p class="text-primary font-bold">60€ - 80€</p></div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"><p class="font-medium mb-1">Mechas completas</p><p class="text-primary font-bold">65€ - 85€</p></div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"><p class="font-medium mb-1">Retoque de mechas</p><p class="text-primary font-bold">40€ - 60€</p></div>
            </div>
            <p class="mt-3 text-sm text-gray-500">*Los precios pueden variar según la longitud y densidad del cabello</p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Mantenimiento</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-3">Las mechas bien hechas pueden durar entre 3 y 6 meses:</p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex justify-between"><span>Balayage</span><span class="font-semibold">4-6 meses</span></li>
              <li class="flex justify-between"><span>Mechas californianas</span><span class="font-semibold">3-4 meses</span></li>
              <li class="flex justify-between"><span>Mechas clásicas</span><span class="font-semibold">2-3 meses</span></li>
              <li class="flex justify-between"><span>Babylights</span><span class="font-semibold">4-5 meses</span></li>
            </ul>
          </UCard>
        </div>

        <div class="space-y-6">
          <UCard>
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit"><UIcon name="i-lucide-sun" class="w-8 h-8 text-primary" /></div>
              <div><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Precio</h3><p class="text-2xl font-bold text-primary">Desde 45€</p></div>
              <div><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Duración</h3><p class="text-lg font-semibold">2-3 horas</p></div>
              <hr class="border-gray-200 dark:border-gray-700" />
              <div class="space-y-3">
                <UButton to="/contacto" block size="lg" color="primary"><template #leading><UIcon name="i-lucide-calendar" /></template>Reservar cita</UButton>
                <UButton href="tel:984390259" block size="lg" color="neutral" variant="outline"><template #leading><UIcon name="i-lucide-phone" /></template>Llamar ahora</UButton>
              </div>
            </div>
          </UCard>
          <UCard>
            <div class="space-y-4">
              <h3 class="font-semibold text-lg">Información adicional</h3>
              <div class="space-y-3 text-sm">
                <div class="flex items-start gap-3"><UIcon name="i-lucide-map-pin" class="w-5 h-5 text-primary mt-0.5" /><div><p class="font-medium">Ubicación</p><p class="text-gray-600 dark:text-gray-400">Pola de Siero, Asturias</p></div></div>
                <div class="flex items-start gap-3"><UIcon name="i-lucide-clock" class="w-5 h-5 text-primary mt-0.5" /><div><p class="font-medium">Horario</p><p class="text-gray-600 dark:text-gray-400">Lunes a Sábado<br>9:00 - 20:00</p></div></div>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
        <h2 class="text-2xl font-bold mb-6">Otros servicios</h2>
        <div class="flex gap-4 justify-center">
          <UButton to="/servicios" size="lg" color="neutral" variant="outline"><template #leading><UIcon name="i-lucide-arrow-left" /></template>Ver todos los servicios</UButton>
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>
