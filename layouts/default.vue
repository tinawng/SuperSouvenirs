<template>
  <div class="layout__container">
    <!-- <ui-side-player /> -->
    <ui-narrow-side-player />
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.layout__container {
  @apply min-h-screen max-h-screen;
  max-width: 100vw;
  @apply w-screen;
  min-width: 100vw;

  @apply flex;
}
</style>
