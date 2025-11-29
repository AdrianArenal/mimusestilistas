<script setup lang="ts">
useSeoMeta({
  title: 'Contacto - Mimu\'s Estilistas',
  description: 'Visítanos en Pola de Siero, Asturias. Encuéntranos en Calle Enrique II, 5, bajo 2. Llámanos al 984 39 02 59 para reservar tu cita.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Visítanos"
      description="Estamos en el corazón de Pola de Siero, esperándote para cuidar de tu imagen"
    />

    <UPageBody>
      <!-- Contact Info Card -->
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="ring-1 ring-gray-200 dark:ring-gray-800 rounded-2xl shadow-lg mb-12"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Location -->
          <div class="flex items-start gap-2">
            <div class="p-1 bg-primary/10 rounded-lg shrink-0">
              <UIcon
                name="i-lucide-map-pin"
                class="size-4 text-primary"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-base md:text-lg font-bold mb-1.5 md:mb-2">
                Nuestra ubicación
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3">
                Calle Enrique II, 5, bajo 2<br>
                33510 Pola de Siero<br>
                Asturias, España
              </p>
              <UButton
                href="https://maps.google.com/?q=43.3917,-5.6632"
                target="_blank"
                color="primary"
                variant="soft"
                size="xs"
              >
                <template #trailing>
                  <UIcon name="i-lucide-external-link" />
                </template>
                Abrir en Maps
              </UButton>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start gap-2">
            <div class="p-1 bg-primary/10 rounded-lg shrink-0">
              <UIcon
                name="i-lucide-phone"
                class="size-4 text-primary"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-base md:text-lg font-bold mb-1.5 md:mb-2">
                Llámanos
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3">
                Reserva tu cita por teléfono
              </p>
              <a
                href="tel:984390259"
                class="text-xl md:text-2xl font-bold text-primary hover:underline block mb-3"
              >
                984 39 02 59
              </a>
              <UButton
                href="tel:984390259"
                color="primary"
                variant="soft"
                size="xs"
              >
                <template #leading>
                  <UIcon name="i-lucide-phone-call" />
                </template>
                Llamar ahora
              </UButton>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start gap-2">
            <div class="p-1 bg-primary/10 rounded-lg shrink-0">
              <UIcon
                name="i-lucide-mail"
                class="size-4 text-primary"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-base md:text-lg font-bold mb-1.5 md:mb-2">
                Escríbenos
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3">
                Envíanos un email
              </p>
              <a
                href="mailto:mimusestilistascb@hotmail.com"
                class="text-xs md:text-sm text-primary hover:underline break-all block mb-3"
              >
                mimusestilistascb@hotmail.com
              </a>
              <UButton
                href="mailto:mimusestilistascb@hotmail.com"
                color="primary"
                variant="soft"
                size="xs"
              >
                <template #leading>
                  <UIcon name="i-lucide-send" />
                </template>
                Enviar email
              </UButton>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Map Section - Hero -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="mb-12"
      >
        <UCard
          class="overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 rounded-2xl shadow-2xl"
        >
          <div class="aspect-video lg:aspect-21/9 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.8376543210987!2d-5.6632!3d43.3917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDIzJzMwLjEiTiA1wrAzOSc0Ny41Ilc!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </UCard>
      </div>

      <!-- Schedule and WhatsApp Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <!-- Schedule Card -->
        <UCard
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 350 } }"
          class="p-4 md:p-6 lg:p-8 ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl"
        >
          <div class="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
            <div class="p-2 md:p-2.5 bg-primary/10 rounded-lg shrink-0">
              <UIcon
                name="i-lucide-clock"
                class="size-4 md:size-5 lg:size-6 text-primary"
              />
            </div>
            <div>
              <h3 class="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2">
                Horario de apertura
              </h3>
              <p class="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                Visítanos en estos horarios
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 md:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div class="flex items-center gap-2 md:gap-3">
                <UIcon
                  name="i-lucide-calendar-days"
                  class="size-4 md:size-5 text-primary shrink-0"
                />
                <span class="text-sm md:text-base font-semibold">Lunes - Viernes</span>
              </div>
              <span class="text-sm md:text-base text-primary font-bold">9:30 - 19:00</span>
            </div>
            <div class="flex items-center justify-between p-3 md:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div class="flex items-center gap-2 md:gap-3">
                <UIcon
                  name="i-lucide-calendar"
                  class="size-4 md:size-5 text-primary shrink-0"
                />
                <span class="text-sm md:text-base font-semibold">Sábados</span>
              </div>
              <span class="text-sm md:text-base text-primary font-bold">9:00 - 14:00</span>
            </div>
            <div class="flex items-center justify-between p-3 md:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg opacity-60">
              <div class="flex items-center gap-2 md:gap-3">
                <UIcon
                  name="i-lucide-calendar-x"
                  class="size-4 md:size-5 shrink-0"
                />
                <span class="text-sm md:text-base font-semibold">Domingos y festivos</span>
              </div>
              <span class="text-sm md:text-base font-bold">Cerrado</span>
            </div>
          </div>
        </UCard>

        <!-- CTA Card -->
        <UCard
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
          class="p-8 bg-linear-to-br from-primary/10 via-primary/5 to-transparent ring-1 ring-primary/20 rounded-xl"
        >
          <div class="h-full flex flex-col justify-center">
            <div class="text-center mb-6">
              <UIcon
                name="i-lucide-sparkles"
                class="w-12 h-12 text-primary mx-auto mb-4"
              />
              <h3 class="text-2xl font-bold mb-3">
                ¿Lista para tu cita?
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Reserva ahora de la forma que prefieras. Estamos encantadas de atenderte.
              </p>
            </div>
            <div class="space-y-3">
              <UButton
                href="tel:984390259"
                size="lg"
                color="primary"
                block
              >
                <template #leading>
                  <UIcon name="i-lucide-phone" />
                </template>
                Llamar para reservar
              </UButton>
              <UButton
                href="https://wa.me/34984390259?text=Hola,%20me%20gustaría%20reservar%20una%20cita"
                size="lg"
                color="success"
                block
                target="_blank"
              >
                <template #leading>
                  <UIcon name="i-simple-icons-whatsapp" />
                </template>
                WhatsApp
              </UButton>
              <UButton
                href="mailto:mimusestilistascb@hotmail.com"
                size="lg"
                color="neutral"
                variant="soft"
                block
              >
                <template #leading>
                  <UIcon name="i-lucide-mail" />
                </template>
                Enviar email
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UPageBody>
  </UContainer>
</template>
