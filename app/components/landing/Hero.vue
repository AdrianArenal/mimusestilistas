<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'
import LogoSvg from '~/assets/svg/logo.svg?component'
import ImagotypeSvg from '~/assets/svg/imagotype.svg?component'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()

const carouselImages = [
  '/images/1.webp',
  '/images/2.webp',
  '/images/3.webp',
  '/images/4.webp',
  '/images/5.webp',
  '/images/6.webp',
  '/images/7.webp',
  '/images/8.webp',
  '/images/9.webp',
  '/images/10.webp'
]

const carousel = ref()
const activeIndex = ref(0)
const thumbnailsContainer = ref<HTMLElement>()
const showLeftGradient = ref(false)
const showRightGradient = ref(true)
const isAutoplayPaused = ref(false)
let autoplayInterval: ReturnType<typeof setInterval> | null = null
let resumeTimeout: ReturnType<typeof setTimeout> | null = null

function onSelect(index: number) {
  activeIndex.value = index
  scrollToThumbnail(index)
}

function select(index: number) {
  activeIndex.value = index
  carousel.value?.emblaApi?.scrollTo(index)
  scrollToThumbnail(index)
  pauseAutoplay()
}

function scrollToThumbnail(index: number) {
  if (thumbnailsContainer.value) {
    const thumbnail = thumbnailsContainer.value.children[index] as HTMLElement
    if (thumbnail) {
      const container = thumbnailsContainer.value
      const thumbnailLeft = thumbnail.offsetLeft
      const thumbnailWidth = thumbnail.offsetWidth
      const containerWidth = container.clientWidth
      const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2)
      
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }
}

function updateGradients() {
  if (!thumbnailsContainer.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = thumbnailsContainer.value
  
  showLeftGradient.value = scrollLeft > 10
  showRightGradient.value = scrollLeft < scrollWidth - clientWidth - 10
}

function startAutoplay() {
  if (autoplayInterval) return
  autoplayInterval = setInterval(() => {
    if (!isAutoplayPaused.value) {
      const nextIndex = (activeIndex.value + 1) % carouselImages.length
      activeIndex.value = nextIndex
      carousel.value?.emblaApi?.scrollTo(nextIndex)
      scrollToThumbnail(nextIndex)
    }
  }, 3000)
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

function pauseAutoplay() {
  isAutoplayPaused.value = true
  stopAutoplay()
  
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
  }
  
  resumeTimeout = setTimeout(() => {
    isAutoplayPaused.value = false
    startAutoplay()
  }, 5000)
}

watch(activeIndex, () => {
  nextTick(() => {
    updateGradients()
  })
})

onMounted(() => {
  if (thumbnailsContainer.value) {
    thumbnailsContainer.value.addEventListener('scroll', updateGradients)
    updateGradients()
  }
  startAutoplay()
})

onUnmounted(() => {
  if (thumbnailsContainer.value) {
    thumbnailsContainer.value.removeEventListener('scroll', updateGradients)
  }
  stopAutoplay()
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
  }
})
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <div
        v-motion
        :initial="{
          scale: 1.1,
          opacity: 0
        }"
        :enter="{
          scale: 1,
          opacity: 1

        }"
        :transition="{
          duration: 600,
          delay: 100
        }"
        class="mb-2"
      >
        <ImagotypeSvg class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto text-foreground" />
      </div>
    </template>

    <template #title>
      <span
        v-motion
        :initial="{
          scale: 1.1,
          opacity: 0

        }"
        :enter="{
          scale: 1,
          opacity: 1

        }"
        :transition="{
          duration: 600,
          delay: 100
        }"
      >
        {{ page.title }}
      </span>
    </template>

    <template #description>
      <span
        v-motion
        :initial="{
          scale: 1.1,
          opacity: 0

        }"
        :enter="{
          scale: 1,
          opacity: 1

        }"
        :transition="{
          duration: 600,
          delay: 300
        }"
      >
        {{ page.description }}
      </span>
    </template>

    <template #links>
      <div
        v-if="page.hero.links"
        v-motion
        :initial="{
          scale: 1.1,
          opacity: 0
        }"
        :enter="{
          scale: 1,
          opacity: 1
        }"
        :transition="{
          duration: 600,
          delay: 500
        }"
        class="flex items-center gap-2"
      >
        <UButton v-bind="page.hero.links[0]" />
      </div>

      <div class="gap-x-4 inline-flex mt-4">
        <span
          v-for="(link, index) of footer?.links"
          :key="index"
          v-motion
          :initial="{
            scale: 1.1,
            opacity: 0
          }"
          :visibleOnce="{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 600,
              delay: 500 + index * 100
            }
          }"
        >
          <UButton v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }" />
        </span>
      </div>
    </template>

    <div
      v-motion
      :initial="{
        scale: 1.1,
        opacity: 0
      }"
      :enter="{
        scale: 1,
        opacity: 1
      }"
      :transition="{
        duration: 600,
        delay: 700
      }"
      class="w-full max-w-lg mx-auto"
    >
      <UCarousel
        ref="carousel"
        v-slot="{ item }"
        :items="carouselImages"
        arrows
        class="max-w-lg mx-auto"
        @select="onSelect"
      >
        <img :src="item" width="512" height="512" class="rounded-lg aspect-square object-cover w-full">
      </UCarousel>

      <div class="relative">
        <!-- Left gradient -->
        <Transition name="fade">
          <div 
            v-if="showLeftGradient"
            class="absolute left-0 top-4 bottom-0 w-16 bg-linear-to-r from-background to-transparent pointer-events-none z-10" 
          />
        </Transition>
        
        <!-- Right gradient -->
        <Transition name="fade">
          <div 
            v-if="showRightGradient"
            class="absolute right-0 top-4 bottom-0 w-16 bg-linear-to-l from-background to-transparent pointer-events-none z-10" 
          />
        </Transition>
        
        <!-- Thumbnails container -->
        <div 
          ref="thumbnailsContainer"
          class="pt-2 flex gap-3 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory px-4 -mb-4 pb-4"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            v-for="(item, index) in carouselImages"
            :key="index"
            class="shrink-0 w-16 h-16 cursor-pointer transition-all duration-200 snap-center rounded-lg overflow-hidden"
            :class="activeIndex === index 
              ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' 
              : 'opacity-60 hover:opacity-100'"
            @click="select(index)"
          >
            <img 
              :src="item" 
              width="64" 
              height="64" 
              class="w-full h-full object-cover"
              :alt="`Thumbnail ${index + 1}`"
            >
          </div>
        </div>
      </div>
    </div>
  </UPageHero>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

div[ref="thumbnailsContainer"]::-webkit-scrollbar {
  display: none;
}
</style>
