<script setup lang="ts">
useSeoMeta({
  title: 'Mapa del Sitio - Mimu\'s Estilistas',
  description: 'Navega por todas las páginas de Mimu\'s Estilistas en Pola de Siero. Servicios de peluquería, estética y más.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      title="Mapa del Sitio"
      description="Navega por todas las páginas de este sitio web"
    />

    <UPageBody class="max-w-5xl">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Páginas principales -->
        <UCard>
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <UIcon
              name="i-lucide-home"
              class="text-primary"
            />
            Páginas principales
          </h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="text-primary hover:underline"
              >
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/servicios"
                class="text-primary hover:underline"
              >
                Servicios
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/productos"
                class="text-primary hover:underline"
              >
                Productos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/equipo"
                class="text-primary hover:underline"
              >
                Equipo
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contacto"
                class="text-primary hover:underline"
              >
                Contacto
              </NuxtLink>
            </li>
          </ul>
        </UCard>

        <!-- Servicios de Peluquería -->
        <UCard>
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <UIcon
              name="i-lucide-scissors"
              class="text-primary"
            />
            Servicios de Peluquería
          </h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/peluqueria-en-pola-de-siero"
                class="text-primary hover:underline font-semibold"
              >
                Peluquería en Pola de Siero
              </NuxtLink>
              <ul class="ml-4 mt-1 space-y-1 text-sm">
                <li>
                  <NuxtLink
                    to="/peinado-pola-de-siero"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    → Peinados
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/corte-pelo-pola-de-siero"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    → Corte de Pelo
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/color-pelo-pola-de-siero"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    → Color de Pelo
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/mechas-pola-de-siero"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    → Mechas y Balayage
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/tratamientos-pola-de-siero"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    → Tratamientos Capilares
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </UCard>

        <!-- Servicios de Estética -->
        <UCard>
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <UIcon
              name="i-lucide-sparkles"
              class="text-primary"
            />
            Servicios de Estética
          </h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/estetica-en-pola-de-siero"
                class="text-primary hover:underline font-semibold"
              >
                Estética en Pola de Siero
              </NuxtLink>
              <ul class="ml-4 mt-1 space-y-1 text-sm">
                <li>
                  <NuxtLink
                    to="/unas-pola-de-siero"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    → Uñas (Manicura y Pedicura)
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/maquillaje-pola-de-siero"
                    class="text-gray-600 dark:text-gray-400 hover:text-primary"
                  >
                    → Maquillaje Profesional
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </UCard>

        <!-- Servicios Especiales -->
        <UCard>
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <UIcon
              name="i-lucide-heart"
              class="text-primary"
            />
            Servicios Especiales
          </h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/novia-en-pola-de-siero"
                class="text-primary hover:underline"
              >
                Bodas y Eventos
              </NuxtLink>
            </li>
          </ul>
        </UCard>

        <!-- Legal -->
        <UCard class="md:col-span-2">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
            <UIcon
              name="i-lucide-file-text"
              class="text-primary"
            />
            Información Legal
          </h2>
          <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2">
            <NuxtLink
              to="/aviso-legal"
              class="text-primary hover:underline text-sm"
            >
              Aviso Legal
            </NuxtLink>
            <NuxtLink
              to="/politica-cookies"
              class="text-primary hover:underline text-sm"
            >
              Política de Cookies
            </NuxtLink>
            <NuxtLink
              to="/politica-privacidad"
              class="text-primary hover:underline text-sm"
            >
              Política de Privacidad
            </NuxtLink>
            <NuxtLink
              to="/politica-accesibilidad"
              class="text-primary hover:underline text-sm"
            >
              Política de Accesibilidad
            </NuxtLink>
          </div>
        </UCard>
      </div>

      <!-- Información adicional -->
      <UCard class="mt-8">
        <div class="text-center">
          <h3 class="text-lg font-semibold mb-2">
            ¿Necesitas ayuda?
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Si no encuentras lo que buscas, contáctanos directamente
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <UButton
              to="/contacto"
              color="primary"
            >
              <template #leading>
                <UIcon name="i-lucide-mail" />
              </template>
              Contactar
            </UButton>
            <UButton
              href="tel:984390259"
              color="neutral"
              variant="outline"
            >
              <template #leading>
                <UIcon name="i-lucide-phone" />
              </template>
              984 39 02 59
            </UButton>
          </div>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>
