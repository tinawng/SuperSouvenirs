<template>
  <div class="album_cover__container" :class="{'relative': interactive, 'album_cover__shadow': shadow}">
    <div v-if="interactive" class="album_cover__acrylic opacity-0 hover:opacity-100">
      <ui-utils-button icon="play" outlined />
    </div>
    <img src="/images/covers/ram.jpg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    interactive: Boolean,
    shadow: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
.album_cover__container {
}
.album_cover__shadow {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.5), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
}
.album_cover__acrylic {
  @apply absolute;
  @apply h-full w-full;
  backdrop-filter: blur(6px);
  background-color: rgba(3, 3, 3, 0.6);
  @apply flex items-center justify-center;

  @apply transition-opacity;
}
</style>