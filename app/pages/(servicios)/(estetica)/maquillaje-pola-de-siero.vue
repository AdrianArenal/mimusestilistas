<script setup lang="ts">
useSeoMeta({
  title: 'Maquillaje en Pola de Siero - Novias y Eventos | Mimu\'s Estilistas',
  description: 'Maquillaje profesional para bodas, eventos y ocasiones especiales en Pola de Siero. Novias, invitadas y más.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Maquillaje"
      description="Maquillaje profesional para realzar tu belleza natural"
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">
              Luce radiante en cada ocasión
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Nuestro servicio de maquillaje profesional está diseñado para realzar tu belleza natural 
              y adaptarse perfectamente a cada ocasión. Utilizamos productos de alta calidad para que te sientas segura y hermosa durante todo el evento.
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
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Maquillaje natural y ligero que realza tus rasgos sin recargar. 
                  Perfecto para el día a día o eventos diurnos.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Natural</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Fresco</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Luminoso</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Maquillaje de noche
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Maquillaje más intenso y duradero para eventos nocturnos. 
                  Acentúa tus rasgos con técnicas de contorno e iluminación.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Glamuroso</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Duradero</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Impactante</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Maquillaje de novia
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Maquillaje especial para el día más importante. Prueba previa incluida 
                  para asegurar el look perfecto.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Prueba incluida</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Personalizado</span>
                </div>
                <div class="mt-3 p-3 bg-white dark:bg-gray-900 rounded border border-primary/30">
                  <p class="text-sm font-medium mb-1">
                    ✨ Incluye:
                  </p>
                  <ul class="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Prueba previa</li>
                    <li>• Maquillaje el día de la boda</li>
                    <li>• Productos profesionales waterproof</li>
                    <li>• Retoques y kit de emergencia</li>
                  </ul>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Maquillaje para invitadas
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Maquillaje elegante para bodas, comuniones o bautizos. 
                  Adaptado a tu vestimenta y al tipo de evento.
                </p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Elegante</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Sofisticado</span>
                  <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Todo el día</span>
                </div>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Maquillaje para eventos especiales
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Galas, fiestas, graduaciones o sesiones fotográficas. 
                  Maquillaje personalizado según la ocasión.
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <h4 class="font-semibold mb-2">
                  Prueba de maquillaje
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Sesión para probar diferentes estilos y decidir tu look.
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
                  Suave y delicado. Tonos rosados, melocotón, iluminación sutil. Ideal novias.
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Técnicas que utilizamos
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Preparación de piel:</span> Limpieza, hidratación y primer para base perfecta
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Corrección y contorno:</span> Técnicas para realzar tus rasgos naturales
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Iluminación estratégica:</span> Highlighter para pómulos, arco de cupido y lagrimal
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Definición de cejas:</span> Diseño que complementa tu rostro
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Pestañas postizas:</span> Naturales o volumosas según preferencia
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Fijación profesional:</span> Productos que aseguran duración todo el día
                </div>
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Consejos para tu maquillaje de evento
            </h3>
            <div class="space-y-3">
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <UIcon
                    name="i-lucide-sparkles"
                    class="size-4 text-primary"
                  />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Reserva con antelación
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Para bodas y eventos importantes, reserva con 2-3 meses de antelación
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <UIcon
                    name="i-lucide-palette"
                    class="size-4 text-primary"
                  />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Trae referencias visuales
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Fotos de maquillajes que te gusten ayudan a conseguir el look deseado
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <UIcon
                    name="i-lucide-shirt"
                    class="size-4 text-primary"
                  />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Coordina con tu vestimenta
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    El maquillaje debe complementar tu outfit y el estilo del evento
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <UIcon
                    name="i-lucide-droplet"
                    class="size-4 text-primary"
                  />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Hidrata bien tu piel
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Días previos, mantén tu piel hidratada para mejor aplicación del maquillaje
                  </p>
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <div class="space-y-6">
          <UCard class="sticky top-24">
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon
                  name="i-lucide-palette"
                  class="w-8 h-8 text-primary"
                />
              </div>
              <hr class="border-gray-200 dark:border-gray-800" />
              <div class="p-4 bg-primary/10 rounded-lg">
                <h4 class="font-semibold mb-2 text-sm">
                  💍 Novias
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Prueba previa siempre incluida para novias. Tu día perfecto merece un maquillaje perfecto.
                </p>
                <UButton
                  to="/recogido-novia-en-pola-de-siero"
                  size="xs"
                  color="neutral"
                  variant="ghost"
                  block
                >
                  Ver recogidos de novia
                </UButton>
              </div>
              <hr class="border-gray-200 dark:border-gray-800" />
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
