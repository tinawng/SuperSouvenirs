<template>
  <div
    class="button__container rounded"
    :class="{'button_primary': primary && !secondary, 'button_secondary': secondary, 'button_small': small, 'rounded-full': rounded}"
  >
    <utils-icon v-if="icon" :variant="icon" class="h-4 w-4 mr-2 opacity-90" :stroke="2.5" />
    <div class="pt-0.5">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primary: { type: Boolean, default: true },
    secondary: Boolean,
    small: Boolean,
    icon: String,
    rounded: Boolean
  },
};
</script>

<style lang="postcss" scoped>
.button__container {
  @apply h-11;
  @apply flex justify-center items-center;
  @apply text-xs tracking-wider leading-none uppercase;
  @apply cursor-pointer;

  transition-property: transform color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
.button__container:hover {
  @apply transform -translate-y-0.5;
}
.button__container:active {
  @apply translate-y-0;
}

.button_primary {
  @apply bg-red;
  @apply text-white font-semibold text-opacity-90;
}
.button_secondary {
  @apply bg-transparent border-2 border-dark border-opacity-20;
  @apply text-dark font-black text-opacity-60;
}
.button_secondary:hover {
  @apply bg-white bg-opacity-70 text-red text-opacity-90 border-red border-opacity-60;
}
.button_small {
  @apply h-9;
}
</style>