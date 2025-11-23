<script setup lang="ts">
const { data: page } = await useAsyncData('equipo', () => queryCollection('pages').path('/equipo').first())
const { data: team } = await useAsyncData('team-members', () => queryCollection('equipo').all())

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
    />

    <UPageBody>
      <!-- Hero images -->
      <div
        v-if="page?.images"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 800, delay: 200 } }"
        class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 rounded-xl overflow-hidden"
      >
        <img
          v-for="(image, index) in page?.images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="w-full h-64 object-cover"
        >
      </div>

      <!-- Team members -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UCard
          v-for="(member, index) in team"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 600, 
              delay: index * 150 + 400 
            } 
          }"
          class="overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col h-full">
            <!-- Member image -->
            <div class="relative aspect-square overflow-hidden">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-1">
                  {{ member.name }}
                </h3>
                <p class="text-white/90 font-medium">
                  {{ member.role }}
                </p>
              </div>
            </div>

            <!-- Member info -->
            <div class="p-6">
              <div class="mb-4">
                <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Experiencia
                </p>
                <p class="text-gray-900 dark:text-white">
                  {{ member.experience }}
                </p>
              </div>

              <div class="mb-6">
                <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Especialidades
                </p>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="specialty in member.specialties"
                    :key="specialty"
                    color="primary"
                    variant="subtle"
                    size="sm"
                  >
                    {{ specialty }}
                  </UBadge>
                </div>
              </div>

              <UButton
                :to="`/equipo/${member.name?.toLowerCase().replace(/\s+/g, '-') || ''}`"
                block
                color="primary"
                variant="soft"
              >
                Conocer más
                <template #trailing>
                  <UIcon name="i-lucide-arrow-right" />
                </template>
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- CTA Section -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 800 } }"
        class="mt-16"
      >
        <UCard
          class="p-8 md:p-12 bg-linear-to-br from-primary/10 via-primary/5 to-transparent ring-1 ring-primary/20 rounded-2xl"
        >
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4">
              Confía en profesionales con experiencia
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Nuestro equipo está formado continuamente para ofrecerte los mejores servicios 
              y las técnicas más actuales. Más de 20 años cuidando de la imagen de nuestros clientes.
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
                Reserva tu cita
              </UButton>
              <UButton
                to="/servicios"
                size="lg"
                color="neutral"
                variant="outline"
              >
                Ver servicios
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UPageBody>
  </UContainer>
</template>
