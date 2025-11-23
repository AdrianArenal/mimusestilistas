<template>
  <UContainer class="py-12">
    <UPageHeader
      title="Mapa del Sitio"
      description="Navega por todas las páginas de este sitio web"
    />

    <UPageBody class="prose dark:prose-invert max-w-none">
      <h2>Mapa del Sitio</h2>
      <ul>
        <li><NuxtLink to="/">Inicio</NuxtLink></li>
        <li><NuxtLink to="/servicios">Servicios</NuxtLink></li>
        <li><NuxtLink to="/productos">Productos</NuxtLink></li>
        <li><NuxtLink to="/equipo">Equipo</NuxtLink></li>
        <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
        <li><NuxtLink to="/aviso-legal">Aviso Legal</NuxtLink></li>
        <li><NuxtLink to="/politica-cookies">Política de Cookies</NuxtLink></li>
        <li><NuxtLink to="/politica-privacidad">Política de Privacidad</NuxtLink></li>
        <li><NuxtLink to="/politica-accesibilidad">Política de Accesibilidad</NuxtLink></li>
      </ul>
    </UPageBody>
  </UContainer>
</template>
