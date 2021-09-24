<template>
  <div class="layout__container">
    <Nuxt />

    <floating-player/>
    <modals-album />
  </div>
</template>

<script>
import FloatingPlayer from '../components/FloatingPlayer.vue';
export default {};
</script>

<style lang="postcss">
FloatingPlayer
.layout__container {
  @apply relative;
  @apply min-h-screen;
  max-width: 100vw;
  @apply w-screen;
  min-width: 100vw;

  @apply flex;
}
</style>
