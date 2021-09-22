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
    @apply px-2 py-0.5;
    @apply border border-brand-primary border-opacity-0;

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
  @apply px-3 py-1 text-sm;
  @apply bg-brand-primary text-brand-secondary;
}
.button_dark:hover {
  @apply bg-brand-secondary text-brand-primary;
}
.button_dark:active {
  @apply bg-brand-secondary-dark;
}
</style>