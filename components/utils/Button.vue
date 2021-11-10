<template>
  <div class="button__container" :class="{'button_primary': primary && !secondary, 'button_secondary': secondary, 'button_small': small}">
    <utils-icon v-if="icon" :variant="icon" class="h-3.5 w-3.5 mr-2 text-black opacity-30" />
    <div class="pt-0.5">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primary: { type: Boolean, default: true },
    secondary: { type: Boolean, default: false },
    small: Boolean,
    icon: String,
  },
};
</script>

<style lang="postcss" scoped>
.button__container {
  @apply h-11;
  @apply flex justify-center items-center;
  @apply rounded;
  @apply text-xs tracking-wider leading-none uppercase;
}

.button_primary {
  @apply bg-red;
  @apply text-white font-semibold text-opacity-80;
}
.button_secondary {
  @apply bg-transparent border-2 border-dark border-opacity-30;
  @apply text-dark font-black text-opacity-60;
}
.button_small {
    @apply h-8;
}
</style>