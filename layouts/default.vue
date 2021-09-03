<template>
  <div class="layout__container">
    <ui-side-player-white />
    <!-- <ui-narrow-side-player class="portrait:hidden sticky top-0 left-0" /> -->
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.layout__container {
  @apply relative;
  @apply min-h-screen;
  max-width: 100vw;
  @apply w-screen;
  min-width: 100vw;

  @apply flex;
}
</style>
