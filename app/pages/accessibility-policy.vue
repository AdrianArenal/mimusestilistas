<script setup lang="ts">
const { data: page } = await useAsyncData('accessibility-policy', () =>
  queryCollection('policies').path('/accessibility-policy').first()
)

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

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
    <UPageHeader
      :title="page?.title"
      :description="page?.description"
    />

    <UPageBody prose>
      <ContentRenderer :value="page" />
    </UPageBody>
  </UContainer>
</template>
