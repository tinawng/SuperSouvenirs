<template>
  <div class="layout__container">
    <ui-navigation-drawer/>
    <Nuxt />
    <ui-player/>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true) {
      window.resizeTo(1080, 780);
      window.addEventListener("resize", () => {
        window.resizeTo(width, height);
      });
    }
  },
};
</script>

<style lang="postcss">
.layout__container {
  @apply min-h-screen;
  max-width: 100vw;
  @apply w-screen;
  min-width: 100vw;

  @apply flex;
}
</style>
