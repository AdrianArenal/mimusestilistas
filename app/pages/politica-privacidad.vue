<script setup lang="ts">
const { data: page } = await useAsyncData('politica-privacidad', () =>
  queryCollection('policies').path('/politica-privacidad').first()
)

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Página no encontrada', fatal: true })

const title = page.value?.title
const description = page.value?.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UContainer class="py-12">
    <UPageBody prose>
      <ContentRenderer v-if="page" :value="page" />
    </UPageBody>
  </UContainer>
</template>
