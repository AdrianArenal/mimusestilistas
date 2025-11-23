<template>
  <UContainer class="py-12">
    <UPageHeader
      title="Sitemap"
      description="Navigate through all pages of this website"
    />

    <UPageBody class="prose dark:prose-invert max-w-none">
      <h2>Sitemap</h2>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/legal-notice">Legal Notice</NuxtLink></li>
        <li><NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink></li>
        <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
        <li><NuxtLink to="/accessibility-policy">Accessibility Policy</NuxtLink></li>
      </ul>
    </UPageBody>
  </UContainer>
</template>
