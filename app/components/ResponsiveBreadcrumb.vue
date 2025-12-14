<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

interface ExtendedBreadcrumbItem extends BreadcrumbItem {
  children?: BreadcrumbItem[]
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const containerRef = ref<HTMLElement>()
const measureRef = ref<HTMLElement>()

// Items compactos: inicio, dropdown con intermedios, y último
const compactItems = computed<ExtendedBreadcrumbItem[]>(() => {
  if (props.items.length <= 2) return props.items
  
  return [
    props.items[0]!, // Inicio
    {
      label: '...',
      slot: 'ellipsis' as const,
      children: props.items.slice(1, -1) // Items intermedios
    },
    props.items[props.items.length - 1]! // Último item
  ]
})

// Usar VueUse para obtener los tamaños de forma reactiva
const { width: containerWidth } = useElementSize(containerRef)
const { width: measureWidth } = useElementSize(measureRef)

// Determinar si mostrar versión compacta basándose en los anchos
// Añadir margen de 20px para evitar cambios constantes
const showCompact = computed(() => {
  if (!containerWidth.value || !measureWidth.value) return false
  return measureWidth.value > containerWidth.value - 20
})
</script>

<template>
  <div ref="containerRef" class="relative w-full">
    <!-- Breadcrumb de medición - invisible, sin restricciones de ancho -->
    <div 
      ref="measureRef"
      class="invisible absolute top-0 left-0 w-max pointer-events-none"
      aria-hidden="true"
    >
      <UBreadcrumb :items="items" />
    </div>

    <!-- Breadcrumb completo - visible si no hay overflow -->
    <div v-show="!showCompact">
      <UBreadcrumb :items="items" />
    </div>

    <!-- Breadcrumb compacto - visible si hace overflow -->
    <div v-show="showCompact">
      <UBreadcrumb :items="compactItems as any">
        <template #ellipsis="{ item }: { item: ExtendedBreadcrumbItem }">
          <ClientOnly>
            <UPopover :popper="{ strategy: 'fixed', placement: 'bottom-start' }">
              <UButton 
                icon="i-lucide-ellipsis" 
                color="neutral" 
                variant="link" 
                size="xs"
                class="p-0.5" 
              />
              
              <template #content>
                <div class="p-2 min-w-48 max-w-xs">
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.label"
                    :to="child.to"
                    class="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </div>
              </template>
            </UPopover>
          </ClientOnly>
        </template>
      </UBreadcrumb>
    </div>
  </div>
</template>
