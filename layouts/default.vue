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
</style>
