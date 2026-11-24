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
        <ResponsiveBreadcrumb
          :items="[
            { label: 'Inicio', to: '/' },
            { label: 'Servicios', to: '/servicios' },
            { label: 'Bodas y Eventos' }
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
            href="tel:604812695"
            size="lg"
            color="neutral"
            variant="outline"
          >
            <template #leading>
              <UIcon name="i-lucide-phone" />
            </template>
            604 81 26 95
          </UButton>
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <!-- Grid de fotos -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-16 mt-8"
      >
        <div
          v-for="(img, i) in [
            { src: '/images/novia-1.webp', alt: 'Bodas y eventos Mimus' },
            { src: '/images/novia-2.webp', alt: 'Maquillaje profesional Mimus' },
            { src: '/images/novia-3.webp', alt: 'Preparación de maquillaje Mimus' },
            { src: '/images/novia-4.webp', alt: 'Maquillaje de ojos Mimus' },
            { src: '/images/novia-5.webp', alt: 'Brochas profesionales Mimus' },
            { src: '/images/novia-6.webp', alt: 'Maquillaje de labios Mimus' },
          ]"
          :key="i"
          class="aspect-3/4 overflow-hidden rounded-xl shadow-lg"
        >
          <NuxtImg
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover"
            loading="lazy"
            format="webp"
            quality="90"
          />
        </div>
      </div>

      <!-- Texto -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
      >
        <div class="space-y-4">
          <h2 class="text-3xl font-bold">
            Peinados de novia personalizados
          </h2>
          <p class="text-gray-600 text-lg">
            En Mimus entendemos que tu boda es uno de los días más importantes de tu vida.
            Cada novia es única y merece un peinado que refleje su personalidad y estilo.
          </p>
          <p class="text-gray-600">
            Creamos recogidos únicos y personalizados que te harán sentir radiante y especial.
            Desde estilos clásicos y elegantes hasta looks más modernos y románticos,
            trabajamos contigo para encontrar el peinado perfecto.
          </p>
        </div>
        <div class="space-y-4">
          <h2 class="text-3xl font-bold">
            Servicios para invitadas
          </h2>
          <p class="text-gray-600 text-lg">
            No solo cuidamos de la novia. También ofrecemos servicios de peinado y maquillaje
            para las invitadas que quieran lucir perfectas en este día especial.
          </p>
          <div class="pt-2 space-y-2">
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary mt-1 shrink-0" />
              <p class="text-gray-600">Servicio a domicilio disponible</p>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary mt-1 shrink-0" />
              <p class="text-gray-600">Productos profesionales de alta calidad</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="bg-primary/5 border-primary/20"
      >
        <div class="text-center py-8">
          <UIcon name="i-lucide-calendar-heart" class="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 class="text-2xl font-bold mb-4">
            Reserva tu cita
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
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
            <UButton href="tel:604812695" size="lg" color="neutral" variant="outline">
              <template #leading>
                <UIcon name="i-lucide-phone" />
              </template>
              604 81 26 95
            </UButton>
          </div>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>
