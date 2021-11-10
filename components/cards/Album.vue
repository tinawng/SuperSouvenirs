<template>
  <div class="card_album__container" @mouseenter="mouse_hover = true" @mouseleave="mouse_hover = false">
    <img class="card_album__cover" src="/covers/tatsu0.jpg" />
    <p class="card_album__artist">Tatsurō Yamashita</p>
    <p class="card_album__album">Spacy · 1977</p>
    <div class="mt-1 flex items-center">
      <utils-icon class="h-3 w-3 mr-1 text-yellow" variant="bookmark" />
      <span class="pt-1 text-xs opacity-80">234</span>
    </div>
    <transition name="slide">
      <div v-if="mouse_hover" class="card_album__hover_menu">
        <utils-button-icon  icon="more" blured/>
        <utils-button-icon  icon="play" primary/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: { small: Boolean },
  data: () => ({
    mouse_hover: false,
  }),
};
</script>

<style lang="postcss" scoped>
.card_album__container {
  @apply relative;
  @apply text-sm;
}
.card_album__cover {
  @apply rounded-sm shadow-xl;
}
.card_album__artist {
  @apply mt-3;
  @apply font-bold;
}
.card_album__album {
  @apply mt-1;
  @apply font-medium opacity-60;
}

.card_album__hover_menu {
  @apply absolute top-0 left-0;
  @apply h-full w-full;
  @apply bg-black bg-opacity-20 rounded-sm;
}
</style>