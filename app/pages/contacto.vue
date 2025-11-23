<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'

const state = reactive({
  nombre: '',
  email: '',
  telefono: '',
  servicio: '',
  fecha: '',
  mensaje: ''
})

type Schema = typeof state

const servicios = [
  { label: 'Corte de pelo', value: 'corte' },
  { label: 'Coloración', value: 'color' },
  { label: 'Tratamiento capilar', value: 'tratamiento' },
  { label: 'Peinado para evento', value: 'peinado' },
  { label: 'Manicura', value: 'manicura' },
  { label: 'Permanente/Alisado', value: 'permanente' },
  { label: 'Otro', value: 'otro' }
]

const showSuccess = ref(false)
const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.add({
      title: '¡Reserva recibida!',
      description: 'Nos pondremos en contacto contigo lo antes posible.',
      color: 'success'
    })
    
    // Reset form
    Object.assign(state, {
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      fecha: '',
      mensaje: ''
    })
  } catch (error) {
    toast.add({
      title: 'Error',
      description: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
      color: 'error'
    })
  }
}

useSeoMeta({
  title: 'Contacto - Mimu\'s Estilistas',
  description: 'Reserva tu cita en Mimu\'s Estilistas. Estamos en Pola de Siero, Asturias. Llámanos al 984 39 02 59 o envíanos un mensaje.'
})
</script>

<template>
  <UContainer class="py-12">
    <UPageHeader
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      title="Contacto"
      description="Estamos aquí para atenderte. Reserva tu cita o consúltanos cualquier duda"
    />

    <UPageBody>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
        >
          <UCard
            class="p-6 md:p-8 ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl shadow-lg"
          >
            <h2 class="text-2xl font-bold mb-6">
              Reserva tu cita
            </h2>

            <UAlert
              v-if="showSuccess"
              color="success"
              variant="subtle"
              title="¡Mensaje enviado!"
              description="Nos pondremos en contacto contigo lo antes posible."
              class="mb-6"
            />

            <UForm
              :state="state"
              class="space-y-5"
              @submit="onSubmit"
            >
              <UFormField
                label="Nombre completo"
                name="nombre"
                required
              >
                <UInput
                  v-model="state.nombre"
                  placeholder="Tu nombre"
                  size="lg"
                />
              </UFormField>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UFormField
                  label="Email"
                  name="email"
                  required
                >
                  <UInput
                    v-model="state.email"
                    type="email"
                    placeholder="tu@email.com"
                    size="lg"
                  />
                </UFormField>

                <UFormField
                  label="Teléfono"
                  name="telefono"
                  required
                >
                  <UInput
                    v-model="state.telefono"
                    type="tel"
                    placeholder="600 123 456"
                    size="lg"
                  />
                </UFormField>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UFormField
                  label="Servicio"
                  name="servicio"
                  required
                >
                  <USelect
                    v-model="state.servicio"
                    :items="servicios"
                    placeholder="Selecciona un servicio"
                    size="lg"
                  />
                </UFormField>

                <UFormField
                  label="Fecha preferida"
                  name="fecha"
                >
                  <UInput
                    v-model="state.fecha"
                    type="date"
                    size="lg"
                  />
                </UFormField>
              </div>

              <UFormField
                label="Mensaje adicional"
                name="mensaje"
              >
                <UTextarea
                  v-model="state.mensaje"
                  placeholder="Cuéntanos más detalles sobre lo que necesitas..."
                  :rows="4"
                  size="lg"
                />
              </UFormField>

              <UButton
                type="submit"
                size="lg"
                block
              >
                <template #leading>
                  <UIcon name="i-lucide-send" />
                </template>
                Enviar reserva
              </UButton>
            </UForm>
          </UCard>
        </div>

        <!-- Contact Info -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
          class="space-y-6"
        >
          <!-- Direct Contact -->
          <UCard
            class="p-6 ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl"
          >
            <h3 class="text-xl font-bold mb-4">
              Contacto directo
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-primary/10 rounded-lg">
                  <UIcon
                    name="i-lucide-phone"
                    class="w-5 h-5 text-primary"
                  />
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">
                    Teléfono
                  </p>
                  <a
                    href="tel:984390259"
                    class="text-primary hover:underline"
                  >
                    984 39 02 59
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="p-2 bg-primary/10 rounded-lg">
                  <UIcon
                    name="i-lucide-mail"
                    class="w-5 h-5 text-primary"
                  />
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href="mailto:mimusestilistascb@hotmail.com"
                    class="text-primary hover:underline break-all"
                  >
                    mimusestilistascb@hotmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="p-2 bg-primary/10 rounded-lg">
                  <UIcon
                    name="i-lucide-map-pin"
                    class="w-5 h-5 text-primary"
                  />
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">
                    Dirección
                  </p>
                  <p class="text-gray-600 dark:text-gray-300">
                    Calle Enrique II, 5, bajo 2<br>
                    33510 Pola de Siero<br>
                    Asturias, España
                  </p>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Opening Hours -->
          <UCard
            class="p-6 ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl"
          >
            <h3 class="text-xl font-bold mb-4">
              Horario
            </h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="font-medium">Lunes - Viernes</span>
                <span class="text-gray-600 dark:text-gray-300">9:30 - 19:00</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium">Sábados</span>
                <span class="text-gray-600 dark:text-gray-300">9:00 - 14:00</span>
              </div>
              <div class="flex justify-between">
                <span class="font-medium">Domingos y festivos</span>
                <span class="text-gray-600 dark:text-gray-300">Cerrado</span>
              </div>
            </div>
          </UCard>

          <!-- Map -->
          <UCard
            class="overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 rounded-xl bg-gray-100 dark:bg-gray-900"
          >
            <div class="aspect-video w-full rounded-xl overflow-hidden">
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
      </div>

      <!-- Quick Actions -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="mt-12"
      >
        <UCard
          class="p-8 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 ring-1 ring-primary/20 rounded-2xl"
        >
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">
              ¿Prefieres llamar directamente?
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Si prefieres reservar tu cita por teléfono o tienes alguna consulta urgente, 
              no dudes en llamarnos. Estamos encantadas de atenderte.
            </p>
            <div class="flex flex-wrap gap-3 justify-center">
              <UButton
                href="tel:984390259"
                size="lg"
                color="primary"
              >
                <template #leading>
                  <UIcon name="i-lucide-phone" />
                </template>
                Llamar ahora
              </UButton>
              <UButton
                href="https://wa.me/34984390259"
                size="lg"
                color="success"
                target="_blank"
              >
                <template #leading>
                  <UIcon name="i-simple-icons-whatsapp" />
                </template>
                WhatsApp
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UPageBody>
  </UContainer>
</template>
