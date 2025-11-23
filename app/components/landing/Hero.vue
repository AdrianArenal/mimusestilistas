<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

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
        <UColorModeAvatar
          class="size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
          :light="global.picture?.light!"
          :dark="global.picture?.dark!"
          :alt="global.picture?.alt!"
        />
      </span>
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
        <UButton
          :color="global.available ? 'success' : 'error'"
          variant="ghost"
          class="gap-2"
          :to="global.available ? global.meetingLink : ''"
          :label="global.available ? 'Available for new projects' : 'Not available at the moment'"
        >
          <template #leading>
            <span class="relative flex size-2">
              <span
                class="absolute inline-flex size-full rounded-full opacity-75"
                :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
              />
              <span
                class="relative inline-flex size-2 scale-90 rounded-full"
                :class="global.available ? 'bg-success' : 'bg-error'"
              />
            </span>
          </template>
        </UButton>
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
