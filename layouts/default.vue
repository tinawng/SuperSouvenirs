<template>
  <div class="layout__container">
    <screen-debug />

    <div class="w-full">
      <nav-bar />
      <section class="h-12 border-b border-current" />
    </div>
    <Nuxt />
    <audio-player />

    <floating-player />
    <modals-album />
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

section {
  @apply w-4/5;
  max-width: 1600px;
  @apply mx-auto px-4;
}
.section__title {
  font-family: "Helvetica Now Display";
  @apply text-6xl md:text-8xl font-extrabold;
}
</style>
