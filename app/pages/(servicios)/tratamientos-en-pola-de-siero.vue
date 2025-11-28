<script setup lang="ts">
useSeoMeta({
  title: 'Tratamientos Capilares - Mimu\'s Estilistas',
  description: 'Tratamientos capilares profesionales para recuperar y mantener la salud de tu cabello'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }" title="Tratamientos Capilares" description="Devuelve la vida a tu cabello con tratamientos profesionales">
      <template #headline>
        <UBreadcrumb :items="[{ label: 'Inicio', to: '/' }, { label: 'Servicios', to: '/servicios' }, { label: 'Tratamientos' }]" />
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
            <h2 class="text-2xl font-bold mb-4">Devuelve la vida a tu cabello</h2>
            <p class="text-gray-600 dark:text-gray-300">Raquel, nuestra especialista en tratamientos, te ayudará a recuperar la vitalidad, brillo y salud de tu cabello con tratamientos profesionales personalizados.</p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">¿Por qué necesitas tratamientos?</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-3">El cabello sufre diariamente por múltiples factores:</p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2"><UIcon name="i-lucide-alert-circle" class="w-5 h-5 text-primary mt-0.5" />Secadores, planchas y tenacillas</li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-alert-circle" class="w-5 h-5 text-primary mt-0.5" />Coloraciones y decoloraciones</li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-alert-circle" class="w-5 h-5 text-primary mt-0.5" />Sol, cloro y agua salada</li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-alert-circle" class="w-5 h-5 text-primary mt-0.5" />Contaminación ambiental</li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Tipos de tratamientos</h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary"><h4 class="font-semibold mb-1">Hidratación Profunda <span class="text-primary ml-2">15€ - 20€</span></h4><p class="text-sm text-gray-600 dark:text-gray-400">Para cabellos secos, porosos y sin brillo. Aporta agua y humedad desde el interior.</p></div>
              <div class="p-4 border-l-4 border-primary"><h4 class="font-semibold mb-1">Nutrición Intensiva <span class="text-primary ml-2">20€ - 25€</span></h4><p class="text-sm text-gray-600 dark:text-gray-400">Para cabellos ásperos y difíciles de peinar. Aporta lípidos y aceites nutritivos.</p></div>
              <div class="p-4 border-l-4 border-primary"><h4 class="font-semibold mb-1">Reparación <span class="text-primary ml-2">25€ - 35€</span></h4><p class="text-sm text-gray-600 dark:text-gray-400">Para cabellos muy dañados. Reconstruye la fibra capilar con proteínas y aminoácidos.</p></div>
              <div class="p-4 border-l-4 border-primary"><h4 class="font-semibold mb-1">Botox Capilar <span class="text-primary ml-2">40€ - 60€</span></h4><p class="text-sm text-gray-600 dark:text-gray-400">Tratamiento de choque que rellena, alisa y aporta brillo inmediato.</p></div>
              <div class="p-4 border-l-4 border-primary"><h4 class="font-semibold mb-1">Keratina <span class="text-primary ml-2">80€ - 120€</span></h4><p class="text-sm text-gray-600 dark:text-gray-400">Alisa, elimina el encrespamiento. Efecto semi-permanente de 2-3 meses.</p></div>
              <div class="p-4 border-l-4 border-primary"><h4 class="font-semibold mb-1">Anti-caída <span class="text-primary ml-2">30€ - 40€</span></h4><p class="text-sm text-gray-600 dark:text-gray-400">Fortalece el folículo piloso y estimula el crecimiento.</p></div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Frecuencia recomendada</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2"><UIcon name="i-lucide-calendar-check" class="w-5 h-5 text-primary mt-0.5" /><div><span class="font-medium">Cabello sano:</span> 1 tratamiento al mes</div></li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-calendar-check" class="w-5 h-5 text-primary mt-0.5" /><div><span class="font-medium">Cabello con leve daño:</span> Cada 2-3 semanas</div></li>
              <li class="flex items-start gap-2"><UIcon name="i-lucide-calendar-check" class="w-5 h-5 text-primary mt-0.5" /><div><span class="font-medium">Cabello dañado:</span> Semanal el primer mes</div></li>
            </ul>
          </UCard>

          <UCard class="bg-primary/5 border-primary/20">
            <div class="flex items-start gap-4"><UIcon name="i-lucide-sparkles" class="w-6 h-6 text-primary mt-1" /><div><h3 class="text-lg font-semibold mb-2">Productos profesionales</h3><p class="text-gray-600 dark:text-gray-300">Utilizamos productos de salón de las mejores marcas profesionales, con principios activos concentrados que ofrecen resultados visibles inmediatos.</p></div></div>
          </UCard>
        </div>

        <div class="space-y-6">
          <UCard>
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit"><UIcon name="i-lucide-sparkles" class="w-8 h-8 text-primary" /></div>
              <div><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Precio</h3><p class="text-2xl font-bold text-primary">Desde 15€</p></div>
              <div><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Duración</h3><p class="text-lg font-semibold">30-60 min</p></div>
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
