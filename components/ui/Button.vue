<template>
  <button class="button_container" :class="{'button_dark': dark}">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    dark: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
.button_container {
    @apply px-2 py-0.5 lg:px-4 lg:py-1;
    @apply border border-brand-primary border-opacity-0;

    @apply text-base lg:text-2xl;

    @apply transition-colors;
    transition-duration: 400ms;
}

.button_container:hover {
  @apply border-opacity-100;
}
.button_container:active {
  @apply bg-brand-secondary-dark;
}

.button_dark {
  @apply px-3 py-1 lg:px-5 lg:py-1.5;
  @apply text-sm lg:text-2xl;
  @apply bg-brand-primary text-brand-secondary;
}
.button_dark:hover {
  @apply bg-brand-secondary text-brand-primary;
}
.button_dark:active {
  @apply bg-brand-secondary-dark;
}
</style>