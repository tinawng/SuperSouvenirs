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
section > * {
  @apply z-10;
}

section.hero {
  @apply relative;
  @apply max-w-7xl;
  @apply flex items-center gap-8;
}
section.hero::before {
  @apply absolute top-0 left-0 z-0;
  @apply h-1/2 w-full;
  @apply bg-light;
  content: "";
}

section.listing {
  @apply w-full flex flex-wrap gap-6;
}
section.listing > :first-child {
  @apply w-full flex justify-between items-center;
}
section.listing > :not(:first-child) {
  @apply w-full flex items-center gap-6;
}
</style>
