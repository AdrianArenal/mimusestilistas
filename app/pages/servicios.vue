<script setup lang="ts">
const { data: page } = await useAsyncData('servicios', () => queryCollection('pages').path('/servicios').first())
const { data: services } = await useAsyncData('services-list', () => queryCollection('servicios').all())

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Página no encontrada' })
}

useSeoMeta({
  title: page.value.seo?.title,
  description: page.value.seo?.description
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      :title="page?.title"
      :description="page?.description"
    >
      <template #links>
        <div class="flex flex-wrap gap-3">
          <UButton
            v-if="page?.cta?.primary"
            v-bind="page.cta.primary"
            size="lg"
          />
          <UButton
            v-if="page?.cta?.secondary"
            v-bind="page.cta.secondary"
            color="neutral"
            variant="outline"
            size="lg"
          />
        </div>
      </template>
    </UPageHeader>

    <UPageBody>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <UCard
          v-for="(service, index) in services"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 600, 
              delay: index * 100 
            } 
          }"
          class="p-6 ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex flex-col h-full">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div 
                  v-if="service.icon"
                  class="p-3 bg-primary/10 rounded-lg"
                >
                  <UIcon
                    :name="service.icon"
                    class="w-6 h-6 text-primary"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-semibold">
                    {{ service.title }}
                  </h3>
                  <p 
                    v-if="service.duration"
                    class="text-sm text-gray-500 dark:text-gray-400 mt-1"
                  >
                    {{ service.duration }}
                  </p>
                </div>
              </div>
              <UBadge
                v-if="service.featured"
                color="primary"
                variant="subtle"
                size="xs"
              >
                Popular
              </UBadge>
            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-4 grow">
              {{ service.description }}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
              <span class="text-xl font-bold text-primary">
                {{ service.price }}
              </span>
              <UButton
                :to="`/servicios/${service.title.toLowerCase().replace(/\s+/g, '-')}`"
                color="primary"
                variant="soft"
                size="sm"
              >
                Ver más
                <template #trailing>
                  <UIcon name="i-lucide-arrow-right" />
                </template>
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Call to Action Section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
        class="mt-16 text-center"
      >
        <UCard
          class="p-8 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 ring-1 ring-primary/20 rounded-2xl"
        >
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Reserva tu cita ahora y deja que nuestro equipo de profesionales cuide de ti. 
            Más de 20 años de experiencia respaldan nuestro trabajo.
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
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
        </UCard>
      </div>
    </UPageBody>
  </UContainer>
</template>
