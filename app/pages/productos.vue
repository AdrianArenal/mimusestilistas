<script setup lang="ts">
import SchwarzskopfSvg from '~/assets/svg/schwarzkopf.svg?component'

const { global } = useAppConfig()

const page = {
  title: 'Productos Profesionales',
  description: 'Llévate a casa los mejores productos para mantener tu cabello perfecto entre visita y visita. Trabajamos con las mejores marcas del mercado.',
  seo: {
    title: 'Productos Profesionales',
    description: 'Descubre nuestra selección de productos profesionales de peluquería. Champús, tratamientos, styling y más para cuidar tu cabello en casa'
  }
}

useSeoMeta({
  title: page.seo.title,
  ogTitle: page.seo.title,
  description: page.seo.description,
  ogDescription: page.seo.description
})

// Glow - Para cabello coloreado
const glowProducts = [
  { producto: 'Glow Champú', tamano: '300 ml', precio: '30,20 €' },
  { producto: 'Glow Acondicionador', tamano: '250 ml', precio: '35,20 €' },
  { producto: 'Glow Mascarilla', tamano: '200 ml', precio: '45,70 €' },
  { producto: 'Cool Glow Champú', tamano: '300 ml', precio: '30,20 €' },
  { producto: 'Glow Serum en Spray', tamano: '200 ml', precio: '46,60 €' }
]

// Amplify – Para cabello fino
const amplifyProducts = [
  { producto: 'Amplify Champú', tamano: '300 ml', precio: '30,20 €' },
  { producto: 'Amplify Champú 1l (Familia)', tamano: '1 l', precio: '40,00 €' },
  { producto: 'Amplify Acondicionador', tamano: '250 ml', precio: '35,20 €' },
  { producto: 'Amplify Spray Acondicionador', tamano: '250 ml', precio: '36,25 €' }
]

// Hydrate – Para cabello seco
const hydrateProducts = [
  { producto: 'Hydrate Champú', tamano: '300 ml', precio: '30,20 €' },
  { producto: 'Hydrate Acondicionador', tamano: '250 ml', precio: '35,20 €' },
  { producto: 'Hydrate Spray Acondicionador', tamano: '250 ml', precio: '36,25 €' },
  { producto: 'Hydrate Mascarilla', tamano: '200 ml', precio: '45,70 €' },
  { producto: 'Hydrate Loción', tamano: '150 ml', precio: '33,65 €' },
  { producto: 'Hydrate Tratamiento Intensivo', tamano: '200 ml', precio: '45,70 €' },
  { producto: 'Hydrate Serum Suavizante', tamano: '100 ml', precio: '41,80 €' },
  { producto: 'Hydrate Potenciador de Rizos', tamano: '250 ml', precio: '41,80 €' }
]

// Replenish – Para cabello dañado
const replenishProducts = [
  { producto: 'Replenish Champú', tamano: '300 ml', precio: '30,20 €' },
  { producto: 'Replenish Acondicionador', tamano: '250 ml', precio: '35,20 €' },
  { producto: 'Replenish Spray Acondicionador', tamano: '250 ml', precio: '36,25 €' },
  { producto: 'Replenish Mascarilla', tamano: '200 ml', precio: '45,70 €' },
  { producto: 'Replenish Bálsamo', tamano: '150 ml', precio: '32,70 €' }
]

// GHD
const ghdProducts = [
  { modelo: 'GHD gold azul', precio: '259 €' },
  { modelo: 'GHD chorus max', precio: '369 €' },
  { modelo: 'GHD chorus', precio: '369 €' },
  { modelo: 'GHD platinum', precio: '299 €' },
  { modelo: 'GHD gold', precio: '249 €' },
  { modelo: 'GHD max', precio: '269 €' },
  { modelo: 'GHD original', precio: '209 €' }
]

// Blondme
const blondmeProducts = [
  { producto: 'Champú Blondme', precio: '18,90 €' },
  { producto: 'Acondicionador', precio: '21,90 €' },
  { producto: 'Mascarilla', precio: '26,90 €' },
  { producto: 'Aceite', precio: '21,90 €' },
  { producto: 'Bálsamo sellador', precio: '21,20 €' },
  { producto: 'Spray morado', precio: '21,90 €' },
  { producto: 'Gotas de matización morada', precio: '26,90 €' }
]

const productColumns = [
  { accessorKey: 'producto', header: 'PRODUCTO' },
  { accessorKey: 'tamano', header: 'TAMAÑO' },
  { accessorKey: 'precio', header: 'PRECIO' }
]

const ghdColumns = [
  { accessorKey: 'modelo', header: 'MODELO' },
  { accessorKey: 'precio', header: 'PRECIO' }
]

const blondmeColumns = [
  { accessorKey: 'producto', header: 'PRODUCTO' },
  { accessorKey: 'precio', header: 'PRECIO' }
]
</script>

<template>
  <UPage>
    <UContainer class="py-12">
      <UPageHeader v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        :title="page.title" :description="page.description">
        <template #links>
          <div class="flex flex-wrap gap-3">
            <UButton label="Ver servicios" to="/servicios" color="neutral" variant="outline" size="lg" />
            <UButton label="Reserva tu cita" to="/contacto" color="primary" size="lg" />
          </div>
        </template>
      </UPageHeader>

      <div class="space-y-12 mt-12">
        <!-- Tabla de Contenidos -->
        <UCard v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold">
              Nuestros Productos
            </h2>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="#glow" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Glow - Para cabello coloreado
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#amplify" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Amplify - Para cabello fino
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#hydrate" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Hydrate - Para cabello seco
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#replenish" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Replenish - Para cabello dañado
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#blondme" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Blondme - Para cabellos rubios
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#ghd" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Planchas GHD
                </NuxtLink>
              </li>
            </ul>
          </div>
        </UCard>

        <!-- Schwarzkopf Section -->
        <UCard v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <div class="flex items-center gap-3 md:gap-4">
                <div class="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg p-2 md:p-4">
                  <SchwarzskopfSvg class="w-full h-full text-foreground" />
                </div>
                <h2 class="text-2xl md:text-3xl font-bold">
                  Schwarzkopf
                </h2>
              </div>

              <p class="text-lg font-semibold">
                ¿Por qué elegimos Schwarzkopf? …por todo esto:
              </p>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-sparkles" class="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-semibold mb-1">Calidad superior</h3>
                    <p class="text-sm text-muted">Los productos de Schwarzkopf son conocidos por su eficacia y
                      durabilidad,
                      proporcionando colores vibrantes y de larga duración.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-lightbulb" class="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-semibold mb-1">Innovación constante</h3>
                    <p class="text-sm text-muted">Schwarzkopf se mantiene a la vanguardia de la tecnología capilar,
                      desarrollando fórmulas que cuidan y protegen el cabello mientras lo colorean.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <UIcon name="i-lucide-palette" class="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-semibold mb-1">Amplia variedad</h3>
                    <p class="text-sm text-muted">Desde tonos naturales hasta colores más específicos y modernos
                      podríamos
                      decir que Schwarzkopf ofrece una amplia gama de opciones para satisfacer todos los gustos y
                      necesidades.</p>
                  </div>
                </div>
              </div>

              <p class="text-lg pt-4">
                <strong>Ven a Mimus Peluquería y descubre la diferencia que hace trabajar con una marca líder como
                  Schwarzkopf.</strong>
              </p>
            </div>

            <div class="order-first md:order-last flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <div class="perspective-midrange w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
                <div class="w-full h-full relative transform-3d rotating-cube-animation">
                  <div
                    class="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-linear-to-br from-zinc-900 to-black dark:from-white dark:to-gray-100 border-2 border-zinc-800 dark:border-gray-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transform-[rotateY(0deg)_translateZ(75px)] md:transform-[rotateY(0deg)_translateZ(100px)] backface-visible">
                    <SchwarzskopfSvg class="w-full h-full p-6 md:p-8 text-white dark:text-black" />
                  </div>
                  <div
                    class="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-linear-to-br from-zinc-900 to-black dark:from-white dark:to-gray-100 border-2 border-zinc-800 dark:border-gray-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transform-[rotateY(180deg)_translateZ(75px)] md:transform-[rotateY(180deg)_translateZ(100px)] backface-visible">
                    <SchwarzskopfSvg class="w-full h-full p-6 md:p-8 text-white dark:text-black" />
                  </div>
                  <div
                    class="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-linear-to-br from-zinc-900 to-black dark:from-white dark:to-gray-100 border-2 border-zinc-800 dark:border-gray-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transform-[rotateY(90deg)_translateZ(75px)] md:transform-[rotateY(90deg)_translateZ(100px)] backface-visible">
                    <SchwarzskopfSvg class="w-full h-full p-6 md:p-8 text-white dark:text-black" />
                  </div>
                  <div
                    class="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-linear-to-br from-zinc-900 to-black dark:from-white dark:to-gray-100 border-2 border-zinc-800 dark:border-gray-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transform-[rotateY(-90deg)_translateZ(75px)] md:transform-[rotateY(-90deg)_translateZ(100px)] backface-visible">
                    <SchwarzskopfSvg class="w-full h-full p-6 md:p-8 text-white dark:text-black" />
                  </div>
                  <div
                    class="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-linear-to-br from-zinc-900 to-black dark:from-white dark:to-gray-100 border-2 border-zinc-800 dark:border-gray-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transform-[rotateX(90deg)_translateZ(75px)] md:transform-[rotateX(90deg)_translateZ(100px)] backface-visible">
                    <SchwarzskopfSvg class="w-full h-full p-6 md:p-8 text-white dark:text-black" />
                  </div>
                  <div
                    class="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-linear-to-br from-zinc-900 to-black dark:from-white dark:to-gray-100 border-2 border-zinc-800 dark:border-gray-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] transform-[rotateX(-90deg)_translateZ(75px)] md:transform-[rotateX(-90deg)_translateZ(100px)] backface-visible">
                    <SchwarzskopfSvg class="w-full h-full p-6 md:p-8 text-white dark:text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Authentic Beauty Concept -->
        <UCard v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl font-bold mb-4">
                  Authentic Beauty Concept
                </h2>
                <p class="text-lg text-muted leading-relaxed">
                  Authentic Beauty Concept es la gama vegana de Schwarzkopf dedicada a la pureza y sostenibilidad.
                </p>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-4">
                  ¿Por qué elegimos Authentic Beauty Concept?
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <UIcon name="i-lucide-leaf" class="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p class="font-semibold mb-1">
                        Fórmulas Veganas con ingredientes Naturales
                      </p>
                      <p class="text-sm text-muted">
                        Todos los productos son 100% veganos y sin ingredientes de origen animal. Utiliza ingredientes
                        puros
                        y naturales, sin siliconas, sulfatos ni colorantes artificiales, garantizando un cuidado
                        delicado y
                        efectivo para tu cabello.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <UIcon name="i-lucide-recycle" class="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p class="font-semibold mb-1">
                        Sostenibilidad
                      </p>
                      <p class="text-sm text-muted">
                        Comprometidos con el medio ambiente, la marca apuesta por embalajes reciclables y prácticas de
                        producción responsables.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <UIcon name="i-lucide-sparkles" class="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p class="font-semibold mb-1">
                        Eficacia y Belleza
                      </p>
                      <p class="text-sm text-muted">
                        Proporciona resultados visibles, dejando tu cabello brillante, suave y saludable con un enfoque
                        en
                        la belleza auténtica y natural.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-first md:order-last">
              <img src="/images/26.webp" alt="Authentic Beauty Concept"
                class="w-full h-auto rounded-lg object-cover aspect-square">
            </div>
          </div>
        </UCard>

        <!-- Glow - Para cabello coloreado -->
        <div id="glow" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Glow - Para cabello coloreado
            </h2>
            <p class="text-muted">
              Productos especializados para mantener el color vibrante y protegido.
            </p>
          </div>
          <UCard>
            <UTable :data="glowProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Amplify - Para cabello fino -->
        <div id="amplify" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 450 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Amplify – Para cabello fino
            </h2>
            <p class="text-muted">
              Da volumen y cuerpo a cabellos finos y sin vida.
            </p>
          </div>
          <UCard>
            <UTable :data="amplifyProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Hydrate - Para cabello seco -->
        <div id="hydrate" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Hydrate – Para cabello seco
            </h2>
            <p class="text-muted">
              Hidratación profunda para cabellos secos y deshidratados.
            </p>
          </div>
          <UCard>
            <UTable :data="hydrateProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Replenish - Para cabello dañado -->
        <div id="replenish" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 550 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Replenish – Para cabello dañado
            </h2>
            <p class="text-muted">
              Reparación intensiva para cabellos dañados y debilitados.
            </p>
          </div>
          <UCard>
            <UTable :data="replenishProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Blondme -->
        <div id="blondme" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Blondme
            </h2>
            <p class="text-muted">
              Cuidado especializado para cabellos rubios y con mechas.
            </p>
          </div>
          <UCard>
            <UTable :data="blondmeProducts" :columns="blondmeColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- GHD -->
        <div id="ghd" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 650 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Planchas GHD
            </h2>
            <p class="text-muted">
              Las mejores planchas profesionales para un acabado perfecto.
            </p>
          </div>
          <UCard>
            <UTable :data="ghdProducts" :columns="ghdColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- CTA Final -->
        <UCard class="bg-primary/5" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 700 } }">
          <div class="text-center space-y-4 p-8">
            <h3 class="text-xl font-bold">
              ¿Necesitas asesoramiento?
            </h3>
            <p class="text-muted max-w-2xl mx-auto">
              Nuestro equipo estará encantado de ayudarte a elegir los productos más adecuados para tu tipo de cabello.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <UButton to="/contacto" color="primary" size="lg" icon="i-lucide-shopping-bag">
                Consultar disponibilidad
              </UButton>
              <UButton to="tel:984390259" color="neutral" variant="outline" size="lg" icon="i-lucide-phone">
                Llamar ahora
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </UPage>
</template>

<style scoped>
.rotating-cube-animation {
  animation: rotateCube 12s infinite linear;
}

@keyframes rotateCube {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .rotating-cube-animation {
    animation: rotateCube 20s infinite linear;
  }
}
</style>
