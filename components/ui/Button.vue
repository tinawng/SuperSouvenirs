<template>
  <button class="container">
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
.container {
    @apply px-3 py-1;
    @apply border-brand-primary;
}
</style>