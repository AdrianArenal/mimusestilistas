<script setup lang="ts">
useSeoMeta({
  title: 'Bodas y Eventos',
  ogTitle: 'Bodas y Eventos',
  description: 'Peinados para novias, peinados y maquillaje para invitadas. Servicio profesional para tu día especial en Pola de Siero',
  ogDescription: 'Peinados para novias, peinados y maquillaje para invitadas. Servicio profesional para tu día especial en Pola de Siero'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Bodas y Eventos"
      description="Peinados para novias, peinados y maquillaje para invitadas. Hacemos de tu día especial un momento inolvidable"
    >
      <template #headline>
        <UBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Bodas y Eventos' }
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
      <!-- Sección 1: Video + Texto (Video izquierda) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16"
      >
        <!-- Video 1 -->
        <div>
          <video
            autoplay
            muted
            loop
            playsinline
            class="w-full h-auto object-cover rounded-xl shadow-lg"
            preload="auto"
            aria-label="Peinado de novia en Mimu's Estilistas"
          >
            <source src="https://pub-820a050bd8b941bdb6f8494e6c3603c2.r2.dev/boda2.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <!-- Texto 1 -->
        <div class="space-y-4">
          <h2 class="text-3xl font-bold">Peinados de novia personalizados</h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">
            En Mimu's Estilistas entendemos que tu boda es uno de los días más importantes de tu vida. 
            Cada novia es única y merece un peinado que refleje su personalidad y estilo.
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            Creamos recogidos únicos y personalizados que te harán sentir radiante y especial. 
            Desde estilos clásicos y elegantes hasta looks más modernos y románticos, 
            trabajamos contigo para encontrar el peinado perfecto que complemente tu vestido y complementos.
          </p>
          <div class="flex gap-3 pt-4">
            <UButton to="/contacto" color="primary" size="lg">
              <template #leading>
                <UIcon name="i-lucide-calendar" />
              </template>
              Reservar ahora
            </UButton>
            <UButton href="tel:984390259" color="neutral" variant="outline" size="lg">
              <template #leading>
                <UIcon name="i-lucide-phone" />
              </template>
              Llamar ahora
            </UButton>
          </div>
        </div>
      </div>

      <!-- Sección 2: Texto + Video (Video derecha) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16"
      >
        <!-- Video 2 -->
        <div class="lg:order-2">
          <video
            autoplay
            muted
            loop
            playsinline
            class="w-full h-auto object-cover rounded-xl shadow-lg"
            preload="auto"
            aria-label="Maquillaje de novia en Mimu's Estilistas"
          >
            <source src="https://pub-820a050bd8b941bdb6f8494e6c3603c2.r2.dev/boda1.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <!-- Texto 2 -->
        <div class="space-y-4 lg:order-1">
          <h2 class="text-3xl font-bold">Servicios para invitadas</h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg">
            No solo cuidamos de la novia. También ofrecemos servicios de peinado y maquillaje 
            para las invitadas que quieran lucir perfectas en este día especial.
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            Nos desplazamos al lugar de tu evento para mayor comodidad, permitiendo que todo el 
            grupo se prepare juntos en un ambiente relajado y sin prisas. También ofrecemos la posibilidad 
            de abrir el salón en exclusiva para vosotras en ese día tan especial. Coordinamos el equipo 
            y los tiempos para que todo esté listo a la hora perfecta.
          </p>
          <div class="pt-4">
            <div class="flex items-start gap-3 mb-3">
              <UIcon name="i-lucide-check-circle" class="w-6 h-6 text-primary mt-1 shrink-0" />
              <p class="text-gray-600 dark:text-gray-300">Servicio a domicilio disponible</p>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="w-6 h-6 text-primary mt-1 shrink-0" />
              <p class="text-gray-600 dark:text-gray-300">Productos profesionales de alta calidad</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 3: Grid de Imágenes -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="mb-16"
      >
        <div>
          <div class="grid grid-cols-2 gap-1">
            <div class="aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <NuxtImg
                src="/images/18.webp"
                alt="Peinado para invitadas de boda"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                quality="95"
              />
            </div>
            <div class="aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <NuxtImg
                src="/images/19.webp"
                alt="Maquillaje para invitadas de boda"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                quality="95"
              />
            </div>
            <div class="aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <NuxtImg
                src="/images/21.webp"
                alt="Servicios de belleza para bodas"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                quality="95"
              />
            </div>
            <div class="aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <NuxtImg
                src="/images/22.webp"
                alt="Peinado y maquillaje para eventos"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                quality="95"
              />
            </div>
            <div class="aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <NuxtImg
                src="/images/23.webp"
                alt="Servicios de belleza para bodas"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                quality="95"
              />
            </div>
            <div class="aspect-3/4 overflow-hidden rounded-xl shadow-lg">
              <NuxtImg
                src="/images/24.webp"
                alt="Peinado para bodas y eventos"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                quality="95"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
      >
        <UCard class="bg-primary/5 border-primary/20">
          <div class="text-center py-8">
            <UIcon name="i-lucide-calendar-heart" class="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 class="text-2xl font-bold mb-4">Reserva tu cita</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Te recomendamos reservar tu prueba con al menos 1-2 meses de antelación. 
              Para el día de la boda, podemos desplazarnos a tu domicilio o lugar de preparación.
            </p>
            <div class="flex flex-wrap gap-3 justify-center">
              <UButton to="/contacto" size="lg" color="primary">
                <template #leading>
                  <UIcon name="i-lucide-calendar" />
                </template>
                Reservar ahora
              </UButton>
              <UButton href="tel:984390259" size="lg" color="neutral" variant="outline">
                <template #leading>
                  <UIcon name="i-lucide-phone" />
                </template>
                984 39 02 59
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Sidebar removido -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" style="display: none;"
      >
        <div class="lg:col-span-2 space-y-6">
        </div>

        <div class="space-y-6">
          <UCard>
            <div class="space-y-4">
              <div class="p-4 bg-primary/10 rounded-lg w-fit">
                <UIcon name="i-lucide-heart" class="w-8 h-8 text-primary" />
              </div>

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
                    <p class="text-gray-600 dark:text-gray-400">Lunes-Martes: 9:30-13:30 / 15:30-19:00<br>Jueves-Viernes: 9:30-19:00<br>Sábado: 9:30-13:30</p>
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
