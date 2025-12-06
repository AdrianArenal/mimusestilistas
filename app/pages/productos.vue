<script setup lang="ts">
const { global } = useAppConfig()

const page = {
  title: 'Productos Profesionales',
  description: 'Llévate a casa los mejores productos para mantener tu cabello perfecto entre visita y visita. Trabajamos con las mejores marcas del mercado.',
  seo: {
    title: 'Productos - Mimu\'s Estilistas',
    description: 'Descubre nuestra selección de productos profesionales de peluquería. Champús, tratamientos, styling y más para cuidar tu cabello en casa'
  }
}

const products = [
  {
    title: 'Champús Profesionales',
    description: 'Champús de alta calidad para todo tipo de cabello',
    category: 'Cuidado Capilar',
    image: '/hero/random-1.avif',
    featured: true,
    brand: 'Varias marcas profesionales',
    details: {
      subtitle: 'Limpieza y cuidado diario',
      intro: 'Descubre nuestra selección de champús profesionales, formulados para cada tipo de cabello y necesidad específica.',
      varieties: [
        { name: 'Champú hidratante', description: 'Para cabellos secos y dañados' },
        { name: 'Champú voluminizador', description: 'Aporta cuerpo y volumen' },
        { name: 'Champú anti-caspa', description: 'Elimina la caspa y calma el cuero cabelludo' },
        { name: 'Champú para cabellos teñidos', description: 'Protege el color y prolonga su duración' },
        { name: 'Champú sin sulfatos', description: 'Limpieza suave y natural' },
        { name: 'Champú fortalecedor', description: 'Para cabellos débiles y con tendencia a caerse' }
      ],
      recommendations: 'Aplica sobre el cabello húmedo, masajea suavemente y aclara con agua abundante. Para mejores resultados, combínalo con el acondicionador de la misma gama.'
    }
  },
  {
    title: 'Acondicionadores y Mascarillas',
    description: 'Tratamientos intensivos para nutrir y reparar tu cabello',
    category: 'Tratamientos',
    image: '/hero/random-2.avif',
    featured: true,
    brand: 'Varias marcas profesionales',
    details: {
      subtitle: 'Nutrición profunda',
      intro: 'Complementa tu rutina de lavado con nuestros acondicionadores y mascarillas profesionales que reparan y nutren tu cabello en profundidad.',
      varieties: [
        { name: 'Acondicionadores diarios', description: 'Desenreda y suaviza' },
        { name: 'Mascarillas reparadoras', description: 'Tratamiento intensivo semanal' },
        { name: 'Acondicionadores sin aclarado', description: 'Protección extra durante todo el día' },
        { name: 'Mascarillas de keratina', description: 'Reestructura la fibra capilar' },
        { name: 'Tratamientos de aceites', description: 'Nutrición extrema para cabellos muy secos' }
      ],
      recommendations: 'Acondicionador: Aplica después del champú, deja actuar 2-3 minutos y aclara. Mascarilla: Usa 1-2 veces por semana, deja actuar 5-10 minutos antes de aclarar.'
    }
  },
  {
    title: 'Productos de Styling',
    description: 'Fija, moldea y da forma a tu peinado',
    category: 'Styling',
    image: '/hero/random-3.avif',
    featured: true,
    brand: 'Varias marcas profesionales',
    details: {
      subtitle: 'Peinados perfectos cada día',
      intro: 'Consigue y mantén tu peinado perfecto con nuestra gama profesional de productos de styling.',
      varieties: [
        { name: 'Espumas', description: 'Volumen y fijación natural' },
        { name: 'Geles', description: 'Fijación fuerte para peinados estructurados' },
        { name: 'Lacas', description: 'Diferentes niveles de fijación' },
        { name: 'Ceras y pomadas', description: 'Para looks modernos y texturizados' },
        { name: 'Serums anti-frizz', description: 'Controla el encrespamiento' },
        { name: 'Sprays de brillo', description: 'Acabado luminoso' },
        { name: 'Protectores térmicos', description: 'Protege del calor de planchas y secadores' }
      ],
      recommendations: 'Aplica sobre cabello húmedo o seco según el producto. Empieza con poca cantidad e incrementa según necesites. Para looks naturales, distribuye bien el producto por todo el cabello.'
    }
  },
  {
    title: 'Tintes y Coloración',
    description: 'Coloración profesional para usar en casa',
    category: 'Color',
    image: '/hero/random-4.avif',
    featured: false,
    brand: 'Varias marcas profesionales',
    details: {
      subtitle: 'Color profesional en casa',
      intro: 'Disponemos de una selección de tintes profesionales que puedes usar en casa, aunque siempre recomendamos que lo apliques en nuestro salón para obtener los mejores resultados.',
      varieties: [
        { name: 'Tintes permanentes', description: 'Cobertura total de canas' },
        { name: 'Tintes semi-permanentes', description: 'Color que se va lavando gradualmente' },
        { name: 'Tintes fantasía', description: 'Colores vibrantes y creativos' },
        { name: 'Baños de color', description: 'Refrescar el tono sin compromiso' },
        { name: 'Decolorantes', description: 'Para aclarar el cabello (uso profesional recomendado)' }
      ],
      recommendations: 'Para cambios de color drásticos, correcciones o si es tu primera vez, te recomendamos encarecidamente que acudas a nuestro salón. Carolina, nuestra especialista en color, te asesorará y conseguirá resultados profesionales.'
    }
  },
  {
    title: 'Cepillos y Accesorios',
    description: 'Herramientas profesionales para tu cabello',
    category: 'Accesorios',
    image: '/hero/random-5.avif',
    featured: false,
    brand: 'Varias marcas',
    details: {
      subtitle: 'Las herramientas adecuadas marcan la diferencia',
      intro: 'Encuentra los mejores cepillos y accesorios profesionales para cuidar y peinar tu cabello en casa como en el salón.',
      varieties: [
        { name: 'Cepillos térmicos', description: 'Para secar y dar forma' },
        { name: 'Cepillos desenredantes', description: 'Eliminan nudos sin dañar' },
        { name: 'Peines profesionales', description: 'Para corte y peinado de precisión' },
        { name: 'Cepillos paddle', description: 'Ideales para cabellos largos' },
        { name: 'Cepillos de cerdas naturales', description: 'Aportan brillo natural' },
        { name: 'Pinzas y coleteros', description: 'Accesorios para el día a día' },
        { name: 'Gorros de ducha', description: 'Protege tu peinado' }
      ],
      recommendations: 'Consulta con nuestro equipo qué cepillo es el más adecuado para tu tipo de cabello y las técnicas de peinado que utilizas habitualmente.'
    }
  },
  {
    title: 'Kits y Packs Regalo',
    description: 'Packs completos de productos con descuento',
    category: 'Packs',
    image: '/hero/random-6.avif',
    featured: true,
    brand: 'Varias marcas profesionales',
    details: {
      subtitle: 'Ahorra comprando packs completos',
      intro: 'Descubre nuestros kits especiales que combinan los mejores productos para tu cabello con un precio más ventajoso. Perfectos también como regalo.',
      varieties: [
        { name: 'Pack Hidratación', description: 'Champú + Mascarilla + Serum anti-frizz' },
        { name: 'Pack Volumen', description: 'Champú voluminizador + Espuma + Laca' },
        { name: 'Pack Color', description: 'Champú protector del color + Acondicionador + Mascarilla' },
        { name: 'Pack Reparación', description: 'Champú reparador + Mascarilla intensiva + Aceite nutritivo' },
        { name: 'Pack Completo', description: 'Champú + Acondicionador + Mascarilla + Producto styling' }
      ],
      recommendations: 'Pregúntanos por las ofertas actuales y packs personalizados. Todos nuestros packs se pueden presentar en bonitas bolsas regalo. ¡El regalo perfecto para cualquier ocasión!'
    }
  }
]

useSeoMeta({
  title: page.seo.title,
  ogTitle: page.seo.title,
  description: page.seo.description,
  ogDescription: page.seo.description
})
</script>

<template>
  <UPage>
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    >
      <template #links>
        <div class="flex flex-wrap items-center gap-2">
          <UButton
            label="Ver servicios"
            to="/servicios"
            color="neutral"
            variant="subtle"
          />
          <UButton
            label="Reserva tu cita"
            to="/contacto"
            color="primary"
          />
        </div>
      </template>
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div
        v-for="(product, index) in products"
        :key="product.title"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :delay="150 * index"
        class="mb-12"
      >
        <UCard
          :ui="{
            body: { padding: 'p-0 sm:p-0' },
            rounded: 'rounded-xl',
            shadow: 'shadow-lg'
          }"
        >
          <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
            <!-- Imagen -->
            <div :class="index % 2 === 1 ? 'md:order-2' : ''">
              <img
                :src="product.image"
                :alt="product.title"
                class="object-cover w-full h-64 md:h-full rounded-t-xl md:rounded-none"
                :class="index % 2 === 1 ? 'md:rounded-r-xl' : 'md:rounded-l-xl'"
              >
            </div>

            <!-- Contenido -->
            <div class="p-6 lg:p-8 space-y-6">
              <!-- Header -->
              <div class="space-y-3">
                <UBadge
                  :label="product.category"
                  color="primary"
                  variant="subtle"
                  size="md"
                />
                <h2 class="text-2xl lg:text-3xl font-bold">
                  {{ product.title }}
                </h2>
                <p class="text-lg text-muted">
                  {{ product.description }}
                </p>
              </div>

              <hr class="border-gray-200 dark:border-gray-800" />

              <!-- Intro -->
              <div>
                <h3 class="text-lg font-semibold mb-2">
                  {{ product.details.subtitle }}
                </h3>
                <p class="text-muted">
                  {{ product.details.intro }}
                </p>
              </div>

              <!-- Variedades -->
              <div>
                <h4 class="text-base font-semibold mb-3 flex items-center gap-2">
                  <UIcon
                    name="i-lucide-sparkles"
                    class="size-4 text-primary"
                  />
                  Variedades disponibles
                </h4>
                <div class="grid gap-2">
                  <div
                    v-for="variety in product.details.varieties"
                    :key="variety.name"
                    class="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <UIcon
                      name="i-lucide-check"
                      class="size-4 text-primary mt-0.5 shrink-0"
                    />
                    <div class="text-sm">
                      <span class="font-medium">{{ variety.name }}</span>
                      <span class="text-muted"> - {{ variety.description }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Info adicional -->
              <div>
                <UCard
                  :ui="{
                    body: { padding: 'p-4' },
                    background: 'bg-gray-50 dark:bg-gray-800/50'
                  }"
                >
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <UIcon
                        name="i-lucide-store"
                        class="size-4 text-primary"
                      />
                      <h5 class="text-sm font-semibold">
                        Marca
                      </h5>
                    </div>
                    <p class="text-xs text-muted">
                      {{ product.brand }}
                    </p>
                  </div>
                </UCard>
              </div>

              <!-- Recomendaciones -->
              <UAlert
                icon="i-lucide-lightbulb"
                color="primary"
                variant="soft"
                title="Recomendaciones de uso"
                :description="product.details.recommendations"
                :ui="{
                  description: 'text-sm'
                }"
              />

              <!-- CTA -->
              <div class="flex flex-wrap gap-3 pt-2">
                <UButton
                  to="/contacto"
                  color="primary"
                  size="lg"
                  icon="i-lucide-shopping-bag"
                >
                  Consultar disponibilidad
                </UButton>
                <UButton
                  :to="`tel:${global.phone}`"
                  color="neutral"
                  variant="soft"
                  size="lg"
                  icon="i-lucide-phone"
                >
                  Llamar ahora
                </UButton>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>
  </UPage>
</template>
