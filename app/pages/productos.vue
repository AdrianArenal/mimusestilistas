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

// Styling
const stylingProducts = [
  { producto: 'Base Arcilla', tamano: '85 ml', precio: '€ 32,70' },
  { producto: 'Espuma Amplificadora', tamano: '200 ml', precio: '€ 33,60' },
  { producto: 'Crema de Forma', tamano: '150 ml', precio: '€ 30,70' },
  { producto: 'Pasta de Cera Efecto Gritty', tamano: '85 ml', precio: '€ 30,25' },
  { producto: 'Pomada Sólida', tamano: '85 ml', precio: '€ 30,25' },
  { producto: 'Champú en Seco', tamano: '250 ml', precio: '€ 33,60' },
  { producto: 'Laca Funcional', tamano: '300 ml', precio: '€ 31,20' },
  { producto: 'Laca de Fijación Fuerte', tamano: '300 ml', precio: '€ 31,20' },
  { producto: 'Spray Salino Ninfa', tamano: '250 ml', precio: '€ 32,70' },
  { producto: 'Polvo en Spray Nude', tamano: '12 g', precio: '€ 32,70' },
  { producto: 'Spray de Textura Aireada', tamano: '300 ml', precio: '€ 33,60' },
  { producto: 'Pasta de Fijación Flexible', tamano: '85 ml', precio: '€ 30,25' },
  { producto: 'Cosmic Blow-Dry Jelly', tamano: '150 ml', precio: '€ 32,70' }
]

const beyondHairProducts = [
  { producto: 'Eau de Toilette', tamano: '50 ml', precio: '€ 59,20' },
  { producto: 'Agua Perfeccionadora', tamano: '100 ml', precio: '€ 31,70' },
  { producto: 'Crema para Cabello y Manos', tamano: '75 ml', precio: '€ 25,10' },
  { producto: 'Exfoliante Sensorial en Crema', tamano: '250 ml', precio: '€ 44,50' }
]

const minisProducts = [
  { producto: 'Glow Champú', tamano: '50 ml', precio: '€ 7,30' },
  { producto: 'Glow Mascarilla', tamano: '30 ml', precio: '€ 7,30' },
  { producto: 'Glow Serum en Spray', tamano: '50 ml', precio: '€ 9,85' },
  { producto: 'Hydrate Champú', tamano: '50 ml', precio: '€ 7,30' },
  { producto: 'Hydrate Mascarilla', tamano: '30 ml', precio: '€ 7,30' },
  { producto: 'Replenish Champú', tamano: '50 ml', precio: '€ 7,30' },
  { producto: 'Replenish Mascarilla Ligera', tamano: '30 ml', precio: '€ 7,30' },
  { producto: 'Replenish Mascarilla Intensiva', tamano: '30 ml', precio: '€ 7,30' },
  { producto: 'Replenish Bálsamo Regenerador de Puntas Abiertas', tamano: '30 ml', precio: '€ 8,10' },
  { producto: 'Amplify Champú', tamano: '50 ml', precio: '€ 7,30' },
  { producto: 'Crema de Forma', tamano: '30 ml', precio: '€ 8,10' },
  { producto: 'Champú en Seco', tamano: '100 ml', precio: '€ 11,80' },
  { producto: 'Laca de Fijación Fuerte', tamano: '100 ml', precio: '€ 11,80' },
  { producto: 'Crema para Cabello y Manos', tamano: '30 ml', precio: '€ 9,85' },
  { producto: 'Cosmic Blow-Dry Jelly', tamano: '30 ml', precio: '€ 8,10' }
]

const velasMementoProducts = [
  { producto: 'Vela Memento Base', tamano: '240 gr', precio: '€ 24,00' },
  { producto: 'Vela Memento Glow', tamano: '240 gr', precio: '€ 24,00' },
  { producto: 'Vela Memento Amplify', tamano: '240 gr', precio: '€ 24,00' },
  { producto: 'Vela Memento Hydrate', tamano: '240 gr', precio: '€ 24,00' },
  { producto: 'Vela Memento Replenish', tamano: '240 gr', precio: '€ 24,00' }
]

const allHairScalpProducts = [
  { producto: 'Champú Purificante', tamano: '300 ml', precio: '€ 31,10' },
  { producto: 'Champú Esencial', tamano: '300 ml', precio: '€ 31,10' },
  { producto: 'Mascarilla de Gel Hidratante', tamano: '200 ml', precio: '€ 47,90' },
  { producto: 'Aceite Embellecedor Intensivo', tamano: '100 ml', precio: '€ 45,10' },
  { producto: 'Aceite de Cuidado Fluido', tamano: '100 ml', precio: '€ 45,10' }
]

const glowProducts = [
  { producto: 'Glow Champú', tamano: '300 ml', precio: '€ 31,10' },
  { producto: 'Glow Acondicionador', tamano: '250 ml', precio: '€ 36,20' },
  { producto: 'Glow Mascarilla', tamano: '200 ml', precio: '€ 47,10' },
  { producto: 'Cool Glow Champú', tamano: '300 ml', precio: '€ 31,10' },
  { producto: 'Glow Serum en Spray', tamano: '200 ml', precio: '€ 48,00' }
]

const amplifyProducts = [
  { producto: 'Amplify Champú', tamano: '300 ml', precio: '€ 31,10' },
  { producto: 'Amplify Acondicionador', tamano: '250 ml', precio: '€ 36,20' },
  { producto: 'Amplify Spray Acondicionador', tamano: '250 ml', precio: '€ 37,15' }
]

const hydrateProducts = [
  { producto: 'Hydrate Champú', tamano: '300 ml', precio: '€ 31,10' },
  { producto: 'Hydrate Acondicionador', tamano: '250 ml', precio: '€ 36,20' },
  { producto: 'Hydrate Spray Acondicionador', tamano: '250 ml', precio: '€ 37,15' },
  { producto: 'Hydrate Mascarilla', tamano: '200 ml', precio: '€ 47,10' },
  { producto: 'Hydrate Loción', tamano: '150 ml', precio: '€ 34,65' },
  { producto: 'Hydrate Tratamiento Intensivo', tamano: '200 ml', precio: '€ 47,10' },
  { producto: 'Hydrate Serum Suavizante', tamano: '100 ml', precio: '€ 43,15' },
  { producto: 'Hydrate Potenciador de Rizos', tamano: '250 ml', precio: '€ 43,15' }
]

const replenishProducts = [
  { producto: 'Replenish Champú', tamano: '300 ml', precio: '€ 31,10' },
  { producto: 'Replenish Acondicionador', tamano: '250 ml', precio: '€ 36,20' },
  { producto: 'Replenish Spray Acondicionador', tamano: '250 ml', precio: '€ 37,15' },
  { producto: 'Replenish Mascarilla en Crema Ligera', tamano: '200 ml', precio: '€ 47,10' },
  { producto: 'Replenish Mascarilla en Crema Intensiva', tamano: '200 ml', precio: '€ 47,10' },
  { producto: 'Replenish Bálsamo Regenerador de Puntas Abiertas', tamano: '150 ml', precio: '€ 34,65' }
]

const productColumns = [
  { accessorKey: 'producto', header: 'PRODUCTO' },
  { accessorKey: 'tamano', header: 'TAMAÑO' },
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
                  Glow
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#amplify" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Amplify
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#hydrate" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Hydrate
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#replenish" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Replenish
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#all-hair-scalp" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  All Hair & Scalp Types
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#styling" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Styling
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#beyond-hair" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Beyond Hair
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#minis" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Minis
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#velas-memento" class="text-primary hover:underline flex items-center gap-2">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                  Velas Memento
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
                  <ULink to="https://shop.schwarzkopf-professional.es/es/?utm_source=mimus&utm_medium=cpc&utm_campaign=SKP_ES_eShop_ES-FMCG-SKP-Search-BR-ALL_always-on-2025&utm_term=g_e_schwarzkopf&utm_content=schwarzkopf-pure-brand&gad_source=1&gad_campaignid=13623422308&gbraid=0AAAAAB3CrcZEcIfpv2ztQP_abtB6730xG&gclid=CjwKCAiA3fnJBhAgEiwAyqmY5SM6H_vHLiDHUsgXHVh_Gw20r0wwfV6vg9l-ZrJyygPFl3jONuNVSBoC0eQQAvD_BwE" target="_blank" class="text-primary hover:underline">Schwarzkopf</ULink>.</strong>
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
                  <ULink to="https://www.authenticbeautyconcept.es/" target="_blank" class="text-primary hover:underline">Authentic Beauty Concept</ULink> es la gama vegana de Schwarzkopf dedicada a la pureza y sostenibilidad.
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

        <!-- Glow -->
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

        <!-- Amplify -->
        <div id="amplify" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Amplify
            </h2>
            <p class="text-muted">
              Para cabello fino
            </p>
          </div>
          <UCard>
            <UTable :data="amplifyProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Hydrate -->
        <div id="hydrate" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 550 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Hydrate
            </h2>
            <p class="text-muted">
              Para cabello seco
            </p>
          </div>
          <UCard>
            <UTable :data="hydrateProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Replenish -->
        <div id="replenish" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Replenish
            </h2>
            <p class="text-muted">
              Para cabello dañado
            </p>
          </div>
          <UCard>
            <UTable :data="replenishProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- All Hair & Scalp Types -->
        <div id="all-hair-scalp" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 650 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              All Hair & Scalp Types
            </h2>
            <p class="text-muted">
              Para todo tipo de cabello y cuero cabelludo
            </p>
          </div>
          <UCard>
            <UTable :data="allHairScalpProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Styling -->
        <div id="styling" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 700 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Styling
            </h2>
            <p class="text-muted">
              Para todo tipo de cabello
            </p>
          </div>
          <UCard>
            <UTable :data="stylingProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Beyond Hair -->
        <div id="beyond-hair" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 750 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Beyond Hair
            </h2>
            <p class="text-muted">
              Para cabello, rostro y piel
            </p>
          </div>
          <UCard>
            <UTable :data="beyondHairProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Minis -->
        <div id="minis" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 800 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Minis
            </h2>
            <p class="text-muted">
              Tamaños pequeños ideales para viajar o probar
            </p>
          </div>
          <UCard>
            <UTable :data="minisProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>

        <!-- Velas Memento -->
        <div id="velas-memento" class="space-y-4 scroll-mt-24" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 850 } }">
          <div>
            <h2 class="text-2xl font-bold mb-2">
              Velas Memento
            </h2>
            <p class="text-muted">
              Velas veganas premium perfumadas
            </p>
          </div>
          <UCard>
            <UTable :data="velasMementoProducts" :columns="productColumns" :ui="{
              th: 'py-1.5 px-2',
              td: 'py-1.5 px-2'
            }" />
          </UCard>
        </div>
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
