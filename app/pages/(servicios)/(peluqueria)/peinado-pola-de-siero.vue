<script setup lang="ts">
useSeoMeta({
  title: 'Peinados en Pola de Siero - Mimu\'s Estilistas',
  description: 'Peinados profesionales para todo tipo de eventos y ocasiones en Pola de Siero. Desde 15€. Reserva tu cita.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Peinados"
      description="Peinados profesionales para cualquier ocasión"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Peluquería', to: '/peluqueria-en-pola-de-siero' },
            { label: 'Peinados' }
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
              El peinado perfecto para cada momento
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              Ya sea para un evento especial, una ocasión formal o simplemente para lucir radiante 
              en tu día a día, creamos peinados personalizados que realzan tu belleza natural 
              y se adaptan perfectamente a tu estilo y tipo de cabello.
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Tipos de peinados
            </h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Peinado casual
                  </h4>
                  <span class="text-primary font-bold">15€ - 20€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Peinados sencillos y elegantes para el día a día. Ondas suaves, alisados, 
                  coletas sofisticadas o semirecogidos.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Ideal para: Trabajo, comidas, reuniones informales
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Peinado para eventos
                  </h4>
                  <span class="text-primary font-bold">25€ - 35€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Peinados más elaborados con ondas marcadas, recogidos elegantes, trenzas 
                  sofisticadas o semirecogidos con volumen.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Ideal para: Bodas, bautizos, comuniones, fiestas
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Peinado alta ceremonia
                  </h4>
                  <span class="text-primary font-bold">40€ - 60€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Peinados espectaculares con técnicas avanzadas. Recogidos altos, moños bajos 
                  con trenzas, peinados estructurados con accesorios.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Ideal para: Bodas, galas, eventos importantes
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Ondas y rizos
                  </h4>
                  <span class="text-primary font-bold">20€ - 30€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Marcado de ondas suaves, rizos definidos o bucles glamourosos con tenacillas 
                  o plancha. Duradero y con movimiento natural.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Ideal para: Cualquier ocasión, look romántico
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Alisado profesional
                  </h4>
                  <span class="text-primary font-bold">15€ - 25€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Alisado con plancha profesional que elimina el frizz y aporta brillo y suavidad. 
                  Acabado pulido y elegante.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Ideal para: Look sofisticado y pulido
                </p>
              </div>

              <div class="p-4 border-l-4 border-primary bg-gray-50 dark:bg-gray-800/50">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-semibold">
                    Trenzas y recogidos
                  </h4>
                  <span class="text-primary font-bold">25€ - 45€</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Trenzas de espiga, boxer, holandesas, francesas. Recogidos bajos, moños 
                  románticos o estructurados.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Ideal para: Eventos, look bohemio o elegante
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Ocasiones especiales
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-heart"
                  class="text-primary mb-2"
                />
                <h4 class="font-semibold mb-1">
                  Invitadas de boda
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Peinados elegantes que duran toda la celebración
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-sparkles"
                  class="text-primary mb-2"
                />
                <h4 class="font-semibold mb-1">
                  Graduaciones
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Looks sofisticados para tu día especial
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-gift"
                  class="text-primary mb-2"
                />
                <h4 class="font-semibold mb-1">
                  Comuniones y bautizos
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Peinados que complementan tu look de madrina o invitada
                </p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <UIcon
                  name="i-lucide-party-popper"
                  class="text-primary mb-2"
                />
                <h4 class="font-semibold mb-1">
                  Fiestas y galas
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Peinados con personalidad para destacar
                </p>
              </div>
            </div>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              ¿Por qué elegir un peinado profesional?
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Mayor duración:</span> Técnicas profesionales que aguantan todo el día
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Asesoramiento experto:</span> Te ayudamos a elegir el peinado más favorecedor
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Acabado impecable:</span> Perfección en cada detalle
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Productos de calidad:</span> Fijadores y sprays profesionales
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-5 text-primary mt-0.5 shrink-0"
                />
                <div>
                  <span class="font-medium">Sin preocupaciones:</span> Disfruta del evento sin pensar en tu pelo
                </div>
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">
              Consejos para tu peinado
            </h3>
            <div class="space-y-3">
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span class="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Reserva con antelación
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Especialmente para eventos importantes, reserva con tiempo
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span class="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Trae referencias
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Fotos de peinados que te gusten ayudan a comunicar tu visión
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span class="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Lava tu cabello el día anterior
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    El cabello recién lavado puede ser más difícil de peinar
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span class="text-primary font-bold">4</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Considera tu vestimenta
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    El peinado debe complementar tu outfit y el estilo del evento
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
                  name="i-lucide-wind"
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
                  30min - 1h 30min
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Según complejidad
                </p>
              </div>
              <hr class="border-gray-200 dark:border-gray-800" />
              <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <h4 class="font-semibold mb-2 text-sm flex items-center gap-2">
                  <UIcon
                    name="i-lucide-info"
                    class="text-amber-600"
                  />
                  <span>Prueba previa</span>
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Para eventos importantes, ofrecemos prueba previa para garantizar el resultado perfecto
                </p>
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
          Otros servicios de peluquería
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
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
