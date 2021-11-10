<template>
  <div class="button_icon__container" :class="{'button_icon_primary': primary, 'button_icon_blured': blured}">
    <utils-icon class="h-5 w-5" :variant="icon" :stroke="2" />
  </div>
</template>

<script>
export default {
  props: { icon: String, primary: Boolean, blured: Boolean },
};
</script>

<style lang="postcss" scoped>
.button_icon__container {
  @apply p-1.5;
  @apply opacity-80;
  @apply rounded-full;
  @apply cursor-pointer;

  @apply transition-colors;
}
.button_icon__container:hover {
  @apply bg-dark bg-opacity-10;
}

.button_icon_primary {
  @apply bg-red;
  @apply text-white;
}
.button_icon_blured {
  @apply text-white;
}
</style>