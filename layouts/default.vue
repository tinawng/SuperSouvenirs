<template>
  <div class="layout__container">
    <nav-bar/>
    <Nuxt />
  </div>
</template>

<script>
</script>

<style lang="postcss">
.layout__container {
  @apply relative;
  @apply min-h-screen;
  max-width: 100vw;
  @apply w-screen;
  min-width: 100vw;
  @apply bg-light;
}

.page-container {
  @apply pt-12;
}

section {
  @apply max-w-7xl;
  @apply mx-auto px-12 py-8;
  @apply bg-white;
}
section:first-of-type {
  @apply mt-12;
}
</style>
