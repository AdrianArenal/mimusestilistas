<script setup lang="ts">
useSeoMeta({
  title: 'Uñas en Pola de Siero - Manicura y Pedicura | Mimu\'s Estilistas',
  description: 'Manicura, pedicura y uñas de gel profesionales en Pola de Siero. Esmaltado semipermanente. Desde 15€. Pide cita.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Uñas"
      description="Manicura y pedicura profesional para uñas perfectas"
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">
              Cuida tus manos y pies con nuestros servicios profesionales
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Ofrecemos servicios completos de manicura y pedicura con productos de calidad y 
              técnicas profesionales. Desde cuidados básicos hasta uñas de gel y diseños personalizados, 
              cada servicio está pensado para que luzcas uñas impecables y saludables.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Servicios de manicura
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Manicura básica
                  </h4>
                  <span class="text-primary font-bold">15€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Limado, cuidado de cutículas, hidratación y esmaltado clásico. 
                  El cuidado esencial para uñas saludables.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Manicura con esmaltado semipermanente
                  </h4>
                  <span class="text-primary font-bold">25€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Manicura completa con esmaltado que dura hasta 3 semanas sin desconcharse. 
                  Brillo perfecto y duradero.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Duración 3 semanas</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">No descascarilla</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Brillo intenso</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Uñas de gel
                  </h4>
                  <span class="text-primary font-bold">35€ - 45€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Construcción con gel para alargar y fortalecer tus uñas naturales. 
                  Acabado natural y resistente.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Alargamiento</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Fortalecimiento</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Natural</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Relleno de gel
                  </h4>
                  <span class="text-primary font-bold">30€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Mantenimiento de tus uñas de gel. Recomendado cada 3-4 semanas.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Retirada de semipermanente o gel
                  </h4>
                  <span class="text-primary font-bold">8€ - 12€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Retirada profesional sin dañar la uña natural. Incluye hidratación.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Nail art y decoración
                  </h4>
                  <span class="text-primary font-bold">Desde 3€/uña</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Diseños personalizados, degradados, francesas, pedrería y más. 
                  Precio según complejidad.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Francesas</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Degradados</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Pedrería</span>
                </div>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Servicios de pedicura
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Pedicura básica
                  </h4>
                  <span class="text-primary font-bold">20€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Baño, limado, tratamiento de cutículas, exfoliación, hidratación y esmaltado. 
                  Pies suaves y cuidados.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Pedicura con semipermanente
                  </h4>
                  <span class="text-primary font-bold">30€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Pedicura completa con esmaltado semipermanente de larga duración. 
                  Perfecto para el verano.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Pedicura spa
                  </h4>
                  <span class="text-primary font-bold">35€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Pedicura completa con masaje relajante, mascarilla nutritiva y parafina. 
                  Experiencia de bienestar total.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Masaje</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Mascarilla</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Parafina</span>
                </div>
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
                  <span class="font-medium">Mantenimiento regular:</span> Retoca el semipermanente cada 3 semanas
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

        <div class="space-y-6">
          <UCard class="sticky top-24">
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon
                  name="i-lucide-sparkle"
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
                  45min - 1h 30min
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Según servicio
                </p>
              </div>
              <UDivider />
              <div class="p-4 bg-primary/10 rounded-lg">
                <h4 class="font-semibold mb-2 text-sm">
                  ⭐ Popular
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  El esmaltado semipermanente es nuestro servicio más solicitado por su durabilidad
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
