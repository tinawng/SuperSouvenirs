<template>
  <div class="layout__container">
    <screen-debug/>
    <Nuxt />

    <floating-player/>
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

  @apply flex;
}
</style>
