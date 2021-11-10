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
}

.page-container {
  @apply pt-12;
}

section {
  @apply max-w-7xl;
  @apply mx-auto;
}
section.listing {
  @apply max-w-5xl;
  @apply w-full flex flex-wrap gap-6;
}
section.listing > :first-child {
  @apply w-full flex justify-between items-center;
}
section.listing > :not(:first-child) {
  @apply w-full flex items-center gap-6;
}
</style>
