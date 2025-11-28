<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'
import LogoSvg from '~/assets/svg/logo.svg?component'
import ImagotypeSvg from '~/assets/svg/imagotype.svg?component'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
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

    <UMarquee
      pause-on-hover
      class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
    >
      <NuxtImg
        v-for="(img, index) in page.hero.images"
        :key="index"
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
          delay: index * 100
        }"
        width="234"
        height="234"
        class="rounded-lg aspect-square object-cover"
        :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
        v-bind="img"
      />
    </UMarquee>
  </UPageHero>
</template>
