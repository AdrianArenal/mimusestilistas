<script setup lang="ts">
useSeoMeta({
  title: 'Mechas en Pola de Siero - Balayage & Babylights | Mimu\'s Estilistas',
  description: 'Mechas californianas, balayage, babylights y más. Técnicas de iluminación profesional en Pola de Siero. Desde 45€.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Mechas y Balayage"
      description="Ilumina tu cabello con técnicas profesionales de mechas"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Mechas' }
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
              Ilumina tu cabello con las mejores técnicas
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Las mechas y el balayage son técnicas de coloración que aportan luminosidad, 
              profundidad y movimiento natural a tu cabello. Trabajamos de forma personalizada 
              para conseguir el efecto perfecto según tu tono base y estilo.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Técnicas de mechas
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Balayage
                  </h4>
                  <span class="text-primary font-bold">60€ - 90€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Técnica a mano alzada que crea un degradado natural y luminoso. 
                  Efecto soleado con transiciones suaves.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Natural</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Luminoso</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Bajo mantenimiento</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Babylights
                  </h4>
                  <span class="text-primary font-bold">70€ - 100€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mechas muy finas que imitan el efecto natural del sol en el cabello infantil. 
                  Resultado delicado y sofisticado.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Delicado</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Sofisticado</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Ultra natural</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Mechas californianas
                  </h4>
                  <span class="text-primary font-bold">55€ - 85€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mechas que aclaran progresivamente desde medios a puntas. 
                  Efecto surfero y natural.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Surfero</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Gradual</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Sin raíz</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Mechas tradicionales
                  </h4>
                  <span class="text-primary font-bold">45€ - 65€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mechas con gorro o papel. Iluminación uniforme con contraste definido.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Clásico</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Definido</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Luminoso</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Lowlights
                  </h4>
                  <span class="text-primary font-bold">50€ - 75€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mechas más oscuras que el tono base para aportar profundidad y dimensión.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Profundidad</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Dimensión</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Volumen visual</span>
                </div>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Ventajas de las mechas
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Luminosidad natural:</span> Aportan luz sin cambio drástico
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Bajo mantenimiento:</span> No requieren retoques frecuentes de raíz
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Efecto volumen:</span> Crean sensación de más densidad capilar
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Versatilidad:</span> Se adaptan a cualquier longitud y textura
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Personalización:</span> Infinitas combinaciones de tonos
                </div>
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Cuidados posteriores
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Para mantener tus mechas radiantes:
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  Usa champú y acondicionador para cabello teñido
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  Aplica mascarilla nutritiva 1-2 veces por semana
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  Protege del calor con productos termoprotectores
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  Retoca cada 3-4 meses según crecimiento y preferencia
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
                  name="i-lucide-sun"
                  class="w-8 h-8 text-primary"
                />
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Precio desde
                </h3>
                <p class="text-3xl font-bold text-primary">
                  45€
                </p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Duración
                </h3>
                <p class="text-lg font-semibold">
                  2h - 4h
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Según técnica y cabello
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
