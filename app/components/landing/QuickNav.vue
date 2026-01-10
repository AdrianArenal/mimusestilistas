<script setup lang="ts">
const quickLinks = [
  {
    label: 'Servicios',
    description: 'Descubre todos nuestros servicios',
    icon: 'i-lucide-scissors',
    to: '/servicios',
    color: 'primary'
  },
  {
    label: 'Productos',
    description: 'Conoce nuestra gama de productos',
    icon: 'i-lucide-shopping-bag',
    to: '/productos',
    color: 'primary'
  },
  {
    label: 'Equipo',
    description: 'Conoce a nuestro equipo profesional',
    icon: 'i-lucide-users',
    to: '/equipo',
    color: 'primary'
  },
  {
    label: 'Contacto',
    description: 'Ponte en contacto con nosotros',
    icon: 'i-lucide-phone',
    to: '/contacto',
    color: 'primary'
  }
]
</script>

<template>
  <UPageSection 
    class="lg:hidden"
    :ui="{
      container: '!py-8 sm:!py-12'
    }"
  >
    <div class="grid grid-cols-2 gap-3 sm:gap-4">
      <NuxtLink
        v-for="link in quickLinks"
        :key="link.to"
        :to="link.to"
        class="group"
      >
        <UCard
          class="hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full"
          :ui="{
            body: 'p-4 sm:p-6'
          }"
        >
          <div class="flex flex-col items-center text-center gap-3">
            <div 
              :class="[
                'flex items-center justify-center rounded-full transition-all duration-300',
                'size-12 sm:size-16',
                'group-hover:scale-110',
                `bg-${link.color}-50 dark:bg-${link.color}-900/20`
              ]"
            >
              <UIcon 
                :name="link.icon" 
                :class="[
                  'size-6 sm:size-8',
                  `text-${link.color}-600 dark:text-${link.color}-400`
                ]"
              />
            </div>
            <div>
              <h3 class="font-semibold text-base sm:text-lg mb-1">
                {{ link.label }}
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                {{ link.description }}
              </p>
            </div>
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </UPageSection>
</template>
