<template>
  <div
    class="card_album__container"
    @mouseenter="mouse_hover = true"
    @mouseleave="mouse_hover = false"
  >
    <div class="relative">
      <img class="card_album__cover" src="/covers/tatsu0.jpg" />
      <transition name="fade">
        <div v-if="mouse_hover" class="card_album__hover_menu">
          <utils-button-icon icon="more" :small="small" blured />
          <utils-button-icon icon="play" :small="small" primary />
        </div>
      </transition>
      <div v-if="is_new" class="new_macaroon">NEW</div>
    </div>
    <p class="card_album__artist">Tatsurō Yamashita</p>
    <p class="card_album__album">Spacy · 1977</p>
    <div class="mt-1 flex items-center">
      <utils-icon class="h-3 w-3 mr-1 text-yellow" variant="bookmark" />
      <span class="pt-1 text-xs opacity-70">234</span>
    </div>
  </div>
</template>

<script>
export default {
  props: { is_new: Boolean, small: Boolean },
  data: () => ({
    mouse_hover: false,
  }),
};
</script>

<style lang="postcss" scoped>
.card_album__container {
  @apply text-sm;
}

.card_album__cover {
  @apply rounded-sm shadow-xl;
}
.card_album__artist {
  @apply mt-3;
  @apply font-bold tracking-wide;
}
.dark .card_album__artist {
  @apply font-medium;
}
.card_album__album {
  @apply mt-1;
  @apply font-medium opacity-60 tracking-wide;
}
.dark .card_album__album {
  @apply font-normal;
}

.card_album__hover_menu {
  @apply absolute top-0 left-0;
  @apply h-full w-full;
  @apply bg-black bg-opacity-20 rounded-sm;
  @apply flex justify-evenly items-center;
}

.new_macaroon {
  @apply absolute top-1.5 left-1.5;
  @apply pt-0.5 px-1;
  @apply bg-yellow rounded-sm;
  @apply text-2xs text-white text-opacity-90;
}

.fade-enter-active,
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.1;
}
</style>