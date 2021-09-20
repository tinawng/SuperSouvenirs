<template>
  <transition name="slide-fade">
    <div v-if="show_modal" class="container">
      <div class="relative w-1/2">
        <img class="cover" src="/covers/cover1.jpg" alt="cover" />
        <div class="absolute top-6 -right-6 w-6 h-full bg-brand-primary"></div>
        <div class="absolute -bottom-6 -right-6 w-full h-6 bg-brand-primary"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import modal from "~/mixins/Modal.js";
export default {
  mixins: [modal],
  data: () => ({
    modal_name: "album",
  }),
};
</script>

<style lang="postcss" scoped>
.container {
  height: 100vh;
  width: 100vh;
  @apply fixed top-0 z-50;
  left: calc(50% - 50vh);
  @apply p-8;
  @apply bg-brand-secondary;
  box-shadow: 0 51px 55px -7px rgba(0, 0, 0, 0.2), 0 64px 78px 3px rgba(0, 0, 0, 0.14),
    0 9px 86px 8px rgba(0, 0, 0, 0.12);
}

.cover {
  @apply w-full;
}
</style>