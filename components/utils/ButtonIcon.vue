<template>
  <div
    class="button_icon__container"
    :class="{'button_icon_primary': primary && !secondary, 'button_icon_secondary': secondary, 'button_icon_small': small, 'button_icon_blured': blured}"
  >
    <utils-icon class="button_icon__icon" :variant="icon" :stroke="2" />
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    primary: { type: Boolean, default: true },
    secondary: Boolean,
    small: Boolean,
    blured: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
.button_icon__container {
  @apply p-3.5;
  @apply rounded-full;
  @apply cursor-pointer;

  @apply transition-colors;
}
.button_icon_primary {
  @apply bg-red text-white;
}
.button_icon_secondary {
  @apply bg-transparent;
}
.button_icon_secondary:hover {
  @apply bg-dark bg-opacity-10;
}
.button_icon_secondary > .button_icon__icon {
  @apply opacity-80;
}

.button_icon_small {
  @apply p-2.5;
}
.button_icon_small > .button_icon__icon {
  @apply h-4 w-4;
}

.button_icon__icon {
  @apply h-5 w-5;
}

.button_icon_blured {
  @apply bg-dark bg-opacity-70;
  @apply text-white;
  /* backdrop-filter: blur(4px); */
}
</style>