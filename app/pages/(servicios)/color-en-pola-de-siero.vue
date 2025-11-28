<script setup lang="ts">
useSeoMeta({
  title: 'Color - Mimu\'s Estilistas',
  description: 'Servicio de coloración profesional con tintes de alta calidad en Pola de Siero'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Color"
      description="Servicio de coloración profesional con tintes de alta calidad en Pola de Siero"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Color' }
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
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
      >
        <!-- Contenido Principal -->
        <div class="lg:col-span-2 space-y-6">
          <UCard>
            <h2 class="text-2xl font-bold mb-4">Expertos en coloración capilar</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Carolina, nuestra especialista en color, domina las técnicas de coloración más avanzadas 
              para conseguir el tono perfecto que buscas, cuidando siempre la salud y vitalidad de tu cabello.
            </p>

            <h3 class="text-xl font-semibold mb-4">Servicios de coloración</h3>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Tinte de raíces:</span> Retoca tu color natural y cubre las canas
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Tinte completo:</span> Cambio de color total o cobertura completa
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Baños de color:</span> Revitaliza y aporta brillo a tu tono actual
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Tintes sin amoniaco:</span> Opción más suave para cabellos sensibles
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Coloración fantasía:</span> Colores vibrantes y creativos
                </div>
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <span class="font-medium">Corrección de color:</span> Arreglamos coloraciones previas
                </div>
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Asesoramiento personalizado</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Antes de aplicar cualquier color, analizamos:
            </p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                Tu tono de piel para encontrar el color que más te favorece
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                El estado de tu cabello para elegir los productos adecuados
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                Tus preferencias y estilo de vida
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-dot" class="w-5 h-5 text-primary mt-0.5" />
                El mantenimiento necesario
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Precios</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Tinte raíces</p>
                <p class="text-primary font-bold">35€ - 40€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Tinte completo medio</p>
                <p class="text-primary font-bold">45€ - 55€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Tinte completo largo</p>
                <p class="text-primary font-bold">55€ - 65€</p>
              </div>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="font-medium mb-1">Baño de color</p>
                <p class="text-primary font-bold">25€ - 35€</p>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <span class="font-medium">Corrección de color:</span> Desde 60€ (consultar precio según caso)
            </p>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Productos profesionales</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-3">
              Trabajamos exclusivamente con marcas profesionales de primera calidad que:
            </p>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                Respetan y cuidan la salud de tu cabello
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                Ofrecen resultados duraderos y brillantes
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                Cubren perfectamente las canas
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                Aportan nutrición durante el proceso de coloración
              </li>
            </ul>
          </UCard>

          <UCard>
            <h3 class="text-xl font-semibold mb-4">Consejos de mantenimiento</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Usa champús y acondicionadores para cabello teñido
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Protege tu cabello del sol con productos específicos
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Retoca las raíces cada 4-6 semanas
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Realiza tratamientos hidratantes regularmente
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-lucide-info" class="w-5 h-5 text-primary mt-0.5" />
                Evita lavados con agua muy caliente
              </li>
            </ul>
          </UCard>

          <UCard class="bg-primary/5 border-primary/20">
            <div class="flex items-start gap-4">
              <UIcon name="i-lucide-help-circle" class="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 class="text-lg font-semibold mb-2">¿Tienes dudas sobre qué color elegir?</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Pide cita para una consulta gratuita y te asesoraremos sin compromiso sobre el mejor color para ti.
                </p>
                <UButton to="/contacto" color="primary">
                  Solicitar consulta gratuita
                </UButton>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Sidebar -->

        <div class="space-y-6">
          <UCard>
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon
                  name="i-lucide-palette"
                  class="w-8 h-8 text-primary"
                />
              </div>
              
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Precio
                </h3>
                <p class="text-2xl font-bold text-primary">
                  Desde 35€
                </p>
              </div>

              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Duración
                </h3>
                <p class="text-lg font-semibold">
                  1-2 horas
                </p>
              </div>

              <hr class="border-gray-200 dark:border-gray-700" />

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

          <UCard>
            <div class="space-y-4">
              <h3 class="font-semibold text-lg">
                Información adicional
              </h3>
              
              <div class="space-y-3 text-sm">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p class="font-medium">Ubicación</p>
                    <p class="text-gray-600 dark:text-gray-400">
                      Pola de Siero, Asturias
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-clock" class="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p class="font-medium">Horario</p>
                    <p class="text-gray-600 dark:text-gray-400">
                      Lunes a Sábado<br>
                      9:00 - 20:00
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p class="font-medium">Productos profesionales</p>
                    <p class="text-gray-600 dark:text-gray-400">
                      Marcas de alta calidad
                    </p>
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
        <h2 class="text-2xl font-bold mb-6">
          Otros servicios
        </h2>
        <div class="flex gap-4 justify-center">
          <UButton
            to="/servicios"
            size="lg"
            color="neutral"
            variant="outline"
          >
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
