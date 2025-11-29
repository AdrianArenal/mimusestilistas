<script setup lang="ts">
useSeoMeta({
  title: 'Tratamientos Capilares en Pola de Siero - Mimu\'s Estilistas',
  description: 'Tratamientos profesionales para el cabello: botox, keratina, hidratación. Repara y nutre tu pelo en Pola de Siero. Desde 15€.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Tratamientos Capilares"
      description="Repara, hidrata y fortalece tu cabello con tratamientos profesionales"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Tratamientos' }
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
              Dale a tu cabello el cuidado que merece
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Nuestros tratamientos capilares profesionales están diseñados para reparar, nutrir 
              y fortalecer tu cabello desde el interior. Utilizamos productos de alta calidad 
              adaptados a las necesidades específicas de cada tipo de cabello.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Tratamientos disponibles
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Botox capilar
                  </h4>
                  <span class="text-primary font-bold">45€ - 65€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Tratamiento intensivo que rellena las fibras capilares, elimina el frizz y aporta 
                  brillo extremo. Resultados duraderos hasta 3 meses.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Antifrizz</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Brillo intenso</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Larga duración</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Keratina
                  </h4>
                  <span class="text-primary font-bold">50€ - 80€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Alisado progresivo con keratina que elimina el encrespamiento y facilita el peinado. 
                  Cabello sedoso y manejable durante meses.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Alisado</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Sin frizz</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Manejable</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Hidratación profunda
                  </h4>
                  <span class="text-primary font-bold">25€ - 35€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mascarilla intensiva que devuelve la hidratación perdida. Ideal para cabello seco, 
                  teñido o dañado por el calor.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Hidratación</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Suavidad</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Reparación</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Reconstrucción fibra capilar
                  </h4>
                  <span class="text-primary font-bold">35€ - 50€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Tratamiento reparador que reconstruye el cabello desde el interior. Perfecto para 
                  cabellos muy dañados o quebradizos.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Reparación profunda</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Fortaleza</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Reconstrucción</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Tratamiento anticaída
                  </h4>
                  <span class="text-primary font-bold">30€ - 45€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Fortalece el folículo piloso y estimula el crecimiento. Tratamiento en fases 
                  para resultados visibles.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Anticaída</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Estimula crecimiento</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Fortalece</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Tratamiento rápido
                  </h4>
                  <span class="text-primary font-bold">15€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Tratamiento express con ampolla específica. Aporta brillo, suavidad e hidratación 
                  instantánea. Perfecto como mantenimiento.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Express</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Inmediato</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Mantenimiento</span>
                </div>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              ¿Qué tratamiento necesitas?
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <UIcon
                    name="i-lucide-droplet"
                    class="text-primary"
                  />
                  Cabello seco
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  → Hidratación profunda o Botox capilar
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <UIcon
                    name="i-lucide-zap"
                    class="text-primary"
                  />
                  Cabello dañado
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  → Reconstrucción fibra capilar
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <UIcon
                    name="i-lucide-wind"
                    class="text-primary"
                  />
                  Cabello con frizz
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  → Keratina o Botox capilar
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h4 class="font-semibold mb-2 flex items-center gap-2">
                  <UIcon
                    name="i-lucide-trending-down"
                    class="text-primary"
                  />
                  Pérdida de densidad
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  → Tratamiento anticaída
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Beneficios de los tratamientos
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Reparación profunda:</span> Actúan en el interior de la fibra capilar
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Resultados duraderos:</span> Mantén tu cabello sano por semanas
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Brillo y suavidad:</span> Cabello visiblemente más saludable
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Facilita el peinado:</span> Menos tiempo y esfuerzo en casa
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Previene daños futuros:</span> Protege de agresiones externas
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
                  name="i-lucide-sparkles"
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
                  30min - 2h
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Según tratamiento
                </p>
              </div>
              <UDivider />
              <div class="p-4 bg-primary/10 rounded-lg">
                <h4 class="font-semibold mb-2 text-sm">
                  💡 Recomendación
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Para mejores resultados, realiza tratamientos cada 3-4 semanas
                </p>
              </div>
              <UDivider />
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
        </div>
      </div>
    </UPageBody>
  </UContainer>
</template>
